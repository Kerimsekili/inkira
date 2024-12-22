"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

function AnimatedCounter({ end, label }: { end: string; label: string }) {
  const [count, setCount] = useState("0");
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const isNumber = !end.startsWith("TL");
      const target = parseInt(end.replace(/[^0-9.]/g, ""));
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const current = Math.floor(progress * target);
        if (isNumber) {
          setCount(current.toLocaleString());
        } else {
          setCount(
            `TL${current.toLocaleString()}${end.includes("B") ? "B" : "M"}`
          );
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center space-y-2">
      <div className="text-4xl md:text-5xl font-bold text-white">{count}</div>
      <p className="text-white/80 text-sm md:text-base">{label}</p>
    </div>
  );
}

export function MilestoneSection() {
  return (
    <section className="bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] py-16 md:py-24 rounded-lg shadow-xl mx-4">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Yolculuğumuzda Hedeflerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <AnimatedCounter end="10000" label="Ev sahibi İnkiraya Güveniyor" />
          <AnimatedCounter end="15750" label="Inkirada Bulunan Mülk" />
          <AnimatedCounter end="25086" label="Güvenen Müşteri" />
        </div>
      </div>
    </section>
  );
}
