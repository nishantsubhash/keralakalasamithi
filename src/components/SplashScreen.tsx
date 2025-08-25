"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [skip, setSkip] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  // Animation sequence timings (ms)
  const steps = [600, 800, 400, 500]; // logo, line, tagline, fadeout

  useEffect(() => {
    document.body.style.overflow = "hidden";
    function next() {
      if (step < steps.length - 1 && !skip) {
        timerRef.current = setTimeout(() => {
          setStep((s) => s + 1);
          next();
        }, steps[step]);
      } else {
        timerRef.current = setTimeout(() => {
          document.body.style.overflow = "";
          onDone();
        }, skip ? 300 : steps[steps.length - 1]);
      }
    }
    next();
    return () => {
      document.body.style.overflow = "";
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [skip, step, steps, onDone]);

  function handleSkip() {
    setSkip(true);
    setStep(steps.length - 1);
  }

  return (
    <div
      role="dialog"
      aria-label="Kerala Kala Samithi intro"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#185b34] transition-opacity duration-500 ${step === steps.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{ transition: "opacity 0.5s" }}
    >
      {/* Logo */}
      <Image
        src="/images/logo_splash.png"
        alt="Kerala Kala Samithi logo"
        width={220}
        height={220}
        priority
        className={`mb-2 transition-all duration-600 ${step >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{
          opacity: step >= 0 ? 1 : 0,
          transform: step >= 0 ? "scale(1)" : "scale(0.96)",
          transition: "opacity 0.6s, transform 0.6s"
        }}
      />
      {/* Kasavu line */}
      <Image
        src="/images/kasavu.png"
        alt=""
        aria-hidden="true"
        width={320}
        height={24}
        className={`mt-4 transition-transform duration-800 origin-left ${step >= 1 ? "scale-x-100" : "scale-x-0"}`}
        style={{
          transform: step >= 1 ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.8s"
        }}
      />
      {/* Tagline */}
      <p
        className={`mt-4 text-[#fffaf0] text-lg md:text-xl font-medium transition-all duration-400 ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        style={{
          opacity: step >= 2 ? 1 : 0,
          transform: step >= 2 ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.4s, transform 0.4s"
        }}
      >
        Celebrating Kerala’s culture & community
      </p>
      {/* Skip button */}
      <button
        type="button"
        aria-label="Skip intro"
        className="absolute bottom-6 right-6 text-[#fffaf0]/70 hover:text-[#fffaf0] text-sm px-3 py-2"
        onClick={handleSkip}
      >
        Skip
      </button>
    </div>
  );
}
