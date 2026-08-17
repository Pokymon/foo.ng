import React from "react";
import { 
  ArrowRight, Figma, Paintbrush, ChevronRight, Layers, Layout, 
  Eye, Compass, Search, Terminal, Sparkles, Check, HelpCircle,
  Users, Target, Zap, ShieldCheck, Heart, TrendingUp, Monitor,
  Palette, Smartphone, Compass as CompassIcon, Award, FileText,
  Mail, Image as ImageIcon, Briefcase, Share2, Clipboard, BarChart
} from "lucide-react";
import { motion } from "motion/react";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import HomepageCTA from "./HomepageCTA";

interface BrandingServiceDetailsProps {
  setView: (view: any) => void;
  service: any;
}

export default function BrandingServiceDetails({ setView, service }: BrandingServiceDetailsProps) {
  
  // Interactive mockups inside the responsive mobile screen simulator
  const renderSliderScreens = () => (
    <>
      {/* Screen 1: Brand Style Guide Overview */}
      <div className="w-[241px] h-full shrink-0 bg-white relative flex flex-col justify-between px-5 pt-12 pb-6 text-center">
        <div className="space-y-1 mt-2">
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#2ebd73] flex items-center justify-center text-white text-[10px] font-black font-sans">
              H
            </div>
            <span className="text-[13px] font-bold tracking-widest text-zinc-900 font-sans">HYLE BRAND</span>
          </div>
          <p className="text-[7px] font-mono tracking-wider text-zinc-450 uppercase font-bold">Official Identity v1.0</p>
        </div>
        
        <div className="space-y-3 my-auto">
          {/* Main Brand Logo Mark */}
          <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-1 left-1 text-[5px] font-mono text-zinc-400">SAFE AREA: 40px</div>
            <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center relative shadow-md">
              <div className="absolute top-1.5 left-1.5 right-1.5 bottom-1.5 border border-white/20 rounded-lg" />
              <span className="text-white font-extrabold text-lg">H</span>
            </div>
            <div className="mt-2 text-center">
              <p className="text-[9px] font-bold text-zinc-950 font-sans tracking-tight">Hyle Primary Mark</p>
              <p className="text-[6.5px] text-zinc-400 font-mono">Original Form Factor</p>
            </div>
          </div>

          {/* Core Brand Palette */}
          <div className="space-y-1">
            <span className="text-[6.5px] font-mono font-bold text-zinc-400 uppercase tracking-widest block text-left">Primary Colors</span>
            <div className="grid grid-cols-4 gap-1.5">
              <div className="h-6 rounded-md bg-[#2ebd73] border border-zinc-100 flex flex-col justify-end p-0.5">
                <span className="text-[4.5px] text-white font-mono font-bold">#2EBD73</span>
              </div>
              <div className="h-6 rounded-md bg-zinc-950 border border-zinc-100 flex flex-col justify-end p-0.5">
                <span className="text-[4.5px] text-white font-mono font-bold">#09090B</span>
              </div>
              <div className="h-6 rounded-md bg-zinc-600 border border-zinc-100 flex flex-col justify-end p-0.5">
                <span className="text-[4.5px] text-white font-mono font-bold">#52525B</span>
              </div>
              <div className="h-6 rounded-md bg-zinc-100 border border-zinc-200 flex flex-col justify-end p-0.5">
                <span className="text-[4.5px] text-zinc-900 font-mono font-bold">#F4F4F5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-auto">
          <div className="w-full py-2 bg-zinc-950 text-white rounded-xl text-center text-[10px] font-bold tracking-wide shadow-xs font-mono uppercase">
            Download Assets (.SVG)
          </div>
        </div>
      </div>

      {/* Screen 2: Typography Scale & Rules */}
      <div className="w-[241px] h-full shrink-0 bg-white relative flex flex-col justify-between px-5 pt-12 pb-6 text-left">
        <div className="space-y-1 mt-2">
          <h3 className="text-[17px] font-black text-zinc-900 tracking-tight font-sans">Typography Scale</h3>
          <p className="text-[8px] text-zinc-450 font-medium tracking-tight">Standard modern editorial display pairings.</p>
        </div>

        <div className="space-y-3.5 my-auto">
          {/* Serif Heading Preview */}
          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1">
            <span className="text-[6px] font-mono text-brand font-black tracking-wider uppercase">DISPLAY H1</span>
            <h4 className="text-[18px] font-sans font-extrabold text-zinc-950 leading-tight tracking-tight">
              Bold. Creative.
            </h4>
            <p className="text-[7px] text-zinc-400 font-mono">Inter ExtraBold / tracking-tight</p>
          </div>

          {/* Code Mono Preview */}
          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1">
            <span className="text-[6px] font-mono text-zinc-500 font-black tracking-wider uppercase">BRAND SYSTEM MONO</span>
            <p className="text-[9.5px] font-mono font-extrabold text-[#2ebd73] leading-none">
              font-mono tracking-widest
            </p>
            <p className="text-[7px] text-zinc-450 leading-relaxed font-sans">
              Used strictly for digital data values, index indicators, and metadata layout badges.
            </p>
          </div>

          {/* Safe Margin Guide */}
          <div className="bg-zinc-50 border border-zinc-200 p-2 rounded-xl flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#ebfaf3] border border-[#2ebd73]/10 flex items-center justify-center text-[10px] text-[#2ebd73] font-bold">
              T
            </div>
            <div>
              <h5 className="text-[8.5px] font-bold text-zinc-900 leading-none">Global Font Pairings</h5>
              <p className="text-[6.5px] text-[#2ebd73] font-bold mt-0.5 font-mono">Ready - Verified 100%</p>
            </div>
          </div>
        </div>

        <span className="text-[7.5px] text-zinc-400 block text-center font-medium mt-auto">Brand typography system document rules</span>
      </div>

      {/* Screen 3: Social Media Template Grid */}
      <div className="w-[241px] h-full shrink-0 bg-white relative flex flex-col justify-between px-3.5 pt-12 pb-6 text-left">
        <div className="flex justify-between items-end mt-1">
          <div>
            <span className="text-[7px] font-mono font-bold tracking-widest text-[#2ebd73] uppercase">CREATIVE DIRECTIVES</span>
            <h3 className="text-[13px] font-black tracking-tight text-zinc-950 leading-none mt-0.5">Asset Template Grid</h3>
          </div>
          <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-[10px]">
            🎨
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 my-auto">
          {/* Post Template */}
          <div className="bg-[#eff6ff] border border-blue-100 p-2 rounded-xl relative overflow-hidden flex flex-col justify-between h-18">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[6.5px] font-bold text-[#2563eb] uppercase tracking-wider font-mono">Instagram Story</span>
                <span className="text-[8px]">✨</span>
              </div>
              <p className="text-[10px] font-extrabold text-blue-950 mt-0.5 leading-snug">1080 x 1920 px</p>
            </div>
            <span className="text-[6.5px] text-blue-700 font-mono font-semibold">Active: Portrait Layout</span>
          </div>

          {/* Banner Template */}
          <div className="bg-[#fef2f2] border border-red-100 p-2 rounded-xl relative overflow-hidden flex flex-col justify-between h-18">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[6.5px] font-bold text-red-650 uppercase tracking-wider font-mono">LinkedIn Header</span>
                <span className="text-[8px] animate-pulse">💼</span>
              </div>
              <p className="text-[10px] font-extrabold text-red-950 mt-0.5 leading-snug">1584 x 396 px</p>
            </div>
            <span className="text-[6.5px] text-red-700 font-mono font-semibold">Active: Landscape Layout</span>
          </div>

          {/* Brand Board Template */}
          <div className="bg-[#faf5ff] border border-purple-100 p-2 rounded-xl relative overflow-hidden flex flex-col justify-between h-18 col-span-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[6.5px] font-bold text-purple-650 tracking-wider font-mono">Creative Pitch Proposal Slides</span>
                <p className="text-[11px] font-black text-purple-950 mt-0.5">16:9 Standard Presentation Theme</p>
              </div>
              <span className="text-xs">📈</span>
            </div>
            <div className="w-full bg-purple-100 h-1 rounded-full overflow-hidden">
              <div className="w-5/6 bg-purple-500 h-full" />
            </div>
          </div>
        </div>

        <span className="text-[7.5px] text-zinc-400 block text-center font-medium mt-auto">Brand communication templates bundle</span>
      </div>
    </>
  );

  // Match the prompt's structured list of graphic design items
  const WHAT_WE_DESIGN = [
    {
      label: "Logo Design",
      desc: "Professional logos crafted to represent your brand's personality, values, and vision.",
      tag: "Primary Mark",
      icon: <Palette className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Brand Identity Design",
      desc: "Complete visual identity systems including logos, color palettes, typography, brand assets, and guidelines.",
      tag: "Identity Suite",
      icon: <Award className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Social Media Graphics",
      desc: "Engaging content designed to increase visibility, engagement, and brand consistency across platforms.",
      tag: "Digital Assets",
      icon: <Share2 className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Flyers & Posters",
      desc: "Eye-catching promotional materials designed for events, marketing campaigns, and business advertising.",
      tag: "Promotions",
      icon: <FileText className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Business Cards",
      desc: "Professional business card designs that create memorable first impressions.",
      tag: "Client Connects",
      icon: <Briefcase className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Event Cards & Invitations",
      desc: "Elegant and modern invitation designs for corporate events, celebrations, launches, and special occasions.",
      tag: "Corporate/Gala",
      icon: <Mail className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Marketing & Advertising Materials",
      desc: "Creative assets for digital and print campaigns designed to attract attention and drive action.",
      tag: "Campaign Assets",
      icon: <ImageIcon className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Presentation Design",
      desc: "Professional pitch decks, proposals, and corporate presentations that communicate ideas clearly and effectively.",
      tag: "Corporate Pitch",
      icon: <Monitor className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Packaging Design",
      desc: "Distinctive packaging solutions that help products stand out on shelves and online marketplaces.",
      tag: "Physical Brand",
      icon: <Layers className="w-5 h-5 text-zinc-900" />
    },
    {
      label: "Brand Guidelines",
      desc: "Comprehensive brand documentation to ensure consistency across all marketing and communication channels.",
      tag: "System Document",
      icon: <Clipboard className="w-5 h-5 text-zinc-900" />
    }
  ];

  const WHAT_YOU_GET = [
    "Unique Creative Concepts",
    "Professional Logo Design",
    "Complete Brand Identity Systems",
    "Marketing & Promotional Materials",
    "Social Media Design Assets",
    "Print-Ready Deliverables",
    "High-Resolution Design Files",
    "Brand Style Guides",
    "Consistent Visual Communication",
    "Strategic Design Consultation"
  ];

  const DESIGN_PROCESS = [
    {
      num: 1,
      title: "Discovery & Brand Understanding",
      desc: "We begin by learning about your business, audience, goals, competitors, and overall brand vision.",
      tag: "DISCOVERY"
    },
    {
      num: 2,
      title: "Research & Strategy",
      desc: "We analyze industry trends and identify opportunities to create a distinctive visual identity.",
      tag: "STRATEGY"
    },
    {
      num: 3,
      title: "Concept Development",
      desc: "Our designers explore multiple creative directions and concepts aligned with your objectives.",
      tag: "CONCEPT"
    },
    {
      num: 4,
      title: "Design Creation",
      desc: "Selected concepts are refined into professional, polished, and impactful designs.",
      tag: "CREATION"
    },
    {
      num: 5,
      title: "Feedback & Refinement",
      desc: "We collaborate closely with you to ensure every detail aligns with your expectations.",
      tag: "REFINEMENT"
    },
    {
      num: 6,
      title: "Final Delivery",
      desc: "All approved assets are prepared and delivered in professional formats suitable for both digital and print use.",
      tag: "DELIVERY"
    },
    {
      num: 7,
      title: "Brand Growth Support",
      desc: "We continue supporting your brand with future marketing materials, campaigns, and design updates.",
      tag: "SUPPORT"
    }
  ];

  const WHY_CHOOSE_US = [
    {
      title: "Modern & Professional Design",
      desc: "We enforce world-class, premium design layouts that guarantee high trust and authority metrics.",
      icon: ShieldCheck
    },
    {
      title: "Tailored Creative Solutions",
      desc: "No corporate cookie-cutters. Every brand element, logo draft, and vector spline is custom built for your niche.",
      icon: Palette
    },
    {
      title: "Strategic Branding",
      desc: "We research target user mindsets to map color coordinates and typography guidelines that elicit positive interaction.",
      icon: Target
    },
    {
      title: "High-Quality Digital & Print",
      desc: "Pristine digital file handoffs, fully print-ready CMYK deliverables, vectors, and layouts that look perfect at scale.",
      icon: FileText
    },
    {
      title: "Consistent Visual Identity",
      desc: "We build unified brand design tokens, guidelines, and rules to make future product layout production incredibly easy.",
      icon: Layers
    },
    {
      title: "Long-term Creative Partnership",
      desc: "We support Hyle client growth pipelines as reliable visual asset curators, providing future advertising and template grids.",
      icon: Users
    }
  ];

  return (
    <div className="bg-[#fafafa] text-zinc-900 pb-2">
      
      {/* 1. Hero / Header Block: Overlaps header matches UI/UX details exactly */}
      <section className="relative overflow-hidden text-center flex flex-col items-center justify-center -mt-[80px] pt-32 pb-44 md:pt-40 md:pb-56 bg-[#fafafa] min-h-[80vh]">
        {/* Background Image: Brand-specific mint/white 3D creative asset */}
        <img
          src="./src/assets/images/branding_design_hero_1780514748632.png"
          alt="Creative Branding Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-10 scale-105 blur-[3px]"
          style={{ opacity: 0.7 }}
          referrerPolicy="no-referrer"
        />

        {/* Clean subtle backdrop layout overlay to ensure optimal content legibility */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/55 to-[#fafafa] pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafafa]/20 to-[#fafafa] pointer-events-none z-25" />

        {/* Container Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40 flex flex-col items-center text-center space-y-5">

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#090d16] tracking-tight leading-[1.1] font-sans drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
          >
            Creative Design That <br /> Speaks Before <span className="bg-gradient-to-r from-emerald-600 via-brand to-sky-500 bg-clip-text text-transparent">You Do.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-zinc-800 text-base sm:text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-3xl mx-auto font-sans drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]"
          >
            Whether you're launching a new brand or elevating an existing one, we create visuals that communicate professionalism, credibility, and excellence.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto mb-2">
            <button
              onClick={() => setView("contact")}
              className="w-full sm:w-auto px-8 py-4 bg-[#2ebd73] hover:bg-[#259b5e] text-white font-bold font-sans tracking-tight text-sm rounded-full transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-md hover:shadow-lg cursor-pointer hover:scale-101 active:scale-99"
            >
              <span>CONTACT US NOW</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            
            <button
              onClick={() => {
                const el = document.getElementById("what-we-design-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 py-4 bg-white/90 hover:bg-[#ebfaf3] text-[#2ebd73] hover:text-[#259b5e] border border-[#2ebd73]/30 font-bold font-sans tracking-tight text-sm rounded-full transition-all text-center cursor-pointer hover:scale-101 active:scale-99 shadow-xs"
            >
              EXPLORE WHAT WE DESIGN
            </button>
          </div>
        </div>

        {/* Faded Ending block (Smooth transition pushed lower for extended visibility) */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/95 via-[#fafafa]/50 to-transparent pointer-events-none z-35" />
      </section>

      {/* 2. Headline Detail Banner: "Building Memorable Brands Through Creative Design" */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-[#fafafa] to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side text: Core Narrative paragraphs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-wider font-bold text-[#2ebd73] uppercase">CREATIVE EXCELLENCE</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
                  Branding & Graphic Design
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-zinc-805 tracking-tight leading-tight">
                  Building Memorable Brands Through Creative Design
                </p>
                <div className="h-1 w-20 bg-[#2ebd73] rounded-full" />
              </div>

              {/* Narrative paragraphs directly under the heading as requested */}
              <div className="space-y-4 text-zinc-650 text-sm sm:text-base font-light leading-relaxed font-sans">
                <p className="font-semibold text-zinc-900 text-base">
                  At Hyle Studios, we believe great design is one of the most powerful tools a business can have. It shapes perception, communicates value, and creates lasting connections with customers.
                </p>
                <p>
                  Our graphic design and branding services help businesses establish a strong visual identity that stands out in competitive markets. Whether you're creating a new brand from scratch or refreshing an existing one, we deliver creative solutions that align with your vision and business objectives.
                </p>
                <p>
                  From logos and marketing materials to complete brand systems, we create visuals that inspire confidence, build recognition, and leave a lasting impression.
                </p>
              </div>
            </div>

            {/* Right side: High fidelity, clean laptop mockup showing a logo being built inside Illustrator */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center py-6">
              <div className="relative group">
                {/* Laptop Display Bezel */}
                <div className="relative w-[280px] h-[175px] sm:w-[380px] sm:h-[238px] md:w-[440px] md:h-[275px] bg-zinc-950 rounded-2xl p-2 sm:p-2.5 shadow-2xl border-[3.5px] border-zinc-900 overflow-hidden ring-1 ring-white/10">
                  {/* Camera lens */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-805 z-30" />
                  
                  {/* Screen Content Showcase */}
                  <div className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800/50 flex items-center justify-center">
                    <img 
                      src="./src/assets/images/branding_design_hero_1780514748632.png"
                      alt="Logo Artwork inside Adobe Illustrator design workspace"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Glossy overlay sheen */}
                    <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-25" />
                  </div>
                </div>

                {/* Laptop Bottom Aluminum Body Base */}
                <div className="relative w-[310px] sm:w-[420px] md:w-[488px] h-3 bg-[#cbd5e1] border-t border-[#f1f5f9] rounded-b-xl shadow-xl -mt-0.5 mx-auto flex items-center justify-center">
                  {/* Opening Notch/Indent */}
                  <div className="absolute -top-0.5 w-12 sm:w-16 h-1 bg-[#94a3b8]/70 rounded-b-md" />
                </div>
                
                {/* Ground soft shadow */}
                <div className="w-[260px] sm:w-[350px] md:w-[420px] h-4 bg-black/15 blur-lg rounded-[100%] mx-auto -mt-1 opacity-80" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Section headline / Grid of design components "What We Design" */}
      <section id="what-we-design-section" className="py-14 bg-white border-y border-zinc-100 relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight font-sans">
              What We Design
            </h2>
            <p className="text-zinc-500 font-light text-xs sm:text-sm max-w-lg mx-auto font-sans leading-relaxed">
              Tailored assets meticulously curated to communicate visual confidence and consistent identity across every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_DESIGN.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-[#fafafa]/50 border border-[#2ebd73]/30 p-6 rounded-3xl hover:bg-white hover:border-[#2ebd73] hover:shadow-lg hover:shadow-[#2ebd73]/4 transition-all duration-400 group flex flex-col justify-between text-left relative"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ebfaf3] group-hover:bg-[#2ebd73]/90 flex items-center justify-center shrink-0 border border-[#2ebd73]/10 transition-all duration-350">
                    {React.cloneElement(item.icon, { className: "w-5 h-5 text-[#2ebd73] group-hover:text-white transition-colors duration-350" })}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-extrabold text-zinc-900 tracking-tight font-sans">
                        {item.label}
                      </h3>
                      <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#2ebd73] group-hover:translate-x-1.5 transition-all duration-300" />
                    </div>
                    <p className="text-xs sm:text-[13px] text-zinc-500 font-light leading-relaxed font-sans mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wide text-zinc-500 font-bold uppercase group-hover:text-[#2ebd73] transition-colors duration-300">Get In Touch</span>
                  <div className="w-6 h-6 rounded-full bg-[#ebfaf3] text-[#2ebd73] group-hover:bg-[#2ebd73] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. "What You Get" Split Banner: Elegant vector mockups showing list deliverables */}
      <section className="py-14 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left side: Vector Drafting Board Illustration WITH Header & Text Above */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Header and description text right above illustration */}
              <div className="space-y-2.5 px-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-sans">
                  What You Get
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-sans font-medium">
                  We hand over a mathematically precise, fully optimized visual system. You acquire perfectly aligned vector curves, print-ready files with standard printer bleeds, dynamic high-fidelity marketing assets, and a responsive style guide to govern your brand uniformly.
                </p>
              </div>

              <div className="relative w-full h-[320px] bg-white border border-zinc-200 rounded-[2.2rem] p-6 lg:p-8 flex items-center justify-center group overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2ebd73]/35 transition-all duration-500">
                {/* Drafting Grid Backdrop */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-60 rounded-[1.8rem] z-0" />
                
                {/* Drawing Workspace content wrapper */}
                <div className="relative w-full h-full flex flex-col justify-between z-10">
                  {/* Top bar indicators */}
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[10px] font-mono font-bold text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-150">
                      VECTOR LAYER: 1
                    </div>
                    <div className="text-[10px] font-mono font-bold text-[#2ebd73] bg-[#ebfaf3] px-2 py-0.5 rounded-full">
                      800% ZOOM
                    </div>
                  </div>

                  {/* Logo Mark Blueprint Sketch Area */}
                  <div className="relative w-full flex-1 flex items-center justify-center">
                    {/* Bounding vector box with control anchors */}
                    <div className="absolute w-44 h-44 border border-dashed border-[#2ebd73]/30 rounded-lg flex items-center justify-center">
                      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#2ebd73] border border-white rounded-[1px]" />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#2ebd73] border border-white rounded-[1px]" />
                      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-[#2ebd73] border border-white rounded-[1px]" />
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#2ebd73] border border-white rounded-[1px]" />
                      <div className="absolute top-1/2 -left-1 w-2 h-2 -translate-y-1/2 bg-white border border-[#2ebd73] rounded-sm" />
                      <div className="absolute top-1/2 -right-1 w-2 h-2 -translate-y-1/2 bg-white border border-[#2ebd73] rounded-sm" />
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-[#2ebd73] rounded-sm" />
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-[#2ebd73] rounded-sm" />
                    </div>

                    {/* SVG Vector Drawing */}
                    <svg className="w-48 h-48 absolute z-15 overflow-visible" viewBox="0 0 200 200" fill="none">
                      {/* Original curve trace */}
                      <path
                        d="M 50,140 C 50,55 150,55 150,140 C 150,105 100,75 100,105 C 100,135 50,115 50,140"
                        stroke="#e4e4e7"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="opacity-70"
                      />
                      
                      {/* Simulated glowing active path build state */}
                      <motion.path
                        d="M 50,140 C 50,55 150,55 150,140 C 150,105 100,75 100,105 C 100,135 50,115 50,140"
                        stroke="#2ebd73"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0, 0] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.45, 0.55, 0.95, 1]
                        }}
                      />

                      {/* Control Tangents & Handles from Center Anchor Point */}
                      <line x1="100" y1="105" x2="65" y2="80" stroke="#2ebd73" strokeWidth="1.5" strokeDasharray="2 2" />
                      <line x1="100" y1="105" x2="135" y2="130" stroke="#2ebd73" strokeWidth="1.5" strokeDasharray="2 2" />
                      <circle cx="65" cy="80" r="4" className="fill-[#2ebd73] stroke-white stroke-[1.5]" />
                      <circle cx="135" cy="130" r="4" className="fill-[#2ebd73] stroke-white stroke-[1.5]" />

                      {/* Active Anchor Points on Path */}
                      <circle cx="50" cy="140" r="5" className="fill-white stroke-zinc-400 stroke-2" />
                      <circle cx="150" cy="140" r="5" className="fill-white stroke-zinc-400 stroke-2" />
                      
                      {/* Active Pen Tool Node (Selected) */}
                      <circle cx="100" cy="105" r="5.5" className="fill-[#2ebd73] stroke-white stroke-2 shadow-sm" />

                      {/* Stylized Illustrator-style Pen Point Cursor on Handle */}
                      <g className="translate-x-[65px] translate-y-[80px]">
                        <path
                          d="M -1,-1 L 11,11 L 4,13 L 2,9 Z"
                          fill="#18181b"
                          stroke="white"
                          strokeWidth="1"
                        />
                        <path d="M 1,1 L 3,3" stroke="#2ebd73" strokeWidth="1.5" />
                      </g>
                    </svg>

                    {/* Integrated mini Pantone palette swatches */}
                    <div className="absolute right-2 bottom-2 bg-white/95 border border-zinc-200 rounded-xl p-2 flex flex-row items-center gap-1 shadow-xs scale-90 sm:scale-100">
                      <div className="w-5 h-7 rounded-md bg-[#18181b] flex flex-col justify-end p-0.5 text-[5px] font-mono text-white/50">
                        <span>P-BLK</span>
                      </div>
                      <div className="w-5 h-7 rounded-md bg-[#2ebd73] flex flex-col justify-end p-0.5 text-[5px] font-mono text-white/50">
                        <span>P-GRN</span>
                      </div>
                      <div className="w-5 h-7 rounded-md bg-[#d3f2e2] flex flex-col justify-end p-0.5 text-[5px] font-mono text-zinc-600">
                        <span>P-LGT</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats Grid */}
                  <div className="flex justify-between items-center w-full text-[8.5px] font-mono text-zinc-400">
                    <div>W: 512px | H: 512px</div>
                    <div>CURVE: BEZIER</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side bullets checklist package: "What You Get" */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHAT_YOU_GET.map((deliverable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="flex items-center space-x-3.5 bg-[#ebfaf3]/10 border border-zinc-200 p-4 rounded-2xl hover:bg-[#ebfaf3]/35 hover:border-[#2ebd73]/35 transition-all duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#ebfaf3] border border-[#2ebd73]/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-[#2ebd73] font-bold" />
                    </div>
                    <span className="text-zinc-900 font-sans text-xs sm:text-[13.5px] font-semibold tracking-tight text-left">
                      {deliverable}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Design Process: Vertical/Horizontal Step Matrix Timeline */}
      <section className="py-14 bg-zinc-50/40 text-left relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-2 mb-12">
            <span className="text-[10px] font-mono tracking-wider font-extrabold text-[#2ebd73] uppercase">WORKFLOW MATRIX</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight font-sans">
              Our Design Process
            </h2>
            <p className="text-zinc-500 font-light text-xs sm:text-sm font-sans mt-0.5 max-w-lg">
              A chronological framework engineered to guide design drafts from initial research deep dives to pristine production file handover.
            </p>
          </div>

          {/* Graphical custom horizontal scrollable or vertical grid process alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {DESIGN_PROCESS.map((proc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-zinc-200 p-6 rounded-[2rem] hover:border-[#2ebd73]/30 hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Visual Step Indicator badge */}
                <div className="absolute top-4 right-4 text-[11px] font-mono text-[#2ebd73] font-black tracking-widest bg-[#ebfaf3] px-2.5 py-0.5 rounded-full uppercase scale-90">
                  {proc.tag}
                </div>

                <div className="space-y-6">
                  {/* Step Large Number */}
                  <div className="w-12 h-12 rounded-2xl bg-[#ebfaf3] flex items-center justify-center shrink-0 border border-[#2ebd73]/10">
                    <span className="text-xl font-mono text-[#2ebd73] font-black">{proc.num}</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-zinc-950 tracking-tight font-sans">
                      {proc.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed font-sans mt-0.5">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Why Choose Us benefits cards section */}
      <section className="py-14 bg-white relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight font-sans">
              Why Choose Hyle Studios
            </h2>
            <p className="text-zinc-500 font-light text-xs sm:text-sm max-w-lg mx-auto font-sans leading-relaxed">
              We coordinate layout precision and brand system metrics to deliver visually memorable experiences.
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
                  className="bg-white border border-zinc-200 p-6 sm:p-7 rounded-[1.8rem] flex items-start space-x-4 hover:bg-[#ebfaf3]/10 hover:border-[#2ebd73]/35 hover:shadow-md transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2ebd73] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-[#2ebd73]/10">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[9px] font-mono tracking-wider text-[#2ebd73] font-bold uppercase">BENEFIT CRITERIA</span>
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



      {/* 8. Pricing Section */}
      <Pricing hideToggle={true} serviceId="branding" />

      {/* 9. Dynamic FAQ block contextually selected */}
      <FAQ serviceId="branding" />

      {/* 10. Direct CTA block alignment */}
      <HomepageCTA setView={setView} />

    </div>
  );
}
