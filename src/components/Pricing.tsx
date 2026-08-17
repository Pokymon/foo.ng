import { 
  Check, 
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

export default function Pricing({ hideToggle = false, serviceId }: { hideToggle?: boolean; serviceId?: string }) {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing-section" className="py-8 md:py-12 bg-transparent border-b border-zinc-100/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title and Statement with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none uppercase pt-1">
            Simple, Transparent Pricing
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light mt-1.5 leading-relaxed">
            No hidden costs. No surprise invoices. Just straightforward milestone-based pricing and flexible custom packages designed to fit your project's scope and objectives.
          </p>
        </motion.div>

        {/* CONTAINER 1: Pricing by Bundle */}
        <div className="space-y-8">
          {(() => {
            const MASTER_PACKAGES = [
              {
                id: "uiux",
                title: "UI/UX Design Package",
                price: "500 $",
                tagline: "Spans across any type of design from website to app UI to anything. This master suite contains all design deliverables we offer, unified under a pixel-perfect workflow.",
                features: [
                  "User Research & Journey Mapping",
                  "Standardized Responsive Scale Systems",
                  "Modern & Premium UX Framework Grid",
                  "Interactive Clickable Prototype Walks",
                  "Figma Design Systems & Components",
                  "Scalable Typography & Variables Layout",
                  "Complete Original Figma Source Handoff",
                  "Developer-Ready Asset Alignments"
                ]
              },
              {
                id: "web",
                title: "Web Development Package",
                price: "550 $",
                tagline: "Deploy fully responsive, blazing fast, and optimized custom websites. Fits any custom design, CMS integration, or landing page requirement.",
                features: [
                  "Bespoke Frontend Page Code Development",
                  "Tailwind Utility Styling & Interaction States",
                  "Supercharged Next.js / React Router Setup",
                  "Production Deployments onto Secure Edge Nodes",
                  "Advanced Structural SEO Tagging & Auditing",
                  "High-Performance Asset Compression (Fast Load)",
                  "Dynamic Form Submissions & Spam Filters",
                  "Full Repository Source Code Handover"
                ]
              },
              {
                id: "mobile",
                title: "App Development Package",
                price: "1500 $",
                tagline: "Bespoke cross-platform mobile apps for iOS and Android compiled with native performance, fluid gestures, and offline database support.",
                features: [
                  "Cross-Platform Built React Native / Flutter Core",
                  "Apple Human Interface Guidelines Compliance",
                  "Google Material Design Adaptive Components",
                  "Biometric Enclaves & Local Encrypted Cache",
                  "Offline Database Storage Engine Pipelines",
                  "Advanced Mobile Push Notification Architectures",
                  "App Store Connect & Play Console Setup Guides",
                  "100% Native Architecture Source Handover"
                ]
              },
              {
                id: "game",
                title: "Game Development Package",
                price: "800 $",
                tagline: "High-performance indie or commercial game builds featuring custom gameplay loops, physics integration, and robust game saves.",
                features: [
                  "High-Performance Unity, Unreal, or WebGL Canvas",
                  "Complex Core Game Logic & Controller Inputs",
                  "Optimized Particle Arrays & Custom Physics Matrix",
                  "Fluid 60 FPS Engine-Level Game Loops",
                  "Persistent Game State Saving & Multi-character Profiles",
                  "In-App Purchases or Ad Network Integrations",
                  "Cross-platform Configurations (Web / PC / Mobile)",
                  "Full Game Engine Source Files & Asset Package Handover"
                ]
              },
              {
                id: "branding",
                title: "Branding & Identity Package",
                price: "250 $",
                tagline: "Establish a remarkable visual presence. Full brand system design, outstanding logo suites, custom typography rules, and marketing guides.",
                features: [
                  "Bespoke High-Precision Logo Wordmarks & Symbols",
                  "Comprehensive Interactive Brand Guidelines File",
                  "Bespoke Typography Style Guides & Pairings",
                  "Complete Palette Construction & Color Theory Rules",
                  "Skins for Major Social Networks & Banner Designs",
                  "Print-Ready Custom Stationery or Cards Blueprint",
                  "Full Original Vector Handover (.AI, .SVG, .PDF)",
                  "100% Complete Copyright & Intellectual Source Transfer"
                ]
              }
            ];

            const displayedPackages = serviceId 
              ? MASTER_PACKAGES.filter(p => p.id === serviceId) 
              : MASTER_PACKAGES;

            return displayedPackages.map((pkg, pIdx) => (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: pIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white hover:bg-[#ebfaf3] hover:shadow-2xl hover:shadow-[#2ebd73]/10 hover:border-[#2ebd73]/40 rounded-[2.5rem] p-8 sm:p-14 md:p-16 overflow-hidden text-zinc-900 border border-zinc-200 text-center md:text-left transition-all duration-500 ease-out group"
              >
                {/* Decorative Floating Circles that active on group-hover */}
                <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#2ebd73]/5 border border-[#2ebd73]/10 blur-sm pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-[#2ebd73]/5 border border-[#2ebd73]/10 blur-md pointer-events-none group-hover:scale-105 transition-transform duration-700" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                  
                  {/* Left side: Package info & features */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
                        {pkg.title}
                      </h3>
                      <p className="text-zinc-500 text-xs sm:text-base font-light leading-relaxed max-w-xl font-sans">
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Built-in checklist of all features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {pkg.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center space-x-2.5 text-zinc-650 text-xs sm:text-sm font-sans font-light">
                          <div className="w-5 h-5 rounded-full bg-[#d3f2e2] flex items-center justify-center text-[#2ebd73] shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-left leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right side: Action trigger + price column */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-6 lg:border-l lg:border-zinc-200/60 lg:pl-10">
                    <div className="text-center lg:text-left w-full space-y-1">
                      <span className="text-[8px] sm:text-[8.5px] font-mono tracking-widest text-[#2ebd73] font-bold uppercase block">
                        STARTING FROM
                      </span>
                      <div className="flex items-baseline justify-center lg:justify-start">
                        <span className="text-5xl font-extrabold tracking-tight text-[#2ebd73] font-sans">
                          {pkg.price}
                        </span>
                      </div>
                      <span className="text-[8px] sm:text-[8.5px] font-semibold text-zinc-400 uppercase tracking-widest font-mono text-center lg:text-left block">
                        depends on scale
                      </span>
                    </div>

                    <button
                      onClick={handleScrollToContact}
                      className="w-full px-8 py-5 bg-[#2ebd73] hover:bg-[#2ebd73]/90 text-white font-bold font-mono text-sm rounded-xl tracking-wide uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-md hover:shadow-[#2ebd73]/10 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                    >
                      <span>Get In Touch</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ));
          })()}
        </div>

      </div>
    </section>
  );
}
