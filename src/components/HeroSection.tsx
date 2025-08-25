"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  // Splash animation logic
  const [step, setStep] = React.useState(0);
  const [skip, setSkip] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const steps = [1200, 1600, 800, 1000]; // logo, line, tagline, fadeout (longer)

  React.useEffect(() => {
    function next() {
      if (step < steps.length - 1 && !skip) {
        timerRef.current = setTimeout(() => {
          setStep((s) => s + 1);
          next();
        }, steps[step]);
      }
    }
    next();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [skip, step, steps]);

  function handleSkip() {
    setSkip(true);
    setStep(steps.length - 1);
  }

  return (
    <section
      className="relative w-full min-h-[64vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-white"
      aria-label="Kerala Kala Samithi Hero Section"
    >
      {/* Splash animation block removed */}
      {/* Subtle top fade under header */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#fffaf0]/40 to-transparent z-20 pointer-events-none" />
      {/* Main overlay for hero background */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(24,91,52,0.12) 0%, transparent 50%, transparent 100%)",
        }}
      />
      {/* Centered content block with soft backdrop */}
      <div
            className="relative z-20 flex flex-col items-center justify-center w-full px-4 pt-24 pb-0 md:pt-32 md:pb-0 animate-fadein"
  style={{ minHeight: "64vh" }}
      >
        <div className="mx-auto max-w-2xl text-center md:text-left bg-[#fffaf0]/15 rounded-xl px-4 py-3 md:px-6 md:py-4 backdrop-blur-[2px]">
          <div className="flex flex-col items-center md:items-start mb-0">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                margin: 0,
                lineHeight: 0,
              }}
            >
              <Image
                src="/images/Logo.png"
                alt="Kerala Kala Samithi logo"
                width={340}
                height={340}
                priority
                className="rounded-full"
                style={{
                  width: "100%",
                  height: "auto",
                  margin: 0,
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ height: "24px" }} />
            {/* <hr className="border-t-2 border-[#d4af37] w-full" style={{ marginTop: 0, marginBottom: 0 }} /> */}
          </div>
          <p
            className="text-lg md:text-2xl font-medium mt-0 mb-8 text-[#185b34]/90"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <span className="block font-bold mb-2">
              Celebrating Kerala, Supporting Community
            </span>
            Promoting Kerala’s culture, nurturing local talent, and caring for
            seniors and the needy from Goregaon West, Mumbai.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/magazine.pdf"
              download
              className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#d97706] to-[#d4af37] border-2 border-[#d97706] shadow animate-flash focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              style={{ animation: "flash 1.2s infinite alternate" }}
            >
              Download September Edition
            </Link>
          </div>
        </div>
      </div>
      {/* Theyyam image at left side as decorative element, with fade blend */}
      <div
        className="absolute top-0 bottom-0 -left-64 z-10 hidden sm:block"
        style={{
          width: "520px",
          height: "100%",
          minHeight: "44vh",
          maxWidth: "520px",
          WebkitMaskImage:
            "linear-gradient(to right, black 75%, transparent 98%)",
          maskImage: "linear-gradient(to right, black 75%, transparent 98%)",
        }}
      >
        <Image
          src="/images/theyyam.png"
          alt="Theyyam performer"
          aria-hidden="true"
          fill
          style={{ objectFit: "cover", objectPosition: "left" }}
          sizes="(max-width: 768px) 80vw, 520px"
        />
      </div>
      {/* Kathakali image at right side as decorative element, with fade blend */}
      <div
        className="absolute top-0 bottom-0 right-0 z-10 hidden sm:block"
        style={{
          width: "400px",
          height: "100%",
          minHeight: "44vh",
          maxWidth: "400px",
          WebkitMaskImage:
            "linear-gradient(to left, black 75%, transparent 98%)",
          maskImage: "linear-gradient(to left, black 75%, transparent 98%)",
        }}
      >
        <Image
          src="/images/kathakali-corner.png"
          alt="Kathakali dancer"
          aria-hidden="true"
          fill
          style={{ objectFit: "cover", objectPosition: "right center" }}
          sizes="(max-width: 768px) 60vw, 400px"
        />
      </div>
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes flash {
          0% {
            box-shadow: 0 0 0 0 #d97706;
          }
          100% {
            box-shadow: 0 0 16px 4px #d97706;
          }
        }
        .animate-flash {
          animation: flash 1.2s infinite alternate;
        }
      `}</style>
    </section>
  );
}
