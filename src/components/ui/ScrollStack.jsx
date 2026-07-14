"use client";

import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const cardOffsetsRef = useRef([]);
  const endOffsetRef = useRef(0);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const onStackCompleteRef = useRef(onStackComplete);

  onStackCompleteRef.current = onStackComplete;

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  // Cache untransformed offsets so pin transforms don't create a measure feedback loop
  const measureOffsets = useCallback(() => {
    const cards = cardsRef.current;
    const scroller = scrollerRef.current;
    const transforms = cards.map((card) => card?.style.transform ?? "");
    const filters = cards.map((card) => card?.style.filter ?? "");

    cards.forEach((card) => {
      if (!card) return;
      card.style.transform = "none";
      card.style.filter = "none";
    });

    void scroller?.offsetHeight;

    if (useWindowScroll) {
      cardOffsetsRef.current = cards.map((card) =>
        card ? card.getBoundingClientRect().top + window.scrollY : 0
      );
      const endElement = scroller?.querySelector(".scroll-stack-end");
      endOffsetRef.current = endElement
        ? endElement.getBoundingClientRect().top + window.scrollY
        : 0;
    } else {
      cardOffsetsRef.current = cards.map((card) => (card ? card.offsetTop : 0));
      const endElement = scroller?.querySelector(".scroll-stack-end");
      endOffsetRef.current = endElement ? endElement.offsetTop : 0;
    }

    cards.forEach((card, i) => {
      if (!card) return;
      card.style.transform = transforms[i] || "";
      card.style.filter = filters[i] || "";
    });

    lastTransformsRef.current.clear();
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = useWindowScroll
      ? window.scrollY
      : scrollerRef.current?.scrollTop ?? 0;
    const containerHeight = useWindowScroll
      ? window.innerHeight
      : scrollerRef.current?.clientHeight ?? 0;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endOffsetRef.current;

    let topCardIndex = 0;
    if (blurAmount) {
      for (let j = 0; j < cardsRef.current.length; j++) {
        const jCardTop = cardOffsetsRef.current[j] ?? 0;
        const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
        if (scrollTop >= jTriggerStart) topCardIndex = j;
      }
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardOffsetsRef.current[i] ?? 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount && i < topCardIndex) {
        blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackCompleteRef.current?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    calculateProgress,
    parsePercentage,
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Scope cards to this instance (project has multiple ScrollStacks on the page)
    const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      } else {
        card.style.marginBottom = "0px";
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
    });

    measureOffsets();
    updateCardTransforms();

    const onResize = () => {
      measureOffsets();
      updateCardTransforms();
    };
    window.addEventListener("resize", onResize);

    let boundLenis = null;
    const onLenisScroll = () => updateCardTransforms();
    let onLenisReady = null;

    if (useWindowScroll) {
      // Site already owns window Lenis — bind to it, don't create a second one
      const bindLenis = (lenis) => {
        if (!lenis || boundLenis) return;
        boundLenis = lenis;
        lenis.on("scroll", onLenisScroll);
      };

      if (window.__lenis) {
        bindLenis(window.__lenis);
      } else {
        onLenisReady = (e) => {
          bindLenis(e.detail);
          if (onLenisReady) {
            window.removeEventListener("lenis:ready", onLenisReady);
            onLenisReady = null;
          }
        };
        window.addEventListener("lenis:ready", onLenisReady);
      }

      window.addEventListener("scroll", updateCardTransforms, { passive: true });
    } else {
      const content = scroller.querySelector(".scroll-stack-inner");
      const ownLenis = new Lenis({
        wrapper: scroller,
        content,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
      });

      ownLenis.on("scroll", updateCardTransforms);
      lenisRef.current = ownLenis;

      const raf = (time) => {
        ownLenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
    }

    const measureTimer = window.setTimeout(() => {
      measureOffsets();
      updateCardTransforms();
    }, 120);

    return () => {
      window.clearTimeout(measureTimer);
      window.removeEventListener("resize", onResize);
      if (useWindowScroll) {
        window.removeEventListener("scroll", updateCardTransforms);
        if (onLenisReady) {
          window.removeEventListener("lenis:ready", onLenisReady);
        }
        if (boundLenis) {
          boundLenis.off("scroll", onLenisScroll);
        }
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    measureOffsets,
    updateCardTransforms,
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${useWindowScroll ? "scroll-stack-scroller--window" : ""} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
