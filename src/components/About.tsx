import { useRef, useEffect, useState } from "react";
import { 
  Rocket, 
  Cpu, 
  Layers, 
  Globe, 
  Gamepad2, 
  Palette, 
  Lightbulb, 
  Eye, 
  Compass, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  Heart, 
  Award, 
  Sparkles, 
  Users, 
  ChevronRight,
  Smartphone,
  Flame,
  Briefcase
} from "lucide-react";
import { motion } from "motion/react";

interface AboutProps {
  setView?: (view: any) => void;
}

export default function About({ setView }: AboutProps) {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  // Data declarations
  const coreValues = [
    {
      title: "Innovation",
      desc: "Always exploring new possibilities and engineering breakthroughs.",
      icon: <Cpu className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      title: "Excellence",
      desc: "Delivering world-class code quality and pixel-perfect design metrics.",
      icon: <Award className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Creativity",
      desc: "Turning abstract, speculative concepts into extraordinary visual realities.",
      icon: <Sparkles className="w-5 h-5 text-sky-500" />
    },
    {
      title: "Collaboration",
      desc: "Building rock-solid, transparent partnerships with clients and founders.",
      icon: <Users className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      title: "Integrity",
      desc: "Operating with absolute clarity, open books, and reliable delivery.",
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />
    },
    {
      title: "Growth",
      desc: "Providing high-impact support to scale systems to millions of sessions.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-700" />
    }
  ];

  const whatWeDoCards = [
    {
      title: "Mobile App Development",
      desc: "Build powerful, performant native and cross-platform applications designed for long-term growth and high user engagement.",
      icon: <Smartphone className="w-6 h-6 text-[#2ebd73]" />,
      badge: "iOS & Android",
      view: "service-mobile"
    },
    {
      title: "Web Development",
      desc: "Create lightning-fast production websites, scalable SaaS dashboards, and complex content management systems.",
      icon: <Globe className="w-6 h-6 text-[#2ebd73]" />,
      badge: "SaaS & WebApps",
      view: "service-web"
    },
    {
      title: "Game Development",
      desc: "Develop highly immersive, visual cross-platform games for mobile, desktop, web platforms, and collaborative environments.",
      icon: <Gamepad2 className="w-6 h-6 text-[#2ebd73]" />,
      badge: "Engines & Interactive",
      view: "service-game"
    },
    {
      title: "UI/UX Design",
      desc: "Design intuitive interfaces backed by cognitive user research and high-fidelity clickable wireframes.",
      icon: <Cpu className="w-6 h-6 text-[#2ebd73]" />,
      badge: "User Research & Hi-Fi",
      view: "service-uiux"
    },
    {
      title: "Graphic Design & Branding",
      desc: "Shape elegant brand identity systems, custom wordmarks, high-precision guidelines, and commercial presentation decks.",
      icon: <Palette className="w-6 h-6 text-[#2ebd73]" />,
      badge: "Logos & Corporate Systems",
      view: "service-branding"
    }
  ];

  const whyChooseUs = [
    {
      title: "Innovation First",
      desc: "We leverage cutting-edge tech stacks, frameworks, and modern strategies to build future-ready solutions.",
      icon: <Flame className="w-5 h-5 text-[#2ebd73]" />,
      color: "bg-[#ebfaf3] border-[#2ebd73]/20"
    },
    {
      title: "User-Centered Approach",
      desc: "We conduct meticulous research so every visual asset and layout interacts optimally with real audience behaviors.",
      icon: <Heart className="w-5 h-5 text-emerald-600" />,
      color: "bg-[#d3f2e2] border-emerald-500/20"
    },
    {
      title: "End-to-End Expertise",
      desc: "From blueprint wireframing and graphic branding to deep engineering, code deployment, and product launch, we handle all layers.",
      icon: <Layers className="w-5 h-5 text-sky-500" />,
      color: "bg-sky-50 border-sky-200"
    },
    {
      title: "Long-Term Partnership",
      desc: "We don't just ship and disappear. We support our partners' post-launch growth with metrics monitoring and system updates.",
      icon: <Compass className="w-5 h-5 text-teal-600" />,
      color: "bg-teal-50 border-teal-200"
    }
  ];

  const processSteps = [
    {
      step: "01",
      name: "Discover",
      desc: "Understanding your commercial objectives, primary audience metrics, and brand vision to outline baseline parameters."
    },
    {
      step: "02",
      name: "Plan",
      desc: "Developing a robust engineering blueprint, detailed content roadmap, timeline schedules, and module milestones."
    },
    {
      step: "03",
      name: "Design",
      desc: "Crafting modern layouts, brand identity design systems, clickable wireframes, and responsive product screens."
    },
    {
      step: "04",
      name: "Develop",
      desc: "Coding fully type-safe, optimized modern code frameworks with structured backends and clean integration pipelines."
    },
    {
      step: "05",
      name: "Launch",
      desc: "Deploying production products to stable cloud nodes after strict QA testing and target metric optimizations."
    },
    {
      step: "06",
      name: "Grow",
      desc: "Providing continuous maintenance support, tracking performance analytics, and upgrading layout features to scale."
    }
  ];

  const technologies = [
    { name: "Figma", category: "Design" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Full-Stack" },
    { name: "Flutter", category: "Mobile" },
    { name: "Kotlin", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI & Backend" },
    { name: "Firebase", category: "Database & Auth" },
    { name: "MongoDB", category: "Database" },
    { name: "Godot", category: "Interactive" },
    { name: "Adobe Creative Suite", category: "Creative" }
  ];

  const industriesData = [
    {
      name: "Startups",
      desc: "We build MVP architectures, click-ready prototypes, and scalable launch features to secure critical seed funding and grow early user adoption.",
      icon: <Rocket className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      name: "Fintech",
      desc: "High-security transactions, beautiful live financial charts, and compliance-optimized dashboard interfaces with robust encryption.",
      icon: <TrendingUp className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      name: "E-commerce",
      desc: "Instant search product lines, rapid interactive cart flows, and custom payment gateway pipelines tuned for ultimate buyer conversion speed.",
      icon: <Briefcase className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      name: "Education",
      desc: "Unified classroom tracking hubs, custom course syllabi databases, and interactive multi-user educational web experiences.",
      icon: <Globe className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      name: "Healthcare",
      desc: "Streamlined medical appointment forms, patient diagnostic tables, and visual wellness tracking cards with high contrast accessibility.",
      icon: <Heart className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      name: "Entertainment",
      desc: "Immersive physics setups, seamless gaming controllers overlays, animated video cards, and rich social connection blocks.",
      icon: <Gamepad2 className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      name: "Real Estate",
      desc: "Fluid geographical mapping modules, seamless listings database filters, and highly graphic property visual tours portals.",
      icon: <Compass className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      name: "Logistics",
      desc: "Real-time dispatch route timelines, shipment delivery progress meters, cargo databases, and automated notification pipelines.",
      icon: <Layers className="w-5 h-5 text-[#2ebd73]" />
    },
    {
      name: "Small Businesses",
      desc: "Fast, localized corporate pages, tailored local SEO systems, verified Google Maps listings, and clean corporate identity files.",
      icon: <Palette className="w-5 h-5 text-[#2ebd73]" />
    }
  ];

  const stats = [
    { value: "5+", label: "Core Services Offered", desc: "SaaS, Mobile, Games, UI/UX & Branding Systems" },
    { value: "100%", label: "Custom Solutions", desc: "No cookie-cutter templates. Engineered for your niche only" },
    { value: "End-to-End", label: "Product Development", desc: "We manage complete ideation, codes, assets & deployment" },
    { value: "Cross-Platform", label: "Engineering Expertise", desc: "Native power running seamlessly across any user screens" },
    { value: "Global", label: "Client Support Coverage", desc: "Partnering with founders and scaling brands worldwide" }
  ];

  const handleServicesNav = (viewName: any) => {
    if (setView) {
      setView(viewName);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("services-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactNav = () => {
    if (setView) {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("main-footer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper to render official brand logo vectors
  const renderTechLogo = (brandName: string) => {
    switch (brandName) {
      case "Figma":
        return (
          <svg className="w-4 h-5 flex-shrink-0" viewBox="0 0 12 18" fill="none">
            <path d="M0 3a3 3 0 0 1 3-3h3v6H3a3 3 0 0 1-3-3z" fill="#F24E1E"/>
            <path d="M6 0h3a3 3 0 0 1 0 6H6V0z" fill="#FF7262"/>
            <path d="M0 9a3 3 0 0 1 3-3h3v6H3a3 3 0 0 1-3-3z" fill="#A259FF"/>
            <path d="M6 6h3a3 3 0 0 1 0 6H6V6z" fill="#1ABC9C"/>
            <path d="M0 15a3 3 0 0 1 3-3h3v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3z" fill="#0ACF83"/>
          </svg>
        );
      case "React":
        return (
          <svg className="w-5 h-5 flex-shrink-0 animate-[spin_10s_linear_infinite]" viewBox="0 0 20 20" fill="none">
            <ellipse cx="10" cy="10" rx="9" ry="3.5" stroke="#00d8ff" strokeWidth="1.2" />
            <ellipse cx="10" cy="10" rx="9" ry="3.5" stroke="#00d8ff" strokeWidth="1.2" className="rotate-[60deg] origin-center" />
            <ellipse cx="10" cy="10" rx="9" ry="3.5" stroke="#00d8ff" strokeWidth="1.2" className="rotate-[120deg] origin-center" />
            <circle cx="10" cy="10" r="1.5" fill="#00d8ff" />
          </svg>
        );
      case "Next.js":
        return (
          <svg className="w-4.5 h-4.5 flex-shrink-0" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path d="M149.508 157.52L69.142 54H54v72h11.961V67.923l71.432 91.564c4.015-3.327 7.747-6.953 11.115-10.835z" fill="url(#next_grad_about)" />
            <rect x="115" y="54" width="12" height="72" fill="url(#next_grad2_about)" />
            <defs>
              <linearGradient id="next_grad_about" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="next_grad2_about" x1="121" y1="54" x2="121" y2="126" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        );
      case "Flutter":
        return (
          <svg className="w-4 h-5.5 flex-shrink-0" viewBox="0 0 16 20" fill="none">
            <path d="M12.3 0L3.1 9.2l4.6 4.6L16.9 4.6H12.3z" fill="#40D0FD"/>
            <path d="M7.7 9.2l-4.6 4.6L0 16.9a3.1 3.1 0 0 0 4.6 0l9.2-9.2H9.2l-1.5 1.5z" fill="#0175C2"/>
          </svg>
        );
      case "Kotlin":
        return (
          <svg className="w-4.5 h-4.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" fill="url(#kotlin_grad_about)" rx="4" />
            <path d="M24 0H0v24h24L12 12z" fill="url(#kotlin_grad2_about)" />
            <defs>
              <linearGradient id="kotlin_grad_about" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7F52FF" />
                <stop offset="100%" stopColor="#E17B34" />
              </linearGradient>
              <linearGradient id="kotlin_grad2_about" x1="24" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E17B34" />
                <stop offset="50%" stopColor="#C757BC" />
                <stop offset="100%" stopColor="#7F52FF" />
              </linearGradient>
            </defs>
          </svg>
        );
      case "Node.js":
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2z" stroke="#339933" strokeWidth="2.2" fill="#339933" fillOpacity="0.12" strokeLinejoin="round" />
            <path d="M12 2v18" stroke="#339933" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );
      case "Python":
        return (
          <svg className="w-4.5 h-4.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.5 2 8 2.5 8 5v2h4v1H8v4c0 2.5.5 3 4 3h2c2.5 0 3-.5 3-4V9c0-2.5-.5-3-3-3h-1V5C14 2.5 13.5 2 12 2z" fill="#3776AB" />
            <path d="M12 22c3.5 0 4-.5 4-3v-2h-4v-1h4v-4c0-2.5-.5-3-4-3h-2c-2.5 0-3 .5-3 4v2c0 2.5.5 3 3 3h1v1c0 2.5.5 3 2 3z" fill="#FFD43B" />
          </svg>
        );
      case "Firebase":
        return (
          <svg className="w-4 h-4.5 flex-shrink-0" viewBox="0 0 112 112" fill="none">
            <path d="M15.4 87.2l12.7-79.6c.5-3.3 4.8-4.6 7.2-2.3l12.7 12.7-32.6 69.2z" fill="#FFC400" />
            <path d="M84.4 38.6l-10-18.9c-1.6-3-5.9-3-7.5 0L15.3 87.3l69.1-48.7z" fill="#FF9100" />
            <path d="M15.4 87.2L96.6 22c2.5-2 6.1.5 5.1 3.6L84.4 87.2c-1 3.3-4.8 4.7-7.6 2.8L15.4 87.2z" fill="#DD2C00" />
          </svg>
        );
      case "MongoDB":
        return (
          <svg className="w-4 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C10 6 7 9 7 13c0 3 2.5 5 5 7h0c2.5-2 5-4 5-7 0-4-3-7-5-11z" fill="#47A248" />
            <path d="M12 2v18" stroke="#13AA52" strokeWidth="1.5" />
          </svg>
        );
      case "Godot":
        return (
          <svg className="w-4.5 h-4.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#478CBF" />
            <circle cx="8.5" cy="11.5" r="1.5" fill="white" />
            <circle cx="15.5" cy="11.5" r="1.5" fill="white" />
            <path d="M8 15.5c2.5 1.5 5.5 1.5 8 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 6l2.5 2.5M19 6l-2.5 2.5" stroke="#478CBF" strokeWidth="1.8" />
          </svg>
        );
      case "Adobe Creative Suite":
        return (
          <svg className="w-4.5 h-4.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#FF0000" />
            <path d="M12 4l6.5 14h-3.2l-1.5-3.5H10.2L8.7 18H5.5L12 4zm1 7.5L12 9l-1 2.5h2z" fill="white" />
          </svg>
        );
      default:
        return <Cpu className="w-4.5 h-4.5 text-[#2ebd73]" />;
    }
  };

  return (
    <div className="bg-[#fafafa] text-zinc-900 pb-2 overflow-hidden scroll-smooth transition-all duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden text-center flex flex-col items-center justify-center pt-10 pb-10 md:pt-14 md:pb-12 bg-white">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 z-0" />
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-[#2ebd73]/6 rounded-full blur-[120px] pointer-events-none z-10" />
        <div className="absolute bottom-12 left-1/4 w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center text-center space-y-5">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] font-sans"
          >
            Crafting Digital <br />
            Experiences That <br />
            <span className="bg-gradient-to-r from-emerald-600 via-[#2ebd73] to-sky-500 bg-clip-text text-transparent font-black">Shape The Future</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-zinc-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-4xl mx-auto font-sans text-center"
          >
            At Hyle Studios, we combine creativity, technology, and innovation to build exceptional digital products that help businesses grow, connect, and thrive in a rapidly evolving world. From mobile applications and web platforms to immersive games and impactful brand identities, we transform ideas into experiences people love.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
          >
            <button
              onClick={handleContactNav}
              className="w-full sm:w-auto px-8 py-4 bg-[#2ebd73] hover:bg-[#259b5e] text-white font-bold font-sans tracking-tight text-sm rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:scale-102 active:scale-98 cursor-pointer uppercase"
            >
              <span>GET IN TOUCH NOW</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("about-what-we-do");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 py-4 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 border border-zinc-200 font-bold font-sans tracking-tight text-sm rounded-full transition-all text-center cursor-pointer hover:scale-102 active:scale-98 shadow-xs"
            >
              VIEW OUR SERVICES
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fafafa] to-transparent pointer-events-none z-30" />
      </section>

      {/* 2. WHO WE ARE & 3. OUR STORY SECTION */}
      <section className="pt-6 pb-16 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* WHO WE ARE ROW */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090d16] tracking-tight leading-tight font-sans">
                A Creative Technology Studio Built For Modern Businesses
              </h2>
              <div className="space-y-4 text-zinc-650 text-sm leading-relaxed font-sans font-normal">
                <p>
                  Hyle Studios is a multidisciplinary digital agency specializing in software development, game creation, UI/UX design, and branding. We partner with startups, entrepreneurs, and organizations to create innovative digital products that solve problems, engage users, and drive business growth.
                </p>
                <p>
                  Our team combines technical expertise with creative thinking to deliver solutions that are both visually stunning and functionally powerful. Every project we undertake is driven by a commitment to quality, innovation, and measurable results.
                </p>
              </div>
            </div>
            
            {/* Visual accent mock box on right - Beautiful pure visual illustration */}
            <div className="md:col-span-5 relative select-none">
              <div className="bg-white border border-zinc-200/95 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(46,189,115,0.04)_100%)] opacity-80" />
                
                {/* Clean, minimalist geometric rings intersection (Engineering + Art) */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  
                  {/* Glowing ambient circles */}
                  <div className="absolute w-40 h-40 rounded-full border border-dashed border-zinc-200" />
                  
                  {/* Left Ring: Art & Creativity */}
                  <div className="absolute w-28 h-28 rounded-full border-[2.5px] border-[#2ebd73]/30 bg-white/40 shadow-sm -translate-x-4 transform mix-blend-multiply flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#ebfaf3] border border-[#2ebd73]/40 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2ebd73]" />
                    </div>
                  </div>
                  
                  {/* Right Ring: High Engineering */}
                  <div className="absolute w-28 h-28 rounded-full border-[2.5px] border-emerald-400/30 bg-white/40 shadow-sm translate-x-4 transform mix-blend-multiply flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-400/30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  
                  {/* Connected vector curve path linking both nodes */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    <path d="M 32 50 Q 50 18 68 50" fill="none" stroke="#2ebd73" strokeWidth="1.8" strokeDasharray="2.5 2.5" />
                    <circle cx="50" cy="34" r="3" fill="#2ebd73" />
                  </svg>
                  
                </div>
              </div>
            </div>
          </div>

          <hr className="border-zinc-200/60" />

          {/* OUR STORY ROW */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Timeline diagram on left - Beautiful pure visual illustration */}
            <div className="md:col-span-5 order-last md:order-first select-none w-full">
              <div className="bg-white border border-zinc-200/95 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                <div className="absolute inset-x-0 top-0 bottom-1/2 bg-[linear-gradient(to_bottom,rgba(250,250,250,0.8)_0%,rgba(255,255,255,0)_100%)] opacity-80" />
                
                {/* 3-phase flow diagram showing Idea -> Evolution -> Launch Impact */}
                <div className="relative w-full flex items-center justify-between px-6">
                  
                  {/* Connected line in background */}
                  <div className="absolute left-[40px] right-[40px] h-0.5 bg-gradient-to-r from-[#2ebd73]/30 via-emerald-400/40 to-[#2ebd73]/20" />
                  
                  {/* Step 1: Spark/Concept */}
                  <div className="relative flex flex-col items-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#2ebd73] shadow-sm flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-[#2ebd73]" />
                    </div>
                  </div>

                  {/* Step 2: Synthesis */}
                  <div className="relative flex flex-col items-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-emerald-400 shadow-sm flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-emerald-500" />
                    </div>
                  </div>

                  {/* Step 3: Deployment/Success */}
                  <div className="relative flex flex-col items-center z-10">
                    <div className="w-14 h-14 rounded-full bg-[#ebfaf3] border-3 border-[#2ebd73] shadow-md flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#2ebd73]" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090d16] tracking-tight leading-tight font-sans">
                From Ideas To Impact
              </h2>
              <div className="space-y-4 text-zinc-650 text-sm leading-relaxed font-sans font-normal">
                <p>
                  Every great product starts with a vision. Hyle Studios was founded with a simple goal: to help businesses and creators bring ambitious ideas to life through technology and design.
                </p>
                <p>
                  We recognized that many businesses struggle to find a partner capable of handling both the creative and technical aspects of product development. By bringing together expertise in software engineering, design, branding, and game development, we created a studio capable of delivering complete digital solutions under one roof.
                </p>
                <p>
                  Today, we continue to help businesses transform concepts into scalable products and memorable experiences.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHAT WE DO (COMPREHENSIVE DIGITAL SOLUTIONS) */}
      <section id="about-what-we-do" className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090d16] tracking-tight font-sans">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-zinc-600 text-sm font-light font-sans leading-relaxed">
              We cover the entire layout of digital product conceptualization and engineering, matching flawless aesthetics with solid performance.
            </p>
          </div>

          {/* Cards Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {whatWeDoCards.map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() => handleServicesNav(card.view)}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="bg-[#fafafa] border border-zinc-200 p-6 rounded-[2rem] text-left hover:border-[#2ebd73]/35 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group h-full select-none"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center transition-colors group-hover:bg-[#ebfaf3] group-hover:border-[#2ebd73]/40">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase font-bold tracking-wider">
                      {card.badge}
                    </span>
                    <h3 className="text-lg font-extrabold text-zinc-950 font-sans tracking-tight mt-0.5 group-hover:text-[#2ebd73] transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-zinc-500 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-200/50 flex justify-between items-center text-[10.5px] font-mono font-bold tracking-widest text-zinc-400 group-hover:text-[#2ebd73] transition-colors">
                  <span>LEARN MORE</span>
                  <ChevronRight className="w-4 h-4 font-bold transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE HYLE STUDIOS */}
      <section className="py-20 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090d16] tracking-tight font-sans text-center">
              Why Businesses Choose Us
            </h2>
            <p className="text-zinc-600 text-sm font-light text-center leading-relaxed">
              We merge the operational quality of a world-class consultancy with the focus and flexibility of a premium design and engineering boutique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white border border-zinc-200 rounded-2.5xl p-6 text-left shadow-xs space-y-4 hover:border-zinc-300 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${card.color}`}>
                  {card.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[15px] font-bold text-zinc-950 font-sans tracking-tight">{card.title}</h4>
                  <p className="text-xs sm:text-[12.5px] text-zinc-600 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. OUR MISSION & VISION & 7. OUR CORE VALUES */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Mission & Vision Section (Split into two columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
            
            {/* Column 1: Our Mission */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-[2rem] p-8 space-y-5 flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#2ebd73]/7 rounded-bl-[2rem] pointer-events-none" />
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-emerald-600">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#090d16] tracking-tight font-sans">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm md:text-[14.5px] text-zinc-600 leading-relaxed font-light font-sans">
                  To empower businesses and creators through innovative digital solutions that inspire growth, engagement, and meaningful impact. We serve as the comprehensive design and technology engine that scales ideas gracefully in real-world contexts.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200/50 text-[10px] font-mono tracking-widest text-[#2ebd73] font-bold">
                GUIDED BY REAL VALUE
              </div>
            </div>

            {/* Column 2: Our Vision */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-[2rem] p-8 space-y-5 flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-[2rem] pointer-events-none" />
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-emerald-600">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#090d16] tracking-tight font-sans">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm md:text-[14.5px] text-zinc-600 leading-relaxed font-light font-sans">
                  To become a globally recognized creative technology studio known for building exceptional digital experiences that shape the future. We envision a space where design and engineering are completely synchronized and uniformly elegant.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200/50 text-[10px] font-mono tracking-widest text-[#2ebd73] font-bold">
                ENGINEERING TRANSFORMATION
              </div>
            </div>

          </div>

          <hr className="border-zinc-200/50" />

          {/* 7. Our Core Values Stack */}
          <div className="space-y-10">
            <div className="text-left space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-sans tracking-tight">
                Values That Guide Us
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredValue(idx)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className={`border rounded-2xl p-5.5 text-left transition-all duration-300 flex space-x-4 items-start ${
                    hoveredValue === idx 
                      ? "bg-white border-[#2ebd73]/30 shadow-md translate-y-[-2px]" 
                      : "bg-[#fafafa] border-zinc-200"
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[15px] font-bold text-zinc-900 font-sans tracking-tight">{val.title}</h4>
                    <p className="text-xs sm:text-[13px] text-zinc-650 leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. OUR PROCESS: HOW WE BRING IDEAS TO LIFE */}
      <section className="py-20 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-left">
            <div className="space-y-3 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090d16] tracking-tight font-sans">
                How We Bring Ideas To Life
              </h2>
            </div>
            <p className="text-zinc-600 text-sm font-light max-w-sm leading-relaxed">
              Our cooperative, highly organized 6-stage process structure ensures optimal layout clarity and code precision at every step of development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-zinc-200 p-6 rounded-[2rem] hover:shadow-md hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm font-mono font-bold text-[#2ebd73] bg-[#ebfaf3] px-2.5 py-1 rounded">
                      STEP {step.step}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  </div>
                  <h3 className="text-[17px] font-bold text-zinc-900 font-sans tracking-tight">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXTRA PREMIUM SECTION: TECHNOLOGIES WE USE */}
      <section className="py-16 bg-white border-t border-b border-zinc-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-sans tracking-tight text-center">
              Technologies We Use
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, idx) => (
              <div 
                key={idx}
                className="px-4 py-2.5 bg-[#fafafa] border border-zinc-200 hover:border-[#2ebd73]/30 hover:bg-white hover:shadow-xs transition-all duration-200 rounded-xl flex items-center space-x-3 cursor-default select-none group"
              >
                {renderTechLogo(tech.name)}
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold text-zinc-900 font-sans">{tech.name}</div>
                  <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA PREMIUM SECTION: INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090d16] tracking-tight font-sans text-center">
              Industries We Serve
            </h2>
            <p className="text-zinc-650 text-sm font-light text-center leading-relaxed">
              We design specialized features and compliance layers matching distinct industry conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind, idx) => (
              <div 
                key={idx}
                className="bg-white border border-zinc-200 hover:border-[#2ebd73]/35 p-8 rounded-[2.25rem] flex flex-col justify-between items-start font-sans hover:shadow-md transition-all duration-300 cursor-default select-none group text-left"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ebfaf3] border border-[#2ebd73]/20 flex items-center justify-center">
                    {ind.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-950 tracking-tight leading-tight group-hover:text-[#2ebd73] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-light">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleContactNav}
                  className="mt-6 text-[10.5px] font-mono font-bold tracking-widest text-[#2ebd73] hover:text-[#259b5e] inline-flex items-center gap-1 group/link cursor-pointer w-max uppercase self-start"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. STATS SECTION (BUILT AROUND INNOVATION) */}
      <section className="py-20 bg-white relative overflow-hidden text-center border-t border-zinc-200/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#2ebd73]/4 rounded-full blur-[130px] pointer-events-none z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-20">
          <div className="space-y-3 max-w-2xl mx-auto text-center font-sans">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight text-center font-sans">
              Built Around Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((st, idx) => (
              <div 
                key={idx}
                className="bg-[#fafafa] border border-[#2ebd73]/30 hover:border-[#2ebd73] transition-all duration-300 p-6 rounded-[2rem] flex flex-col justify-between text-center space-y-3.5 shadow-xs"
              >
                <div className="text-3xl sm:text-4xl font-black text-zinc-950 font-mono tracking-tighter">
                  {st.value}
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-zinc-900 uppercase font-sans tracking-wide">
                    {st.label}
                  </div>
                  <p className="text-[10.5px] text-zinc-500 leading-normal font-light">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
