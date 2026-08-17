import { ViewType } from "../types";
import { ArrowUp, Mail, Shield, Scale, Terminal } from "lucide-react";

interface FooterProps {
  setView: (view: ViewType) => void;
}

export default function Footer({ setView }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewClick = (view: ViewType) => {
    if (view === "services") {
      const el = document.getElementById("services-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        setView("home");
        setTimeout(() => {
          const scrollEl = document.getElementById("services-section");
          if (scrollEl) scrollEl.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      setView(view);
    }
  };

  return (
    <footer id="main-footer" className="bg-transparent border-t border-zinc-100/50 pt-16 pb-8 text-zinc-500 relative overflow-hidden">
      
      {/* Decorative vertical background bars */}
      <div className="absolute inset-y-0 left-10 w-px bg-zinc-200/40 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-10 w-px bg-zinc-200/40 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Company Brief block */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => setView("home")} className="flex items-center space-x-3.5 shrink-0 cursor-pointer hover:opacity-85 transition-opacity text-left">
              {/* 3x3 Brand Grid Logo (Larger and bolder per image) */}
              <svg viewBox="0 0 56 56" className="w-11 h-11 select-none shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              {/* Styled text layout matching the logo image perfectly (Bigger in Footer) */}
              <div className="flex items-center space-x-3">
                <span className="text-zinc-950 font-sans text-2xl font-extrabold tracking-tight leading-none">
                  Hyle
                </span>
                <span className="h-6 w-[2px] bg-zinc-200" />
                <span className="text-[#2ebd73] font-sans text-2xl font-semibold tracking-tight leading-none font-medium">
                  Studios
                </span>
              </div>
            </button>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              An elite design & development house crafting modular client systems, robust core backend services, and AI architectures that scale flawlessly.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] tracking-widest font-mono text-zinc-400 uppercase block font-bold">
              WORKSPACE VIEWS
            </span>
            <ul className="space-y-2 text-left">
              {[
                { label: "Home", view: "home" },
                { label: "Services", view: "services" },
                { label: "About Us", view: "about" },
                { label: "Contact Hub", view: "contact" },
                { label: "Pricing Plans", view: "pricing" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleViewClick(link.view as ViewType)}
                    className="text-xs hover:text-[#2ebd73] transition-colors duration-200 font-mono uppercase text-zinc-500 text-left cursor-pointer font-medium"
                  >
                    // {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] tracking-widest font-mono text-zinc-400 uppercase block font-bold">
              ESTABLISHED SERVICES
            </span>
            <ul className="space-y-2 text-left">
              {[
                { label: "Web App & SaaS", view: "service-web" },
                { label: "Mobile Dev", view: "service-mobile" },
                { label: "Game Dev", view: "service-game" },
                { label: "UI/UX Design", view: "service-uiux" },
                { label: "Branding", view: "service-branding" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setView(link.view as ViewType)}
                    className="text-xs hover:text-[#2ebd73] transition-colors duration-200 font-mono uppercase text-zinc-500 text-left cursor-pointer font-medium"
                  >
                    // {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct client signoff */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] tracking-widest font-mono text-zinc-400 uppercase block font-bold">
              PARTNERSHIP DESK
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Launch your next digital masterpiece on pristine, hand-crafted architecture. Connect directly with our team to lock in a dedicated design & code slot today.
            </p>
            <div className="flex items-center space-x-2 text-zinc-700 font-mono text-xs pt-1 font-bold">
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>contacthylestudios@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: License and copyright */}
        <div className="border-t border-zinc-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-zinc-400">
            <span>© {new Date().getFullYear()} HYLE STUDIOS. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={handleScrollTop}
            className="p-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-650 text-zinc-600 rounded-lg group transition cursor-pointer shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
