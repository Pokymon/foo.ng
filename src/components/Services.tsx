import { ServiceDetail } from "../types";
import { SERVICES } from "../data";
import { Globe, Smartphone, Cpu, Figma, Bot, Cloud, Check, ArrowRight, Code2, Gamepad2, Paintbrush } from "lucide-react";
import { motion } from "motion/react";

interface ServicesProps {
  setView?: (view: any) => void;
}

export default function Services({ setView }: ServicesProps) {
  // Local helper to map icon names to icons
  const getServiceIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Globe": return <Globe className={className} />;
      case "Smartphone": return <Smartphone className={className} />;
      case "Gamepad2": return <Gamepad2 className={className} />;
      case "Figma": return <Figma className={className} />;
      case "Paintbrush": return <Paintbrush className={className} />;
      default: return <Code2 className={className} />;
    }
  };

  return (
    <section id="services-section" className="py-12 md:py-16 bg-transparent border-b border-zinc-100/50 relative overflow-hidden">
      
      {/* Dynamic line background decorations */}
      <div className="absolute top-0 left-12 w-px h-full bg-zinc-50 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header Title Grid with motion scroll reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 md:items-end gap-6 md:gap-12 text-left"
        >
          <div className="md:col-span-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight">Core Engineering & Solutions</h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-zinc-650 text-sm sm:text-base font-light leading-relaxed">
              We cover the entire lifecycle of professional digital engineering: from early ergonomic design prototypes to heavy deployment pipelines and server-side intelligence integrations.
            </p>
          </div>
        </motion.div>

        {/* Dynamic Service Bento-Grid Layout of blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 pt-4">
          
          {SERVICES.map((srv, index) => {
            // Layout calculations for pristine structural Swiss ratio balancing:
            // First 3 items span 2 columns out of 6 on large screens (equal width).
            // Bottom 2 items span 3 columns out of 6 on large screens (wider equal width for outstanding grid flow).
            const colSpanClass = index < 3 
              ? "lg:col-span-2 md:col-span-1 col-span-1" 
              : "lg:col-span-3 md:col-span-1 col-span-1";

            return (
              <motion.div
                key={srv.id}
                id={`service-block-${srv.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                onClick={() => setView && setView(`service-${srv.id}`)}
                className={`group flex flex-col justify-between p-6 sm:p-7 bg-white/95 border border-zinc-200/80 rounded-2xl shadow-[0_2px_12px_rgba(24,24,27,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_12px_32px_rgba(24,24,27,0.06)] cursor-pointer text-left ${colSpanClass}`}
              >
                {/* Upper Area */}
                <div className="space-y-5">
                  
                  {/* Icon Row */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100/50">
                      {getServiceIcon(srv.icon, "w-5.5 h-5.5")}
                    </div>
                  </div>

                  {/* Title & One Sentence Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-zinc-950 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors">
                      {srv.name}
                    </h3>
                    <p className="text-zinc-650 text-[13px] leading-relaxed font-light">
                      {srv.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Bullet List (Key Notes/Points) */}
                  <div className="space-y-2.5 pt-2 border-t border-zinc-100">
                    <span className="text-[9.5px] font-mono font-bold uppercase text-zinc-400 tracking-wider block">
                      Core Features
                    </span>
                    <ul className="space-y-2">
                      {srv.capabilities.slice(0, 3).map((cp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600 font-light leading-normal">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Tech Pills and Portal Action Trigger */}
                <div className="mt-6 pt-4 border-t border-zinc-100 space-y-4">
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1">
                    {srv.techStack.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[9.5px] font-mono text-zinc-500 bg-zinc-50 border border-zinc-200/50 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA link direction */}
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-600 group-hover:text-emerald-700 select-none">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
