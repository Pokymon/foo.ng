import React, { useState, useEffect, ChangeEvent } from "react";
import { ServiceDetail } from "../types";
import { SERVICES, PRICING_PLANS } from "../data";
import { 
  Globe, Smartphone, Cpu, Figma, Bot, Check, ArrowRight, Sparkles, 
  CheckCircle2, Gamepad2, Paintbrush, Laptop, Building, ShoppingBag, 
  Settings, FileText, BarChart3, ShieldCheck, Zap, Heart, MessageSquare, Code,
  Database, Terminal, Layers, Server, Activity, Briefcase, CreditCard, Radio,
  Fingerprint, Users, Compass, BookOpen, Target, Upload, Video
} from "lucide-react";
import { motion } from "motion/react";
import About from "./About";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import HomepageCTA from "./HomepageCTA";
import UiuxServiceDetails from "./UiuxServiceDetails";
import BrandingServiceDetails from "./BrandingServiceDetails";

function getCapabilityIcon(text: string) {
  const t = text.toLowerCase();
  
  // Mobile app dev capabilities
  if (t === "modern ui/ux design") return <Paintbrush className="w-5 h-5" />;
  if (t === "cross-platform compatibility") return <Smartphone className="w-5 h-5" />;
  if (t === "high-speed performance" || t.includes("performance")) return <Zap className="w-5 h-5" />;
  if (t === "scalable app architecture" || t.includes("architecture")) return <Server className="w-5 h-5" />;
  if (t === "secure authentication systems") return <ShieldCheck className="w-5 h-5" />;
  if (t === "api & backend integration") return <Database className="w-5 h-5" />;
  if (t === "push notifications") return <MessageSquare className="w-5 h-5" />;
  if (t === "real-time features") return <Cpu className="w-5 h-5" />;
  if (t === "app store & play store deployment") return <Globe className="w-5 h-5" />;
  if (t === "ongoing maintenance & updates") return <Settings className="w-5 h-5" />;
  
  // Web dev capabilities
  if (t === "responsive web design" || t.includes("responsive web")) return <Laptop className="w-5 h-5" />;
  if (t === "frontend & backend development" || t.includes("backend development")) return <Code className="w-5 h-5" />;
  if (t === "api & database integration" || t.includes("database integration")) return <Database className="w-5 h-5" />;
  if (t === "authentication & user systems" || t.includes("authentication & user")) return <ShieldCheck className="w-5 h-5" />;
  if (t === "payment gateway integration" || t.includes("payment gateway")) return <ShoppingBag className="w-5 h-5" />;
  if (t === "seo optimization") return <BarChart3 className="w-5 h-5" />;
  if (t === "performance optimization") return <Zap className="w-5 h-5" />;
  if (t === "cloud deployment") return <Globe className="w-5 h-5" />;
  if (t === "secure & scalable architecture" || t.includes("scalable architecture")) return <Server className="w-5 h-5" />;
  if (t.includes("cms & content") || t.includes("cms")) return <FileText className="w-5 h-5" />;

  // Game capabilities
  if (t.includes("multiplayer")) return <Gamepad2 className="w-5 h-5" />;
  if (t.includes("indie game") || (t.includes("adventure") && t.includes("casual"))) return <Sparkles className="w-5 h-5" />;
  if (t.includes("gamified")) return <Activity className="w-5 h-5" />;
  if (t.includes("game ui/ux") || t.includes("environment design")) return <Paintbrush className="w-5 h-5" />;
  if (t.includes("physics engines") || t.includes("testing")) return <Cpu className="w-5 h-5" />;
  if (t.includes("publishing support") || t.includes("assets optimization")) return <Terminal className="w-5 h-5" />;

  // UI/UX design capabilities
  if (t.includes("product ui design") || t.includes("wireframe")) return <Figma className="w-5 h-5" />;
  if (t.includes("interactive prototypes")) return <Laptop className="w-5 h-5" />;
  if (t.includes("centralized design") || t.includes("dashboard workspace")) return <Layers className="w-5 h-5" />;
  if (t.includes("experience optimization") || t.includes("accessibility")) return <Settings className="w-5 h-5" />;
  if (t.includes("conversion-focused")) return <BarChart3 className="w-5 h-5" />;

  // Branding capabilities
  if (t.includes("outstanding logo") || t.includes("brand style guides")) return <Paintbrush className="w-5 h-5" />;
  if (t.includes("social media branding") || t.includes("product packaging")) return <MessageSquare className="w-5 h-5" />;
  if (t.includes("graphic design: marketing") || t.includes("stationery")) return <FileText className="w-5 h-5" />;
  if (t.includes("presentation decks") || t.includes("business cards")) return <Building className="w-5 h-5" />;
  if (t.includes("digital marketing creatives") || t.includes("graphics and digital")) return <Sparkles className="w-5 h-5" />;

  return <Cpu className="w-5 h-5" />;
}

function getTechIcon(tech: string) {
  const t = tech.toLowerCase();
  
  if (t === "javascript" || t.includes("javascript")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <text x="19" y="19" fill="#000000" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="end">JS</text>
      </svg>
    );
  }
  
  if (t === "cursor" || t.includes("cursor")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#1E1E24" stroke="#3F3F46" strokeWidth="1"/>
        <path d="M8 7.5l9 4-4 1.5-1.5 4-3.5-9.5z" fill="url(#cursor-sparkle)" />
        <circle cx="16" cy="7" r="1.5" fill="#38BDF8" />
        <defs>
          <linearGradient id="cursor-sparkle" x1="8" y1="7.5" x2="16" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#A1A1AA" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  if (t === "supabase" || t.includes("supabase")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.4 11.6L13.5 2a1 1 0 00-1.7.7v7.1H5.1a1 1 0 00-.7 1.7l7.9 9.6a1 1 0 001.7-.7v-7.1h6.7a1 1 0 00.7-1.7z" fill="url(#supabase-grad)" />
        <defs>
          <linearGradient id="supabase-grad" x1="5" y1="2" x2="19" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3ECF8E" />
            <stop offset="100%" stopColor="#24b47e" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  if (t === "django" || t.includes("django")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#092E20"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#44B78B" fontSize="12" fontWeight="bold" fontFamily="Georgia, serif" fontStyle="italic">d</text>
      </svg>
    );
  }
  
  if (t === "react" || t.includes("react native")) {
    return (
      <svg className="w-4 h-4 shrink-0 animate-spin" style={{ animationDuration: '10s' }} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  
  if (t === "flutter") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.1 2L5 16.1l4.9 4.9L28.9 2H19.1z" fill="#13B9FD" />
        <path d="M28.9 16.1L19.1 25.9l-4.9-4.9 4.9-4.9 9.8 0z" fill="#02569B" />
        <path d="M19.1 11.2l-4.9 4.9 4.9 4.9h9.8L19.1 11.2z" fill="#0175C2" />
      </svg>
    );
  }
  
  if (t === "swift") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="#F05138"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.87 6.425c.196.447.247.962.138 1.488-.11.532-.382 1.059-.76 1.516.488-.041.98-.14 1.458-.323.5-.192.972-.48 1.385-.851-.102.502-.34.981-.692 1.391-.351.41-.795.733-1.288.943a4.57 4.57 0 011.832.06c.36.106.69.284.972.523-.424-.038-.853-.004-1.26.11a3.9 3.9 0 00-1.12.511c.753.486 1.4 1.156 1.867 1.961.168.29.3.601.39.923a6.837 6.837 0 01-1.921-1.22 8.357 8.357 0 01-1.392-1.391c.075.6.015 1.218-.18 1.8a5.53 5.53 0 01-.817 1.542l.067-.09c.895-1.231 1.706-2.583 2.053-4.1.025-.107.03-.217.014-.325a.348.348 0 00-.233-.284c-.11-.03-.225-.015-.318.044-.2.128-.387.275-.558.435-.91.85-2.023 1.439-3.217 1.71a5.811 5.811 0 01-2.922-.1c-.046-.013-.082-.045-.098-.088-.016-.043-.01-.092.162-.224A8.75 8.75 0 0011.198 12c.983-.996 1.776-2.181 2.338-3.487.625-1.454.835-3.037.601-4.088-.015-.067-.067-.12-.132-.136a.151.151 0 00-.142.046c-.66.698-1.4 1.32-2.197 1.85-.947.63-2.002 1.09-3.111 1.353a.311.311 0 00-.234.391c.026.095.093.18.3.3a8.9 8.9 0 013.435 3.432c-.524.385-1.115.657-1.745.8l-.053.011a.428.428 0 00-.323.481c.023.153.136.27.284.283.473.042.946-.037 1.385-.231a4.922 4.922 0 001.378-.962l-.025.106c-.347 1.517-1.158 2.87-2.316 3.86a7.669 7.669 0 01-4.57 1.758c-.068.003-.13-.035-.152-.097a.154.154 0 01.05-.183 9.492 9.492 0 003.585-4.88 11.519 11.519 0 00.672-4.148 11.033 11.033 0 00-1.02-4.22c-.027-.064.004-.136.068-.16s.136.004.168.05c1.173 1.624 2.115 3.42 2.791 5.334a12.878 12.878 0 002.327-4.195 9.049 9.049 0 00.569-3.023.14.14 0 01.127-.132h.023z" fill="white"/>
      </svg>
    );
  }
  
  if (t === "kotlin") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2h20L2 22V2z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E24429" />
            <stop offset="50%" stopColor="#AD4091" />
            <stop offset="100%" stopColor="#0095D5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  if (t === "sqlite") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#003B57"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#00F0FF" fontSize="9" fontWeight="900" fontFamily="sans-serif">SQL</text>
      </svg>
    );
  }
  
  if (t.includes("firebase")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.89 18.06l1.3-8.2a.5.5 0 01.81-.35L12 14.5l-8.11 3.56z" fill="#FFC229"/>
        <path d="M20.11 18.06l-1.3-11.83a.5.5 0 00-.86-.33L12 14.5l8.11 3.56z" fill="#FFA000"/>
        <path d="M12 2.65a.5.5 0 00-.86-.23L3.89 18.06l8.11-3.56V2.65z" fill="#FF7400"/>
      </svg>
    );
  }
  
  if (t === "next.js") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#000" stroke="#444" strokeWidth="1"/>
        <path d="M16 16.5l-5.5-7.5H9v8h1.5v-5.5l5.5 7.5c.35-.15.7-.35 1-.5V16z" fill="#fff" />
        <rect x="14.5" y="9" width="1.5" height="4.5" fill="#fff" />
      </svg>
    );
  }
  
  if (t === "typescript") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <text x="19" y="19" fill="#FFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="end">TS</text>
      </svg>
    );
  }
  
  if (t === "node.js") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#336633"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="950" fontFamily="sans-serif">JS</text>
      </svg>
    );
  }
  
  if (t === "tailwind css") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3c-3 0-5 1.5-6 4.5 1.25-1.5 2.75-2 4.5-1.5 1 0.3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 5.6 2.8 3 0 5-1.5 6-4.5-1.25 1.5-2.75 2-4.5 1.5-1-0.3-1.7-1-2.5-1.8-1.3-1.3-2.8-2.8-5.6-2.8zm-6 8c-3 0-5 1.5-6 4.5 1.25-1.5 2.75-2 4.5-1.5 1 0.3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 5.6 2.8 3 0 5-1.5 6-4.5-1.25 1.5-2.75 2-4.5 1.5-1-0.3-1.7-1-2.5-1.8-1.3-1.3-2.8-2.8-5.6-2.8z" fill="#06B6D4"/>
      </svg>
    );
  }
  
  if (t === "vite") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.01 2H4.99L12 16.5l7.01-14.5z" fill="url(#vite-grad-v)" />
        <path d="M12.5 7.5L16 6.5l-4.5 11.5L9 11h3.5v-3.5z" fill="url(#vite-grad-lightning)" />
        <defs>
          <linearGradient id="vite-grad-v" x1="4.99" y1="2" x2="19.01" y2="16.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#41D1FF" />
            <stop offset="100%" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="vite-grad-lightning" x1="9" y1="6.5" x2="16" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF7E40" />
            <stop offset="100%" stopColor="#FFEC3E" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  if (t === "unity") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#000000"/>
        <path d="M12 4l7 4v8l-7 4-7-4V8l7-4zm0 2.2L7 9.1v5.8l5 2.9 5-2.9V9.1l-5-2.9z" fill="#FFF"/>
      </svg>
    );
  }
  
  if (t === "unreal engine") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#000" stroke="#555" strokeWidth="1"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">U</text>
      </svg>
    );
  }
  
  if (t === "webgl") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#990000"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">GL</text>
      </svg>
    );
  }
  
  if (t.includes("canvas")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2l1.62 17.14L12 22l7.38-2.86L21 2H3z" fill="#E34F26"/>
        <path d="M12 20.17l5.74-2.22L19 4.31H12v15.86z" fill="#EF652A"/>
        <path d="M12 11.23h-3.1l-.22-2.31H12V6.62H5.94l.65 6.92H12v-2.31z" fill="#EAEAEA"/>
      </svg>
    );
  }
  
  if (t === "c#") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#178600"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="950" fontFamily="sans-serif">C#</text>
      </svg>
    );
  }
  
  if (t === "three.js") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#000000"/>
        <path d="M6 18L12 6L18 18H6z" stroke="#FFFFFF" strokeWidth="1" fill="none"/>
        <circle cx="6" cy="18" r="1.5" fill="#FF3366"/>
        <circle cx="12" cy="6" r="1.5" fill="#33CCFF"/>
        <circle cx="18" cy="18" r="1.5" fill="#33FF66"/>
      </svg>
    );
  }
  
  if (t === "figma design" || t.includes("figma")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 0a3 3 0 0 0-3 3 3 3 0 0 0 3 3h3V0H3z" fill="#F24E1E" />
        <path d="M3 6a3 3 0 0 0-3 3 3 3 0 0 0 3 3h3V6H3z" fill="#A259FF" />
        <path d="M3 12a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3v-3H3z" fill="#1ABC9C" />
        <path d="M9 6a3 3 0 0 0 3-3 3 3 0 0 0-3-3H6v6h3z" fill="#FF7262" />
        <path d="M9 12a3 3 0 0 0 3-3 3 3 0 0 0-3-3H6v6h3z" fill="#19BCFE" />
      </svg>
    );
  }
  
  if (t === "adobe creative suite" || t.includes("adobe")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FF0000"/>
        <path d="M12 4l7.5 15H15l-2.5-5.5h-5L5 19h4.5L12 4z" fill="#FFFFFF"/>
      </svg>
    );
  }
  
  if (t === "spline 3d" || t.includes("spline")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#111"/>
        <path d="M8 8 C 11 5, 14 5, 16 8 C 18 11, 14 14, 12 12 C 10 10, 6 13, 8 16 C 10 19, 13 19, 16 16" stroke="#00F0FF" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  
  if (t.includes("css/svg") || t.includes("tokens")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    );
  }
  
  if (t.includes("design system") || t.includes("guidelines")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="8" height="8" rx="2" fill="#6366F1"/>
        <rect x="14" y="2" width="8" height="8" rx="2" fill="#10B981" />
        <rect x="2" y="14" width="8" height="8" rx="2" fill="#F59E0B" />
        <circle cx="18" cy="18" r="4" fill="#EC4899" />
      </svg>
    );
  }
  
  if (t.includes("illustrator")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#330000" stroke="#FF9A00" strokeWidth="1"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#FF9A00" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Ai</text>
      </svg>
    );
  }
  
  if (t.includes("photoshop")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#001C3A" stroke="#00C8FF" strokeWidth="1"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#00C8FF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Ps</text>
      </svg>
    );
  }
  
  if (t.includes("indesign")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#2C0018" stroke="#FF1493" strokeWidth="1"/>
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="#FF1493" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Id</text>
      </svg>
    );
  }
  
  if (t.includes("vector")) {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#EBEFf5" stroke="#4F46E5" strokeWidth="1.5" />
        <path d="M12 4l5 7h-10l5-7z" fill="#4F46E5" />
        <path d="M4 16 C 8 13, 16 13, 20 16" stroke="#10B981" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

function getCapabilityDetail(serviceId: string, title: string, index: number) {
  const t = title.toLowerCase();
  if (t.includes("cross-platform")) {
    return "Compiled native experiences built from a single codebase using React Native or Flutter, reducing compile weight and development costs.";
  }
  if (t.includes("architecture")) {
    return "Scalable microservices-ready decoupled structures built with standard OOP/functional clean architecture design patterns.";
  }
  if (t.includes("notification") || t.includes("push")) {
    return "Low-latency targeted device notifications via FCM/APNS to drive user retention, re-engagement, and conversion metrics.";
  }
  if (t.includes("real-time") || t.includes("real time")) {
    return "Bi-directional WebSockets or Firestore replication channels handling dynamic data syncing under 50ms latency margins.";
  }
  if (t.includes("maintenance") || t.includes("updates")) {
    return "Proactive SDK updates, security patching, and device simulator audits to ensure compatibility with iOS and Android versions.";
  }
  if (t.includes("design") || t.includes("responsive") || t.includes("visual")) {
    return "Ultra-fast responsive layouts fully optimized for high-density modern screens and touch devices.";
  }
  if (t.includes("frontend") || t.includes("backend")) {
    return "Modular component structures connected to lightweight server infrastructure and Edge routers.";
  }
  if (t.includes("api") || t.includes("integration") || t.includes("database")) {
    return "Type-safe asynchronous data fetching pipelines designed for sub-millisecond query execution.";
  }
  if (t.includes("auth") || t.includes("user") || t.includes("secure")) {
    return "Session-state persistence layer with stateless JSON Web Token handshakes and secure access controls.";
  }
  if (t.includes("payment")) {
    return "PCI-compliant integrations supporting Stripe, Apple Pay, and automated high-frequency billing.";
  }
  if (t.includes("seo") || t.includes("performance") || t.includes("optimization")) {
    return "Static site compilation rendering (SSG/ISR) yielding perfect scores across Google Lighthouse diagnostics.";
  }
  if (t.includes("cloud") || t.includes("deployment")) {
    return "Production-ready automated build hooks bound directly with multi-region CDN networks.";
  }
  if (t.includes("cms")) {
    return "Tailored visual headless publishing stations allowing clients direct control over live assets without developer help.";
  }
  if (t.includes("gameplay") || t.includes("physics") || t.includes("graphics")) {
    return "Optimized frame ticks and lightweight collision calculations providing highly immersive web/native experiences.";
  }
  if (t.includes("brand") || t.includes("logo") || t.includes("identity")) {
    return "Custom vectorized design assets keeping your digital visual identity crisp and scalable at any resolution.";
  }
  return "Engineered with precision implementing standard patterns for modularity, accessibility, and high performance.";
}

interface ServicePageProps {
  serviceId: "web" | "mobile" | "game" | "uiux" | "branding";
  setView: (view: any) => void;
}

// Custom interactive SVG graphics for each service hero (Fully Textless)
function CoreServiceIllustration({ serviceId }: { serviceId: string }) {
  const lineAnim = {
    animate: {
      strokeDashoffset: [20, -20],
      transition: { repeat: Infinity, duration: 4, ease: "linear" }
    }
  };

  switch (serviceId) {
    case "web":
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[340px] h-auto text-zinc-900 mx-auto" fill="none" stroke="currentColor">
          <rect x="5" y="5" width="230" height="150" rx="10" strokeWidth="2.5" className="stroke-zinc-300" />
          <line x1="5" y1="32" x2="235" y2="32" stroke="currentColor" strokeWidth="2" className="stroke-zinc-200" />
          <circle cx="18" cy="18" r="4" className="fill-brand stroke-none" />
          <circle cx="30" cy="18" r="4" className="fill-zinc-305 stroke-none fill-zinc-300" />
          <circle cx="42" cy="18" r="4" className="fill-zinc-205 stroke-none fill-zinc-200" />
          
          <rect x="18" y="46" width="60" height="96" rx="6" strokeWidth="1" className="stroke-zinc-200 fill-zinc-50" />
          <rect x="90" y="46" width="132" height="96" rx="6" strokeWidth="2" className="stroke-brand fill-brand-light/20" />
          
          <path d="M 26 60 H 70 M 26 74 H 58 M 26 88 H 64" stroke="currentColor" strokeWidth="2" className="stroke-zinc-350" />
          
          <motion.path 
            d="M 98 116 L 128 65 L 158 98 L 188 52 L 214 85" 
            stroke="#33c07a" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut" }} 
          />
          <circle cx="188" cy="52" r="6" className="fill-brand stroke-white" strokeWidth="2" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[340px] h-auto text-zinc-900 mx-auto" fill="none" stroke="currentColor">
          <rect x="80" y="5" width="80" height="150" rx="16" strokeWidth="3" className="stroke-zinc-300 fill-zinc-55" />
          <rect x="110" y="12" width="20" height="4" rx="2" className="fill-zinc-300 stroke-none" />
          <circle cx="120" cy="144" r="5" strokeWidth="2" className="stroke-zinc-300" />
          
          <rect x="88" y="24" width="64" height="110" rx="8" strokeWidth="1" className="stroke-zinc-200 fill-zinc-50/50" />
          
          <circle cx="120" cy="68" r="28" stroke="#e4e4e7" strokeWidth="2" />
          <motion.circle 
            cx="120" 
            cy="68" 
            r="28" 
            stroke="#33c07a" 
            strokeWidth="4" 
            strokeDasharray="180" 
            strokeLinecap="round" 
            initial={{ strokeDashoffset: 180 }} 
            animate={{ strokeDashoffset: 45 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }} 
          />
          
          <line x1="96" y1="114" x2="144" y2="114" stroke="currentColor" strokeWidth="1.5" className="stroke-zinc-200" />
          <motion.line 
            x1="96" 
            y1="114" 
            x2="134" 
            y2="114" 
            stroke="#33c07a" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            initial={{ x2: 96 }} 
            animate={{ x2: 134 }} 
            transition={{ duration: 1.2, delay: 0.3 }} 
          />
        </svg>
      );
    case "game":
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[340px] h-auto text-zinc-900 mx-auto" fill="none" stroke="currentColor">
          <rect x="25" y="38" width="190" height="84" rx="42" strokeWidth="3" className="stroke-zinc-300 fill-zinc-50" />
          {/* Left grip and D-Pad */}
          <path d="M 60 80 H 80 M 70 70 V 90" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" className="stroke-zinc-400" />
          {/* Action buttons (A/B) */}
          <circle cx="155" cy="85" r="9" strokeWidth="2" className="stroke-[#33c07a] fill-[#33c07a]/15" />
          <circle cx="178" cy="73" r="9" strokeWidth="2" className="stroke-[#33c07a] fill-[#33c07a]/15" />
          {/* Screen / center decor */}
          <rect x="102" y="60" width="36" height="26" rx="4" strokeWidth="1.5" className="stroke-zinc-300 fill-zinc-100" />
          <line x1="110" y1="73" x2="130" y2="73" stroke="#33c07a" strokeWidth="2" />
        </svg>
      );
    case "uiux":
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[340px] h-auto text-zinc-900 mx-auto" fill="none" stroke="currentColor">
          <path d="M 20 0 v 160 M 70 0 v 160 M 120 0 v 160 M 170 0 v 160 M 220 0 v 160" stroke="#f4f4f5" strokeWidth="1" />
          <path d="M 0 30 h 240 M 0 80 h 240 M 0 130 h 240" stroke="#f4f4f5" strokeWidth="1" />
          
          <rect x="30" y="24" width="180" height="110" rx="10" strokeWidth="2" className="stroke-zinc-300" strokeDasharray="6,6" />
          
          <motion.path 
            d="M 50 110 C 95 30, 145 30, 190 110" 
            stroke="#33c07a" 
            strokeWidth="4" 
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2 }}
          />
          
          <circle cx="120" cy="46" r="5" className="fill-white stroke-brand" strokeWidth="2.5" />
          <rect x="46" y="106" width="8" height="8" className="fill-brand stroke-white" strokeWidth="1.5" />
          <rect x="186" y="106" width="8" height="8" className="fill-brand stroke-white" strokeWidth="1.5" />
        </svg>
      );
    case "branding":
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[340px] h-auto text-zinc-900 mx-auto" fill="none" stroke="currentColor">
          {/* Caliper or Design grid backdrop (technical precision lines) */}
          <g className="stroke-zinc-200" strokeWidth="0.5">
            {/* Fine Grid lines */}
            <line x1="10" y1="80" x2="230" y2="80" strokeDasharray="3,3" />
            <line x1="120" y1="10" x2="120" y2="150" strokeDasharray="3,3" />
            {/* Diagonal guides */}
            <line x1="40" y1="40" x2="200" y2="120" strokeDasharray="4,4" />
            <line x1="40" y1="120" x2="200" y2="40" strokeDasharray="4,4" />
          </g>

          {/* Golden ratio & alignment geometric constructs */}
          <circle cx="120" cy="80" r="50" className="stroke-zinc-250" strokeWidth="0.75" strokeDasharray="4,4" />
          <circle cx="120" cy="80" r="32" className="stroke-zinc-200" strokeWidth="0.5" />
          <circle cx="85" cy="80" r="32" className="stroke-zinc-150" strokeWidth="0.5" />
          <circle cx="155" cy="80" r="32" className="stroke-zinc-150" strokeWidth="0.5" />

          {/* Stylized Logo Icon being constructed: Beautiful Geometric Monogram Loop */}
          <g>
            {/* Mathematical Construction Arc */}
            <path 
              d="M 70 80 A 50 50 0 0 1 170 80 A 50 50 0 0 1 70 80" 
              className="stroke-zinc-300" 
              strokeWidth="1" 
              strokeDasharray="4,2"
            />
            {/* The primary drawn vector contour - an elegant geometric ribbon / loop */}
            <motion.path 
              d="M 80 80 C 80 50, 120 40, 120 80 C 120 120, 160 110, 160 80 C 160 50, 120 50, 120 80 C 120 110, 80 110, 80 80 Z" 
              stroke="#059669" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </g>

          {/* Bezier Vector Control Handles and Nodes - Represents the logo editing session */}
          <g>
            {/* Active vertical handles at Top Node (120, 36) */}
            <line x1="120" y1="80" x2="120" y2="36" stroke="#10b981" strokeWidth="1" />
            <line x1="120" y1="80" x2="120" y2="124" stroke="#10b981" strokeWidth="1" />
            {/* Control handles at Side Anchors */}
            <line x1="80" y1="80" x2="55" y2="80" stroke="currentColor" strokeWidth="0.75" className="stroke-zinc-400" strokeDasharray="2,2" />
            <line x1="160" y1="80" x2="185" y2="80" stroke="currentColor" strokeWidth="0.75" className="stroke-zinc-400" strokeDasharray="2,2" />

            {/* Anchor Nodes (Squares / Circles) */}
            {/* Left anchor */}
            <rect x="77" y="77" width="6" height="6" className="fill-white stroke-zinc-500" strokeWidth="1.2" />
            {/* Right anchor */}
            <rect x="157" y="77" width="6" height="6" className="fill-white stroke-zinc-500" strokeWidth="1.2" />
            {/* Center anchor split */}
            <circle cx="120" cy="80" r="3.5" className="fill-emerald-500 stroke-white" strokeWidth="1.5" />

            {/* Bezier handle terminal ends */}
            <circle cx="120" cy="36" r="4" className="fill-white stroke-emerald-600" strokeWidth="1.5" />
            <circle cx="120" cy="124" r="4" className="fill-white stroke-emerald-600" strokeWidth="1.5" />
            <circle cx="55" cy="80" r="2" className="fill-zinc-400 stroke-none" />
            <circle cx="185" cy="80" r="2" className="fill-zinc-400 stroke-none" />
          </g>

          {/* Aesthetic UI elements (Tiny pen tool drawing, calipers or labels) */}
          <g>
            {/* Stylized Vector Pen Tool Nib Cursor (translated & rotated pointing right at (120, 36)) */}
            <g transform="translate(120, 36) rotate(-45)">
              <path 
                d="M 0 0 L -3.5 -11 L -11 -11 L -11 -3.5 L 0 0 Z" 
                fill="#10b981" 
                stroke="#059669" 
                strokeWidth="1.2" 
              />
              <line x1="-11" y1="-11" x2="-20" y2="-20" stroke="#059669" strokeWidth="1.4" />
              <line x1="0" y1="0" x2="-6" y2="-6" stroke="white" strokeWidth="0.8" />
            </g>
          </g>
        </svg>
      );
    default:
      return null;
  }
}


// Self-contained scrolling code backdrop for Web and Mobile engineering backgrounds
function CodeTypingBackdrop({ serviceId }: { serviceId: string }) {
  const backdropAnimStyle = `
    @keyframes hyleScrollCode {
      0% { transform: translateY(0); }
      100% { transform: translateY(-33.33%); }
    }
    .animate-hyle-code {
      animation: hyleScrollCode 48s linear infinite;
    }
  `;

  const webCodes = [
    "<!DOCTYPE html>",
    '<html lang="en">',
    "<head>",
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    "  <title>Compiled Web App Template</title>",
    "",
    "  <!-- Fonts -->",
    '  <link rel="preconnect" href="https://fonts.googleapis.com">',
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">',
    "",
    "  <!-- Bootstrap CSS -->",
    '  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">',
    '  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">',
    "",
    "  /* CSS Style Rules */",
    "  * {",
    "    margin: 0;",
    "    padding: 0;",
    "    box-sizing: border-box;",
    "    font-family: 'Inter', sans-serif;",
    "  }",
    "",
    "  body {",
    "    background: #0f172a;",
    "    color: #ffffff;",
    "    overflow-x: hidden;",
    "  }",
    "",
    "  .glass-card {",
    "    background: rgba(15, 23, 42, 0.95);",
    "    backdrop-filter: blur(10px);",
    "    border-bottom: 1px solid rgba(255, 255, 255, 0.05);",
    "  }",
    "",
    "  .brand {",
    "    font-size: 1.7rem;",
    "    font-weight: 800;",
    "    color: #ffffff !important;",
    "  }",
    "",
    "  /* HTML Body Template navigation structure */",
    '  <nav class="navbar navbar-expand-lg fixed-top py-3">',
    '    <div class="container">',
    '      <a class="navbar-brand" href="#">NovaFlow</a>',
    '      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">',
    '        <span class="navbar-toggler-icon"></span>',
    "      </button>",
    '      <div class="collapse navbar-collapse" id="navbarNav">',
    '        <ul class="navbar-nav ms-auto align-items-lg-center">',
    '          <li class="nav-item">',
    '            <a class="nav-link" href="#features">Features</a>',
    '          </li>',
    '          <li class="nav-item">',
    '            <a class="nav-link" href="#pricing">Pricing</a>',
    '          </li>',
    '          <li class="nav-item">',
    '            <a class="nav-link" href="#testimonials">Testimonials</a>',
    '          </li>',
    '          <li class="nav-item">',
    '            <a class="nav-link" href="#faq">FAQ</a>',
    '          </li>',
    '          <li class="nav-item pt-2 pt-lg-0">',
    '            <a class="btn btn-primary-custom" href="#">Get Started</a>',
    '          </li>',
    "        </ul>",
    "      </div>",
    "    </div>",
    "  </nav>",
    "",
    '  <section id="hero" class="hero-section">',
    '    <div class="container">',
    '      <div class="row align-items-center">',
    '        <div class="col-lg-6">',
    '          <div class="hero-text-block">',
    '            <span class="badge bg-secondary mb-3">NEXT GENERATION SAAS PLATFORM</span>',
    "            <h1>Build Faster. Scale Bigger. Launch Smarter.</h1>",
    "            <p>A modern all-in-one platform for startups, businesses, developers, and teams to manage workflows with a sleek cloud-native experience.</p>",
    "          </div>",
    "        </div>",
    "      </div>",
    "    </div>",
    "  </section>"
  ];

  const mobileCodes = [
    "import { createMobileCore, Gesture } from '@hyle/mobile';",
    "const app = createMobileCore({ hybrid: false, targetOS: 'universal' });",
    "",
    "// Mobile OS initialization routines & haptic bindings",
    "app.onLaunch(({ ios, android }) => {",
    "  ios.setStatusBar('light-content');",
    "  android.enableEdgeToEdge({ tactileFeedback: true });",
    "});",
    "",
    "// Configure gesture systems & high-precision spring vectors",
    "const panGesture = Gesture.Pan()",
    "  .onStart(() => haptics.trigger('impactLight'))",
    "  .onUpdate((e) => updateLayoutVector(e.translationX));",
    "",
    "/* Premium native GPU viewport components */",
    "export function InteractiveViewport() {",
    "  return (",
    "    <SafeView style={styles.container}>",
    "      <GestureDetector gesture={panGesture}>",
    "        <RenderFrame fluid animate={true} strokeWidth={2.5} />",
    "      </GestureDetector>",
    "    </SafeView>",
    "  );",
    "}"
  ];

  const sourceList = serviceId === "web" ? webCodes : mobileCodes;
  const repeatedCodes = [...sourceList, ...sourceList, ...sourceList];

  // Robust lightweight React tokenizer parser for beautiful high-fidelity styled code backdrop
  const renderLineTokens = (line: string, index: number) => {
    if (!line || line.trim() === "") {
      return <div key={index} className="min-h-[18px]">&nbsp;</div>;
    }

    const trimmed = line.trim();

    // 1. Comments
    if (trimmed.startsWith("<!--") || trimmed.startsWith("/*") || trimmed.startsWith("//")) {
      return (
        <div key={index} className="whitespace-pre min-h-[18px] tracking-wide text-zinc-400 font-normal italic">
          {line}
        </div>
      );
    }

    // 2. Mobile Code parsing (JS/TS keywords, annotations, methods, brackets)
    if (serviceId === "mobile") {
      const isKeyword = (word: string) => ["import", "from", "const", "app", "export", "function", "return", "let", "var"].includes(word);
      const isMethod = (word: string) => ["createMobileCore", "onLaunch", "setStatusBar", "enableEdgeToEdge", "onStart", "onUpdate", "trigger", "updateLayoutVector"].includes(word);
      
      const parts = line.split(/(\s+|\(|\)|\{|\}|;|\.|'[^']*')/g);
      return (
        <div key={index} className="whitespace-pre min-h-[18px] tracking-wide text-zinc-700 font-medium">
          {parts.map((part, pIdx) => {
            const partTrim = part.trim();
            if (isKeyword(partTrim)) {
              return <span key={pIdx} className="text-violet-600 font-semibold">{part}</span>;
            }
            if (isMethod(partTrim)) {
              return <span key={pIdx} className="text-blue-600 font-semibold">{part}</span>;
            }
            if (partTrim.startsWith("'") && partTrim.endsWith("'")) {
              return <span key={pIdx} className="text-emerald-600">{part}</span>;
            }
            if (["(", ")", "{", "}", ";", "."].includes(partTrim)) {
              return <span key={pIdx} className="text-zinc-400">{part}</span>;
            }
            return <span key={pIdx}>{part}</span>;
          })}
        </div>
      );
    }

    // 3. CSS-like structures
    const isCssRule = serviceId === "web" && (
      trimmed.startsWith(".") || 
      trimmed.startsWith("#") || 
      trimmed.startsWith("*") || 
      trimmed.includes("{") || 
      trimmed.includes("}") || 
      (trimmed.includes(":") && trimmed.endsWith(";"))
    );

    if (isCssRule) {
      if (trimmed.includes("{")) {
        const parts = line.split("{");
        return (
          <div key={index} className="whitespace-pre min-h-[18px] tracking-wide">
            <span className="text-violet-600 font-semibold">{parts[0]}</span>
            <span className="text-zinc-500">{" {"}</span>
          </div>
        );
      }
      if (trimmed.includes("}")) {
        return (
          <div key={index} className="whitespace-pre min-h-[18px] tracking-wide text-zinc-500">
            {line}
          </div>
        );
      }
      if (trimmed.includes(":")) {
        const parts = line.split(":");
        const prop = parts[0];
        const val = parts.slice(1).join(":");
        return (
          <div key={index} className="whitespace-pre min-h-[18px] tracking-wide">
            <span className="text-zinc-600">{prop}</span>
            <span className="text-zinc-400">:</span>
            <span className="text-sky-600 font-medium">{val}</span>
          </div>
        );
      }
      return (
        <div key={index} className="whitespace-pre min-h-[18px] tracking-wide text-zinc-700">
          {line}
        </div>
      );
    }

    // 4. HTML-like parsing
    if (serviceId === "web" && (trimmed.startsWith("<") || trimmed.includes("class=") || trimmed.includes("href="))) {
      const parts = line.split(/(<[^>]+>)/g);
      return (
        <div key={index} className="whitespace-pre min-h-[18px] tracking-wide">
          {parts.map((part, pIdx) => {
            if (part.startsWith("<") && part.endsWith(">")) {
              const content = part.substring(1, part.length - 1);
              if (content.startsWith("/")) {
                return (
                  <span key={pIdx}>
                    <span className="text-zinc-400">{"</"}</span>
                    <span className="text-sky-600 font-semibold">{content.substring(1)}</span>
                    <span className="text-zinc-400">{">"}</span>
                  </span>
                );
              }

              // Parse properties inside opening tag
              const tokens = content.match(/("[^"]*"|'[^']*'|[^\s=]+|=)/g) || [content];
              const tagName = tokens[0];

              return (
                <span key={pIdx}>
                  <span className="text-zinc-400">{"<"}</span>
                  <span className="text-sky-600 font-semibold">{tagName}</span>
                  {tokens.slice(1).map((tok, tIdx) => {
                    if (tok === "=") {
                      return <span key={tIdx} className="text-zinc-400">=</span>;
                    }
                    if (tok.startsWith('"') || tok.startsWith("'")) {
                      return <span key={tIdx} className="text-emerald-600">{tok}</span>;
                    }
                    return <span key={tIdx} className="ml-1.5 text-amber-600 font-medium">{tok}</span>;
                  })}
                  <span className="text-zinc-400">{">"}</span>
                </span>
              );
            }
            return <span key={pIdx} className="text-zinc-700 font-medium">{part}</span>;
          })}
        </div>
      );
    }

    // Default fallback line styling
    return (
      <div key={index} className="whitespace-pre min-h-[18px] tracking-wide text-zinc-700 font-medium">
        {line}
      </div>
    );
  };

  const containerClass = "absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-zinc-50 opacity-100";
  const wrapperClass = "w-full h-full flex flex-row justify-between gap-8 md:gap-16 px-8 py-12 animate-hyle-code font-mono text-[9px] md:text-[10.5px] leading-[1.65]";

  return (
    <div className={containerClass}>
      <style dangerouslySetInnerHTML={{ __html: backdropAnimStyle }} />
      {/* Semi-transparent uniform backdrop overlay across the entire width so code remains beautifully visible in all sections */}
      <div className="absolute inset-0 bg-white/70 z-10 pointer-events-none" />
      <div className={wrapperClass}>
        <div className="flex-1 min-w-0">
          {repeatedCodes.map((line, i) => renderLineTokens(line, i))}
        </div>
        <div className="flex-1 min-w-0 hidden sm:block">
          {repeatedCodes.map((line, i) => renderLineTokens(line, (i + 15) % repeatedCodes.length))}
        </div>
        <div className="flex-1 min-w-0 hidden md:block">
          {repeatedCodes.map((line, i) => renderLineTokens(line, (i + 30) % repeatedCodes.length))}
        </div>
        <div className="flex-1 min-w-0 hidden lg:block">
          {repeatedCodes.map((line, i) => renderLineTokens(line, (i + 45) % repeatedCodes.length))}
        </div>
      </div>
    </div>
  );
}


// App icon scrolling launcher backdrop specifically for mobile dev header
function AppIconsGridBackdrop() {
  const backdropStyle = `
    @keyframes hyleScrollLeft {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
    @keyframes hyleScrollRight {
      0% { transform: translate3d(-50%, 0, 0); }
      100% { transform: translate3d(0, 0, 0); }
    }
    .animate-scroll-left {
      animation: hyleScrollLeft 40s linear infinite;
    }
    .animate-scroll-right {
      animation: hyleScrollRight 40s linear infinite;
    }
    .animate-scroll-left-slow {
      animation: hyleScrollLeft 55s linear infinite;
    }
  `;

  const row1Apps = [
    { name: "Hyle Wallet", desc: "Fintech Core v2", color: "from-blue-600 to-indigo-600", icon: <CreditCard className="w-5 h-5 text-white" />, stat: "$24,500.50" },
    { name: "FitSync Track", desc: "Activity Sync Engine", color: "from-rose-500 to-red-600", icon: <Activity className="w-5 h-5 text-white" />, stat: "142 bpm active" },
    { name: "Aura Zen", desc: "Mindfulness Loop", color: "from-violet-500 to-purple-600", icon: <Sparkles className="w-5 h-5 text-white" />, stat: "98% session match" },
    { name: "LiveChat Engine", desc: "Websockets SocketIO", color: "from-cyan-500 to-blue-500", icon: <MessageSquare className="w-5 h-5 text-white" />, stat: "42ms handshake" },
    { name: "GeoMap Routing", desc: "GPS Vector System", color: "from-emerald-500 to-teal-500", icon: <Globe className="w-5 h-5 text-white" />, stat: "Realtime dispatch" }
  ];

  const row2Apps = [
    { name: "TaskBoard", desc: "Productivity Grid", color: "from-amber-500 to-orange-500", icon: <Check className="w-5 h-5 text-white" />, stat: "6/8 tasks done" },
    { name: "ChefDirect API", desc: "SaaS Restaurant Portal", color: "from-orange-500 to-red-500", icon: <ShoppingBag className="w-5 h-5 text-white" />, stat: "24 new tables" },
    { name: "SmartDome", desc: "IoT Hardware Node", color: "from-sky-500 to-indigo-600", icon: <Settings className="w-5 h-5 text-white" />, stat: "9 devices live" },
    { name: "EduGrow UI", desc: "Responsive Roadmap", color: "from-teal-500 to-emerald-600", icon: <Layers className="w-5 h-5 text-white" />, stat: "Ch. 4 complete" },
    { name: "SaaSStat Metrics", desc: "Metric Stream Parser", color: "from-zinc-700 to-zinc-900", icon: <BarChart3 className="w-5 h-5 text-white" />, stat: "+48% ARR growth" }
  ];

  const row3Apps = [
    { name: "DroneShipper", desc: "Autonomous Freight", color: "from-emerald-600 to-teal-500", icon: <Cpu className="w-5 h-5 text-white" />, stat: "Transit: 7 mins" },
    { name: "AIAgent Core", desc: "LLM Orchestrator v1", color: "from-zinc-800 to-zinc-950", icon: <Bot className="w-5 h-5 text-white" />, stat: "Agent status: Ready" },
    { name: "SoundSpectrum", desc: "DSP Audio Waveform", color: "from-purple-500 to-pink-600", icon: <Smartphone className="w-5 h-5 text-white" />, stat: "1080p // 60 FPS" },
    { name: "SecurityShield", desc: "SSL Enforced Handshake", color: "from-teal-600 to-indigo-600", icon: <ShieldCheck className="w-5 h-5 text-white" />, stat: "Active Guard" },
    { name: "NovaFlow Web", desc: "Edge Route Cache", color: "from-violet-650 to-fuchsia-600", icon: <Code className="w-5 h-5 text-white" />, stat: "Fully Optimized" }
  ];

  const dupRow1 = [...row1Apps, ...row1Apps];
  const dupRow2 = [...row2Apps, ...row2Apps];
  const dupRow3 = [...row3Apps, ...row3Apps];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-sky-50/10 flex flex-col justify-center space-y-6 md:space-y-10 py-12 opacity-[0.22] filter blur-[2.5px] scale-[1.01]">
      <style dangerouslySetInnerHTML={{ __html: backdropStyle }} />
      {/* Semi-transparent uniform backdrop overlay */}
      <div className="absolute inset-0 bg-white/90 z-10 pointer-events-none" />
      
      {/* Row 1: Left */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap z-20">
        <div className="flex space-x-6 shrink-0 animate-scroll-left min-w-full">
          {dupRow1.map((app, idx) => (
            <div key={idx} className="w-[200px] md:w-[240px] bg-white/80 backdrop-blur-md border border-zinc-200/50 rounded-2xl p-4 flex items-center space-x-3 shadow-md hover:shadow-lg hover:border-zinc-300 transition-all duration-300 shrink-0">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-inner shrink-0`}>
                {app.icon}
              </div>
              <div className="min-w-0 text-left">
                <span className="text-[12px] font-extrabold text-zinc-905 block truncate font-sans tracking-tight">{app.name}</span>
                <span className="text-[10px] text-zinc-400 block truncate">{app.desc}</span>
                <span className="text-[9px] font-mono font-medium text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded mt-0.5 inline-block">{app.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap z-20">
        <div className="flex space-x-6 shrink-0 animate-scroll-right min-w-full">
          {dupRow2.map((app, idx) => (
            <div key={idx} className="w-[200px] md:w-[240px] bg-white/80 backdrop-blur-md border border-zinc-200/50 rounded-2xl p-4 flex items-center space-x-3 shadow-md hover:shadow-lg hover:border-zinc-300 transition-all duration-300 shrink-0">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-inner shrink-0`}>
                {app.icon}
              </div>
              <div className="min-w-0 text-left">
                <span className="text-[12px] font-extrabold text-zinc-905 block truncate font-sans tracking-tight">{app.name}</span>
                <span className="text-[10px] text-zinc-400 block truncate">{app.desc}</span>
                <span className="text-[9px] font-mono font-medium text-brand bg-brand-light px-1 py-0.2 rounded mt-0.5 inline-block">{app.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Left Slow */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap z-20">
        <div className="flex space-x-6 shrink-0 animate-scroll-left-slow min-w-full">
          {dupRow3.map((app, idx) => (
            <div key={idx} className="w-[200px] md:w-[240px] bg-white/80 backdrop-blur-md border border-zinc-200/50 rounded-2xl p-4 flex items-center space-x-3 shadow-md hover:shadow-lg hover:border-zinc-300 transition-all duration-300 shrink-0">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-inner shrink-0`}>
                {app.icon}
              </div>
              <div className="min-w-0 text-left">
                <span className="text-[12px] font-extrabold text-zinc-905 block truncate font-sans tracking-tight">{app.name}</span>
                <span className="text-[10px] text-zinc-400 block truncate">{app.desc}</span>
                <span className="text-[9px] font-mono font-medium text-blue-600 bg-blue-50 px-1 py-0.2 rounded mt-0.5 inline-block">{app.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// Interactive split-view phone preview section for What We Build
function MobileAppShowcaseSection() {
  const categories = [
    {
      id: "fintech",
      title: "Fintech & Smart Payments",
      desc: "Instant multi-currency balances, dynamic graph dashboards, and live ledger transaction feeds engineered for secure processing.",
      icon: <CreditCard className="w-5 h-5 text-violet-600" />,
      color: "from-violet-500 to-purple-500",
      accent: "violet"
    },
    {
      id: "social",
      title: "Realtime Social Engines",
      desc: "Live audio/video portals, chat buffers, typing notifications, and micro-gesture messaging drawers optimized for retention.",
      icon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
      color: "from-emerald-500 to-teal-500",
      accent: "emerald"
    },
    {
      id: "health",
      title: "Biometric Fitness & Health",
      desc: "Dynamic heart-rate grids, step activity rings, target calorie trackers, and instant device synchronizations built for scale.",
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      color: "from-rose-500 to-pink-500",
      accent: "rose"
    },
    {
      id: "iot",
      title: "IoT Hardware & Smart Systems",
      desc: "Responsive remote controllers, immediate device switch handshakes, temperature gauges, and sensor logs built with near-zero latency.",
      icon: <Settings className="w-5 h-5 text-amber-500" />,
      color: "from-amber-500 to-orange-500",
      accent: "amber"
    },
    {
      id: "ai",
      title: "Intelligent AI Assistants",
      desc: "Natural language query responders, sparkling visual feedback indicators, automated workflows, and instant suggestions.",
      icon: <Bot className="w-5 h-5 text-blue-500" />,
      color: "from-blue-500 to-indigo-500",
      accent: "blue"
    }
  ];

  const [activeId, setActiveId] = useState("fintech");
  
  // IoT state
  const [acState, setAcState] = useState(true);
  const [lightLevel, setLightLevel] = useState(85);
  const [shieldActive, setShieldActive] = useState(true);

  // Msg state
  const [msgs, setMsgs] = useState([
    { text: "Server logic optimized by 30%!", self: false },
    { text: "Perfect. Publishing stable v1.0.", self: true }
  ]);
  const [inputText, setInputText] = useState("");
  
  const handleSendMsg = () => {
    if (!inputText.trim()) return;
    setMsgs(prev => [...prev, { text: inputText, self: true }]);
    const sentText = inputText;
    setInputText("");
    setTimeout(() => {
      setMsgs(prev => [...prev, { text: "Acknowledged! Let's build.", self: false }]);
    }, 800);
  };

  const activeCat = categories.find(c => c.id === activeId) || categories[0];

  return (
    <section className="py-16 bg-white border-b border-zinc-100 text-left relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-[5%] w-[300px] h-[300px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[300px] h-[300px] bg-[#2ebd73]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Title */}
        <div className="space-y-3.5 max-w-xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
            Bespoke App Products
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed">
            Click any core category below to inspect our premium interactive layouts and native features live inside the mock device simulator.
          </p>
        </div>

        {/* Asymmetrical split simulator framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 items-stretch">
          
          {/* Left Block - The segmented dynamic lists spanning 7 columns */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`p-6 rounded-[2rem] border cursor-pointer transition-all duration-305 relative overflow-hidden flex items-start space-x-5 ${
                    isActive 
                      ? "bg-zinc-50 border-zinc-300 shadow-md translate-x-1" 
                      : "bg-[#fafafa] border-zinc-200/80 hover:bg-zinc-50/50 hover:border-zinc-250"
                  }`}
                >
                  <div className={`p-3.5 rounded-2xl shrink-0 border mt-0.5 transition-all ${
                    isActive 
                      ? "bg-white text-zinc-950 border-zinc-300 shadow-sm" 
                      : "bg-zinc-100 text-zinc-500 border-zinc-200"
                  }`}>
                    {cat.icon}
                  </div>
                  
                  <div className="space-y-1.5 flex-1 select-none text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-extrabold text-zinc-950 tracking-tight font-sans">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-zinc-500 font-light leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  {isActive && (
                    <div className="text-zinc-550 flex items-center justify-center shrink-0 self-center">
                      <ArrowRight className="w-5 h-5 text-zinc-800" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Block - Premium Apple Device Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-3.5 rounded-[3.2rem] border-[8px] border-zinc-950 bg-zinc-950 shadow-2xl w-[285px] h-[540px] flex flex-col justify-between overflow-hidden group">
              
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-950 rounded-full flex items-center justify-around px-2.5 z-50">
                <div className="w-10 h-1 bg-zinc-850 rounded-full" />
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900 border border-zinc-950" />
              </div>

              {/* Status bar */}
              <div className="flex justify-between items-center text-[8.5px] font-mono text-zinc-400 font-extrabold pt-2 px-3 z-40 select-none pb-1.5 border-b border-zinc-800/30">
                <span>12:00</span>
                <div className="flex items-center space-x-1">
                  <span className="w-3 h-1.5 border border-zinc-500 rounded-xs flex items-center p-0.2">
                    <span className="bg-[#2ebd73] h-full w-4/5 rounded-xs block" />
                  </span>
                  <span>5G</span>
                </div>
              </div>

              {/* Inside Simulator Preview Area */}
              <div className="flex-grow bg-[#0B0B0C] text-white p-3 pt-4 flex flex-col justify-between relative overflow-hidden">
                
                {activeId === "fintech" && (
                  <motion.div
                    key="fin-sim"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-grow flex flex-col justify-between space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono font-black text-[#2ebd73] tracking-widest uppercase">VISA PAY PLATINUM</span>
                      <span className="text-[7px] text-zinc-400 font-mono">SECURE</span>
                    </div>

                    <div className="bg-gradient-to-tr from-violet-600 via-purple-600 to-pink-500 p-4 rounded-2xl h-24 flex flex-col justify-between shadow-lg relative overflow-hidden">
                      <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-white/10 rounded-full blur-lg" />
                      <div className="flex justify-between items-start">
                        <span className="text-[8px] font-mono tracking-widest text-white">Hyle Wallet</span>
                        <span className="text-[7.5px] font-mono font-bold bg-white/20 px-1 py-0.2 rounded">WORLD</span>
                      </div>
                      <div className="space-y-0.5 text-left">
                        <span className="text-[7px] font-mono text-zinc-100 block uppercase tracking-wider">Account Balance</span>
                        <span className="text-base font-black">$24,850.15</span>
                      </div>
                    </div>

                    {/* Highly informative ledger traffic graph */}
                    <div className="bg-zinc-850 p-2 rounded-xl border border-zinc-800 space-y-1 flex flex-col">
                      <div className="flex justify-between items-center text-[7px] font-mono">
                        <span className="text-zinc-400 uppercase block">LEDGER TRAFFIC (TPS)</span>
                        <span className="text-emerald-400">99.99% SECURE</span>
                      </div>
                      <div className="flex items-end justify-between h-8 pt-2">
                        {[30, 45, 25, 60, 85, 45, 55, 100].map((h, i) => (
                          <div key={i} className="flex-grow bg-zinc-800 rounded-xs mx-0.5 h-full relative overflow-hidden font-sans">
                            <div className="bg-gradient-to-t from-violet-600 to-purple-400 w-full absolute bottom-0" style={{ height: `${h}%` }} />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-[6px] text-zinc-500 font-mono mt-0.5">
                        <span>12:00:24 AM</span>
                        <span>Latency: 4.2ms</span>
                        <span>BLOC-39519</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 flex-grow text-left">
                      <span className="text-[8px] font-mono font-bold text-zinc-400 tracking-wider block uppercase">Recent Transfers</span>
                      <div className="space-y-1">
                        {[
                          { title: "Stripe payout", desc: "Sync pipeline", amt: "+$2,450.00", plus: true },
                          { title: "Figma Subscription", desc: "SaaS billing", amt: "-$42.00", plus: false }
                        ].map((tx, idx) => (
                          <div key={idx} className="bg-zinc-850 p-1.5 rounded-xl flex items-center justify-between border border-zinc-800">
                            <div className="text-left min-w-0">
                              <span className="text-[8.5px] font-bold block truncate leading-none mb-0.5">{tx.title}</span>
                              <span className="text-[7px] text-zinc-500 block truncate">{tx.desc}</span>
                            </div>
                            <span className={`text-[8.5px] font-mono font-bold shrink-0 ${tx.plus ? "text-emerald-400" : "text-zinc-400"}`}>{tx.amt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeId === "social" && (
                  <motion.div
                    key="soc-sim"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-grow flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-2">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-[8px] text-white">L</div>
                        <div className="text-left">
                          <span className="text-[9px] font-semibold block leading-none">Liam Architect</span>
                          <span className="text-[6.5px] font-mono text-emerald-400 block tracking-wide font-bold font-sans">● ONLINE // 42ms RTC</span>
                        </div>
                      </div>
                      <span className="text-[7px] bg-zinc-850 px-1 py-0.2 rounded font-mono text-zinc-400 font-bold border border-zinc-800">LIVE</span>
                    </div>

                    {/* Active room lists header */}
                    <div className="bg-zinc-850 p-2 rounded-xl border border-zinc-800 space-y-1 mb-2 text-[8px] font-mono">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-[450] uppercase font-bold text-zinc-400">SWARM CHANNELS</span>
                        <span className="text-[#2ebd73] bg-[#2ebd73]/15 px-1 rounded block mt-0.5">3 ACTIVE</span>
                      </div>
                      <div className="flex -space-x-1.5 items-center select-none pt-0.5">
                        <div className="w-4.5 h-4.5 rounded-full bg-violet-500 border border-zinc-900 flex items-center justify-center font-bold text-[7px] text-white">L</div>
                        <div className="w-4.5 h-4.5 rounded-full bg-indigo-500 border border-zinc-900 flex items-center justify-center font-bold text-[7px] text-white">J</div>
                        <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 border border-zinc-900 flex items-center justify-center font-bold text-[7px] text-white">S</div>
                        <span className="text-[7px] text-zinc-500 pl-3 leading-none font-sans font-light">+12 others streaming</span>
                      </div>
                    </div>

                    <div className="flex-grow space-y-1.5 overflow-y-auto mb-2 text-left pr-1 select-none flex flex-col justify-end">
                      {msgs.map((m, idx) => (
                        <div key={idx} className={`max-w-[85%] p-2 rounded-xl text-[8.5px] leading-tight flex flex-col ${
                          m.self 
                            ? "bg-[#2ebd73] text-white ml-auto" 
                            : "bg-zinc-850 text-zinc-200 mr-auto border border-zinc-800"
                        }`}>
                          <span>{m.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Integrated audio VOIP signal */}
                    <div className="bg-zinc-850 p-2 rounded-xl border border-zinc-800 flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-1.5 text-left">
                        <span className="text-emerald-400 text-[8px]">🔊</span>
                        <span className="text-[7.5px] font-mono font-bold text-zinc-300">VOIP CORE STREAMS</span>
                      </div>
                      <div className="flex space-x-0.5 h-4 items-center">
                        {[4, 10, 6, 12, 5, 14, 8, 4].map((h, i) => (
                          <motion.div 
                            key={i} 
                            style={{ height: `${h}px`, transformOrigin: "bottom" }}
                            animate={{ scaleY: [1, 1.8, 1] }}
                            transition={{ repeat: Infinity, duration: 1 + i * 0.1 }}
                            className="w-0.5 bg-emerald-400 rounded-full" 
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-1">
                      <input
                        type="text"
                        placeholder="Type message..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMsg()}
                        className="flex-1 bg-zinc-850 text-white rounded-full px-3 py-1.5 text-[8px] border border-zinc-800 outline-none focus:border-emerald-500 placeholder-zinc-550"
                      />
                      <button 
                        onClick={handleSendMsg}
                        className="bg-emerald-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-[9px] hover:bg-emerald-600 transition-colors shrink-0 cursor-pointer"
                      >
                        ⚡
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeId === "health" && (
                  <motion.div
                    key="fit-sim"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-grow flex flex-col justify-between space-y-2.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono font-black text-rose-500 tracking-widest uppercase font-bold">FitSync Active Tracker</span>
                      <span className="text-[7px] font-mono text-rose-400 bg-rose-500/10 px-1 py-0.2 rounded border border-rose-500/20 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-rose-500" /> ACTIVE
                      </span>
                    </div>

                    <div className="bg-zinc-850 p-3 rounded-2xl border border-zinc-805 flex items-center justify-between text-left relative overflow-hidden">
                      <div className="space-y-0.5">
                        <span className="text-[7.5px] font-mono text-zinc-450 block uppercase">Heart Pulse</span>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-xl font-black text-rose-455 pr-0.5">142</span>
                          <span className="text-[7px] font-mono text-zinc-550 font-bold">BPM</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center relative border border-rose-500/20">
                        <Heart className="w-5 h-5 text-rose-500" />
                      </div>
                    </div>

                    {/* Integrated dynamic system Telemetry */}
                    <div className="bg-zinc-850 p-2 rounded-xl border border-zinc-800 flex items-center justify-between text-left">
                      <div className="space-y-0.5">
                        <span className="text-[7px] font-mono text-zinc-400 uppercase">SYS TELEMETRY // SpO2</span>
                        <span className="text-[9px] font-extrabold text-[#2ebd73]">98% Normal Range</span>
                      </div>
                      <div className="text-[6px] font-mono text-zinc-550 border border-zinc-800 bg-zinc-90 w-auto bg-zinc-900 px-1.5 py-0.5 rounded leading-none">
                        STABLE
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="bg-zinc-850 p-2 rounded-xl border border-zinc-800">
                        <span className="text-[7px] font-mono text-zinc-400 uppercase block">KCAL BURNED</span>
                        <span className="text-[11px] font-extrabold text-white block">485 <span className="font-light text-zinc-500 text-[8px]">/ 600</span></span>
                        <div className="w-full bg-zinc-800 h-1 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-rose-500 h-full w-[80%]" />
                        </div>
                      </div>
                      <div className="bg-zinc-850 p-2 rounded-xl border border-zinc-800 font-sans">
                        <span className="text-[7px] font-mono text-zinc-400 uppercase block">STREAK</span>
                        <span className="text-[11px] font-extrabold text-[#2ebd73] block font-sans font-bold">12 Days</span>
                        <div className="w-full bg-zinc-800 h-1 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[85%]" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-850/50 p-2 rounded-xl border border-zinc-800">
                      <div className="flex justify-between items-center text-[7px] font-mono text-zinc-400 pb-1 border-b border-zinc-800/80">
                        <span>SUSTAINED LOAD GRAPH</span>
                        <span className="text-rose-450 font-bold">120 FPS LOCK</span>
                      </div>
                      <div className="flex items-end justify-between h-9 pt-2.5 px-1">
                        {[40, 60, 45, 80, 50, 75, 90, 65, 85].map((h, i) => (
                          <div key={i} className="w-1.5 bg-zinc-800 rounded-xs h-full relative overflow-hidden">
                            <div className="bg-gradient-to-t from-rose-600 to-pink-400 w-full absolute bottom-0" style={{ height: `${h}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeId === "iot" && (
                  <motion.div
                    key="iot-sim"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-grow flex flex-col justify-between space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono font-black text-amber-500 tracking-widest uppercase">SmartDome Home Node</span>
                      <span className="text-[7px] text-zinc-400">BLE VERIFIED</span>
                    </div>

                    {/* Hardware RSSI signal track */}
                    <div className="bg-zinc-850 p-2 rounded-xl border border-zinc-800 flex justify-between items-center">
                      <div className="space-y-0.5 text-left">
                        <span className="text-[7px] font-mono text-zinc-400 block uppercase">HARDWARE RSSI PING</span>
                        <span className="text-[9px] font-bold text-amber-500 block leading-none">-42 dBm (Excellent)</span>
                      </div>
                      <div className="flex items-end space-x-0.5 h-5 select-none pt-0.5">
                        {[2, 3, 4, 5].map((level, i) => (
                          <div key={i} className={`w-1 rounded-sm ${i < 3 ? "bg-amber-500" : "bg-zinc-800"}`} style={{ height: `${level * 4}px` }} />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 flex-grow select-none text-left">
                      <span className="text-[7.5px] font-mono text-zinc-400 uppercase block tracking-wider mb-0.5">Local Registers</span>

                      <div className="bg-zinc-850 p-1.5 rounded-xl border border-zinc-800 flex items-center justify-between">
                        <div className="text-left font-sans">
                          <span className="text-[9px] font-bold block">Climate Switch</span>
                          <span className="text-[7px] text-purple-400 block">{acState ? "Active Cooling" : "Standby State"}</span>
                        </div>
                        <button 
                          onClick={() => setAcState(!acState)}
                          className={`w-8 h-4.5 rounded-full p-0.5 transition-colors duration-300 shrink-0 cursor-pointer ${acState ? "bg-amber-500" : "bg-zinc-700"}`}
                        >
                          <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${acState ? "translate-x-3.5" : "translate-x-0"}`} />
                        </button>
                      </div>

                      <div className="bg-zinc-850 p-1.5 rounded-xl border border-zinc-800 flex items-center justify-between">
                        <div className="text-left">
                          <span className="text-[9px] font-bold block">Smart LED Dimmer</span>
                          <span className="text-[7px] text-zinc-455 block">Power: {lightLevel}% Lux</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={lightLevel}
                          onChange={(e) => setLightLevel(parseInt(e.target.value))}
                          className="w-16 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500 shrink-0"
                        />
                      </div>

                      <div className="bg-zinc-850 p-1.5 rounded-xl border border-zinc-800 flex items-center justify-between">
                        <div className="text-left font-sans">
                          <span className="text-[9px] font-bold block">Perimeter Lock</span>
                          <span className="text-[7px] text-emerald-400 block">{shieldActive ? "Guard ON" : "unlocked"}</span>
                        </div>
                        <button 
                          onClick={() => setShieldActive(!shieldActive)}
                          className={`w-8 h-4.5 rounded-full p-0.5 transition-colors duration-300 shrink-0 cursor-pointer ${shieldActive ? "bg-[#2ebd73]" : "bg-zinc-700"}`}
                        >
                          <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${shieldActive ? "translate-x-3.5" : "translate-x-0"}`} />
                        </button>
                      </div>
                    </div>

                    <div className="bg-zinc-850 p-1.5 rounded-xl border border-zinc-800 flex items-center justify-between text-[7px] font-mono text-zinc-450">
                      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#2ebd73]" /> Secure Network Connection</span>
                      <span>Local Link Active</span>
                    </div>
                  </motion.div>
                )}

                {activeId === "ai" && (
                  <motion.div
                    key="ai-sim"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-grow flex flex-col justify-between space-y-2.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono font-black text-blue-500 tracking-widest uppercase font-bold">AIS COGNITIVE AGENT</span>
                      <span className="text-[7.5px] text-zinc-400 font-mono font-bold">READY</span>
                    </div>

                    <div className="bg-zinc-850 border border-zinc-800 p-2 rounded-xl text-left space-y-1 font-sans">
                      <div className="flex items-center space-x-1 text-[8px] font-mono text-zinc-400 font-bold">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <span>PROMPT ENTRY</span>
                      </div>
                      <p className="text-[9px] leading-relaxed text-zinc-200">
                        "Analyze user retention metrics and review active security handshakes."
                      </p>
                    </div>

                    {/* Integrated dynamic model parameter controls */}
                    <div className="bg-zinc-850 p-2 rounded-xl border border-zinc-805 text-left space-y-1">
                      <span className="text-[7px] font-mono text-zinc-400 block uppercase font-bold">MODEL SETTINGS SCHEMA</span>
                      <div className="grid grid-cols-2 gap-1.5 text-[7px] text-zinc-400 font-mono font-bold">
                        <div className="bg-zinc-900 p-1 rounded border border-zinc-800 flex justify-between">
                          <span>Temp: 0.15</span>
                          <span className="text-blue-400 font-extrabold text-[6.5px]">Strict</span>
                        </div>
                        <div className="bg-zinc-900 p-1 rounded border border-zinc-800 flex justify-between">
                          <span>Top K: 40</span>
                          <span className="text-[#2ebd73] font-extrabold text-[6.5px]">Safe</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 p-2 rounded-xl border border-blue-500/20 text-left space-y-1 flex-grow font-sans">
                      <span className="text-[8px] font-mono text-emerald-400 font-bold leading-none block">✓ AGENT OUTPUT STREAMS</span>
                      <p className="text-[8.5px] leading-normal text-zinc-300">
                        Retention metrics are up <span className="font-bold text-white pr-0.5">+11.2%</span>. Core security tokens successfully verified via offline biometrics enclave.
                      </p>
                      <div className="flex gap-1 pt-0.5 font-mono">
                        <span className="bg-blue-500/20 px-1.5 py-0.5 rounded text-[6.5px] text-blue-300 border border-blue-500/10">Telemetry</span>
                        <span className="bg-blue-500/20 px-1.5 py-0.5 rounded text-[6.5px] text-blue-300 border border-blue-500/10">Safe Enclave</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-950/25 to-indigo-950/25 p-1.5 rounded-xl border border-blue-500/20 flex items-center justify-between text-left text-[7.5px] font-mono font-bold">
                      <span className="text-blue-300 uppercase">OUTSTREAM SPEED</span>
                      <span className="text-[#2ebd73] font-sans">82 Tokens/Sec</span>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Bottom Home Indicator */}
              <div className="w-24 h-1 bg-zinc-800 rounded-full mx-auto select-none pt-0.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


// Custom Bespoke Bento Technical Specification Matrix for Tactical Deliverables
function TacticalDeliverablesSection({ service, serviceId }: { service: any; serviceId: string }) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Dynamically map service capabilities to dynamic specification cards and parameters
  const blueprints = service.capabilities.map((cap: string, idx: number) => {
    const detail = getCapabilityDetail(serviceId, cap, idx);
    
    // Create professional default steps and benefit dynamically based on title keywords
    let steps = [
      "Analyze project requirements and map out specific scope parameters",
      "Establish modular components designed for high efficiency",
      "Validate the live components on simulated device environments"
    ];
    let benefit = "Enhances operational security and user retention rates.";
    let status = "ACTIVE";
    let engine = "Clean Architecture Modules";
    let protocol = "Optimized Pipeline Streams";

    const t = cap.toLowerCase();
    
    if (t.includes("design") || t.includes("responsive") || t.includes("visual") || t.includes("ui") || t.includes("ux") || t.includes("logo") || t.includes("branding") || t.includes("identity") || t.includes("prototype") || t.includes("wireframe") || t.includes("experience")) {
      engine = "Responsive Design Engine";
      protocol = "Pixel-Perfect Layout Specs";
      steps = [
        "Design clickable layouts & initial visual mood boards",
        "Refine layout spacing standards and typography weights",
        "Ensure perfect visual scaling across high-resolution active screens"
      ];
      benefit = "Grows overall brand trust and improves immediate user engagement.";
      status = "DESIGNED";
    } else if (t.includes("compatibility") || t.includes("cross-platform") || t.includes("hybrid") || t.includes("multiplayer") || t.includes("publishing") || t.includes("platform")) {
      engine = "Unified Code Engineering";
      protocol = "Single-Codebase Compilation";
      steps = [
        "Share core data-flow algorithms across platforms",
        "Conduct thorough responsive unit test coverages with system simulations",
        "Optimize delivery bundles and compilation artifacts to reduce weight"
      ];
      benefit = "Significantly reduces ongoing code maintenance budgets.";
      status = "COMPATIBLE";
    } else if (t.includes("performance") || t.includes("speed") || t.includes("optimization") || t.includes("fast") || t.includes("compress") || t.includes("physics")) {
      engine = "Asset Compression Systems";
      protocol = "Sub-Millisecond Query Response";
      steps = [
        "Minimize asset weights and compress redundant media resources",
        "Benchmark thread execution times and identify latency spikes",
        "Prune render paths to achieve consistently smooth high-frequency framerates"
      ];
      benefit = "Maintains consistently fast interaction speeds and device responsiveness.";
      status = "OPTIMIZED";
    } else if (t.includes("database") || t.includes("api") || t.includes("integration") || t.includes("cms") || t.includes("backend") || t.includes("frontend") || t.includes("development") || t.includes("payment")) {
      engine = "Automated API Interceptors";
      protocol = "Type-Safe Network Sockets";
      steps = [
        "Establish secure and robust API endpoint triggers",
        "Configure custom data schemas and persistence models",
        "Deploy resilient networks that cache requested content instantly"
      ];
      benefit = "Synchronizes your data operations seamlessly even on slow networks.";
      status = "INTEGRATED";
    } else if (t.includes("auth") || t.includes("user") || t.includes("secure") || t.includes("encryption") || t.includes("keychain") || t.includes("security")) {
      engine = "Cryptographic Security Keys";
      protocol = "Secure Session Token Stores";
      steps = [
        "Set up standard single sign-on security flows",
        "Enforce type-safe cryptographic key verification rules",
        "Deploy robust database and server validation guards to protect client data"
      ];
      benefit = "Completely safeguards user privacy and operational security.";
      status = "SECURED";
    }

    return {
      title: cap,
      engine,
      protocol,
      payload: detail,
      steps,
      benefit,
      status
    };
  });

  // Guard activeIdx since different services have different capabilities count
  const safeIdx = activeIdx >= blueprints.length ? 0 : activeIdx;
  const currentBp = blueprints[safeIdx] || blueprints[0] || {
    title: "",
    engine: "Operational Metric",
    protocol: "Production Spec",
    payload: "",
    steps: [],
    benefit: "Guarantees reliable system behavior.",
    status: "READY"
  };

  return (
    <section id="deep-dive-capabilities" className="py-16 bg-white text-left relative overflow-hidden">
      {/* Design-forward grid effects */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-200/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3.5 max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
              Tactical Deliverables
            </h2>
            <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-500">
              We apply professional framework structures to craft secure, pristine native components. Click any capability block to inspect its parameters and deliverables.
            </p>
          </div>

          {/* Quick stats panel */}
          <div className="flex items-center gap-4 bg-white border border-zinc-200 p-4 rounded-[1.5rem] shrink-0 shadow-sm text-sm">
            <div className="text-center px-4 border-r border-zinc-100">
              <span className="text-[9px] text-zinc-400 block uppercase font-bold tracking-wider">Total Modules</span>
              <span className="text-lg font-black text-zinc-900">{service.capabilities.length} Cap</span>
            </div>
            <div className="text-center px-2">
              <span className="text-[9px] text-zinc-400 block uppercase font-bold tracking-wider">Release Quality</span>
              <span className="text-lg font-black text-[#2ebd73] font-sans">A++ Certified</span>
            </div>
          </div>
        </div>

        {/* Dynamic Spec Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left Column: Interactive White Delivery Specification Card (Illustration) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-[2.5rem] p-6 text-zinc-800 flex flex-col justify-between h-full border border-zinc-200 shadow-md relative overflow-hidden group min-h-[460px] md:min-h-[500px]">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-zinc-100 pb-4 mb-4 select-none">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-zinc-100 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-zinc-100 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-zinc-100 rounded-full" />
                </div>
              </div>

              {/* Specification data list */}
              <div className="space-y-4 flex-grow mb-6 text-xs text-left">
                <div className="space-y-1">
                  <span className="text-[8px] text-zinc-400 block uppercase tracking-widest font-bold font-sans">Active Deliverable</span>
                  <span className="text-lg font-sans font-black text-zinc-900 tracking-tight">{currentBp.title}</span>
                </div>

                <div className="border-t border-zinc-100 pt-3.5 space-y-1">
                  <span className="text-[8px] text-zinc-400 block uppercase tracking-wider font-bold">What we deliver</span>
                  <p className="text-[11.5px] text-zinc-600 font-normal leading-relaxed">{currentBp.payload}</p>
                </div>

                {/* Step-by-Step implementation list */}
                <div className="border-t border-zinc-100 pt-3.5 space-y-2">
                  <span className="text-[8px] text-zinc-400 block uppercase tracking-wider font-bold">Implementation Roadmap</span>
                  <div className="space-y-2.5">
                    {currentBp.steps.map((step: string, sIdx: number) => (
                      <div key={sIdx} className="flex gap-2.5 items-start">
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-zinc-50 border border-zinc-150 text-zinc-605 text-[9px] font-bold shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span className="text-[11px] text-zinc-650 leading-normal">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-3.5 space-y-1">
                  <span className="text-[8px] text-zinc-400 block uppercase tracking-wider font-bold">Core Benefit</span>
                  <span className="text-[11px] text-[#2ebd73] font-bold block">✓ {currentBp.benefit}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grid of capability tiles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blueprints.map((bp: any, idx: number) => {
              const isActive = idx === safeIdx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className={`p-5 rounded-[2rem] border cursor-pointer flex items-start space-x-4 transition-all duration-300 select-none group ${
                    isActive
                      ? "bg-[#2ebd73]/[0.02] border-[#2ebd73] shadow-md shadow-[#2ebd73]/5"
                      : "bg-white border-zinc-200/95 hover:bg-zinc-50 hover:border-zinc-300 shadow-xs"
                  }`}
                >
                  <div className={`p-3 rounded-2xl border shrink-0 mt-0.5 transition-all duration-300 ${
                    isActive
                      ? "bg-[#2ebd73] text-white border-[#2ebd73]"
                      : "bg-zinc-50 border-zinc-150 text-zinc-700 group-hover:bg-[#2ebd73]/10 group-hover:text-[#2ebd73] group-hover:border-[#2ebd73]/20"
                  }`}>
                    {getCapabilityIcon(bp.title)}
                  </div>
                  
                  <div className="space-y-1 flex-1 text-left min-w-0">
                    <div className="flex items-center gap-2 justify-between">
                      <h4 className="text-[13px] font-black text-zinc-950 tracking-tight font-sans truncate">
                        {bp.title}
                      </h4>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2ebd73]" />
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-normal font-light truncate">
                      {bp.engine} // {bp.protocol}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}


function GameDevelopmentQuestPipelineExplorer() {
  const [activeLevel, setActiveLevel] = useState(0);

  const questMap = [
    {
      lvl: "01",
      questName: "Concept & Art",
      title: "GDD Design & Art Concepting",
      duration: "Weeks 1-2",
      icon: <Paintbrush className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500 to-pink-500",
      accent: "purple",
      desc: "Our game design architects map mechanics, design documentations, custom character models, orthographic guides, and target platform constraints.",
      loot: [
        "Interactive Game Design Document (GDD)",
        "Bespoke 2D/3D concept art & character sheets",
        "Target platform engineering matrix specs",
        "Core mechanics sandbox flowcharts"
      ]
    },
    {
      lvl: "02",
      questName: "Core Prototyping",
      title: "Vertical Slice Mechanics Testing",
      duration: "Weeks 3-4",
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500 to-indigo-500",
      accent: "blue",
      desc: "We build grey-box environments to test core action vectors, movement controllers, camera interpolation boundaries, and test collision mechanics.",
      loot: [
        "Playable grey-box mechanics build",
        "Dynamic camera system configs",
        "Configured controller binding templates",
        "Synthesized sound effects design layout"
      ]
    },
    {
      lvl: "03",
      questName: "Production Speed",
      title: "Assembly & Logic Coding",
      duration: "Weeks 5-8",
      icon: <Gamepad2 className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500 to-teal-400",
      accent: "emerald",
      desc: "Our game developers construct highly-polished client game logic and integrate beautiful materials, textures, custom audio scores, and system scripts.",
      loot: [
        "Optimized client state logic codebase",
        "Fully implemented high-fidelity art assets",
        "Configured particle and VFX templates",
        "Low latency multiplayer netcode / local persistent save slots"
      ]
    },
    {
      lvl: "04",
      questName: "Playtesting",
      title: "Hardening & Balance Matrix Audits",
      duration: "Week 9",
      icon: <CheckCircle2 className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500 to-orange-500",
      accent: "amber",
      desc: "We perform thorough playtests, compile heatmaps, balance combat parameters or score constants, and audit performance bounds to target 60-120 FPS.",
      loot: [
        "Automated stress testing report datasets",
        "Game balance adjustment matrices config",
        "Integrated ads, purchases, and telemetry platforms",
        "VRAM & GPU frame timing audit compliance"
      ]
    },
    {
      lvl: "05",
      questName: "Deployment",
      title: "App Store / Steam Live Launch",
      duration: "Week 10",
      icon: <Target className="w-5 h-5 text-rose-400" />,
      color: "from-rose-500 to-pink-500",
      accent: "rose",
      desc: "We manage compilation details, platform-specific certificates, storefront setup for Steam, Apple, or Google Play, and publish your finished product.",
      loot: [
        "Live storefront submission page setups",
        "Signed distribution-safe compiled packages",
        "Continuous integration deployment pipelines",
        "Live remote-config updates setup"
      ]
    }
  ];

  const currentQuest = questMap[activeLevel];

  return (
    <section className="py-16 bg-zinc-50 text-zinc-950 border-b border-zinc-200/80 text-left relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 font-sans">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3.5 max-w-xl text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2ebd73] animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 font-bold">DEVELOPMENT ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none">
              Development Roadmap
            </h2>
            <p className="text-zinc-650 text-sm sm:text-base font-light leading-relaxed">
              We translate raw game pitches into fully polished, certified titles. Click any milestone node to view deliverables.
            </p>
          </div>
        </div>

        {/* Dynamic Games Level Quest Path */}
        <div className="bg-white border border-zinc-200 shadow-xs rounded-[2.5rem] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative select-none">
          {questMap.map((item, idx) => (
            <React.Fragment key={idx}>
              <button
                onClick={() => setActiveLevel(idx)}
                className={`group relative flex flex-col items-center p-3 rounded-2xl transition-all duration-300 pointer-events-auto cursor-pointer ${
                  activeLevel === idx 
                    ? "bg-zinc-50 border border-zinc-200/80 shadow-xs scale-[1.03]" 
                    : "hover:bg-zinc-50/50 bg-transparent text-zinc-400 border border-transparent hover:scale-101"
                }`}
              >
                {/* Visual Circle Node */}
                <div className="relative">
                  {/* Glowing Outline Ring */}
                  {activeLevel === idx && (
                    <span className="absolute -inset-1.5 rounded-full bg-[#2ebd73]/15 animate-ping pointer-events-none" />
                  )}
                  
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    activeLevel === idx 
                      ? "bg-gradient-to-tr from-white to-zinc-50 border-[#2ebd73] text-[#2ebd73] shadow-md" 
                      : activeLevel > idx
                      ? "bg-[#2ebd73]/10 border-[#2ebd73]/35 text-[#2ebd73]"
                      : "bg-zinc-50 border-zinc-200 text-zinc-400 group-hover:border-zinc-300"
                  }`}>
                    {activeLevel > idx ? "✓" : item.lvl}
                  </div>
                </div>

                <div className="text-center mt-3 space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 block uppercase">STAGE 0{idx + 1}</span>
                  <span className={`text-xs font-bold tracking-tight ${
                    activeLevel === idx ? "text-zinc-950" : "text-zinc-500 group-hover:text-zinc-850"
                  }`}>{item.questName}</span>
                </div>
              </button>

              {/* Connecting line between nodes (if not the last node) */}
              {idx < questMap.length - 1 && (
                <div className="hidden md:block flex-1 h-0.5 bg-zinc-200 relative mx-2">
                  <div className={`absolute inset-y-0 left-0 transition-all duration-500 ${
                    activeLevel > idx ? "bg-[#2ebd73]" : "w-0 bg-transparent"
                  }`} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Level Details Board with Loot list */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, scale: 0.99, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 sm:p-10 shadow-md relative overflow-hidden"
        >
          {/* Edge glowing quest light bar */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#2ebd73] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center col-span-12">
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                  {currentQuest.icon}
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold block uppercase leading-none">STAGE GOAL / {currentQuest.duration}</span>
                  <h4 className="text-sm font-bold font-mono text-zinc-500 mt-1 uppercase">{currentQuest.questName}</h4>
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                  {currentQuest.title}
                </h3>
                <p className="text-zinc-650 text-sm sm:text-base font-light leading-relaxed">
                  {currentQuest.desc}
                </p>
              </div>
            </div>

            <div className="md:col-span-5 bg-zinc-50 border border-zinc-200 p-6 md:p-8 rounded-[2rem] space-y-4 text-left relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-brand/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span className="text-[9px] font-mono tracking-wider text-emerald-700 block uppercase font-bold">
                  🏆 DECISIVE MILESTONES & DELIVERABLES
                </span>
                <span className="text-[8px] font-mono text-zinc-450 font-bold uppercase">SECURE SYNC</span>
              </div>
              <div className="space-y-3.5">
                {currentQuest.loot.map((item, keyIdx) => (
                  <div key={keyIdx} className="flex items-start space-x-3 text-left">
                    <span className="text-sm shrink-0 mt-0.5">📦</span>
                    <span className="text-xs sm:text-[13px] text-zinc-700 leading-snug font-medium border-0">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


// Interactive Sprint phase boards specifically for mobile dev process
function MobileSprintPipelineExplorer() {
  const [activeStep, setActiveStep] = useState(0);

  const pipeline = [
    {
      num: "01",
      phase: "Product Blueprinting",
      title: "Discovery & User Flows",
      duration: "Week 1",
      color: "from-blue-600 to-indigo-500",
      accent: "blue",
      desc: "Our Mobile Product Architects host intensive whiteboard syncs to draft thorough user scenarios, system specifications, database connections, and visual site architecture.",
      deliverables: [
        "Dynamic clickable Figma Wireframes",
        "E-R Database connection mapping diagram",
        "Thorough REST/GraphQL API contracts",
        "Technical systems specification doc"
      ]
    },
    {
      num: "02",
      phase: "Interface Crafting",
      title: "UI/UX Design Sprints",
      duration: "Weeks 2-3",
      color: "from-violet-500 to-purple-500",
      accent: "violet",
      desc: "We build beautiful pixel-perfect, custom app layouts centering strong display layouts, crisp brand colors, intuitive physical gestures, and smooth spring-based frame animations.",
      deliverables: [
        "Bespoke High-Fidelity UI Screens",
        "Interactive Prototype gesture feedback flows",
        "Prismatic dark and light vector themes",
        "Design token system exporter mappings"
      ]
    },
    {
      num: "03",
      phase: "Code Construction",
      title: "Native Speed Development",
      duration: "Weeks 4-7",
      color: "from-emerald-500 to-teal-400",
      accent: "emerald",
      desc: "Using pure Swift, Kotlin, React Native, or Flutter, our engineers develop beautiful frontend client layers linked to robust fast Node.js/Go backend servers.",
      deliverables: [
        "Clean, documented TypeScript or Native codebases",
        "Zero-delay local key-value state engines",
        "Robust secure cookie-based auth modules",
        "Server-side API handlers and caching layer"
      ]
    },
    {
      num: "04",
      phase: "Telemetry & QA",
      title: "Optimization & Hardening",
      duration: "Week 8",
      color: "from-rose-500 to-pink-500",
      accent: "rose",
      desc: "Every view undergoes structural frame checks, automated integration testing, biometrics testing, and payload checks to ensure 120 FPS performance and perfect execution.",
      deliverables: [
        "Fast 99.9% Test Coverage results",
        "Payload rate limit stress indicators",
        "Battery consumption and frame-rate reports",
        "FCM/APNs message payload verification proofs"
      ]
    },
    {
      num: "05",
      phase: "Store Deployment",
      title: "TestFlight & App Store Launch",
      duration: "Week 9",
      color: "from-amber-500 to-orange-400",
      accent: "amber",
      desc: "We take care of compiling optimized production binaries, setting up App Store Connect & Google Play Console environments, managing metadata review details, and publishing your live application.",
      deliverables: [
        "Published live App Store product view",
        "Google Play Console successful approvals",
        "Automated deployment build pipelines",
        "Initial analytics instrumentation tracker"
      ]
    }
  ];

  const current = pipeline[activeStep];

  return (
    <section className="py-16 bg-[#fafafa] border-b border-zinc-100 text-left relative overflow-hidden">
      {/* Decorative blurred backdrops */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-violet-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Title */}
        <div className="space-y-3.5 max-w-xl text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
            How We Build Apps
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed">
            Our agile pipeline guarantees pixel-perfect screens, native speed performance, and safe deployment. Click any stage to inspect milestones.
          </p>
        </div>

        {/* Phase navigation bar */}
        <div className="flex gap-2 p-1.5 bg-zinc-200/50 rounded-2xl border border-zinc-250/60 overflow-x-auto select-none no-scrollbar">
          {pipeline.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 min-w-[150px] py-4 px-5 rounded-xl text-left transition-all duration-300 relative overflow-hidden shrink-0 cursor-pointer ${
                activeStep === idx 
                  ? "bg-white border border-zinc-250 shadow-md scale-[1.01]" 
                  : "hover:bg-zinc-100 bg-transparent text-zinc-500 hover:text-zinc-850"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold font-mono tracking-wider text-zinc-400">STAGE {item.num}</span>
              </div>
              <span className={`text-xs font-extrabold font-sans tracking-tight block ${
                activeStep === idx ? "text-zinc-955" : "text-zinc-650"
              }`}>
                {item.phase}
              </span>
            </button>
          ))}
        </div>

        {/* Active Phase Details Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 sm:p-10 shadow-lg relative overflow-hidden"
        >
          {/* Aesthetic colored left edge border */}
          <div className={`absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-b ${current.color}`} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            <div className="md:col-span-7 space-y-5 text-left">
              <div className="flex items-center space-x-3.5">
                <span className="rounded-xl px-3.5 py-1.5 bg-zinc-950 text-white font-mono font-black text-xs shadow-inner tracking-widest border border-zinc-800">
                  STAGE {current.num}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono font-black uppercase text-brand tracking-wider block">{current.phase}</span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 font-sans tracking-tight leading-none">
                  {current.title}
                </h3>
              </div>

              <p className="text-zinc-550 text-sm sm:text-base font-light leading-relaxed">
                {current.desc}
              </p>
            </div>

            <div className="md:col-span-5 bg-zinc-50 border border-zinc-200 p-6 md:p-8 rounded-[2rem] space-y-4 text-left">
              <span className="text-[10px] font-mono font-black tracking-wider text-zinc-400 block uppercase border-b border-zinc-200 pb-2">
                DAILY SPRINT DELIVERABLES
              </span>
              <div className="space-y-3">
                {current.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-3 text-left">
                    <div className="w-4 h-4 rounded-full bg-[#2ebd73] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-[13.5px] text-zinc-850 font-medium font-sans leading-snug">
                      {del}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}


// Bento-box layout specifically for mobile dev Why ChooseUs
function MobileBentoWhyChoose() {
  return (
    <section className="py-16 bg-white border-b border-zinc-100 text-left relative overflow-hidden">
      {/* Dynamic backdrop spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Title */}
        <div className="space-y-3.5 max-w-xl text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0c0d] tracking-tight leading-none font-sans">
            Why Choose Hyle Studios
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed">
            We operate at elite engineering standards to provide outstanding, long-term business performance for mobile brands.
          </p>
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 items-stretch">
          
          {/* Card 1: Swift / Native Compilation (Spans 7 Cols) */}
          <div className="md:col-span-7 bg-[#fafafa] hover:bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 p-6 sm:p-8 rounded-[2rem] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
            <div className="absolute right-0 bottom-0 w-36 h-36 bg-gradient-to-tr from-rose-500/10 to-transparent rounded-full blur-xl pointer-events-none" />
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 shadow-sm shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <h4 className="text-lg font-bold text-zinc-950 font-sans tracking-tight">Pure CPU Speed & Compilation Performance</h4>
                <p className="text-xs sm:text-[13.5px] text-zinc-500 font-light leading-relaxed max-w-lg">
                  Every pipeline we deploy is compiled directly to native CPU binaries using elite compilers (LLVM, Swift, Kotlin), stripping unused code assets to run with outstanding fluid motion.
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-6 select-none font-mono text-[9px] text-zinc-400">
              <div className="bg-white border rounded-xl p-3 border-zinc-200 shadow-xs flex-1 text-left">
                <span className="block text-zinc-850 font-sans font-black text-xs text-rose-500 leading-none">sustained</span>
                <span className="block text-[15px] font-bold text-zinc-950 mt-1 font-mono">120 FPS</span>
              </div>
              <div className="bg-white border rounded-xl p-3 border-zinc-200 shadow-xs flex-1 text-left">
                <span className="block text-zinc-850 font-sans font-black text-xs text-emerald-500 leading-none">app payload size</span>
                <span className="block text-[15px] font-bold text-zinc-950 mt-1 font-mono">&lt; 4.2 MB</span>
              </div>
            </div>
          </div>

          {/* Card 2: Biometrics Secure Wallet Nodes (Spans 5 Cols) */}
          <div className="md:col-span-5 bg-[#fafafa] hover:bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 p-6 sm:p-8 rounded-[2rem] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#2ebd73]/5 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 text-left font-sans">
                <h4 className="text-lg font-bold text-zinc-950 tracking-tight">Secure Sandbox Enclave</h4>
                <p className="text-xs sm:text-[13px] text-zinc-500 font-light leading-relaxed">
                  We integrate hardware-level FaceID/TouchID biometrics and AES-256 local keychain tokens for safe offline identity verification.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-2xl border border-zinc-200 flex flex-col gap-3 mt-4 select-none relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#2ebd73]/5 rounded-full blur-md pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Fingerprint className="w-6 h-6 text-[#2ebd73]" />
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-zinc-950 block font-black tracking-tight leading-none mb-0.5">SANDBOX ACTIVE</span>
                    <span className="text-[7px] font-mono text-zinc-500 block uppercase leading-none">Biometrics Verified</span>
                  </div>
                </div>
                <span className="text-[7.5px] font-mono font-bold text-[#2ebd73] bg-[#2ebd73]/10 px-1.5 py-0.5 rounded border border-[#2ebd73]/15">VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Card 3: App Store Certification Launch (Spans 5 Cols) */}
          <div className="md:col-span-5 bg-[#fafafa] hover:bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 p-6 sm:p-8 rounded-[2rem] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 shadow-sm shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 text-left font-sans">
                <h4 className="text-lg font-bold text-zinc-950 tracking-tight">Reject-Proof Submission</h4>
                <p className="text-xs sm:text-[13px] text-zinc-500 font-light leading-relaxed">
                  We pre-check every layout of the interface against Apple Human Interface and Android Design guidelines, bypassing review delay rejections completely.
                </p>
              </div>
            </div>
            <div className="pt-4 text-left">
              <span className="text-[24px] font-black tracking-tight text-zinc-950 font-sans leading-none block">100%</span>
              <span className="text-[9px] font-mono font-bold tracking-wider text-violet-600 bg-violet-50 px-1.5 py-0.5 rounded uppercase mt-1 inline-block">Approval Rate</span>
            </div>
          </div>

          {/* Card 4: Architecture Integration (Spans 7 Cols) */}
          <div className="md:col-span-7 bg-[#fafafa] hover:bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 p-6 sm:p-8 rounded-[2rem] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
            <div className="absolute left-0 bottom-0 w-44 h-44 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-xl pointer-events-none" />
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm shrink-0">
                <Figma className="w-5 h-5" />
              </div>
              <div className="space-y-2 text-left font-sans">
                <h4 className="text-lg font-bold text-zinc-950 tracking-tight">Cross-Device Fluid Adaptability</h4>
                <p className="text-xs sm:text-[13.5px] text-zinc-500 font-light leading-relaxed max-w-lg">
                  Unified logic modules sync layouts effortlessly between the latest widescreen iPads, Android foldables, and ultra-high dynamic phone monitors safely.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 pt-6 flex-wrap select-none text-[8px] font-mono text-zinc-650 justify-start">
              <span className="bg-white px-2.5 py-1 rounded-full border border-zinc-200 font-bold shadow-xs">iPadOS Pro Ready</span>
              <span className="bg-white px-2.5 py-1 rounded-full border border-zinc-200 font-bold shadow-xs">Android Foldables OK</span>
              <span className="bg-white px-2.5 py-1 rounded-full border border-zinc-200 font-bold shadow-xs">Haptic Gestures</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


// Interactive Architecture Flow Diagram with actual local play state
function InteractiveArchitectureSection() {
  const [activeTab, setActiveTab] = useState<"ui" | "api" | "db">("ui");
  const [uiDark, setUiDark] = useState(false);
  const [uiValue, setUiValue] = useState(70);
  const [apiTesting, setApiTesting] = useState(false);
  const [apiLogs, setApiLogs] = useState<Array<{time: string, text: string, type: "success" | "info"}>>([
    { time: "18:24:01", text: "STATION INIT // EDGE ROUTE OK", type: "info" },
    { time: "18:24:02", text: "VITE APP SERVER BIND ON PORT [3000]", type: "info" }
  ]);
  const [dbRecords, setDbRecords] = useState<Array<{id: string, name: string, status: string, time: string}>>([
    { id: "7a29f", name: "Acme Corp SaaS", status: "Active", time: "just now" },
    { id: "4c11b", name: "Stripe Webhook", status: "Verified", time: "2m ago" },
    { id: "e902f", name: "User Auth Session", status: "Online", time: "10m ago" }
  ]);

  const handleRunApiTest = () => {
    if (apiTesting) return;
    setApiTesting(true);
    setApiLogs(prev => [
      ...prev,
      { time: new Date().toLocaleTimeString().split(" ")[0], text: "POST /api/v1/telemetry... START", type: "info" }
    ]);
    setTimeout(() => {
      setApiTesting(false);
      setApiLogs(prev => [
        ...prev,
        { time: new Date().toLocaleTimeString().split(" ")[0], text: "200 OK (Latency: 14ms) // CACHED", type: "success" }
      ]);
    }, 1000);
  };

  const handleDbInsertion = () => {
    const clients = ["NextGen Media", "Skyline SaaS", "RetailFlow", "EdgeVentures", "Solstice App", "Apex Web", "Vertex AI"];
    const randomClient = clients[Math.floor(Math.random() * clients.length)];
    const randomId = Math.random().toString(16).substring(3, 8);
    setDbRecords(prev => [
      { id: randomId, name: randomClient, status: "Active", time: "just now" },
      ...prev.slice(0, 3)
    ]);
  };

  return (
    <section className="py-12 bg-zinc-50/70 border-b border-zinc-100 text-left relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Punchy Short Overview */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none">
              High-Fidelity Architecture. Built Simple.
            </h2>
            <p className="text-zinc-[950] text-sm sm:text-base font-light leading-relaxed text-zinc-650 max-w-xl">
              Our websites and custom software represent extreme computational efficiency. We eliminate unnecessary framework bloat, delivering layout accuracy coupled with lightning-fast routing.
            </p>

            {/* Grid of 3 key structural cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white border border-zinc-200/80 p-5 rounded-[1.5rem] space-y-2 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] font-mono font-bold uppercase text-zinc-900">100/100 Core</h4>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  Lighthouse optimized to keep clients from waiting.
                </p>
              </div>

              <div className="bg-white border border-zinc-200/80 p-5 rounded-[1.5rem] space-y-2 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] font-mono font-bold uppercase text-zinc-900">Multi-Layer</h4>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  Decoupled UI, caching rules, secure transactional APIs.
                </p>
              </div>

              <div className="bg-white border border-zinc-200/80 p-5 rounded-[1.5rem] space-y-2 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] font-mono font-bold uppercase text-zinc-900">Edge-Ready</h4>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  Distributed cloud node replication for persistent status.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Sandbox Visual */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {/* Interactive Selector Toolbar */}
            <div className="flex bg-zinc-100 p-1.5 rounded-full border border-zinc-205 justify-between">
              {[
                { id: "ui", title: "1. PRESENTATION (UI)" },
                { id: "api", title: "2. INTERACTION (API)" },
                { id: "db", title: "3. PERSISTENCE (DB)" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 text-[9px] sm:text-[10px] font-mono font-black py-2.5 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-zinc-950 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-805"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Live Diagram Rendering Box */}
            <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 shadow-xl relative min-h-[300px] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-1.5 z-10">
                <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
              </div>

              {/* Decorative dynamic wireframe connectors */}
              <div className="absolute top-4 right-4 text-[8px] font-mono text-zinc-400 font-bold uppercase tracking-widest bg-zinc-100 px-2 py-0.5 rounded-md">
                MODULE: {activeTab === "ui" ? "FRONTEND" : activeTab === "api" ? "REST ENDPOINT" : "FAST DATABASE"}
              </div>

              {/* Active Tab Screen */}
              <div className="flex-1 flex flex-col justify-center items-center py-6 mt-4">
                {activeTab === "ui" && (
                  <motion.div
                    key="ui-layer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`w-full max-w-sm rounded-2xl border p-4 shadow-md transition-all duration-500 ${
                      uiDark ? "bg-zinc-950 border-zinc-800 text-white" : "bg-neutral-50/50 border-zinc-200 text-zinc-800"
                    }`}
                  >
                    <div className="flex justify-between items-center border-b pb-2 mb-3 border-zinc-150">
                      <span className="text-[10px] font-mono font-black tracking-wide">Live React Preview</span>
                      <button
                        onClick={() => setUiDark(!uiDark)}
                        className={`text-[8.5px] font-mono font-bold uppercase px-2 py-1 rounded border transition-colors ${
                          uiDark ? "bg-zinc-900 border-zinc-800 text-brand" : "bg-white border-zinc-200 text-zinc-500"
                        }`}
                      >
                        {uiDark ? "Switch Light" : "Switch Dark"}
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="h-6 bg-gradient-to-r from-emerald-500/20 to-teal-400/20 rounded-md flex items-center justify-between px-2 text-[9px] font-semibold text-emerald-800">
                        <span>🚀 VITE OPTIMIZATION PIPELINE</span>
                        <span className="text-[8.5px] font-mono bg-emerald-500 text-white px-1.5 py-0.5 rounded">HMR ACTIVE</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-mono">
                          <span>Fluid Columns Capacity</span>
                          <span>{uiValue}%</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          value={uiValue}
                          onChange={(e) => setUiValue(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-brand"
                        />
                      </div>

                      <div className="grid grid-cols-12 gap-1.5 pt-1.5">
                        <div className="col-span-8 space-y-1.5">
                          <div className={`h-2 rounded w-full ${uiDark ? "bg-zinc-800" : "bg-zinc-200"}`} />
                          <div className={`h-2 rounded w-4/5 ${uiDark ? "bg-zinc-800" : "bg-zinc-200"}`} />
                        </div>
                        <div className="col-span-4 flex items-end justify-end">
                          <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="bg-brand text-white font-mono text-[8px] font-black px-2 py-1 rounded"
                          >
                            RUNNING
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "api" && (
                  <motion.div
                    key="api-layer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-sm rounded-2xl bg-zinc-950 border border-zinc-808 p-4 shadow-md text-white font-mono text-[9px]"
                  >
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Terminal className="w-3.5 h-3.5 text-zinc-505" />
                        <span className="text-[9.5px] font-extrabold tracking-wider text-zinc-400">REST SYSTEM TRAFFIC</span>
                      </div>
                      <button
                        onClick={handleRunApiTest}
                        disabled={apiTesting}
                        className="bg-zinc-900 border border-zinc-800 hover:border-brand/40 text-[8px] px-2 py-1 rounded text-zinc-300 hover:text-white transition-all hover:scale-[1.03]"
                      >
                        {apiTesting ? "EXECUTING..." : "RUN API TEST"}
                      </button>
                    </div>

                    <div className="bg-zinc-900/60 rounded-xl p-3 border border-zinc-850 space-y-1.5 max-h-[140px] overflow-y-auto min-h-[120px]">
                      {apiLogs.map((log, idx) => (
                        <div key={idx} className="flex justify-between items-start leading-relaxed border-b border-zinc-900 pb-1">
                          <span className="text-zinc-500 mr-2 shrink-0">[{log.time}]</span>
                          <span className={`${log.type === "success" ? "text-emerald-400 font-bold" : "text-zinc-350"} flex-1 text-left`}>
                            {log.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "db" && (
                  <motion.div
                    key="db-layer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-sm rounded-2xl bg-white border border-zinc-200 p-4 shadow-md text-zinc-800"
                  >
                    <div className="flex justify-between items-center border-b pb-2 mb-2.5 border-zinc-150">
                      <div className="flex items-center space-x-1">
                        <Database className="w-3.5 h-3.5 text-brand" />
                        <span className="text-[10px] font-mono font-black text-zinc-800 uppercase tracking-tight">Active Edge Database</span>
                      </div>
                      <button
                        onClick={handleDbInsertion}
                        className="bg-zinc-100 hover:bg-zinc-205 border border-zinc-220 hover:bg-brand-light hover:text-brand hover:border-brand/35 text-[8.5px] font-mono font-bold px-2 py-1 rounded transition-all"
                      >
                        + INSERT RECORD
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      {dbRecords.map((rec) => (
                        <div
                          key={rec.id}
                          className="flex justify-between items-center bg-zinc-50 border border-zinc-200/60 p-2 rounded-xl text-[9px] font-sans hover:bg-zinc-100/50 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="bg-zinc-950 text-white rounded-md text-[7px] px-1 font-mono uppercase">ID: {rec.id}</span>
                            <span className="font-bold text-zinc-900">{rec.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[7.5px] text-zinc-400 font-mono">{rec.time}</span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 text-[7px] font-bold uppercase">{rec.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Real-time sync statistics */}
              <div className="flex justify-between items-center pt-3 border-t border-zinc-100 text-[8px] sm:text-[9.5px] font-mono text-zinc-400 font-medium">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS CODE: 200 SUCCESS
                </span>
                <span>SECURE SSL // EDGE CAPABLE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function InteractiveMobileSection({ setView }: { setView: (view: any) => void }) {
  const [activeTab, setActiveTab] = useState<"ui" | "api" | "build">("ui");
  const [frameRate, setFrameRate] = useState(16);
  const [notificationLogs, setNotificationLogs] = useState<Array<{time: string, alert: string, channel: string}>>([
    { time: "12:04:11", alert: "Welcome campaign completed", channel: "ENGAGE" },
    { time: "12:04:12", alert: "Secure session initiated", channel: "SECURE" }
  ]);
  const [compiling, setCompiling] = useState(false);
  const [compileProgress, setCompileProgress] = useState(0);
  const [compileSuccess, setCompileSuccess] = useState(false);

  const handleSimulatePush = () => {
    const alerts = [
      "Payment successfully processed! 💸",
      "User started a live connection! 🎯",
      "New activity unlocked! 📚",
      "Daily streak maintained! Day 12 🔥",
      "App balance updated safely! 📍"
    ];
    const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
    setNotificationLogs(prev => [
      {
        time: new Date().toLocaleTimeString().split(" ")[0],
        alert: randomAlert,
        channel: Math.random() > 0.5 ? "SUCCESS" : "ENGAGE"
      },
      ...prev.slice(0, 3)
    ]);
  };

  const handleRunCompile = () => {
    if (compiling) return;
    setCompiling(true);
    setCompileSuccess(false);
    setCompileProgress(0);
    const interval = setInterval(() => {
      setCompileProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCompiling(false);
          setCompileSuccess(true);
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  return (
    <section className="py-12 bg-zinc-50/70 border-b border-zinc-100 text-left relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Punchy Short Overview */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none font-sans">
              Creating Mobile Experiences That Inspire, Engage, And Scale
            </h2>
            <div className="space-y-4 text-zinc-500 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              <p>
                At Hyle Studios, we develop modern mobile applications for iOS and Android that combine intuitive design, seamless functionality, and scalable performance. Our goal is to create apps that not only look exceptional but also deliver meaningful experiences that users genuinely enjoy.
              </p>
              <p>
                From startup ideas and business tools to social platforms, fintech apps, and AI-powered solutions, we transform concepts into fully functional mobile experiences designed for long-term growth and success.
              </p>
              <p className="font-medium text-zinc-800">
                We focus on creating applications that are fast, user-friendly, visually engaging, and optimized for performance across all devices.
              </p>
            </div>

            {/* Grid of 3 key structural cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white border border-zinc-200/80 p-5 rounded-[1.5rem] space-y-2 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] font-mono font-bold uppercase text-zinc-900">Swift & Kotlin</h4>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  Native power compiling pipelines optimized for pure execution speed.
                </p>
              </div>

              <div className="bg-white border border-zinc-200/80 p-5 rounded-[1.5rem] space-y-2 hover:shadow-md transition-all font-sans">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] font-mono font-bold uppercase text-zinc-900">Cross-Platform</h4>
                <p className="text-[11px] text-zinc-500 leading-normal font-light">
                  Unified client logic built easily with React Native or Flutter.
                </p>
              </div>

              <div className="bg-white border border-zinc-200/80 p-5 rounded-[1.5rem] space-y-2 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] font-mono font-bold uppercase text-zinc-900">Store Ready</h4>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  Automated publication channels mapped directly for production release.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Mobile Sandbox Visual */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {/* Interactive Selector Toolbar */}
            <div className="flex bg-zinc-100 p-1.5 rounded-full border border-zinc-200 justify-between">
              {[
                { id: "ui", title: "1. Design Layout" },
                { id: "api", title: "2. Interactive Logic" },
                { id: "build", title: "3. Launch App" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 text-[9px] sm:text-[10px] font-mono font-black py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-zinc-950 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Live Diagram Rendering Box */}
            <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 shadow-xl relative min-h-[380px] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-1.5 z-10">
                <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
              </div>

              {/* Active Tab Screen */}
              <div className="flex-1 flex flex-col justify-center items-center py-6 mt-4">
                {activeTab === "ui" && (
                  <motion.div
                    key="ui-layer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-[220px] h-[320px] rounded-[2.5rem] border-[6px] border-zinc-900 p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden bg-white text-zinc-800"
                  >
                    {/* Speaker and Camera notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-950 rounded-full flex items-center justify-around px-2 z-20">
                      <div className="w-8 h-1 bg-zinc-850 rounded-full" />
                      <div className="w-2 h-2 rounded-full bg-blue-900 border border-zinc-950" />
                    </div>

                    {/* Highly descriptive phone topbar status */}
                    <div className="flex justify-between items-center text-[7px] font-mono font-bold text-zinc-400 select-none pb-1 mt-3 border-b border-zinc-200/30 z-10">
                      <span>9:41 AM</span>
                      <div className="flex items-center space-x-1">
                        <span>📶 5G</span>
                        <div className="w-3.5 h-2 border border-zinc-300 rounded-xs p-0.2 flex items-center">
                          <div className="bg-emerald-500 h-full w-4/5 rounded-xs" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-b pb-1.5 mb-2 border-zinc-200/50 pt-1 z-10">
                      <span className="text-[8px] font-extrabold tracking-wide text-zinc-800">Preview Device Screen</span>
                    </div>

                    {/* Simulating phone contents */}
                    <div className="space-y-3 flex-grow overflow-hidden z-10 mt-1">
                      <div className="text-left">
                        <span className="text-[10px] text-zinc-400 block uppercase font-mono tracking-wider">User Dashboard</span>
                        <h4 className="text-lg font-bold text-zinc-900 leading-tight">Welcome, Friend!</h4>
                      </div>

                      <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl flex items-center space-x-2.5">
                        <span className="text-lg">✨</span>
                        <div className="text-left font-sans">
                          <span className="text-[10px] font-bold block leading-none text-emerald-850">Design System Ready</span>
                          <span className="text-[8px] text-zinc-500 block">Clean, responsive interfaces</span>
                        </div>
                      </div>

                      {/* Clean interactive slider for user dynamic spacing demo */}
                      <div className="space-y-1 bg-zinc-50 p-2 rounded-xl border border-zinc-150">
                        <div className="flex justify-between text-[8px] font-medium text-zinc-500">
                          <span>Adjust Element Spacing</span>
                          <span>{frameRate}px</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="30"
                          value={frameRate}
                          onChange={(e) => setFrameRate(parseInt(e.target.value))}
                          className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-brand"
                        />
                      </div>

                      {/* Simple visual stats graph */}
                      <div className="bg-zinc-50 p-2 rounded-xl border border-zinc-150 text-left space-y-1">
                        <span className="text-[8px] font-medium text-zinc-400 block uppercase">Weekly Usage Activity</span>
                        <div className="flex items-end space-x-1.5 h-10 pt-1">
                          {[35, 75, 45, 90, 60, 80, 50].map((h, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: `${h}%` }}
                              className="bg-brand rounded-xs flex-1"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tab bars at bottom */}
                    <div className="pt-1.5 border-t border-zinc-200/50 flex justify-around text-[7px] font-mono text-zinc-400 z-10 font-bold">
                      <span className="text-brand">Home</span>
                      <span>Stats</span>
                      <span>Account</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "api" && (
                  <motion.div
                    key="api-layer-channel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-sm rounded-[1.8rem] bg-white border border-zinc-200 p-4 shadow-xl text-zinc-800 font-sans text-[9px] flex flex-col justify-between min-h-[320px]"
                  >
                    <div className="flex justify-between items-center border-b border-zinc-100 pb-2 mb-2 select-none">
                      <div className="flex items-center space-x-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-brand" />
                        <span className="text-[10px] font-bold tracking-wider text-zinc-800 uppercase">Live Messages & Alerts</span>
                      </div>
                      <button
                        onClick={handleSimulatePush}
                        className="bg-brand hover:bg-brand/90 text-white text-[8px] px-2.5 py-1 rounded-md font-bold transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        SIMULATE NOTIFICATION
                      </button>
                    </div>

                    {/* Clean diagram of connections */}
                    <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-3 flex flex-col space-y-2.5 flex-grow my-2">
                      <div className="flex items-center justify-between px-2 py-1 bg-white rounded-lg border border-zinc-150">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          <span className="text-[8px] font-bold text-zinc-650">Cloud Server</span>
                        </div>
                        <span className="text-[8px] text-zinc-400">⇒ Instant System Sync ⇒</span>
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[8px] font-bold text-brand">App Screen</span>
                        </div>
                      </div>

                      {/* Connection path visualization */}
                      <div className="relative h-10 flex items-center justify-stretch border border-dashed border-zinc-200 rounded-lg bg-white px-4 overflow-hidden">
                        <div className="absolute left-3 text-[7px] font-medium text-zinc-400">Server Sends Update</div>
                        <div className="flex-1 px-8 flex justify-between items-center relative">
                          <div className="w-full h-[1.5px] bg-zinc-200" />
                          <motion.div 
                            className="absolute bg-brand rounded-full w-2 h-2"
                            style={{ left: "12%" }}
                            animate={{ x: ["0%", "580%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          />
                        </div>
                        <div className="absolute right-3 text-[7px] font-medium text-zinc-550">App Receives Info</div>
                      </div>

                      {/* Simple human-friendly logs list */}
                      <div className="space-y-1 overflow-y-auto max-h-[90px] text-left">
                        {notificationLogs.map((log, idx) => (
                          <motion.div 
                            key={idx} 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex justify-between items-center bg-white border border-zinc-150 p-1.5 rounded-lg text-[8px]"
                          >
                            <span className="text-zinc-400 font-mono">[{log.time}]</span>
                            <span className="px-1.5 text-emerald-700 bg-emerald-50 border border-emerald-100 rounded text-[7px] uppercase font-bold shrink-0">Delivered</span>
                            <span className="text-zinc-650 flex-1 truncate text-right pl-3 font-sans font-light">
                              {log.alert}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[7.5px] text-zinc-400 select-none px-1">
                      <span>Connection Status: Connected</span>
                      <span>Delivery Speed: Instant (12ms)</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "build" && (
                  <motion.div
                    key="build-layer-native"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-sm rounded-[1.8rem] bg-white border border-zinc-200 p-5 shadow-xl text-zinc-800 font-sans text-[9px] text-left space-y-4 min-h-[320px] flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center border-b border-zinc-200 pb-2">
                      <div className="flex items-center space-x-1.5">
                        <Cpu className="w-3.5 h-3.5 text-zinc-800" />
                        <span className="text-[10px] font-bold text-zinc-800 uppercase">Publish Wizard</span>
                      </div>
                      <button
                        onClick={handleRunCompile}
                        disabled={compiling}
                        className="px-3 py-1 bg-zinc-950 text-white font-bold hover:bg-zinc-800 text-[8px] transition-all rounded-lg shadow-sm hover:scale-[1.02] cursor-pointer"
                      >
                        {compiling ? "BUILDING PACKAGE..." : "BUILD & LAUNCH"}
                      </button>
                    </div>

                    {/* Simplified steps grid */}
                    <div className="grid grid-cols-2 gap-2 text-[8px]">
                      <div className={`p-2 rounded-xl border flex flex-col justify-between ${compiling && compileProgress < 30 ? "bg-brand/5 border-brand animate-pulse" : compileProgress >= 30 || compileSuccess ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-bold" : "bg-zinc-50 border-zinc-150 text-zinc-600"}`}>
                        <span className="font-bold text-[8.5px]">Step 1: Check Quality</span>
                        <div className="flex justify-between items-center pt-1">
                          <span>Verify layouts & pages</span>
                          <span>{compileProgress >= 30 || compileSuccess ? "✓ Done" : compiling ? "In progress..." : "Ready"}</span>
                        </div>
                      </div>

                      <div className={`p-2 rounded-xl border flex flex-col justify-between ${compiling && compileProgress >= 30 && compileProgress < 60 ? "bg-brand/5 border-brand animate-pulse" : compileProgress >= 60 || compileSuccess ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-bold" : "bg-zinc-50 border-zinc-150 text-zinc-600"}`}>
                        <span className="font-bold text-[8.5px]">Step 2: Package Files</span>
                        <div className="flex justify-between items-center pt-1">
                          <span>Build app bundle</span>
                          <span>{compileProgress >= 60 || compileSuccess ? "✓ Done" : compiling && compileProgress >= 30 ? "In progress..." : "Pending"}</span>
                        </div>
                      </div>

                      <div className={`p-2 rounded-xl border flex flex-col justify-between ${compiling && compileProgress >= 60 && compileProgress < 90 ? "bg-brand/5 border-brand animate-pulse" : compileProgress >= 90 || compileSuccess ? "bg-emerald-50 border-emerald-200 text-emerald-850 font-bold" : "bg-zinc-50 border-zinc-150 text-zinc-600"}`}>
                        <span className="font-bold text-[8.5px]">Step 3: Secure Sign</span>
                        <div className="flex justify-between items-center pt-1">
                          <span>Install code security</span>
                          <span>{compileProgress >= 90 || compileSuccess ? "✓ Signed" : compiling && compileProgress >= 60 ? "In progress..." : "Pending"}</span>
                        </div>
                      </div>

                      <div className={`p-2 rounded-xl border flex flex-col justify-between ${compiling && compileProgress >= 90 ? "bg-brand/5 border-brand animate-pulse" : compileSuccess ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-bold" : "bg-zinc-50 border-zinc-150 text-zinc-600"}`}>
                        <span className="font-bold text-[8.5px]">Step 4: Publish Online</span>
                        <div className="flex justify-between items-center pt-1">
                          <span>Send to App Stores</span>
                          <span>{compileSuccess ? "✓ Live" : compiling && compileProgress >= 90 ? "Uploading..." : "Pending"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress slider bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[7px] uppercase font-bold text-zinc-400">
                        <span>Launch Progress</span>
                        <span>{compileProgress}%</span>
                      </div>
                      <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          className="bg-[#2ebd73] h-full"
                          animate={{ width: `${compileProgress}%` }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </div>

                    <div className="bg-zinc-50 rounded-lg p-2 border border-zinc-150 text-[7.5px] text-zinc-500 leading-relaxed">
                      {compileSuccess ? (
                        <div className="text-emerald-700 font-bold flex items-center gap-1">
                          <span>✓ SUCCESS: Your app has been published to iOS and Android App Stores!</span>
                        </div>
                      ) : compiling ? (
                        <div className="animate-pulse">Packaging and validating store deployment certificates...</div>
                      ) : (
                        <div>Click "BUILD & LAUNCH" above to test the automated app publishing process.</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function InteractiveGameSection({ setView }: { setView: (view: any) => void }) {
  // Star Trek Space flight simulation parameters (strictly continuous animations via motion/react)
  const starLayers = [
    // Fast warp streaks
    { id: 1, delay: 0.1, duration: 1.1, top: '22%', size: 'w-16 h-[1.5px]', bgFill: 'bg-gradient-to-l from-cyan-200 via-white to-transparent opacity-95' },
    { id: 2, delay: 0.3, duration: 0.8, top: '68%', size: 'w-20 h-[1.5px]', bgFill: 'bg-gradient-to-l from-sky-300 via-white to-transparent opacity-90' },
    { id: 3, delay: 0.6, duration: 1.3, top: '45%', size: 'w-24 h-[2px]', bgFill: 'bg-gradient-to-l from-white to-transparent opacity-95' },
    
    // Medium stars
    { id: 4, delay: 0.2, duration: 2.8, top: '15%', size: 'w-1.5 h-1.5', bgFill: 'bg-white rounded-full opacity-70' },
    { id: 5, delay: 0.9, duration: 3.4, top: '80%', size: 'w-1 h-1', bgFill: 'bg-sky-200 rounded-full opacity-60' },
    { id: 6, delay: 1.4, duration: 2.4, top: '35%', size: 'w-2 h-2', bgFill: 'bg-white rounded-full opacity-80 shadow-[0_0_6px_#fff]' },
    { id: 7, delay: 1.9, duration: 3.1, top: '55%', size: 'w-1 h-1', bgFill: 'bg-white rounded-full opacity-50' },
    { id: 8, delay: 2.4, duration: 2.7, top: '85%', size: 'w-1.5 h-1.5', bgFill: 'bg-cyan-100 rounded-full opacity-65' },
    
    // Slow deep space dust
    { id: 9, delay: 0.0, duration: 6.2, top: '10%', size: 'w-1 h-1', bgFill: 'bg-white/40 rounded-full' },
    { id: 10, delay: 1.1, duration: 7.5, top: '30%', size: 'w-0.5 h-0.5', bgFill: 'bg-white/30 rounded-full' },
    { id: 11, delay: 2.2, duration: 5.8, top: '75%', size: 'w-1 h-1', bgFill: 'bg-white/45 rounded-full' },
    { id: 12, delay: 3.5, duration: 6.9, top: '92%', size: 'w-0.5 h-0.5', bgFill: 'bg-white/25 rounded-full' },
    { id: 13, delay: 4.8, duration: 7.1, top: '50%', size: 'w-1 h-1', bgFill: 'bg-blue-200/40 rounded-full' },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#fafafa] border-b border-zinc-100 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Editorial side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3.5">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0c0d] tracking-tight leading-none">
                Creating Immersive Games <br />That Players Remember
              </h2>
            </div>

            <div className="space-y-5 text-zinc-650 text-sm md:text-base font-light leading-relaxed">
              <p>
                At Hyle Studios, we design and develop games that blend creativity, technology, and engaging gameplay into unforgettable experiences. Whether you're building a casual mobile game, a competitive multiplayer title, or a story-driven adventure, we help bring your vision to life from concept to launch.
              </p>
              <p>
                Our team focuses on creating games that are visually stunning, technically optimized, and designed to keep players engaged. From gameplay mechanics and world-building to user interfaces and publishing support, we handle every stage of development with precision and passion.
              </p>
              <div className="p-4 bg-white border border-zinc-200/80 rounded-2xl flex items-center gap-3.5 shadow-xs">
                <span className="text-2xl select-none">🎮</span>
                <p className="font-medium text-zinc-900 border-l border-zinc-250 pl-3.5 text-xs sm:text-sm">
                  "We don't just create games—we create experiences that players enjoy, share, and return to."
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setView("contact")}
                className="px-6 py-3.5 bg-brand hover:bg-brand-hover text-white font-bold font-sans tracking-tight text-xs rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-brand/20 hover:scale-[1.01] cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive sandbox simulator side */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-lg bg-[#FAF8F5] border border-[#E9DFCE] rounded-[2rem] p-6 shadow-xl relative overflow-hidden flex flex-col justify-between text-zinc-805">
              <div className="flex space-x-1.5 z-40">
                <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full" />
              </div>

              {/* Viewport Space simulation */}
              <div className="relative h-72 bg-[#020205] border border-zinc-850 rounded-2xl overflow-hidden mt-4 flex flex-col justify-end shadow-2xl">
                
                {/* Immersive Space Nebula Background Layer */}
                <div className="absolute -left-10 -top-10 w-44 h-44 bg-blue-600/10 rounded-full blur-[60px]" />
                <div className="absolute -right-16 -bottom-16 w-52 h-52 bg-fuchsia-600/10 rounded-full blur-[70px]" />
                
                {/* Continuous Starfield (Flying through space sideways) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {starLayers.map((star) => (
                    <motion.div
                      key={star.id}
                      initial={{ x: 420 }}
                      animate={{ x: -120 }}
                      transition={{
                        repeat: Infinity,
                        duration: star.duration,
                        ease: "linear",
                        delay: star.delay,
                      }}
                      style={{ top: star.top }}
                      className={`absolute ${star.size} ${star.bgFill}`}
                    />
                  ))}
                </div>

                {/* MORE ROCKET-LIKE STARSHIP DESIGN (Continuous horizontal rocket flight) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -12, 0], 
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.01, 0.99, 1]
                    }}
                    transition={{ 
                      duration: 4.8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="relative w-44 h-16 flex items-center justify-center pointer-events-none select-none"
                  >
                    
                    {/* Rocket Fire Exhaust (Plume) - positioned to the left of the rocket */}
                    <motion.div
                      animate={{ 
                        scaleX: [1, 1.25, 0.95, 1.15, 1],
                        opacity: [0.9, 1, 0.85, 1, 0.9]
                      }}
                      transition={{ 
                        duration: 0.45, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute left-[-22px] w-14 h-6 origin-right flex items-center justify-end z-10"
                    >
                      {/* Outer flame */}
                      <div className="absolute right-0 w-14 h-6 bg-gradient-to-r from-transparent via-red-500 to-orange-500 rounded-full blur-[2px] opacity-85" />
                      {/* Middle flame */}
                      <div className="absolute right-1 w-10 h-4 bg-gradient-to-r from-transparent via-orange-400 to-amber-300 rounded-full blur-[1px]" />
                      {/* Inner bright core */}
                      <div className="absolute right-2 w-6 h-2 bg-white rounded-full shadow-[0_0_8px_#fff]" />
                      
                      {/* Engine sparks/particles drifting away */}
                      <motion.div 
                        animate={{ x: [-10, -50], opacity: [1, 0], scale: [1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute left-0 w-1.5 h-1.5 bg-yellow-400 rounded-full"
                      />
                      <motion.div 
                        animate={{ x: [-5, -40], y: [-4, 4], opacity: [1, 0], scale: [1, 0.2] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut", delay: 0.15 }}
                        className="absolute left-1 w-1 h-1 bg-red-400 rounded-full"
                      />
                    </motion.div>

                    {/* Rocket Tail Nozzle / Thruster Cone */}
                    <div className="absolute left-6 w-4 h-6 bg-zinc-650 rounded-l-md border-r-2 border-zinc-700 z-15 shadow-md flex items-center justify-center">
                      <div className="w-1 h-4 bg-zinc-800 rounded-full" />
                    </div>

                    {/* Stabilizing Fins (Retro rocket style!) */}
                    {/* Top Fin */}
                    <div className="absolute left-8 -top-1 w-6 h-5 bg-gradient-to-br from-[#FF4E50] to-[#F9D423] rounded-tl-full rounded-br-lg origin-bottom-left -rotate-12 z-10 shadow-sm" />
                    {/* Bottom Fin */}
                    <div className="absolute left-8 -bottom-1 w-6 h-5 bg-gradient-to-tr from-[#FF4E50] to-[#F9D423] rounded-bl-full rounded-tr-lg origin-top-left rotate-12 z-10 shadow-sm" />
                    {/* Center back stripe */}
                    <div className="absolute left-9 w-3 h-10 bg-[#FF4E50]/20 rounded-sm blur-[1px]" />

                    {/* Main Fuselage (Cylindrical body of the rocket) */}
                    <div className="absolute left-9 w-20 h-10 bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-250 rounded-r-lg border border-neutral-400/80 shadow-md z-20 flex items-center justify-center">
                      {/* Clean design sticker stripes */}
                      <div className="absolute inset-y-0 left-4 w-1.5 bg-[#FF4E50]" />
                      <div className="absolute inset-y-0 left-6.5 w-0.5 bg-[#F9D423]" />
                      
                      {/* Circular Cabin Window (Glowing Port Hole) */}
                      <div className="absolute right-4 w-5 h-5 rounded-full bg-slate-900 border-2 border-neutral-300 shadow-inner flex items-center justify-center overflow-hidden">
                        {/* Cyan glow inside represent cockpit lights */}
                        <div className="w-3.5 h-3.5 bg-cyan-400/80 rounded-full shadow-[0_0_4px_#22d3ee] animate-pulse" />
                      </div>
                    </div>

                    {/* Sleek Nose Cone (Needle tip facing right / forwards) */}
                    <div className="absolute right-3 w-12 h-10 bg-gradient-to-b from-[#FF4E50] via-[#FF4E50] to-[#cf3436] rounded-r-full shadow-md z-20" style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }} />

                  </motion.div>
                </div>

                {/* Solid neat bottom deck spacer */}
                <div className="w-full bg-black/40 border-t border-zinc-800/40 h-3 z-40" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function GameShowcaseSection() {
  const cards = [
    {
      title: "Mobile Games",
      desc: "Engaging Android and iOS games optimized for performance, retention, and monetization.",
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      visual: (
        <div className="bg-white border border-zinc-150 rounded-2xl p-4 w-full h-[145px] shadow-xs flex flex-col justify-center items-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
          {/* A simple smartphone outline with a bouncing game asset */}
          <div className="w-[54px] h-[90px] border-2 border-zinc-300 rounded-xl relative flex flex-col items-center justify-between p-1 bg-zinc-50 shadow-xs">
            {/* Top notch */}
            <div className="w-5 h-0.5 bg-zinc-300 rounded-full" />
            
            {/* Simple character/star element inside */}
            <div className="flex-1 w-full flex items-center justify-center relative">
              <motion.div 
                animate={{ y: [4, -10, 4], scale: [1, 1.08, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-4.5 h-4.5 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center text-xs shadow-xs"
              >
                👾
              </motion.div>
              {/* Ground */}
              <div className="absolute bottom-1 inset-x-1 h-0.5 bg-zinc-200 rounded-full" />
            </div>
            
            {/* Home button indicator */}
            <div className="w-1.5 h-1.5 rounded-full border border-zinc-300" />
          </div>
        </div>
      )
    },
    {
      title: "PC Games",
      desc: "High-quality desktop gaming experiences built for immersive gameplay and scalability.",
      icon: <Gamepad2 className="w-5 h-5 text-sky-500" />,
      visual: (
        <div className="bg-white border border-zinc-150 rounded-2xl p-4 w-full h-[145px] shadow-xs flex flex-col justify-center items-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl pointer-events-none" />
          {/* A neat monitor outline with crosshair or shield details */}
          <div className="flex flex-col items-center">
            {/* Screen */}
            <div className="w-[90px] h-[60px] border-2 border-zinc-300 rounded-lg bg-zinc-50 flex items-center justify-center relative shadow-xs overflow-hidden">
              {/* Crosshair target in center */}
              <div className="w-5 h-5 border border-dashed border-sky-350 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-sky-500 rounded-full animate-pulse" />
              </div>
              {/* Corner brackets */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-zinc-300" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-zinc-300" />
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-zinc-300" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-zinc-300" />
            </div>
            {/* Stand */}
            <div className="w-2.5 h-2.5 bg-zinc-300 border-x border-zinc-350" />
            <div className="w-10 h-0.5 bg-zinc-300 rounded-full" />
          </div>
        </div>
      )
    },
    {
      title: "Web Games",
      desc: "Browser-based games that offer accessibility and instant play without downloads.",
      icon: <Globe className="w-5 h-5 text-violet-500" />,
      visual: (
        <div className="bg-white border border-zinc-150 rounded-2xl p-4 w-full h-[145px] shadow-xs flex flex-col justify-center items-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full blur-xl pointer-events-none" />
          {/* A simple web browser with canvas shape */}
          <div className="w-[100px] h-[70px] border-2 border-zinc-300 rounded-lg bg-zinc-50 flex flex-col shadow-xs overflow-hidden">
            {/* Header / Tabs bar */}
            <div className="h-3.5 border-b border-zinc-200 bg-zinc-100 px-1.5 flex items-center justify-between">
              <div className="flex gap-0.5">
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                <span className="w-1 h-1 bg-zinc-300 rounded-full" />
              </div>
              <div className="w-10 h-1.5 bg-zinc-200 rounded-full" />
            </div>
            {/* Web View Canvas content */}
            <div className="flex-1 flex items-center justify-center p-1 relative bg-white">
              {/* Overlapping orbiting elements for a browser canvas feel */}
              <div className="relative w-6 h-6">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-violet-350 rounded-full flex items-center justify-start"
                >
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full -ml-0.75 shadow-xs" />
                </motion.div>
                <div className="absolute inset-1.5 bg-violet-50 border border-violet-150 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-violet-500 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Educational & Gamified Experiences",
      desc: "Interactive applications that use game mechanics to teach, train, and engage users.",
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
      visual: (
        <div className="bg-white border border-zinc-150 rounded-2xl p-4 w-full h-[145px] shadow-xs flex flex-col justify-center items-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
          {/* Trophy/A+ element or progress circle structure with stars */}
          <div className="flex flex-col items-center gap-1">
            <div className="relative flex items-center justify-center">
              {/* Outer decorative ring */}
              <svg className="w-14 h-14 transform -rotate-90">
                <circle cx="28" cy="28" r="21" stroke="#f4f4f5" strokeWidth="3" fill="transparent" />
                <circle cx="28" cy="28" r="21" stroke="#f59e0b" strokeWidth="3" fill="transparent" strokeDasharray="131" strokeDashoffset="35" strokeLinecap="round" />
              </svg>
              {/* Inner floating star or emblem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span 
                  animate={{ scale: [0.93, 1.07, 0.93] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl"
                >
                  🏆
                </motion.span>
              </div>
            </div>
            {/* Tiny stars or streak bubbles */}
            <div className="flex gap-0.5 mt-0.5">
              <span className="text-amber-500 text-[8px]">★</span>
              <span className="text-amber-500 text-[8px]">★</span>
              <span className="text-amber-500 text-[8px]">★</span>
              <span className="text-amber-500 text-[8px]">★</span>
              <span className="text-zinc-200 text-[8px]">★</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-zinc-100 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3.5 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">What We Build</h2>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            We construct tailored, production-ready gaming gaming products across platforms and web ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-6 !pb-4 flex flex-col justify-between space-y-4 hover:border-zinc-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight font-sans text-left">{item.title}</h3>
                  <p className="text-xs sm:text-[13px] text-zinc-500 font-light leading-relaxed text-left">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="pt-2 w-full transform group-hover:scale-[1.01] transition-transform duration-300">
                {item.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function ServicePage({ serviceId, setView }: ServicePageProps) {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
  if (serviceId === "uiux") {
    return <UiuxServiceDetails setView={setView} service={service} />;
  }
  if (serviceId === "branding") {
    return <BrandingServiceDetails setView={setView} service={service} />;
  }
  const [activeCapIdx, setActiveCapIdx] = useState<number>(0);

  const half = Math.ceil(service.capabilities.length / 2);
  const leftCapabilities = service.capabilities.map((cap, idx) => ({ cap, idx })).slice(0, half);
  const rightCapabilities = service.capabilities.map((cap, idx) => ({ cap, idx })).slice(half);

  const processSteps = serviceId === "mobile" ? [
    {
      num: "1",
      title: "Discovery & Strategy",
      desc: "We understand your goals, audience, and app vision to create a strong development strategy.",
      color: "from-emerald-500 to-teal-400"
    },
    {
      num: "2",
      title: "Planning & Wireframing",
      desc: "We organize user flows, app structure, and feature systems before development begins.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      num: "3",
      title: "UI/UX Design",
      desc: "Our team designs visually engaging and intuitive mobile interfaces focused on user experience.",
      color: "from-violet-500 to-purple-500"
    },
    {
      num: "4",
      title: "Development",
      desc: "We build scalable frontend and backend systems optimized for both iOS and Android platforms.",
      color: "from-pink-500 to-rose-500"
    },
    {
      num: "5",
      title: "Testing & Optimization",
      desc: "Every app undergoes detailed testing to ensure speed, security, responsiveness, and reliability.",
      color: "from-amber-500 to-orange-500"
    },
    {
      num: "6",
      title: "Launch & Deployment",
      desc: "We professionally deploy your app to the App Store and Google Play Store.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      num: "7",
      title: "Support & Scaling",
      desc: "After launch, we continue supporting your product through updates, optimization, and feature expansion.",
      color: "from-brand to-emerald-400"
    }
  ] : serviceId === "game" ? [
    {
      num: "1",
      title: "Concept & Discovery",
      desc: "We explore your vision, target audience, game genre, and goals to create a strong foundation.",
      color: "from-emerald-500 to-teal-400"
    },
    {
      num: "2",
      title: "Game Design Planning",
      desc: "We define gameplay mechanics, progression systems, user journeys, and core features.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      num: "3",
      title: "World & Visual Design",
      desc: "Our designers create game worlds, characters, environments, interfaces, and visual assets.",
      color: "from-violet-500 to-purple-500"
    },
    {
      num: "4",
      title: "Development",
      desc: "We build gameplay systems, player interactions, multiplayer functionality, and game logic.",
      color: "from-pink-500 to-rose-500"
    },
    {
      num: "5",
      title: "Testing & Balancing",
      desc: "Every game undergoes extensive testing to ensure smooth performance, fair gameplay, and a polished experience.",
      color: "from-amber-500 to-orange-500"
    },
    {
      num: "6",
      title: "Launch & Publishing",
      desc: "We prepare and publish your game across relevant platforms and marketplaces.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      num: "7",
      title: "Growth & Live Operations",
      desc: "After launch, we support updates, content expansions, balancing, optimization, and community growth.",
      color: "from-brand to-emerald-400"
    }
  ] : [
    {
      num: "1",
      title: "Discovery & Strategy",
      desc: "We analyze your goals, audience, and requirements to define the best structure and technology for your project.",
      color: "from-emerald-500 to-teal-400"
    },
    {
      num: "2",
      title: "Planning & Wireframing",
      desc: "We map out user flows, layouts, system architecture, and platform functionality before development begins.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      num: "3",
      title: "UI/UX Design",
      desc: "Our design team creates modern interfaces focused on usability, aesthetics, and seamless user experience.",
      color: "from-violet-500 to-purple-500"
    },
    {
      num: "4",
      title: "Development",
      desc: "We build the frontend and backend systems using modern technologies optimized for performance and scalability.",
      color: "from-pink-500 to-rose-500"
    },
    {
      num: "5",
      title: "Testing & Optimization",
      desc: "Every project undergoes extensive testing for responsiveness, security, speed, and functionality across devices.",
      color: "from-amber-500 to-orange-500"
    },
    {
      num: "6",
      title: "Launch & Deployment",
      desc: "We deploy your website or platform professionally with hosting setup, optimization, and final configuration.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      num: "7",
      title: "Support & Scaling",
      desc: "After launch, we continue improving and scaling your platform through updates, maintenance, and feature expansion.",
      color: "from-brand to-emerald-400"
    }
  ];

  const whyChooseItems = serviceId === "mobile" ? [
    {
      title: "Premium modern app design",
      desc: "We enforce pixel-perfect spacing, elite typography, custom mobile micro-interactions, and beautiful negative space.",
      icon: <Sparkles className="w-5 h-5 text-zinc-805 text-[#2ebd73]" />,
      viber: "hover:border-violet-400/50 hover:bg-violet-50/5 hover:shadow-violet-400/[0.03]",
      spot: "bg-violet-50 text-violet-650 text-violet-600"
    },
    {
      title: "Scalable development solutions",
      desc: "Engineered with cross-platform Swift, Kotlin, React Native, or Flutter, optimized to scale with your user growth.",
      icon: <Layers className="w-5 h-5 text-zinc-805 text-[#2ebd73]" />,
      viber: "hover:border-blue-400/50 hover:bg-blue-50/5 hover:shadow-blue-400/[0.03]",
      spot: "bg-blue-50 text-blue-600"
    },
    {
      title: "User-focused experiences",
      desc: "Delightful gestures, smooth touch physics, high-contrast readability, and seamless navigation flows.",
      icon: <Heart className="w-5 h-5 text-zinc-805 text-rose-550" />,
      viber: "hover:border-rose-400/50 hover:bg-rose-50/5 hover:shadow-rose-400/[0.03]",
      spot: "bg-rose-50 text-rose-600"
    },
    {
      title: "Fast and optimized performance",
      desc: "Compiled native binaries and lightweight asset serving ensure immediate load speeds and up to 120 FPS view renders.",
      icon: <Zap className="w-5 h-5 text-zinc-805 text-amber-550" />,
      viber: "hover:border-amber-400/50 hover:bg-amber-50/5 hover:shadow-amber-400/[0.03]",
      spot: "bg-amber-50 text-amber-600"
    },
    {
      title: "Reliable communication",
      desc: "Direct access to proactive Mobile Solutions Architects. No corporate translation lag or administrative delays.",
      icon: <MessageSquare className="w-5 h-5 text-zinc-805 text-emerald-550" />,
      viber: "hover:border-emerald-400/50 hover:bg-emerald-50/5 hover:shadow-emerald-400/[0.03]",
      spot: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Long-term support and maintenance",
      desc: "We support you post-launch with store platform compliance checks, device compatibility audits, and system scaling.",
      icon: <ShieldCheck className="w-5 h-5 text-zinc-805 text-zinc-550" />,
      viber: "hover:border-zinc-400/50 hover:bg-zinc-50/5 hover:shadow-zinc-400/[0.03]",
      spot: "bg-zinc-100 text-zinc-750 text-zinc-700"
    },
    {
      title: "Solutions tailored to your business goals",
      desc: "Every mobile view, tracking trigger, and API flow aligns precisely with your specific organizational goals.",
      icon: <Settings className="w-5 h-5 text-zinc-805 text-cyan-550" />,
      viber: "hover:border-cyan-400/50 hover:bg-cyan-50/5 hover:shadow-cyan-400/[0.03]",
      spot: "bg-cyan-50 text-cyan-600"
    }
  ] : serviceId === "game" ? [
    {
      title: "Creative and innovative game design",
      desc: "We craft custom mechanics, addictive feedback loops, and highly responsive interactions tailored to capture players.",
      icon: <Sparkles className="w-5 h-5 text-zinc-850" />,
      viber: "hover:border-violet-400/50 hover:bg-violet-50/5 hover:shadow-violet-400/[0.03]",
      spot: "bg-violet-50 text-violet-650"
    },
    {
      title: "Cross-platform development expertise",
      desc: "Engineered to run seamlessly across PC, Web, iOS, and Android from the ground up, maximizing your reach.",
      icon: <Layers className="w-5 h-5 text-zinc-850" />,
      viber: "hover:border-blue-400/50 hover:bg-blue-50/5 hover:shadow-blue-400/[0.03]",
      spot: "bg-blue-50 text-blue-600"
    },
    {
      title: "Optimized performance and scalability",
      desc: "Ensuring stable, high-framerate renders, low latency netcode, and highly compressed assets to maintain up to 120 FPS views.",
      icon: <Zap className="w-5 h-5 text-zinc-850" />,
      viber: "hover:border-amber-400/50 hover:bg-amber-50/5 hover:shadow-amber-400/[0.03]",
      spot: "bg-amber-50 text-amber-600"
    },
    {
      title: "Player-focused development approach",
      desc: "We construct intuitive control systems, rich progression ladders, and delightful rewards focused entirely on game retention.",
      icon: <Heart className="w-5 h-5 text-zinc-850" />,
      viber: "hover:border-rose-400/50 hover:bg-rose-50/5 hover:shadow-rose-400/[0.03]",
      spot: "bg-rose-50 text-rose-600"
    },
    {
      title: "Modern visuals and immersive experiences",
      desc: "Bespoke character, interface, and environment designs styled precisely to convey your visual narrative perfectly.",
      icon: <Gamepad2 className="w-5 h-5 text-zinc-850" />,
      viber: "hover:border-cyan-400/50 hover:bg-cyan-50/5 hover:shadow-cyan-400/[0.03]",
      spot: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "Reliable communication throughout development",
      desc: "Direct coordination with matching Senior Solutions Designers. Transparency, immediate feedback, and milestone builds.",
      icon: <MessageSquare className="w-5 h-5 text-zinc-850" />,
      viber: "hover:border-emerald-400/50 hover:bg-emerald-50/5 hover:shadow-emerald-400/[0.03]",
      spot: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Long-term support and growth planning",
      desc: "Post-launch expansion coordination, runtime balancing audits, regular store compliance updates, and active sandbox live-ops support.",
      icon: <ShieldCheck className="w-5 h-5 text-zinc-850" />,
      viber: "hover:border-brand/40 hover:bg-brand-light/5 hover:shadow-brand/[0.01]",
      spot: "bg-brand-light text-brand"
    }
  ] : [
    {
      title: "Modern and premium design standards",
      desc: "We enforce pixel-perfect spacing, elite typography, custom micro-interactions, and beautiful negative space.",
      icon: <Sparkles className="w-5 h-5 text-zinc-800" />,
      viber: "hover:border-violet-400/50 hover:bg-violet-50/5 hover:shadow-violet-400/[0.03]",
      spot: "bg-violet-50 text-violet-600"
    },
    {
      title: "Fast and scalable development",
      desc: "Engineered with React, Next.js, and lightweight fast assets optimized to run with zero stutter or lag.",
      icon: <Zap className="w-5 h-5 text-zinc-805" />,
      viber: "hover:border-amber-400/50 hover:bg-amber-50/5 hover:shadow-amber-400/[0.03]",
      spot: "bg-amber-50 text-amber-600"
    },
    {
      title: "User-focused experiences",
      desc: "Delightful design loops, smart layouts, high-contrast readability, and seamless visual navigation flows.",
      icon: <Heart className="w-5 h-5 text-zinc-800" />,
      viber: "hover:border-rose-400/50 hover:bg-rose-50/5 hover:shadow-rose-400/[0.03]",
      spot: "bg-rose-50 text-rose-600"
    },
    {
      title: "Cross-device optimization",
      desc: "A fully fluid layout responds dynamically to everything from high-resolution studio monitors to mobile touch screens.",
      icon: <Laptop className="w-5 h-5 text-zinc-805" />,
      viber: "hover:border-cyan-400/50 hover:bg-cyan-50/5 hover:shadow-cyan-400/[0.03]",
      spot: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "Reliable communication & partnership",
      desc: "Direct access to proactive Solutions Architects. No corporate translation lag or administrative delays.",
      icon: <MessageSquare className="w-5 h-5 text-zinc-800" />,
      viber: "hover:border-blue-400/50 hover:bg-blue-50/5 hover:shadow-blue-400/[0.03]",
      spot: "bg-blue-50 text-blue-600"
    },
    {
      title: "Solutions tailored to your business",
      desc: "Every module, route, and interactive block maps precisely back to your unique organizational goals.",
      icon: <Settings className="w-5 h-5 text-zinc-800" />,
      viber: "hover:border-emerald-400/50 hover:bg-emerald-50/5 hover:shadow-emerald-400/[0.03]",
      spot: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Long-term support & growth strategy",
      desc: "We support you post-launch with performance checks, server infrastructure updates, and system scaling support.",
      icon: <ShieldCheck className="w-5 h-5 text-zinc-800" />,
      viber: "hover:border-brand/40 hover:bg-brand-light/5 hover:shadow-brand/[0.01]",
      spot: "bg-brand-light text-brand"
    }
  ];

  const getServiceIconComponent = (iconName: string, className: string) => {
    switch (iconName) {
      case "Globe": return <Globe className={className} />;
      case "Smartphone": return <Smartphone className={className} />;
      case "Gamepad2": return <Gamepad2 className={className} />;
      case "Figma": return <Figma className={className} />;
      case "Paintbrush": return <Paintbrush className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  return (
    <div id={`service-subpage-${serviceId}`} className={serviceId === "game" ? "" : "pt-2"}>
      
      {/* 1. Dynamic Hero Section */}
      {serviceId === "mobile" || serviceId === "web" || serviceId === "game" ? (
        <section className={`relative overflow-hidden text-center flex flex-col items-center justify-center ${serviceId === "game" ? "-mt-[80px] pt-36 pb-36 md:pt-44 md:pb-44 bg-zinc-950 text-white min-h-[92vh]" : "pt-6 pb-12 md:pt-10 md:pb-16 bg-white border-b border-zinc-100 min-h-[75vh] sm:min-h-[80vh]"}`}>
          {serviceId === "mobile" ? (
            <AppIconsGridBackdrop />
          ) : serviceId === "game" ? (
            <>
              <img
                key={serviceId}
                src="./src/assets/images/game_dev_banner_1780470725082.png"
                alt="Game Development Banner"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-20"
                style={{ opacity: 0.35 }}
                referrerPolicy="no-referrer"
              />
            </>
          ) : (
            <>
              {/* Authentic technical Code Backdrop typing live program logic */}
              <CodeTypingBackdrop serviceId={serviceId} />
              
              {/* Highly visible coding loop video (completely clear with z-20 for overlay ordering, opacity-[0.7] for prominent visibility) */}
              <video
                key={serviceId}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-20 opacity-[0.7]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-seamless-loop-of-a-futuristic-hud-tunnel-43118-large.mp4" type="video/mp4" />
              </video>
            </>
          )}
          
          {/* Seamless lighting cover layer across the entire video workspace */}
          <div className={`absolute inset-0 ${serviceId === "game" ? "bg-zinc-950/45" : "bg-white/5"} pointer-events-none z-30`} />
          
          {/* Smooth bottom fade blend layer (z-30 to blend everything seamlessly) */}
          <div className={`absolute bottom-0 left-0 right-0 ${serviceId === "game" ? "h-64 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/90 via-[#fafafa]/40 to-transparent" : "h-28 bg-gradient-to-t from-white via-white/95 to-transparent"} pointer-events-none z-35`} />

          {/* Fully Centered Content Layout - Appears directly in front of the background video with no block bounds - shifted vertically higher */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40 flex flex-col items-center text-center space-y-4 sm:space-y-5 pt-0 pb-4 md:pt-0 md:pb-6">
            
            {serviceId === "web" ? (
              <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] font-sans"
                >
                  Transforming <span className="bg-gradient-to-r from-emerald-600 via-brand to-sky-500 bg-clip-text text-transparent">Ideas</span> Into <br className="hidden sm:inline" />
                  Powerful Web Experiences
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="text-zinc-[950] text-base sm:text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-3xl mx-auto font-sans text-zinc-800"
                >
                  We design and develop premium websites and web applications that combine stunning visuals, seamless user experiences, and scalable technology built for the future.
                </motion.p>
              </div>
            ) : serviceId === "mobile" ? (
              <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] font-sans"
                >
                  Turning <span className="bg-gradient-to-r from-emerald-600 via-brand to-sky-500 bg-clip-text text-transparent">Bold Ideas</span> Into <br className="hidden sm:inline" />
                  Powerful Mobile Experiences
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="text-zinc-[950] text-base sm:text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-3xl mx-auto font-sans text-zinc-805"
                >
                  We design and develop premium mobile applications that combine beautiful interfaces, seamless performance, and scalable technology built for modern users.
                </motion.p>
              </div>
            ) : serviceId === "game" ? (
              <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-sans drop-shadow-sm"
                >
                  We Build Worlds. <br className="hidden sm:inline" />
                  You Create The <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]">Legacy.</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="text-zinc-300 text-base sm:text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-3xl mx-auto font-sans"
                >
                  From mobile games and indie titles to immersive multiplayer experiences, Hyle Studios transforms ideas into unforgettable games that captivate players and keep them coming back for more.
                </motion.p>
              </div>
            ) : (
              <>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.08] max-w-3xl uppercase">
                  {service.name}
                </h1>
                
                <p className="text-zinc-900 text-base sm:text-lg md:text-xl font-semibold tracking-tight leading-relaxed max-w-2xl mx-auto">
                  {service.fullDesc}
                </p>
              </>
            )}

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto ${serviceId === "game" ? "mb-16 sm:mb-24" : ""}`}>
              <button
                onClick={() => setView("contact")}
                className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold font-sans tracking-tight text-sm rounded-full transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-lg hover:shadow-brand/20 hover:scale-[1.02] cursor-pointer"
              >
                <span>CONTACT US NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById("deep-dive-capabilities");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-4 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-200 font-bold font-sans tracking-tight text-sm rounded-full transition-all text-center cursor-pointer"
              >
                EXPLORE DELIVERABLES
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-10 md:py-14 bg-transparent border-b border-zinc-100 relative overflow-hidden text-left">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/[0.02] rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero details (left) */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand/20 text-xs font-mono font-bold text-brand uppercase tracking-wider select-none">
                  <Sparkles className="w-3.5 h-3.5 text-brand" />
                  <span>{service.tag}</span>
                </span>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.08]">
                  {service.name}
                </h1>
                
                <p className="text-zinc-650 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  {service.fullDesc}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => setView("contact")}
                    className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold font-sans tracking-tight text-sm rounded-full transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-lg hover:shadow-brand/20 hover:scale-[1.02] cursor-pointer"
                  >
                    <span>CONTACT US NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => {
                      const el = document.getElementById("deep-dive-capabilities");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-4 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-200 font-bold font-sans tracking-tight text-sm rounded-full transition-all text-center cursor-pointer"
                  >
                    EXPLORE DELIVERABLES
                  </button>
                </div>
              </div>

              {/* Interactive SVG representation (right) */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full bg-zinc-50/50 border border-zinc-200 rounded-[2rem] p-8 shadow-sm flex items-center justify-center min-h-[300px] relative overflow-hidden"
                >
                  <div className="absolute top-4 left-4 flex space-x-1.5">
                    <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                  </div>
                  <div className="absolute top-4 right-4 text-[9px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    SOLUTIONS WORKSPACE // {(serviceId as string).toUpperCase()}
                  </div>
                  
                  <CoreServiceIllustration serviceId={serviceId} />
                </motion.div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Editorial Intro Section for Web Development (Interactive Architectural Showcase) */}
      {serviceId === "web" && <InteractiveArchitectureSection />}

      {/* Editorial Intro Section for Mobile Development (Interactive Native Sandbox) */}
      {serviceId === "mobile" && <InteractiveMobileSection setView={setView} />}

      {/* Editorial Intro Section for Game Development (Interactive Physics Sandbox) */}
      {serviceId === "game" && <InteractiveGameSection setView={setView} />}

      {/* What We Build - Custom section for Web Development */}
      {serviceId === "web" && (
        <section className="py-12 bg-white border-b border-zinc-100 text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                      <div className="space-y-3.5 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">What We Build</h2>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                We construct tailored, production-ready web platforms using elite design languages and fast rendering pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {[
                {
                  title: "SaaS Platforms",
                  desc: "Scalable software-as-a-service platforms with powerful dashboards, user systems, analytics, subscriptions, and cloud-based functionality.",
                  icon: <Laptop className="w-5 h-5 text-zinc-850" />,
                  visual: (
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 w-full h-[145px] shadow-lg flex flex-col justify-between overflow-hidden relative">
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" />
                      <div className="flex items-center justify-between border-b border-zinc-850 pb-2">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-[8px] font-mono text-zinc-500">hyle-saas-v2.9</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-1/4 space-y-1.5 pt-1.5">
                          <div className="h-1 bg-zinc-800 rounded w-full" />
                          <div className="h-1 bg-zinc-700/80 rounded w-2/3" />
                          <div className="h-1 bg-zinc-800 rounded w-1/2" />
                        </div>
                        <div className="flex-1 space-y-2 pt-1.5">
                          <div className="flex items-end justify-between gap-1.5 h-10 pt-2">
                            <div className="bg-indigo-500 w-2 h-[40%] rounded-sm" />
                            <div className="bg-indigo-400 w-2 h-[60%] rounded-sm" />
                            <div className="bg-violet-400 w-2 h-[80%] rounded-sm" />
                            <div className="bg-brand w-2 h-[100%] rounded-sm" />
                          </div>
                          <div className="flex justify-between items-center bg-zinc-900 border border-zinc-800 rounded-lg p-1.5 text-[8px] font-mono text-zinc-400">
                            <span>ARR GROWTH</span>
                            <span className="text-brand font-bold">+$48.1K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "Business Websites",
                  desc: "Professional corporate and company websites designed to establish trust, strengthen your online presence, and convert visitors into customers.",
                  icon: <Building className="w-5 h-5 text-zinc-850" />,
                  visual: (
                    <div className="bg-white border border-zinc-200 rounded-2xl p-4 w-full h-[145px] shadow-lg flex flex-col justify-between overflow-hidden relative font-sans text-[10px]">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent pointer-events-none rounded-full blur-xl" />
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                        <div className="font-bold text-zinc-950 tracking-tight text-[9px] uppercase">CorpSync™</div>
                        <div className="flex space-x-1.5">
                          <span className="w-7 h-1.5 bg-zinc-100 rounded-full" />
                          <span className="w-5 h-1.5 bg-zinc-100 rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-2 py-1 flex-1 flex flex-col justify-center">
                        <div className="h-3.5 bg-zinc-950 rounded-md w-11/12" />
                        <div className="h-2 bg-zinc-100 rounded-md w-4/5" />
                        <div className="flex gap-2 pt-1">
                          <div className="flex-1 bg-brand text-white text-[7.5px] font-bold py-1.5 px-2 rounded-lg text-center shadow-sm select-none">Get Started</div>
                          <div className="flex-1 border border-zinc-200 text-zinc-650 text-[7.5px] font-bold py-1.5 px-2 rounded-lg text-center select-none bg-zinc-50">Demo</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-t border-zinc-100 pt-1.5 text-[7px] text-zinc-400 font-medium">
                        <span>★ Standard Edge</span>
                        <span>• Global Deploy •</span>
                      </div>
                    </div>
                  )
                },
                {
                  title: "eCommerce Platforms",
                  desc: "Modern online stores with secure payment systems, product management, inventory handling, and conversion-focused shopping experiences.",
                  icon: <ShoppingBag className="w-5 h-5 text-zinc-850" />,
                  visual: (
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 w-full h-[145px] shadow-lg flex flex-col justify-between overflow-hidden relative text-zinc-800">
                      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-rose-500/5 rounded-full blur-xl" />
                      <div className="flex justify-between items-center text-[9px] font-bold text-zinc-900 pb-1 border-b border-zinc-150">
                        <span>HyleShop // Gear</span>
                        <span className="text-rose-500 text-[8px] font-mono bg-rose-50 px-1 rounded">ON SALE</span>
                      </div>
                      <div className="flex gap-2 py-1.5">
                        <div className="flex-1 bg-white border border-zinc-250 rounded-xl p-2 flex flex-col justify-between relative group">
                          <div className="h-8 bg-gradient-to-tr from-pink-50 to-indigo-50 rounded-lg mb-1 flex items-center justify-center">
                             <span className="text-xs">👟</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-[9px] font-black text-zinc-950 font-sans">$120</span>
                             <span className="bg-zinc-950 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] leading-none select-none cursor-pointer">+</span>
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-zinc-250 rounded-xl p-2 flex flex-col justify-between relative">
                          <div className="h-8 bg-gradient-to-tr from-amber-50 to-cyan-500 rounded-lg mb-1 bg-sky-50 flex items-center justify-center">
                             <span className="text-xs">🕶️</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-[9px] font-black text-zinc-950 font-sans">$85</span>
                             <span className="bg-zinc-950 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] leading-none select-none cursor-pointer">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "Custom Web Applications",
                  desc: "Tailored web-based systems built specifically for your workflow, operations, or unique business requirements.",
                  icon: <Settings className="w-5 h-5 text-zinc-500" />,
                  visual: (
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 w-full h-[145px] shadow-lg flex flex-col justify-between overflow-hidden relative text-white font-mono text-[8.5px]">
                      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                        <div className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[7px] text-emerald-400 font-bold uppercase">System Active</span>
                        </div>
                        <span className="text-[7px] text-zinc-450 uppercase">Verified Secure</span>
                      </div>
                      <div className="space-y-1 py-1 flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-center bg-[#18181b] px-2 py-1 rounded-md border border-zinc-850">
                          <span className="text-zinc-450 text-[7px]">POST /api/v1/checkout</span>
                          <span className="text-emerald-400 bg-emerald-950 px-1 py-0.5 rounded text-[6px] font-bold">200 OK</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#18181b] px-2 py-1 rounded-md border border-zinc-850">
                          <span className="text-zinc-450 text-[7px]">GET /api/user/telemetry</span>
                          <span className="text-emerald-400 bg-emerald-950 px-1 py-0.5 rounded text-[6px] font-bold">200 OK</span>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "Portfolio & Creative Websites",
                  desc: "Visually engaging portfolio websites for creators, agencies, brands, and professionals looking to stand out online.",
                  icon: <Sparkles className="w-5 h-5 text-zinc-500" />,
                  visual: (
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 w-full h-[145px] shadow-lg flex flex-col justify-between overflow-hidden relative text-white">
                      <div className="absolute -top-12 -left-12 w-28 h-28 bg-rose-500/10 rounded-full blur-xl pointer-events-none" />
                      <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                      <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5 text-[8px] font-mono tracking-widest uppercase text-zinc-400">
                        <span>STUDIO PORTAL</span>
                        <span>EDITION VI</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1.5 py-1.5 h-12">
                        <div className="col-span-4 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-lg flex items-center justify-center p-1 cursor-pointer">
                          <span className="text-[7.5px] font-black uppercase text-center leading-none text-white">CRAFT <br/> HUB</span>
                        </div>
                        <div className="col-span-8 grid grid-rows-2 gap-1.5">
                          <div className="bg-zinc-800/80 rounded-lg p-1 px-1.5 flex items-center justify-between text-[7px]">
                            <span className="font-semibold text-zinc-200">HYLE BRANDS</span>
                            <span className="text-[6px] text-zinc-500">2026</span>
                          </div>
                          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg p-1 px-1.5 flex items-center justify-between text-[7px] font-bold">
                            <span>VIEW SHOWCASE</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[7px] text-zinc-400 text-center font-serif leading-none italic select-none">
                        "Pixel-perfect minimal canvases for digital innovators"
                      </div>
                    </div>
                  )
                },
                {
                  title: "Blog & Content Platforms",
                  desc: "Fast and optimized blogging systems with SEO-friendly architecture and clean reading experiences.",
                  icon: <FileText className="w-5 h-5 text-zinc-500" />,
                  visual: (
                    <div className="bg-white border border-zinc-200 rounded-2xl p-4 w-full h-[145px] shadow-lg flex flex-col justify-between overflow-hidden relative font-sans text-zinc-500">
                      <div className="absolute right-0 top-0 w-20 h-20 bg-yellow-450/5 rounded-full blur-md" />
                      <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-400 border-b border-zinc-100 pb-1.5">
                        <span>TECH JOURNAL • MAY 2026</span>
                        <span className="bg-zinc-100 text-zinc-500 px-1 rounded text-[6.5px]">5 MIN READ</span>
                      </div>
                      <div className="space-y-1.5 py-1.5 flex-1 flex flex-col justify-center">
                        <h4 className="text-[9px] font-serif font-black text-zinc-950 leading-snug">Implementing React 19 State Streams and Server Actions</h4>
                        <div className="space-y-1">
                          <div className="h-1 bg-zinc-100 rounded w-full" />
                          <div className="h-1 bg-zinc-100 rounded w-4/5" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-zinc-100 pt-1.5">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-4.5 h-4.5 rounded-full bg-violet-100 flex items-center justify-center text-[7px] font-black text-violet-700">JS</div>
                          <span className="text-[8px] font-semibold text-zinc-500">Juliet S.</span>
                        </div>
                        <span className="text-[7.5px] text-brand hover:underline font-mono uppercase font-bold">READ ARTICLE</span>
                      </div>
                    </div>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-zinc-50/70 border border-zinc-200/80 p-6 sm:p-7 rounded-[2rem] space-y-5 hover:border-[#2ebd73]/40 hover:bg-emerald-50/[0.02] hover:shadow-xl hover:shadow-[#2ebd73]/[0.01] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-150 flex items-center justify-center shadow-xs group-hover:bg-[#2ebd73]/10 transition-colors duration-300 text-zinc-800">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-zinc-950 tracking-tight font-sans text-left">{item.title}</h3>
                      <p className="text-xs sm:text-[13px] text-zinc-500 font-light leading-relaxed text-left">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 w-full transform group-hover:scale-[1.01] transition-transform duration-300">
                    {item.visual}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Build - Custom section for Mobile Development */}
      {serviceId === "mobile" && <MobileAppShowcaseSection />}

      {/* What We Build - Custom section for Game Development */}
      {serviceId === "game" && <GameShowcaseSection />}

      {/* 2. Tactical Capabilities */}
      <TacticalDeliverablesSection service={service} serviceId={serviceId} />

      {/* 3. Technology Stack Boundaries */}
      <section className="py-8 bg-transparent text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8">
            <div className="space-y-1.5 max-w-lg">
              <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 uppercase">Deployed Stack Modules</h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Technologies utilized routinely in the development workflow for this category.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-mono text-zinc-700 uppercase font-medium shadow-sm hover:border-brand transition-colors cursor-default flex items-center gap-2"
                >
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
        {/* 4. About (Studio Roadmap) / Pricing / FAQ - Structured dynamically */}
      {serviceId === "web" || serviceId === "mobile" || serviceId === "game" ? (
        <>
          {/* Custom Development Process timeline */}
          {serviceId === "mobile" ? (
            <MobileSprintPipelineExplorer />
          ) : serviceId === "game" ? (
            <GameDevelopmentQuestPipelineExplorer />
          ) : (
            <section className="py-12 md:py-16 bg-zinc-50/70 border-b border-zinc-100 text-left relative overflow-hidden">
              {/* Ambient Vibrant Spotlights */}
              <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-violet-400/5 rounded-full blur-[130px] pointer-events-none" />
              
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
                
                <div className="space-y-3.5 max-w-xl">
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none">
                    Our Development Process
                  </h2>
                  <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed">
                    How we translate raw concepts into visually responsive and highly scalable web applications.
                  </p>
                </div>

                {/* Vertical steps structure */}
                <div className="relative border-l border-zinc-200 ml-5 md:ml-8 space-y-12">
                  {processSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      className="relative pl-10 md:pl-12 group"
                    >
                      {/* Circle icon marker on timeline */}
                      <div className="absolute -left-[21px] top-1.5 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-md z-10 group-hover:border-transparent transition-all duration-300">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${step.color} flex items-center justify-center text-white text-xs font-black shadow-sm`}>
                          {step.num}
                        </div>
                      </div>

                      <div className="bg-white hover:bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 rounded-[2rem] p-6 sm:p-8 space-y-2 shadow-sm hover:shadow-md transition-all duration-300 max-w-4xl relative overflow-hidden">
                        {/* Interactive edge slide indicator */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${step.color}`} />

                        <h4 className="text-lg font-bold text-zinc-950 font-sans tracking-tight flex items-center gap-3">
                          {step.title}
                          <span className="text-[10px] py-0.5 px-2 bg-zinc-100 rounded-full text-zinc-500 group-hover:bg-brand-light group-hover:text-brand transition-all font-mono font-bold">STAGE 0{step.num}</span>
                        </h4>
                        <p className="text-xs sm:text-[14px] text-zinc-500 font-light leading-relaxed max-w-3xl">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </section>
          )}

          {/* Custom Why Choose Hyle Studios Section */}
          {serviceId === "mobile" ? (
            <MobileBentoWhyChoose />
          ) : (
            <section className="py-12 md:py-16 bg-white border-b border-zinc-100 text-left relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/5 rounded-full blur-[110px] pointer-events-none" />

              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
                
                <div className="space-y-3.5 max-w-xl">
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0c0d] tracking-tight leading-none">Why Choose Hyle Studios</h2>
                  <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed">
                    We maintain premium architectural standards to deliver remarkable, long-term business outcomes for our clients.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {whyChooseItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className={`bg-zinc-50 border border-zinc-200/80 p-6 sm:p-8 rounded-[2rem] flex items-start space-x-4 transition-all duration-300 ${item.viber}`}
                    >
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs shrink-0 mt-0.5 ${item.spot} border border-black/5`}>
                        {item.icon}
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h4 className="text-[13px] font-mono tracking-wider text-zinc-950 font-bold uppercase">{item.title}</h4>
                        <p className="text-xs sm:text-[13px] text-zinc-500 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </section>
          )}
        </>
      ) : (
        <About setView={setView} />
      )}
      <Pricing hideToggle={true} serviceId={serviceId} />
      <FAQ serviceId={serviceId} />

      {/* 5. Modern Fancy Green Block CTA Section - Linked directly to HomepageCTA for consistency */}
      <HomepageCTA setView={setView} />

    </div>
  );
}
