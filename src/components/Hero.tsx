import { useState, useEffect } from "react";
import { ViewType } from "../types";
import { Sparkles, Terminal, ArrowRight, Server, RefreshCw, Activity } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  setView: (view: ViewType) => void;
}

export default function Hero({ setView }: HeroProps) {
  const [pixelPerfect, setPixelPerfect] = useState<number>(0);
  const [productsShipped, setProductsShipped] = useState<number>(0);
  const [clientRating, setClientRating] = useState<number>(0.0);

  useEffect(() => {
    // 100% count-up (Slower)
    let startPP = 0;
    const endPP = 100;
    const durationPP = 2000; // 2 seconds
    const incrementPP = 1; // smaller steps for slower movement
    const timerPP = setInterval(() => {
      startPP += incrementPP;
      if (startPP >= endPP) {
        setPixelPerfect(endPP);
        clearInterval(timerPP);
      } else {
        setPixelPerfect(startPP);
      }
    }, durationPP / (endPP / incrementPP));

    // 10+ count-up (Slower)
    let startPS = 0;
    const endPS = 10;
    const durationPS = 1500; // 1.5 seconds
    const timerPS = setInterval(() => {
      startPS += 1;
      if (startPS >= endPS) {
        setProductsShipped(endPS);
        clearInterval(timerPS);
      } else {
        setProductsShipped(startPS);
      }
    }, durationPS / endPS);

    // 4.5 average count-up (Slower)
    let startCR = 0.0;
    const endCR = 4.5;
    const durationCR = 1800; // 1.8 seconds
    const steps = 45;
    const timerCR = setInterval(() => {
      startCR = parseFloat((startCR + 0.1).toFixed(1));
      if (startCR >= endCR) {
        setClientRating(endCR);
        clearInterval(timerCR);
      } else {
        setClientRating(startCR);
      }
    }, durationCR / steps);

    return () => {
      clearInterval(timerPP);
      clearInterval(timerPS);
      clearInterval(timerCR);
    };
  }, []);

  return (
    <section id="hero-section" className="relative pt-12 pb-14 md:pt-16 md:pb-18 bg-transparent overflow-hidden border-b border-zinc-100/50">
      
      {/* Absolute engineering grid layout background matching brand parameters */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Radial sweep glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        

        {/* Display Statement with clean Centering */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.08] font-sans"
          >
            We Build <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">Digital Products</span> <br className="hidden sm:inline" />
            That Scale Flawlessly.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-zinc-650 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light font-sans text-zinc-500"
          >
            Hyle Studios is an elite modern architecture and product engineering firm. We design high-performance web applications, custom microservices, and smart AI platforms with extreme layout precision.
          </motion.p>

          <motion.blockquote 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="italic font-sans text-xs sm:text-sm text-zinc-400 font-medium select-none"
          >
            "We build worlds. You play them."
          </motion.blockquote>
        </div>

        {/* Centered CTA actions */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            id="hero-contact-trigger"
            onClick={() => setView("contact")}
            className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold font-sans tracking-tight text-sm rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>CONTACT US NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-services-trigger"
            onClick={() => {
              const el = document.getElementById("services-section");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                setView("home");
                setTimeout(() => {
                  const scrollEl = document.getElementById("services-section");
                  if (scrollEl) scrollEl.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-800 font-sans font-semibold text-sm rounded-full tracking-wide transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>EXPLORE CORE SERVICES</span>
          </button>
        </motion.div>

        {/* Center-aligned Stats Deck */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-zinc-100 max-w-2xl mx-auto"
        >
          <div className="text-center p-3">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-zinc-950 tracking-tight block">
              {pixelPerfect}%
            </span>
            <span className="text-xs uppercase font-sans tracking-wider font-bold block mt-2 text-zinc-400">Pixel-Perfect Delivery</span>
          </div>
          <div className="text-center p-3 border-y sm:border-y-0 sm:border-x border-zinc-100">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-zinc-950 tracking-tight block">
              {productsShipped}+
            </span>
            <span className="text-xs uppercase font-sans tracking-wider font-bold block mt-2 text-zinc-400">Custom Products Shipped</span>
          </div>
          <div className="text-center p-3">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-zinc-950 tracking-tight block relative inline-flex items-center justify-center">
              <span>{clientRating.toFixed(1)}</span>
              <span className="text-zinc-300 mx-1 font-light">/</span>
              <span className="relative inline-flex items-center justify-center">
                <span className="relative z-10">5</span>
                <span className="absolute inset-0 -top-1.5 -left-1 flex items-center justify-center text-amber-400/[0.12] text-6xl sm:text-7xl select-none pointer-events-none transform scale-150 z-0 leading-none">
                  ★
                </span>
                <span className="ml-1 text-amber-500 text-2xl sm:text-3xl select-none leading-none z-10">★</span>
              </span>
            </span>
            <span className="text-xs uppercase font-sans tracking-wider font-bold block mt-2 text-zinc-400">Average Client Rating</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
