import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HomepageCTAProps {
  setView: (view: any) => void;
}

export default function HomepageCTA({ setView }: HomepageCTAProps) {
  return (
    <section id="homepage-cta-section" className="py-10 md:py-16 bg-transparent border-b border-zinc-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Fancy Green Block CTA Container - Longer & Wider */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-brand rounded-[2.5rem] p-8 sm:p-14 md:p-20 overflow-hidden text-white shadow-2xl shadow-brand/20 border border-[#3ce292]/30 text-center md:text-left"
        >
          {/* Light Green Decorative Floating Circles - Fancy Modern SaaS Design */}
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#82fcc5]/15 border border-white/10 blur-sm pointer-events-none animate-pulse" />
          <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-[#41e99a]/20 border border-white/10 blur-md pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5 border border-white/10 blur-xs pointer-events-none" />
          <div className="absolute top-12 right-12 w-16 h-16 rounded-full bg-[#a3ffda]/10 border border-white/15 pointer-events-none" />
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-white/5 border border-white/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left High Impact text */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Let's Build Your <br /> Next Masterpiece.
              </h2>
              
              <p className="text-brand-light/95 text-xs sm:text-base font-light leading-relaxed max-w-xl">
                Ready to transform your vision into pristine, production-ready systems? Connect directly with our Solutions Pod to lock in an elite design & engineering pod slot today.
              </p>
            </div>

            {/* Right Action Trigger */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
              <button
                onClick={() => setView("contact")}
                className="w-full sm:w-auto px-8 py-5 bg-white hover:bg-brand-light text-brand font-bold font-mono text-sm rounded-xl tracking-wide uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-2xl hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
