import React from "react";
import { 
  ArrowRight, Figma, Paintbrush, Laptop, Smartphone, Cpu, 
  Settings, CheckCircle2, ChevronRight, Layers, Layout, 
  Eye, Compass, Search, Terminal, Sparkles, Server, Check, HelpCircle,
  Users, Target, Zap, ShieldCheck, Heart, TrendingUp
} from "lucide-react";
import { motion } from "motion/react";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import HomepageCTA from "./HomepageCTA";

interface UiuxServiceDetailsProps {
  setView: (view: any) => void;
  service: any;
}

export default function UiuxServiceDetails({ setView, service }: UiuxServiceDetailsProps) {
  const renderSliderScreens = () => (
    <>
      {/* Screen 1: SMARTRAQ Welcome */}
      <div className="w-[241px] h-full shrink-0 bg-white relative flex flex-col justify-between px-5 pt-12 pb-6 text-center">
        <div className="space-y-1 mt-2">
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-5 h-5 rounded bg-[#2563eb] flex items-center justify-center text-white text-[10px] font-black font-sans">S</div>
            <span className="text-[13px] font-bold tracking-widest text-zinc-900 font-sans">SMARTRAQ™</span>
          </div>
          <p className="text-[8px] font-mono tracking-wider text-zinc-450 uppercase font-bold">One App. Every Watch.</p>
        </div>
        
        <div className="relative flex items-center justify-center my-auto">
          <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-xl scale-75 animate-pulse" />
          <svg className="w-28 h-28 relative z-10" viewBox="0 0 100 100" fill="none">
            <rect x="36" y="10" width="28" height="80" rx="6" fill="#1e293b" />
            <rect x="25" y="25" width="50" height="50" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
            <circle cx="50" cy="50" r="20" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="16" fill="#020617" />
            <circle cx="50" cy="50" r="13" stroke="#2ebd73" strokeWidth="2.2" strokeDasharray="50 81" strokeLinecap="round" transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="9" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="30 56" strokeLinecap="round" transform="rotate(30 50 50)" />
            <text x="50" y="47" fill="#e2e8f0" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">10:42</text>
            <text x="50" y="56" fill="#2ebd73" fontSize="6" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">7,842</text>
          </svg>
        </div>

        <div className="space-y-2 mt-auto">
          <div className="w-full py-2 bg-[#2563eb] rounded-xl text-center text-white text-[10px] font-bold tracking-wide shadow-xs">
            Get Started
          </div>
          <span className="text-[7.5px] text-zinc-400 block font-medium">Already have an account? <span className="text-[#2563eb] font-bold">Login</span></span>
        </div>
      </div>

      {/* Screen 2: Sign-In Mode */}
      <div className="w-[241px] h-full shrink-0 bg-white relative flex flex-col justify-between px-5 pt-12 pb-6 text-left">
        <div className="space-y-1 mt-2">
          <h3 className="text-[17px] font-black text-zinc-900 tracking-tight font-sans">Sign in</h3>
          <p className="text-[8px] text-zinc-450 font-medium tracking-tight">Progress starts here.</p>
        </div>

        <div className="space-y-2.5 my-auto">
          <div className="space-y-1">
            <label className="text-[7px] font-mono uppercase font-bold text-zinc-400 tracking-wider">Email or Phone</label>
            <div className="w-full px-2.5 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-[9px] text-zinc-550 font-medium">
              david@smartraq.com
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[7px] font-mono uppercase font-bold text-zinc-400 tracking-wider">Password</label>
              <span className="text-[7px] font-extrabold text-[#2563eb]">Forgot?</span>
            </div>
            <div className="w-full px-2.5 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-[9px] text-zinc-450 tracking-wider font-bold">
              ••••••••••••
            </div>
          </div>

          <div className="w-full py-2 bg-[#2563eb] rounded-xl text-center text-white text-[10px] font-extrabold tracking-wide mt-1 shadow-xs">
            Sign In
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-zinc-155"></div>
            <span className="flex-shrink mx-1.5 text-[7px] text-zinc-400 font-mono font-bold tracking-wider">OR</span>
            <div className="flex-grow border-t border-zinc-155"></div>
          </div>

          <div className="w-full py-1.5 bg-white border border-zinc-200 rounded-lg flex items-center justify-center gap-1.5 text-[8.5px] text-zinc-700 font-bold font-sans">
            <svg className="w-3 h-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Sign in with Google
          </div>
        </div>

        <span className="text-[7.5px] text-zinc-400 block text-center font-medium mt-auto">Don't have an account? <span className="text-[#2563eb] font-bold">Sign up</span></span>
      </div>

      {/* Screen 3: Main Dashboard Screen */}
      <div className="w-[241px] h-full shrink-0 bg-white relative flex flex-col justify-between px-3.5 pt-12 pb-6 text-left">
        <div className="flex justify-between items-end mt-1">
          <div>
            <span className="text-[7px] font-mono font-bold tracking-widest text-[#2ebd73] uppercase">TODAY'S ACTIVITY</span>
            <h3 className="text-[13px] font-black tracking-tight text-zinc-950 leading-none mt-0.5">Hello, David</h3>
          </div>
          <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-[10px]">
            🔔
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="bg-[#eff6ff] border border-blue-100 p-2 rounded-xl relative overflow-hidden flex flex-col justify-between h-18">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[6.5px] font-bold text-[#2563eb] uppercase tracking-wider font-mono">Steps Tracker</span>
                <span className="text-[8px]">🏃</span>
              </div>
              <p className="text-[11px] font-extrabold text-blue-950 mt-0.5">7,842</p>
            </div>
            <span className="text-[6.5px] text-blue-700 font-mono font-semibold">Goal: 10,000</span>
          </div>

          <div className="bg-[#fef2f2] border border-red-100 p-2 rounded-xl relative overflow-hidden flex flex-col justify-between h-18">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[6.5px] font-bold text-red-650 uppercase tracking-wider font-mono">Heart Rate</span>
                <span className="text-[8px] animate-pulse">❤️</span>
              </div>
              <p className="text-[11px] font-extrabold text-red-950 mt-0.5">72 <span className="text-[6px] font-light">BPM</span></p>
            </div>
            <span className="text-[6.5px] text-red-700 font-mono font-semibold">Resting: 64</span>
          </div>

          <div className="bg-[#faf5ff] border border-purple-100 p-2 rounded-xl relative overflow-hidden flex flex-col justify-between h-18 col-span-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[6.5px] font-bold text-purple-650 tracking-wider font-mono">Deep Sleep Analysis</span>
                <p className="text-[12px] font-black text-purple-950 mt-0.5">7h 24m</p>
              </div>
              <span className="text-xs">🌙</span>
            </div>
            <div className="w-full bg-purple-100 h-1 rounded-full overflow-hidden">
              <div className="w-4/5 bg-purple-500 h-full" />
            </div>
          </div>
        </div>

        <div className="space-y-1 mb-1">
          <div className="flex justify-between text-[6px] text-zinc-400 font-mono font-bold tracking-wider">
            <span>HEALTH OVERVIEW</span>
            <span>AVG 12,847</span>
          </div>
          <div className="bg-zinc-50/60 border border-zinc-150 p-1.5 rounded-lg flex items-end justify-between h-12">
            {[40, 65, 30, 85, 45, 95, 60].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5 w-2">
                <div className="w-1 rounded-sm bg-[#2563eb] relative" style={{ height: `${h * 0.22}px` }}>
                  {i === 5 && <div className="absolute inset-0 bg-[#2ebd73] rounded-sm animate-pulse" />}
                </div>
                <span className="text-[5px] text-zinc-450 font-mono font-bold">{"MTWTFSS"[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-1.5 flex items-center justify-between text-zinc-400 relative z-10 px-1 mt-auto">
          <span className="text-[#2563eb] text-[9px]">🏠</span>
          <span className="text-[8px]">📊</span>
          <div className="w-5.5 h-5.5 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-[10px] font-bold -translate-y-2">
            +
          </div>
          <span className="text-[8px]">⚙️</span>
          <span className="text-[8px]">👤</span>
        </div>
      </div>

      {/* Screen 4: Connect Device */}
      <div className="w-[241px] h-full shrink-0 bg-white relative flex flex-col justify-between px-5 pt-12 pb-6 text-left">
        <div className="space-y-1 mt-2">
          <span className="text-[7px] font-mono font-bold text-[#2563eb] bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded-full inline-block uppercase tracking-wider">Device Matrix</span>
          <h3 className="text-[13px] font-black text-zinc-900 tracking-tight leading-none mt-1">Connect Watch</h3>
          <p className="text-[8px] text-zinc-450 font-medium leading-normal mt-0.5">Sync workout statistics from any wearable instantly.</p>
        </div>

        <div className="space-y-2 y my-auto">
          <div className="grid grid-cols-4 gap-1.5 py-1">
            {[
              { name: "Fitbit", logo: "🟢" },
              { name: "Garmin", logo: "🔵" },
              { name: "Apple", logo: "🍎" },
              { name: "Samsung", logo: "🔮" }
            ].map((b, idx) => (
              <div key={idx} className="border border-zinc-200 rounded-xl p-1 flex flex-col items-center justify-center text-center">
                <span className="text-[9px]">{b.logo}</span>
                <span className="text-[6px] font-bold text-zinc-650 mt-0.5">{b.name}</span>
              </div>
            ))}
          </div>

          <div className="bg-zinc-50 border border-zinc-205 p-2 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[6.5px] font-mono tracking-widest text-[#a1a1aa] font-bold uppercase">BLUETOOTH SEARCHING...</span>
              <span className="w-1 h-1 rounded-full bg-[#2563eb] animate-ping" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-50 border border-blue-100 flex items-center justify-center">
                <span className="text-[9px]">⌚</span>
              </div>
              <div>
                <h5 className="text-[8.5px] font-bold text-zinc-900 leading-none">Smartraq Watch 2.0</h5>
                <p className="text-[6.5px] text-[#2ebd73] font-bold mt-0.5">Ready to pair & connect</p>
              </div>
            </div>
          </div>

          <div className="w-full py-2 bg-[#2563eb] rounded-xl text-center text-white text-[10px] font-bold tracking-wide mt-1">
            Pair & Connect
          </div>
        </div>

        <span className="text-[7.5px] text-zinc-400 block text-center font-medium mt-auto">Skip device setup for now</span>
      </div>
    </>
  );

  // Let's outline the categories explicitly from the prompt
  const WHAT_WE_DESIGN = [
    {
      label: "Mobile App Design",
      desc: "Modern and intuitive mobile interfaces designed to provide seamless experiences across iOS and Android devices.",
      tag: "iOS & Android",
      icon: <Smartphone className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Website Design",
      desc: "Professional website experiences that engage visitors, strengthen brands, and increase conversions.",
      tag: "Conversion-Focused",
      icon: <Laptop className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "SaaS Platform Design",
      desc: "Complex software systems simplified through clean dashboards, intuitive navigation, and efficient workflows.",
      tag: "SaaS Ecosystems",
      icon: <Layers className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Web Application Design",
      desc: "User-centered web experiences focused on functionality, accessibility, and performance.",
      tag: "Responsive Web",
      icon: <Layout className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Dashboard & Admin Panel Design",
      desc: "Data-rich interfaces designed to make information easy to understand and actions easy to perform.",
      tag: "Data Visualization",
      icon: <Cpu className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "E-Commerce Experience Design",
      desc: "Shopping experiences optimized for customer engagement, trust, and conversions.",
      tag: "E-Commerce Funnels",
      icon: <Settings className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Product Design Systems",
      desc: "Scalable design systems that ensure consistency across products, teams, and future development.",
      tag: "Scale & Tokens",
      icon: <Terminal className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Interactive Prototypes",
      desc: "Clickable, realistic prototypes that help validate ideas before development begins.",
      tag: "User Validation",
      icon: <Eye className="w-5 h-5 text-zinc-900" />
    }
  ];

  const WHAT_YOU_GET = [
    "User Research & Analysis",
    "User Journey Mapping",
    "Information Architecture",
    "Wireframing",
    "Interactive Prototyping",
    "High-Fidelity UI Design",
    "Design Systems",
    "Responsive Design",
    "Developer Handoff Files",
    "Usability Testing & Optimization"
  ];

  const DESIGN_PROCESS = [
    {
      num: 1,
      title: "Discovery & Research",
      desc: "We learn about your business, audience, goals, and competitors to understand the challenges and opportunities.",
      tag: "INITIATION"
    },
    {
      num: 2,
      title: "User Experience Strategy",
      desc: "We define user flows, information architecture, and interaction patterns to create intuitive experiences.",
      tag: "STRATEGY"
    },
    {
      num: 3,
      title: "Wireframing",
      desc: "We develop low-fidelity layouts that establish structure, functionality, and content organization.",
      tag: "LAYOUT"
    },
    {
      num: 4,
      title: "Visual Design",
      desc: "Our designers create stunning interfaces that align with your brand and resonate with your users.",
      tag: "STYLE & BRAND"
    },
    {
      num: 5,
      title: "Interactive Prototyping",
      desc: "We build clickable prototypes to test interactions and validate the user experience before development.",
      tag: "INTERACTION"
    },
    {
      num: 6,
      title: "Testing & Refinement",
      desc: "User feedback and usability testing help us refine the design for maximum effectiveness.",
      tag: "REFINEMENT"
    },
    {
      num: 7,
      title: "Developer Handoff",
      desc: "We prepare organized design files, specifications, and assets to ensure smooth implementation.",
      tag: "PRODUCTION Ready"
    }
  ];

  const WHY_CHOOSE_US = [
    {
      title: "User-Centered Approach",
      desc: "Every design choice is custom-aligned to true user behaviors and interactive workflows to reduce interface friction.",
      icon: Users
    },
    {
      title: "Premium Aesthetics",
      desc: "Beautifully organized viewports centered on clean typography pairings, spacious negative margins, and elegant sizing tags.",
      icon: Paintbrush
    },
    {
      title: "Research-Backed Decisions",
      desc: "We analyze target user habits, behavioral analytics, and UX benchmarks to design features that are highly intuitive.",
      icon: Compass
    },
    {
      title: "Conversion Optimization",
      desc: "Smart placement of graphical focal landmarks, intuitive button systems, and clean interactive cues that boost target metrics.",
      icon: Target
    },
    {
      title: "Scalable Design Systems",
      desc: "We deliver comprehensive Figma design tokens, matching style libraries, and organized components for fast frontend styling.",
      icon: Layers
    },
    {
      title: "Full Transparency",
      desc: "Aligned direct communication, collaborative feedback cycles inside Figma, and interactive clickable prototype walk-throughs.",
      icon: Layout
    }
  ];

  return (
    <div className="bg-[#fafafa] text-zinc-900 pb-2">
      
      {/* 1. Hero / Header Block: Overlaps header as requested */}
      <section className="relative overflow-hidden text-center flex flex-col items-center justify-center -mt-[80px] pt-24 pb-14 md:pt-32 md:pb-18 bg-[#fafafa] min-h-[70vh]">
        {/* Background Image: Slightly softened as requested */}
        <img
          src="./src/assets/images/uiux_design_banner_1780476532671.png"
          alt="UI/UX Design Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-10 filter blur-[1px] scale-102"
          style={{ opacity: 0.18 }}
          referrerPolicy="no-referrer"
        />

        {/* Clean subtle backdrop layout overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/50 to-[#fafafa] pointer-events-none z-20" />

        {/* Container Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40 flex flex-col items-center text-center space-y-4">

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] font-sans"
          >
            Great Design Isn't <br /> Just Seen — <span className="bg-gradient-to-r from-brand via-[#2ebd73] to-brand-hover bg-clip-text text-transparent">It's Felt.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-zinc-750 text-base sm:text-lg md:text-xl font-normal tracking-tight leading-relaxed max-w-3xl mx-auto font-sans"
          >
            At Hyle Studios, we craft seamless user experiences and stunning interfaces that help businesses attract, engage, and retain customers.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto mb-2">
            <button
              onClick={() => setView("contact")}
              className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold font-sans tracking-tight text-sm rounded-full transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-md hover:shadow-lg cursor-pointer animate-none"
            >
              <span>CONTACT US NOW</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            
            <button
              onClick={() => {
                const el = document.getElementById("what-we-design-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-brand-light text-brand hover:text-brand-hover border border-brand/25 font-bold font-sans tracking-tight text-sm rounded-full transition-all text-center cursor-pointer"
            >
              EXPLORE OUR SERVICES
            </button>
          </div>
        </div>

        {/* Faded Ending block (Smooth transition from the hero header to the next section) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/90 via-[#fafafa]/40 to-transparent pointer-events-none z-35" />
      </section>

      {/* 2. Headline Detail Banner: "UI/UX Design - Crafting Digital Experiences That Users Remember" */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-[#fafafa] to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side text: Contains Header and the Paragraphs right under it as requested */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-wider font-bold text-brand uppercase">CORE VALUE SUMMARY</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
                  UI/UX Design
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-zinc-805 tracking-tight leading-tight">
                  Crafting Digital Experiences That Users Remember
                </p>
                <div className="h-1 w-20 bg-brand rounded-full" />
              </div>

              {/* Narrative paragraphs directly under the heading */}
              <div className="space-y-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
                <p className="font-semibold text-zinc-900 text-base">
                  At Hyle Studios, we believe exceptional design goes beyond aesthetics. Great design solves problems, simplifies interactions, and creates meaningful experiences that connect users with products effortlessly.
                </p>
                <p>
                  Our UI/UX design process combines creativity, user psychology, research, and strategic thinking to create digital products that are intuitive, engaging, and aligned with business goals. Whether you're launching a new product or improving an existing one, we help transform ideas into experiences users love.
                </p>
                <p className="border-l-2 border-brand pl-4 italic text-zinc-500 text-xs sm:text-sm">
                  From startups to established businesses, we design interfaces that balance functionality, usability, and visual excellence.
                </p>
              </div>
            </div>            {/* Right side: High fidelity, clean animated iPhone simulation frame (no clutter or futuristic diagram text) */}
            <div className="lg:col-span-5 flex justify-center py-4">
              <div className="relative w-[270px] h-[490px] bg-zinc-950 rounded-[42px] p-2.5 shadow-2xl border-[3.5px] border-zinc-900 select-none pointer-events-none ring-1 ring-zinc-800 flex flex-col overflow-hidden">
                {/* Glossy screen glass shine effect */}
                <div className="absolute inset-1.5 rounded-[32px] bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30" />
                
                {/* Speaker top bar */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-805 rounded-full z-45" />
                
                {/* Screen Content Arena */}
                <div className="w-full h-full rounded-[32px] bg-white overflow-hidden relative flex flex-col border border-zinc-200/40">
                  {/* Status Bar */}
                  <div className="absolute top-2.5 left-0 right-0 px-5 flex justify-between items-center z-45 text-zinc-900 font-sans text-[8.5px] font-extrabold select-none pointer-events-none">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      {/* Signal bar */}
                      <span className="w-1 h-1 bg-zinc-900 rounded-full" />
                      {/* WiFi bar */}
                      <span className="w-1.5 h-1.5 rounded-full border border-zinc-900" />
                      {/* Battery */}
                      <div className="w-4 h-2 border border-zinc-900 rounded-[2px] p-[1px] flex">
                        <div className="h-full w-2 bg-zinc-900 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Island styled notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-45 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900/60 ml-auto mr-1.5" />
                  </div>

                  {/* Scrolling App Simulator */}
                  <div className="overflow-hidden flex-1 relative w-full h-full">
                    <motion.div
                      animate={{ x: ["0px", "0px", "-241px", "-241px", "-482px", "-482px", "-723px", "-723px", "-964px"] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 24,
                        times: [0, 0.18, 0.25, 0.43, 0.50, 0.68, 0.75, 0.93, 1.0],
                        ease: "easeInOut"
                      }}
                      className="flex flex-row space-y-0 h-full w-max"
                    >
                      {renderSliderScreens()}
                      {renderSliderScreens()}
                    </motion.div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-zinc-800 rounded-full z-40 select-none pointer-events-none" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. "What We Design" Bento-inspired Grid Block */}
      <section id="what-we-design-section" className="py-10 md:py-14 bg-zinc-50/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-brand font-bold uppercase">OUR BLUEPRINT SCOPE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
              What We Design
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm font-light">
              We engineer tailor-made design deliverables across multiple high-performance form factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHAT_WE_DESIGN.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setView("contact")}
                className="bg-white border border-zinc-200/80 hover:border-brand rounded-[2rem] p-6 hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Visual grid vector accent lines inside the card for professional design feel */}
                <div className="absolute top-0 right-0 w-8 h-8 border-b border-l border-zinc-100 group-hover:bg-brand-light transition-colors pointer-events-none" />
                
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-brand-light text-brand flex items-center justify-center border border-brand/20 group-hover:bg-brand group-hover:text-white transition-all duration-300 shrink-0">
                    {React.cloneElement(item.icon, { className: "w-5 h-5 transition-colors" })}
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono font-bold text-brand uppercase tracking-widest block">
                      {item.tag}
                    </span>
                    <h3 className="text-[15px] font-bold text-zinc-950 font-sans tracking-tight">
                      {item.label}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between select-none pb-0.5">
                  <span className="text-[11px] text-zinc-950 font-extrabold group-hover:text-brand transition-colors tracking-wide uppercase">Get In Touch</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform group-hover:text-brand" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. "What You Get" Split Panel Showcase */}
      <section className="py-10 md:py-14 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side Workspace Canvas */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-brand font-bold uppercase">DELIVERABLES INCLUDED</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight font-sans">
                What You Get
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
                Every project we undertake produces a suite of production-ready, highly polished digital assets and architectural designs. We provide direct Figma file handoffs and comprehensive responsive blueprints.
              </p>

              {/* Beautiful, text-free layered design visual representing precision wireframing & artboards */}
              <div className="relative h-[250px] bg-zinc-50 rounded-[2rem] border border-zinc-200/80 p-6 overflow-hidden flex items-center justify-center group shadow-xs">
                {/* Clean design dot grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] bg-[size:16px_16px] opacity-70" />
                
                {/* 3D-like layered artboards with smooth float transitions */}
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Artboard 1 (Back Layer: Web Layout Mock) */}
                  <motion.div 
                    animate={{ 
                      y: [0, -3, 0],
                      x: [0, -2, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-[160px] h-[120px] rounded-xl bg-white border border-zinc-200 p-3 shadow-xs -translate-x-12 -translate-y-8 rotate-[-4deg] group-hover:-translate-x-16 group-hover:-translate-y-12 group-hover:rotate-[-6deg] transition-all duration-550 ease-out flex flex-col justify-between"
                  >
                    {/* Navigation bar wireframe */}
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-zinc-100 border border-zinc-200 shrink-0" />
                      <div className="w-12 h-1.5 bg-zinc-100 rounded-full" />
                    </div>
                    {/* Layout placeholders */}
                    <div className="flex-1 my-2 bg-zinc-50 rounded-lg border border-dashed border-zinc-200 flex items-center justify-center p-2">
                      <div className="grid grid-cols-3 gap-1.5 w-full">
                        <div className="h-4 bg-zinc-100/80 rounded" />
                        <div className="h-4 bg-zinc-100/80 rounded" />
                        <div className="h-4 bg-zinc-100/80 rounded" />
                      </div>
                    </div>
                    {/* Bottom bar wireframe */}
                    <div className="flex justify-between items-center">
                      <div className="w-14 h-1 bg-zinc-100 rounded-full" />
                      <div className="w-4 h-2 bg-zinc-100 rounded-sm" />
                    </div>
                  </motion.div>

                  {/* Artboard 2 (Middle Layer: Sleek Mobile/Dashboard Graph) */}
                  <motion.div 
                    animate={{ 
                      y: [0, 3, 0],
                      x: [0, 2, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-[140px] h-[130px] rounded-xl bg-white border border-zinc-200 p-3 shadow-sm z-10 translate-x-4 translate-y-6 rotate-[6deg] group-hover:translate-x-8 group-hover:translate-y-10 group-hover:rotate-[8deg] transition-all duration-550 ease-out flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-2 bg-zinc-100 rounded-full" />
                      <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                    </div>
                    {/* Bar graph layouts */}
                    <div className="space-y-1.5 my-2">
                      <div className="flex items-end gap-1.5 h-12 pt-2 justify-center w-full">
                        <div className="w-1.5 bg-zinc-100 rounded-t h-4" />
                        <div className="w-1.5 bg-zinc-100 rounded-t h-8" />
                        <div className="w-1.5 bg-brand rounded-t h-10" />
                        <div className="w-1.5 bg-zinc-150 rounded-t h-6" />
                        <div className="w-1.5 bg-zinc-100 rounded-t h-7" />
                      </div>
                      <div className="w-full h-1 bg-zinc-50 rounded" />
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-brand-light border border-brand/20" />
                      <div className="w-full h-1 bg-zinc-100 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Artboard 3 (Front Layer: Component Focus with precision bounding crop boxes) */}
                  <motion.div 
                    animate={{ 
                      y: [0, -1.5, 0],
                      x: [0, 2.5, 0]
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-[100px] h-[85px] rounded-lg bg-emerald-50/95 border-2 border-brand p-2 z-20 -translate-x-2 -translate-y-2 rotate-[-2deg] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-550 ease-out flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-5 h-1.5 bg-brand/30 rounded-full" />
                      <div className="w-1.5 h-1.5 rounded-full bg-brand/50" />
                    </div>
                    
                    <div className="my-1.5 flex flex-col justify-center items-center flex-1">
                      {/* Interaction verification visual indicator */}
                      <div className="w-5.5 h-5.5 rounded-full bg-brand flex items-center justify-center shadow-xs">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-8 h-1 bg-brand/20 rounded-full" />
                    </div>

                    {/* Designer crop/corner focus marks to communicate pixel precise craftsmanship */}
                    <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-brand pointer-events-none" />
                    <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-brand pointer-events-none" />
                    <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-brand pointer-events-none" />
                    <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-brand pointer-events-none" />
                  </motion.div>

                  {/* Custom elegant vector connection path rendering behind active blocks */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" viewBox="0 0 300 200" fill="none">
                    <motion.path 
                      d="M60 70 Q 120 110 180 80 T 260 120" 
                      stroke="#2ebd73" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                      className="opacity-25"
                    />
                  </svg>
                  
                </div>
              </div>
            </div>

            {/* Right side Bullet deliverable lists */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHAT_YOU_GET.map((deliverable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="flex items-center space-x-3.5 bg-brand-light/10 border border-zinc-200/80 p-4 rounded-2xl hover:bg-brand-light/35 hover:border-brand/35 transition-all duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-brand font-bold" />
                    </div>
                    <span className="text-zinc-900 font-sans text-xs sm:text-[13.5px] font-semibold tracking-tight">
                      {deliverable}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our UI/UX Design Process: Horizontal/Vertical Timeline */}
      <section className="py-10 md:py-14 bg-zinc-50/40 text-left relative overflow-hidden">
        {/* Subtle decorative spotlight blur patterns */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-zinc-300/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-brand font-bold uppercase">WORKFLOW PIPELINE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
              Our UI/UX Design Process
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
              We separate each design step into specialized modular pipeline gates ensuring maximum precision, research validation, and outstanding styling outcomes.
            </p>
          </div>

          {/* Dual Column Layout: Left Column has Interactive UI/UX Diagram, Right Column has Compact Process Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-4">
            
            {/* Left Column: Fluid Sticky UI/UX Design Workflow Illustration (No text or metadata rubbish) */}
            <div className="lg:col-span-5 h-full">
              <div className="relative h-full min-h-[380px] bg-white rounded-[2rem] border border-zinc-205/80 p-6 flex flex-col justify-between shadow-xs group">
                {/* Subtle pixel grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] bg-[size:14px_14px] opacity-70" />
                
                <div className="relative w-full h-full flex flex-col justify-between">
                  
                  {/* Top: Discovery to Wireframe to High-Fidelity Flow Nodes */}
                  <div className="flex items-center justify-between w-full relative z-10">
                    <motion.div 
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-11 h-11 rounded-full bg-brand-light border border-brand/20 flex items-center justify-center shadow-xs"
                    >
                      <Search className="w-4.5 h-4.5 text-brand" />
                    </motion.div>
                    
                    {/* Animated Connection Arrow path */}
                    <div className="flex-1 px-1">
                      <svg className="w-full h-2" viewBox="0 0 80 8" fill="none">
                        <line x1="0" y1="4" x2="80" y2="4" stroke="#2ebd73" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-30" />
                        <motion.circle
                          cx={4} cy={4} r={2.5}
                          fill="#2ebd73"
                          animate={{ x: [0, 72] }}
                          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                        />
                      </svg>
                    </div>

                    <motion.div 
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                      className="w-11 h-11 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center shadow-xs"
                    >
                      <Layout className="w-4.5 h-4.5 text-zinc-400" />
                    </motion.div>

                    {/* Animated Connection Arrow path */}
                    <div className="flex-1 px-1">
                      <svg className="w-full h-2" viewBox="0 0 80 8" fill="none">
                        <line x1="0" y1="4" x2="80" y2="4" stroke="#2ebd73" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-30" />
                        <motion.circle
                          cx={4} cy={4} r={2.5}
                          fill="#2ebd73"
                          animate={{ x: [0, 72] }}
                          transition={{ duration: 3.5, delay: 1.25, repeat: Infinity, ease: "linear" }}
                        />
                      </svg>
                    </div>

                    <motion.div 
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-11 h-11 rounded-full bg-brand text-white flex items-center justify-center shadow-md rotate-[8deg]"
                    >
                      <Figma className="w-4.5 h-4.5" />
                    </motion.div>
                  </div>

                  {/* Middle Section: Clean Split Screen Layout representing adaptive refinement (Left is skeletal, Right is finished) */}
                  <div className="relative flex-1 my-5 bg-zinc-50 border border-zinc-200/80 p-4 rounded-2xl flex items-center justify-between gap-4 overflow-hidden shadow-2xs">
                    
                    {/* Left Screen Portion: Wireframe / Skeleton */}
                    <div className="flex-1 space-y-2 border-r border-zinc-200 pr-2">
                      <div className="w-8 h-1.5 bg-zinc-200 rounded" />
                      <div className="w-full h-10 border border-dashed border-zinc-305 rounded-lg bg-white flex flex-col justify-center gap-1.5 p-2">
                        <div className="w-full h-1 bg-zinc-200 rounded" />
                        <div className="w-2/3 h-1 bg-zinc-200 rounded" />
                      </div>
                      <div className="flex justify-between">
                        <div className="w-4 h-1.5 bg-zinc-150 rounded" />
                        <div className="w-2 h-1.5 bg-zinc-150 rounded" />
                      </div>
                    </div>

                    {/* Slider line indicating real-time pixel refinement */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand/25 flex items-center justify-center">
                      <div className="w-2 h-5 rounded-full bg-brand flex items-center justify-center" />
                    </div>

                    {/* Right Screen Portion: Polished high-fidelity component with vibrant visual elements */}
                    <div className="flex-1 space-y-2 pl-2">
                      <div className="w-6 h-1.5 bg-brand-light rounded" style={{ backgroundColor: "#d3f2e2" }} />
                      <div className="w-full h-10 border border-brand/20 bg-white rounded-lg flex flex-col justify-center gap-1.5 p-2 shadow-xs font-sans">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                          <div className="w-3/4 h-1 bg-zinc-805 rounded" />
                        </div>
                        <div className="w-1/2 h-1 bg-zinc-400 rounded" />
                      </div>
                      <div className="flex justify-between items-center pr-1">
                        <div className="w-3 h-1.5 bg-zinc-300 rounded" />
                        <motion.div 
                          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-1.5 h-1.5 rounded-full bg-[#2ebd73]" 
                        />
                      </div>
                    </div>

                  </div>

                  {/* Bottom: Asset Export & Developer Alignment (Figma source code nodes, direct check status) */}
                  <div className="flex items-center justify-between border-t border-zinc-100 pt-3 relative z-10">
                    <div className="flex items-center space-x-2">
                      <div className="w-6.5 h-6.5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                        <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="w-8 h-1 bg-zinc-300 rounded" />
                        <div className="w-12 h-1.5 bg-zinc-955 rounded" />
                      </div>
                    </div>

                    {/* Hand cursor float motion representing touchpoints interaction testing */}
                    <motion.div 
                      animate={{ 
                        x: [0, -12, 0],
                        y: [0, -4, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute right-14 -top-1 pointer-events-none"
                    >
                      <svg className="w-4.5 h-4.5 text-brand" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 21V3l15 11-7.25 1L4 21z" />
                      </svg>
                    </motion.div>

                    <div className="flex items-center space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2ebd73]" />
                      <div className="w-10 h-1 bg-zinc-200 rounded-full" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Compact Process Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESIGN_PROCESS.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white hover:bg-brand-light/5 border border-zinc-200 hover:border-brand/35 rounded-2xl p-5 flex flex-col justify-between space-y-3 shadow-3xs hover:shadow-2xs transition-all duration-300 relative overflow-hidden group/card text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black font-mono text-zinc-350 group-hover/card:text-brand/50 transition-colors duration-300">
                      0{step.num}
                    </span>
                    <span className="text-[9px] py-0.5 px-2 bg-brand-light rounded-full text-brand font-mono font-bold tracking-wider">{step.tag}</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-950 font-sans tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. Why Choose Hyle Studios: Bullet Grid */}
      <section className="py-10 md:py-14 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2.5 max-w-xl mx-auto">
            <span className="text-[10px] font-mono tracking-widest text-brand font-bold uppercase">UNCOMPROMISING QUALIFICATIONS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
              Why Choose Hyle Studios
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
              We focus purely on premium architectural standards, conversion psychology, and scalable design token structures that optimize real-world products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border border-zinc-200 p-6 sm:p-7 rounded-[1.8rem] flex items-start space-x-4 hover:bg-brand-light/5 hover:border-brand/35 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-brand/10">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[9px] font-mono tracking-wider text-brand font-bold uppercase">BENEFIT WORKSTAGE</span>
                    <h4 className="text-sm font-bold text-zinc-950 font-sans tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed font-sans mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. "Our Design Philosophy" Blockquote: Large premium narrative quote */}
      <section className="py-12 md:py-16 bg-[#fafafa] relative overflow-hidden">
        {/* Design elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-zinc-200/40 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-[10px] font-mono tracking-widest text-brand font-bold uppercase">STUDIO VISION STATEMENT</span>
          
          <div className="space-y-4">
            <span className="text-5xl md:text-6xl text-brand-light font-serif leading-none select-none block font-black">“</span>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 leading-snug font-sans max-w-3xl mx-auto">
              A successful product isn't defined by how beautiful it looks—it's defined by how effortlessly users can achieve their goals. That's why every design decision we make is guided by clarity, usability, and purpose.
            </h3>
            
            <p className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-brand uppercase select-none">
              — We create experiences that users trust, enjoy, and remember —
            </p>
          </div>
        </div>
      </section>

      {/* Render matching standard FAQ, pricing and CTA triggers */}
      <Pricing hideToggle={true} serviceId="uiux" />
      <FAQ serviceId="uiux" />
      <HomepageCTA setView={setView} />

    </div>
  );
}
