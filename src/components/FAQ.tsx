import { useState } from "react";
import { FAQS } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQCardProps {
  question: string;
  answer: string;
  defaultOpen: boolean;
  idx: number;
  key?: number;
}

function FAQCard({ question, answer, defaultOpen, idx }: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div 
      className="bg-zinc-50/50 border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-350 flex flex-col h-fit"
    >
      {/* Question Trigger line */}
      <button
        type="button"
        id={`faq-btn-${idx}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 font-mono text-zinc-900 hover:bg-zinc-50 focus:bg-zinc-50 transition-colors focus:outline-none cursor-pointer"
      >
        <div className="flex items-start space-x-3 text-left pt-0.5">
          <HelpCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-zinc-900 leading-tight">{question}</span>
        </div>
        
        <div className="p-1.5 rounded-lg bg-white text-zinc-500 border border-zinc-200 w-8 h-8 flex items-center justify-center transition-all shrink-0 shadow-sm mt-0.5">
          {isOpen ? <Minus className="w-4 h-4 text-emerald-600" /> : <Plus className="w-4 h-4 text-zinc-400" />}
        </div>
      </button>

      {/* Answer block with clean collapsible height animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${idx}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 text-left border-t border-zinc-200/60 pt-4 bg-white/40">
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ serviceId }: { serviceId?: string }) {
  const displayedFaqs = serviceId === "uiux" ? [
    {
      question: "What tools do you use for UI/UX design?",
      answer: "We primarily design in Figma using modern professional variables, auto-layout, and reusable UI token components, and utilize Adobe Illustrator or Photoshop for custom branding assets and advanced vector artwork."
    },
    {
      question: "Do we receive the original Figma source files?",
      answer: "Yes, 100%. We hand over fully organized master Figma files complete with custom component libraries, responsive viewports, typography, interactive states, styling tokens, and direct developer handoff assets."
    },
    {
      question: "Can you redesign or audit our existing website/app?",
      answer: "Absolutely. We conduct deep UX research audits to analyze user friction, layout hierarchy, and micro-conversions, then establish a completely modernized visual design system tailored for your target audience."
    },
    {
      question: "How do you ensure layouts scale correctly on mobile and desktop?",
      answer: "Every artboard we draft is built fully responsive under native flexible grid frameworks. We test and design tailored layouts for desktop, tablet, and mobile breakpoints so frontend integration is seamless."
    },
    {
      question: "What is a design system and do we need one?",
      answer: "A design system defines unified styles, colors, typography rules, buttons, forms, and UI states. If you run a scaling product, we construct a modular design system so your development stays consistent and builds 10x faster."
    },
    {
      question: "How long is a typical UI/UX design cycle at Hyle Studios?",
      answer: "A standard design sprint ranges from 2 to 4 weeks depending on interaction complexity. We work in rapid, highly aligned phases with interactive clickable prototype reviews to gather feedback early."
    }
  ] : serviceId === "mobile" ? [
    {
      question: "How do you ensure iOS App Store and Google Play Store approval?",
      answer: "We manage the entire submission pipeline, including configuring provisioning profiles, signing cryptographic bundles, setting up Google Play Console & App Store Connect, and guiding the app through the official review process to target approval on the first try."
    },
    {
      question: "What cross-platform frameworks do you support?",
      answer: "We specialize in React Native (Expo) and Flutter for high-performance cross-platform apps, allowing us to deploy to both platforms simultaneously from a unified codebase. We also build entirely native apps with Swift and Kotlin when required."
    },
    {
      question: "Can our mobile app support offline databases and key device integrations?",
      answer: "Absolutely. We routinely configure secure local storage (SQLite, WatermelonDB), hardware-level biometrics (FaceID/TouchID), push notifications, camera/sensor access, and automated background sync processes."
    },
    {
      question: "How do you handle live mobile app updates after publishing?",
      answer: "We integrate Expo Updates or live Over-The-Air (OTA) hotfix branches. This lets us patch critical JS bugs or update UI visuals instantly without requiring another app store compilation and review cycle."
    },
    {
      question: "Do I actually own the intellectual property and code?",
      answer: "Absolutely. 100% of all visual assets, design tokens, TypeScript codebase, and repository files belong to you from the moment a sprint commences. We hand over clean, robustly formatted, and fully compiled code."
    },
    {
      question: "Why should we choose Hyle Studios over hiring full-time mobile developers?",
      answer: "With Hyle, you bypass the weeks of recruitment and overhead of full-time hiring. You get immediate access to pre-aligned senior mobile software architects who deliver production-ready code from day one, with the flexibility to scale or pause as your roadmap requires."
    }
  ] : serviceId === "game" ? [
    {
      question: "Which game engines do you use for development?",
      answer: "We primarily build in Unity and Unreal Engine for native and cross-platform games, as well as lightweight WebGL frameworks like Three.js and PixiJS for frictionless instant-play web experiences."
    },
    {
      question: "Do you handle 2D/3D asset creation and animation?",
      answer: "Yes, we manage the entire creative pipeline. Our team handles game concept art, UI/UX design, custom 2D/3D modeling, texturing, rigging, and animation to deliver a unified and immersive visual style."
    },
    {
      question: "Can you help optimize our game's performance for mobile devices?",
      answer: "Absolutely. We specialize in deep engine-level optimizations, including drawing call reduction, texture compression, asset bundle management, memory leak profiling, and implementing progressive level-of-detail (LOD) systems for peak performance."
    },
    {
      question: "How do you handle game monetization and analytics integration?",
      answer: "We design and integrate custom economic systems, virtual currencies, in-app purchases (IAPs), reward video ads (such as Unity Ads, AdMob), subscription passes, and live telemetry tracking to optimize player retention."
    },
    {
      question: "Do you assist with publishing to digital marketplaces like Steam or App Stores?",
      answer: "Yes, we manage publishing across Steam, the Apple App Store, Google Play Console, and itch.io. We prepare release-ready builds, configure store metadata, handle platform-specific audits, and align with all submission guidelines."
    },
    {
      question: "How do you test game balance and player mechanics?",
      answer: "We conduct structured multiplayer tests, perform automated player-progression simulations, collect balancing feedback, and implement difficulty adjustment heatmaps to verify that gameplay sequences are engaging and balanced."
    }
  ] : serviceId === "branding" ? [
    {
      question: "What source files do we receive at delivery?",
      answer: "You receive 100% of the original vector sources including structured Figma systems, Adobe Illustrator (.AI, .SVG) vectors, typography style guidelines, digital marketing assets, and ready-to-print CMYK layouts (.PDF)."
    },
    {
      question: "Can we trade and customize the deliverables bundle?",
      answer: "Absolutely. If you do not require paper business cards or traditional stationery, we natively swap them out for custom digital product packaging, social media asset packs, or high-fidelity landing page layout wireframes."
    },
    {
      question: "What is your revision process for logo systems?",
      answer: "We work under highly transparent feedback windows. Hyle begins by proposing multiple distinct creative mood directions, then refines your favorite selected concept across rapid iterations to guarantee zero visual friction."
    },
    {
      question: "Will our visual assets scale properly for print and packaging?",
      answer: "Yes, fully. All stationery, wrap sheets, cards, and banners are exported with standard physical trim bleeds and exact CMYK color profiles, preventing resolution blur or color degradation at print hubs."
    },
    {
      question: "Do you design brand elements other than logos?",
      answer: "Yes, we construct entire visual identity ecosystems! From primary marks and typography systems, to digital banners, email signatures, company pitch decks, physical boxes, and a comprehensive Guidelines system sheet."
    },
    {
      question: "Who owns the copyrights and final vector assets?",
      answer: "You do. 100% of all intellectual property, original vectors, mood styles, and commercial files are permanently transferred and handed over to you upon final phase sign-off and milestone delivery."
    }
  ] : FAQS;

  return (
    <section id="faq-section" className="py-8 md:py-10 bg-transparent border-b border-zinc-100/50 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title area with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3.5"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none pt-1">FAQ Workspace</h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed mt-1.5 font-sans">
            {serviceId === "uiux"
              ? "Got questions about our UI/UX design deliverables, original Figma source files, design systems, or collaboration?"
              : serviceId === "mobile" 
              ? "Got an inquiry regarding our mobile app development pipelines, app store submissions, or design assets?"
              : serviceId === "game"
              ? "Got an inquiry regarding our game design pipelines, art asset production, or engine-level optimization?"
              : serviceId === "branding"
              ? "Got an inquiry regarding our creative branding systems, logo deliveries, or stationery templates?"
              : "Got an inquiry regarding our subscription pod mechanics, repository deliverability, or custom scoping timelines?"}
          </p>
        </motion.div>

        {/* FAQs Custom Two-Column Grid Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-start">
          {displayedFaqs.map((faq, idx) => (
            <FAQCard 
              key={idx}
              idx={idx}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={idx === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
