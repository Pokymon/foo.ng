import { ViewType } from "../types";
import { Terminal, Menu, X, ChevronDown, Globe, Smartphone, Cpu, Figma, Bot, Gamepad2, Paintbrush } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

// Inline Interactive SVG-based Technical Blueprint Visualizers
function ServiceDiagram({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    case "web":
      return (
        <svg viewBox="0 0 200 140" className="w-full h-full text-zinc-900" fill="none" stroke="currentColor">
          {/* Browser Outline */}
          <rect x="5" y="5" width="190" height="130" rx="8" strokeWidth="2" className="stroke-zinc-300" />
          <line x1="5" y1="28" x2="195" y2="28" stroke="currentColor" strokeWidth="1.5" className="stroke-zinc-200" />
          {/* Window Dots */}
          <circle cx="16" cy="16.5" r="3" className="fill-zinc-400 stroke-none" />
          <circle cx="26" cy="16.5" r="3" className="fill-zinc-300 stroke-none" />
          <circle cx="36" cy="16.5" r="3" className="fill-zinc-200 stroke-none" />
          
          {/* Dynamic content area representing web state synchronization */}
          <rect x="15" y="38" width="50" height="85" rx="4" strokeWidth="1" className="stroke-zinc-200 fill-zinc-50" />
          <rect x="73" y="38" width="112" height="85" rx="4" strokeWidth="1.5" className="stroke-emerald-500 fill-emerald-50/20" />
          
          {/* Technical lines and state elements */}
          <path d="M 22 50 H 58 M 22 62 H 45 M 22 74 H 50" stroke="currentColor" strokeWidth="2" className="stroke-zinc-350" />
          
          {/* Main chart representation */}
          <motion.path 
            d="M 80 105 L 105 55 L 130 85 L 155 45 L 178 75" 
            stroke="#059669" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} 
          />
          <circle cx="155" cy="45" r="5" className="fill-emerald-600 stroke-white" strokeWidth="2" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 200 140" className="w-full h-full text-zinc-900" fill="none" stroke="currentColor">
          {/* Smartphone Outline */}
          <rect x="60" y="5" width="80" height="130" rx="14" strokeWidth="2.5" className="stroke-zinc-400" />
          <rect x="90" y="12" width="20" height="4" rx="2" className="fill-zinc-300 stroke-none" />
          <circle cx="100" cy="125" r="5" strokeWidth="1.5" className="stroke-zinc-300" />
          
          {/* Interactive components within the phone screen */}
          <rect x="68" y="22" width="64" height="92" rx="6" strokeWidth="1" className="stroke-zinc-250 fill-zinc-50/50" />
          
          {/* Responsive core circles & feedback graph representing inertial touch tracking */}
          <circle cx="100" cy="58" r="24" stroke="#d4d4d8" strokeWidth="1.5" />
          <motion.circle 
            cx="100" 
            cy="58" 
            r="24" 
            stroke="#059669" 
            strokeWidth="3.5" 
            strokeDasharray="150" 
            strokeLinecap="round" 
            initial={{ strokeDashoffset: 150 }} 
            animate={{ strokeDashoffset: 40 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }} 
          />
          
          <line x1="74" y1="98" x2="126" y2="98" stroke="currentColor" strokeWidth="1.2" className="stroke-zinc-300" />
          <motion.line 
            x1="74" 
            y1="98" 
            x2="114" 
            y2="98" 
            stroke="#10b981" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            initial={{ x2: 74 }} 
            animate={{ x2: 114 }} 
            transition={{ duration: 1, delay: 0.2 }} 
          />
        </svg>
      );
    case "game":
      return (
        <svg viewBox="0 0 200 140" className="w-full h-full text-zinc-900" fill="none" stroke="currentColor">
          <rect x="25" y="30" width="150" height="76" rx="38" strokeWidth="2.5" className="stroke-zinc-300 fill-zinc-50" />
          <path d="M 55 68 H 71 M 63 60 V 76" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="stroke-zinc-400" />
          <circle cx="130" cy="72" r="7.5" strokeWidth="1.5" className="stroke-emerald-500 fill-emerald-50/10" />
          <circle cx="149" cy="62" r="7.5" strokeWidth="1.5" className="stroke-emerald-500 fill-emerald-50/10" />
          <rect x="88" y="50" width="24" height="18" rx="3" strokeWidth="1" className="stroke-zinc-300 fill-zinc-100" />
        </svg>
      );
    case "uiux":
      return (
        <svg viewBox="0 0 200 140" className="w-full h-full text-zinc-900" fill="none" stroke="currentColor">
          {/* Swiss Aligning Grid backgrounds */}
          <path d="M 15 0 v 140 M 50 0 v 140 M 85 0 v 140 M 120 0 v 140 M 155 0 v 140 M 185 0 v 140" stroke="currentColor" strokeWidth="0.5" className="stroke-zinc-200" opacity="0.4" />
          <path d="M 0 20 h 200 M 0 55 h 200 M 0 90 h 200 M 0 120 h 200" stroke="currentColor" strokeWidth="0.5" className="stroke-zinc-200" opacity="0.4" />
          
          {/* Component block representation */}
          <rect x="25" y="25" width="150" height="90" rx="6" strokeWidth="1.5" className="stroke-zinc-400 text-zinc-300" strokeDasharray="4,4" />
          
          {/* Perfect high-fidelity vector Bezier controls */}
          <path d="M 40 85 C 75 25, 125 25, 160 85" stroke="#e4e4e7" strokeWidth="3" />
          <motion.path 
            d="M 40 85 C 75 25, 125 25, 160 85" 
            stroke="#059669" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1 }} 
            transition={{ duration: 1.1 }} 
          />
          
          {/* Grid nodes */}
          <line x1="75" y1="25" x2="60" y2="55" stroke="#10b981" strokeWidth="1.2" />
          <line x1="125" y1="25" x2="140" y2="55" stroke="#10b981" strokeWidth="1.2" />
          <circle cx="75" cy="25" r="4" className="fill-white stroke-emerald-600" strokeWidth="2" />
          <circle cx="125" cy="25" r="4" className="fill-white stroke-emerald-600" strokeWidth="2" />
          <rect x="36" y="81" width="8" height="8" className="fill-emerald-500 stroke-white" strokeWidth="1.5" />
          <rect x="156" y="81" width="8" height="8" className="fill-emerald-500 stroke-white" strokeWidth="1.5" />
        </svg>
      );
    case "branding":
      return (
        <svg viewBox="0 0 200 140" className="w-full h-full text-zinc-900" fill="none" stroke="currentColor">
          {/* Caliper or Design grid backdrop (technical precision lines) */}
          <g className="stroke-zinc-200" strokeWidth="0.5">
            {/* Fine Grid lines */}
            <line x1="10" y1="70" x2="190" y2="70" strokeDasharray="2,2" />
            <line x1="100" y1="10" x2="100" y2="130" strokeDasharray="2,2" />
            {/* Diagonal guides */}
            <line x1="30" y1="30" x2="170" y2="110" strokeDasharray="3,3" />
            <line x1="30" y1="110" x2="170" y2="30" strokeDasharray="3,3" />
          </g>

          {/* Golden ratio & alignment geometric constructs */}
          <circle cx="100" cy="70" r="42" className="stroke-zinc-250" strokeWidth="0.75" strokeDasharray="4,4" />
          <circle cx="100" cy="70" r="26" className="stroke-zinc-200" strokeWidth="0.5" />
          <circle cx="65" cy="70" r="26" className="stroke-zinc-150" strokeWidth="0.5" />
          <circle cx="135" cy="70" r="26" className="stroke-zinc-150" strokeWidth="0.5" />

          {/* Stylized Logo Icon being constructed: Beautiful Geometric Monogram Loop */}
          <g>
            {/* Mathematical Construction Arc */}
            <path 
              d="M 60 70 A 40 40 0 0 1 140 70 A 40 40 0 0 1 60 70" 
              className="stroke-zinc-300" 
              strokeWidth="1" 
              strokeDasharray="4,2"
            />
            {/* The primary drawn vector contour - an elegant geometric ribbon / loop */}
            <motion.path 
              d="M 65 70 C 65 45, 100 35, 100 70 C 100 105, 135 95, 135 70 C 135 45, 100 45, 100 70 C 100 95, 65 95, 65 70 Z" 
              stroke="#059669" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </g>

          {/* Bezier Vector Control Handles and Nodes - Represents the logo editing session */}
          <g>
            {/* Active vertical handles at Top Node (100, 32) */}
            <line x1="100" y1="70" x2="100" y2="32" stroke="#10b981" strokeWidth="1" />
            <line x1="100" y1="70" x2="100" y2="108" stroke="#10b981" strokeWidth="1" />
            {/* Control handles at Side Anchors */}
            <line x1="65" y1="70" x2="45" y2="70" stroke="currentColor" strokeWidth="0.75" className="stroke-zinc-400" strokeDasharray="2,2" />
            <line x1="135" y1="70" x2="155" y2="70" stroke="currentColor" strokeWidth="0.75" className="stroke-zinc-400" strokeDasharray="2,2" />

            {/* Anchor Nodes (Squares / Circles) */}
            {/* Left anchor */}
            <rect x="62" y="67" width="6" height="6" className="fill-white stroke-zinc-500" strokeWidth="1.2" />
            {/* Right anchor */}
            <rect x="132" y="67" width="6" height="6" className="fill-white stroke-zinc-500" strokeWidth="1.2" />
            {/* Center anchor split */}
            <circle cx="100" cy="70" r="3" className="fill-emerald-500 stroke-white" strokeWidth="1.5" />

            {/* Bezier handle terminal ends */}
            <circle cx="100" cy="32" r="3.5" className="fill-white stroke-emerald-600" strokeWidth="1.5" />
            <circle cx="100" cy="108" r="3.5" className="fill-white stroke-emerald-600" strokeWidth="1.5" />
            <circle cx="45" cy="70" r="2" className="fill-zinc-400 stroke-none" />
            <circle cx="155" cy="70" r="2" className="fill-zinc-400 stroke-none" />
          </g>

          {/* Aesthetic UI elements (Tiny pen tool drawing, calipers or labels) */}
          <g>
            {/* Stylized Vector Pen Tool Nib Cursor (translated & rotated pointing right at (100, 32)) */}
            <g transform="translate(100, 32) rotate(-45)">
              <path 
                d="M 0 0 L -3 -10 L -10 -10 L -10 -3 L 0 0 Z" 
                fill="#10b981" 
                stroke="#059669" 
                strokeWidth="1" 
              />
              <line x1="-10" y1="-10" x2="-18" y2="-18" stroke="#059669" strokeWidth="1.2" />
              <line x1="0" y1="0" x2="-5" y2="-5" stroke="white" strokeWidth="0.8" />
            </g>
          </g>
        </svg>
      );
    default:
      return null;
  }
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const [mobileActiveServiceId, setMobileActiveServiceId] = useState<string>("web");
  const [showServicesDropdown, setShowServicesDropdown] = useState<boolean>(false);
  const [hoveredServiceId, setHoveredServiceId] = useState<string>("web");

  const navItemsByView: { label: string; view: ViewType }[] = [
    { label: "Home", view: "home" },
    { label: "Services", view: "services" },
    { label: "About Us", view: "about" },
    { label: "Pricing", view: "pricing" }
  ];

  const BrandIcon = () => (
    <div className="flex items-center space-x-3 shrink-0">
      {/* 3x3 Brand Grid Logo (Larger and bolder per image) */}
      <svg viewBox="0 0 56 56" className="w-8 h-8 select-none shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Row 1 */}
        <rect x="0" y="0" width="16" height="16" rx="4" fill="#b9ebd4" />
        <rect x="20" y="0" width="16" height="16" rx="4" fill="#f1f3f5" />
        <rect x="40" y="0" width="16" height="16" rx="4" fill="#b9ebd4" />

        {/* Row 2 */}
        <rect x="0" y="20" width="16" height="16" rx="4" fill="#4fa57a" />
        <rect x="20" y="20" width="16" height="16" rx="4" fill="#4fa57a" />
        <rect x="40" y="20" width="16" height="16" rx="4" fill="#b9ebd4" />

        {/* Row 3 */}
        <rect x="0" y="40" width="16" height="16" rx="4" fill="#4fa57a" />
        <rect x="20" y="40" width="16" height="16" rx="4" fill="#f1f3f5" />
        <rect x="40" y="40" width="16" height="16" rx="4" fill="#f1f3f5" />
      </svg>

      {/* Styled text layout matching the logo image perfectly */}
      <div className="flex items-center space-x-2.5">
        <span className="text-zinc-950 font-sans text-xl sm:text-2xl font-bold tracking-tight leading-none">
          Hyle
        </span>
        <span className="h-5 w-[1.5px] bg-zinc-200" />
        <span className="text-[#59ba85] font-sans text-xl sm:text-2xl font-medium tracking-tight leading-none">
          Studios
        </span>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3.5 pointer-events-none">
      <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(228,228,231,0.4)] rounded-full h-13 flex items-center justify-between px-3 sm:px-5 pointer-events-auto transition-all relative">
        
        {/* Brand logo trigger */}
        <button id="nav-brand-logo" onClick={() => setView("home")} className="hover:opacity-85 transition-all select-none cursor-pointer">
          <BrandIcon />
        </button>

        {/* Mid Navigation items in a stylized continuous block with circle edges & corners */}
        <nav className="hidden lg:flex items-center bg-zinc-50 border border-zinc-200/55 p-1 rounded-full relative">
          {navItemsByView.map((item) => {
            const isActive = item.view === "services"
              ? currentView.startsWith("service-")
              : currentView === item.view;
            
            if (item.view === "services") {
              return (
                <div
                  key={item.view}
                  className="relative"
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  <button
                    id={`nav-item-${item.view}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowServicesDropdown(!showServicesDropdown);
                    }}
                    className="relative px-4 py-2 rounded-full text-[12.5px] font-sans font-medium tracking-wide transition-colors duration-200 uppercase cursor-pointer flex items-center gap-1"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navHighlight"
                        className="absolute inset-0 bg-brand rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-200 flex items-center gap-1 ${isActive ? "text-white" : "text-zinc-600 hover:text-brand"}`}>
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showServicesDropdown ? "rotate-180" : ""}`} />
                    </span>
                  </button>

                  {/* Liquid Glass Dropdown Menu Dropdown (Thicker for ultra contrast visibility) */}
                  <AnimatePresence>
                    {showServicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 -translate-x-[42%] top-full pt-3 z-50 pointer-events-auto"
                      >
                        <div className="w-[780px] bg-white/95 border border-zinc-200/85 backdrop-blur-2xl shadow-[0_24px_50px_rgba(24,24,27,0.15)] rounded-3xl p-6 flex gap-6 text-left">
                          
                          {/* Left Column (Services indexing list spanning 58% area) */}
                          <div className="w-[58%] flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] tracking-widest font-mono text-zinc-400 block uppercase font-bold mb-3.5">
                                MASTER SYSTEMS MATRIX
                              </span>
                              <div className="space-y-1.5">
                                {SERVICES.map((srv) => {
                                  const isHovered = hoveredServiceId === srv.id;
                                  return (
                                    <div
                                      key={srv.id}
                                      onMouseEnter={() => setHoveredServiceId(srv.id)}
                                      onClick={() => {
                                        setView(`service-${srv.id}` as any);
                                        setShowServicesDropdown(false);
                                      }}
                                      className={`p-3 rounded-2xl border transition-all duration-350 cursor-pointer ${
                                        isHovered
                                          ? "bg-zinc-50 border-zinc-200/60 shadow-sm"
                                          : "border-transparent hover:bg-zinc-50/40"
                                      }`}
                                    >
                                      <div className="flex items-center space-x-3">
                                        <span className={`p-1.5 rounded-lg transition-colors ${isHovered ? "bg-emerald-500/10 text-emerald-600" : "text-zinc-400"}`}>
                                          {srv.id === "web" && <Globe className="w-4 h-4" />}
                                          {srv.id === "mobile" && <Smartphone className="w-4 h-4" />}
                                          {srv.id === "game" && <Gamepad2 className="w-4 h-4" />}
                                          {srv.id === "uiux" && <Figma className="w-4 h-4" />}
                                          {srv.id === "branding" && <Paintbrush className="w-4 h-4" />}
                                        </span>
                                        <div>
                                          <span className="text-xs font-bold text-zinc-950 tracking-tight block">
                                            {srv.name}
                                          </span>
                                        </div>
                                      </div>
                                      
                                      {/* Sliding Animated expandable Drawer writeup */}
                                      <motion.div
                                        initial={false}
                                        animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                      >
                                        <p className="text-[11.5px] text-zinc-500 mt-1.5 leading-relaxed font-light">
                                          {srv.shortDesc}
                                        </p>
                                      </motion.div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                           {/* Right Column (Dynamic live SVG Diagram sandbox - Fully Textless) */}
                           <div className="w-[42%] flex items-center justify-center bg-zinc-50/80 border border-zinc-150 rounded-2xl p-6 relative overflow-hidden shadow-inner">
                             <AnimatePresence mode="wait">
                               <motion.div
                                 key={hoveredServiceId}
                                 initial={{ opacity: 0, scale: 0.95 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 exit={{ opacity: 0, scale: 0.95 }}
                                 transition={{ duration: 0.2 }}
                                 className="w-full h-full flex items-center justify-center"
                               >
                                 <ServiceDiagram serviceId={hoveredServiceId} />
                               </motion.div>
                             </AnimatePresence>
                           </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                key={item.view}
                id={`nav-item-${item.view}`}
                onClick={() => setView(item.view)}
                className="relative px-4 py-2 rounded-full text-[12.5px] font-sans font-medium tracking-wide transition-colors duration-200 uppercase cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="navHighlight"
                    className="absolute inset-0 bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${isActive ? "text-white" : "text-zinc-600 hover:text-brand"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right Interactive CTAs */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            id="header-contact-btn"
            onClick={() => setView("contact")}
            className="px-5 py-2 rounded-full bg-brand hover:bg-brand-hover text-white font-sans text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.04] active:scale-[0.96] hover:shadow-lg hover:shadow-brand/20 cursor-pointer"
          >
            CONTACT US
          </button>
        </div>

        {/* Mobile menu Toggle */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-nav-menu" 
            className="absolute top-16 left-0 right-0 mx-auto max-w-[92%] bg-white/95 backdrop-blur-xl border border-zinc-200/60 shadow-xl rounded-2xl p-3.5 space-y-1 block pointer-events-auto z-40 max-h-[85vh] overflow-y-auto"
          >
            {navItemsByView.map((item) => {
              if (item.view === "services") {
                const isServicesActive = currentView.startsWith("service-");
                return (
                  <div key={item.view} className="w-full">
                    <button
                      id={`mobile-nav-${item.view}`}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-sans tracking-wide uppercase font-semibold transition-colors flex items-center justify-between ${
                        mobileServicesOpen
                          ? "bg-zinc-100 text-brand"
                          : isServicesActive
                          ? "bg-brand text-white"
                          : "text-zinc-600 hover:bg-brand-light/30 hover:text-brand"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {item.label}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </span>
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-1.5 ml-2 mr-2 p-3.5 bg-white/95 border border-zinc-200/90 rounded-2xl shadow-inner space-y-3"
                        >
                          <span className="text-[9px] tracking-widest font-mono text-zinc-400 block uppercase font-bold text-left">// SELECT SERVICE PREVIEW</span>
                          
                          <div className="grid grid-cols-1 gap-1.5">
                            {SERVICES.map((srv) => {
                              const isSelected = mobileActiveServiceId === srv.id;
                              return (
                                <div
                                  key={srv.id}
                                  onClick={() => setMobileActiveServiceId(srv.id)}
                                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                                    isSelected
                                      ? "bg-zinc-50 border-zinc-200/70"
                                      : "border-transparent hover:bg-zinc-50/40"
                                  }`}
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className={`p-1 rounded-md ${isSelected ? "text-emerald-600" : "text-zinc-400"}`}>
                                      {srv.id === "web" && <Globe className="w-3.5 h-3.5" />}
                                      {srv.id === "mobile" && <Smartphone className="w-3.5 h-3.5" />}
                                      {srv.id === "game" && <Gamepad2 className="w-3.5 h-3.5" />}
                                      {srv.id === "uiux" && <Figma className="w-3.5 h-3.5" />}
                                      {srv.id === "branding" && <Paintbrush className="w-3.5 h-3.5" />}
                                    </span>
                                    <span className="text-[11px] font-bold text-zinc-950">{srv.name}</span>
                                  </div>

                                  {isSelected && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      className="mt-2 space-y-2.5"
                                    >
                                      <p className="text-[10px] text-zinc-500 font-light leading-relaxed">
                                        {srv.shortDesc}
                                      </p>
                                      
                                      <div className="bg-zinc-50/80 border border-zinc-200/60 p-4 rounded-xl flex items-center justify-center">
                                        <div className="w-full h-28 flex items-center justify-center">
                                          <ServiceDiagram serviceId={srv.id} />
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          <button
                            onClick={() => {
                              setView(`service-${mobileActiveServiceId}` as any);
                              setMobileMenuOpen(false);
                            }}
                            className="w-full text-center py-2.5 bg-brand hover:bg-brand-hover text-white text-[11px] font-bold font-mono tracking-tight rounded-xl cursor-pointer uppercase"
                          >
                            OPEN {SERVICES.find(s => s.id === mobileActiveServiceId)?.name.toUpperCase()} PORTAL →
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.view}
                  id={`mobile-nav-${item.view}`}
                  onClick={() => {
                    setView(item.view);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-xl text-xs font-sans tracking-wide uppercase font-semibold transition-colors ${
                    currentView === item.view
                      ? "bg-brand text-white"
                      : "text-zinc-600 hover:bg-brand-light/30 hover:text-brand"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-zinc-200/50 mt-2 space-y-1.5">
              <button
                id="mobile-nav-contact"
                onClick={() => {
                  setView("contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-xs font-sans uppercase cursor-pointer"
              >
                CONTACT US
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
