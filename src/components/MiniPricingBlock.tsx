import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ViewType } from "../types";

interface MiniPricingBlockProps {
  setView: (view: ViewType) => void;
}

export default function MiniPricingBlock({ setView }: MiniPricingBlockProps) {
  return (
    <section id="mini-pricing-section" className="py-10 md:py-14 bg-transparent border-b border-zinc-100/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Green Box Mini CTA Container - Compact & Sleek */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-brand rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden text-white shadow-xl shadow-brand/10 border border-[#3ce292]/30 text-center md:text-left"
        >
          {/* Light Green Decorative Floating Circles - Generously spread across the block */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#82fcc5]/15 border border-white/10 blur-sm pointer-events-none animate-pulse" />
          <div className="absolute -bottom-16 -right-12 w-64 h-64 rounded-full bg-[#41e99a]/20 border border-white/10 blur-md pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-32 h-32 rounded-full bg-[#5fffb9]/10 border border-white/5 blur-md pointer-events-none" />
          <div className="absolute top-4 right-1/4 w-16 h-16 rounded-full bg-white/5 border border-white/10 blur-xs pointer-events-none" />
          <div className="absolute bottom-4 left-1/2 w-24 h-24 rounded-full bg-[#aeffdd]/10 border border-white/5 blur-sm pointer-events-none animate-pulse" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left High Impact text */}
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to elevate your project with elite design & code?
              </h3>
              
              <p className="text-[#e2fbf1] text-xs sm:text-[14px] font-normal leading-relaxed max-w-xl">
                Hyle Studios delivers hand-crafted digital systems under clean, transparent terms. No hidden costs, no surprises. Browse our curated solution bundles or request single-service milestones tailored directly to your scale.
              </p>
            </div>

            {/* Right Action Trigger */}
            <div className="md:col-span-4 flex justify-center md:justify-end w-full">
              <button
                onClick={() => setView("pricing")}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#ebfef6] text-[#2ebd73] font-bold font-mono text-xs rounded-xl tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>VIEW PRICING</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
