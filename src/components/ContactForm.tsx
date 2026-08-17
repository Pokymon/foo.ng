import { useState, FormEvent } from "react";
import { 
  Send, 
  Check, 
  Sparkles, 
  Mail, 
  Phone, 
  Clock, 
  Copy, 
  CheckCircle,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceOption {
  id: string;
  label: string;
}

interface ContactFormProps {
  setView?: (view: any) => void;
}

export default function ContactForm({ setView }: ContactFormProps) {
  const [fullName, setFullName] = useState<string>("");
  const [companyEmail, setCompanyEmail] = useState<string>("");
  const [projectBrief, setProjectBrief] = useState<string>("");
  
  // Custom interactive selectors
  const [selectedServices, setSelectedServices] = useState<string[]>(["web"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  
  // Interaction states
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCloseAndRedirect = () => {
    setSubmitted(false);
    setFullName("");
    setCompanyEmail("");
    setProjectBrief("");
    setSelectedBudget("");
    setSelectedServices(["web"]);
    if (setView) {
      setView("home");
    }
  };

  const servicesList: ServiceOption[] = [
    { id: "uiux", label: "UI/UX Design" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile App Dev" },
    { id: "game", label: "Game Development" },
    { id: "branding", label: "Branding & Identity" }
  ];

  const handleToggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      // Keep at least one selected for contextual preview
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contacthylestudios@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError("Please input your name or organization name.");
      return;
    }
    if (!companyEmail.trim() || !companyEmail.includes("@")) {
      setError("Please provide a valid active work/personal email address.");
      return;
    }
    if (!projectBrief.trim()) {
      setError("Please tell us a little bit about what you are building.");
      return;
    }
    
    setError(null);
    setSending(true);

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          companyEmail: companyEmail.trim(),
          projectBrief: projectBrief.trim(),
          selectedServices,
          selectedBudget,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to transmit inquiry.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Transmission error:", err);
      setError(err.message || "An unexpected error occurred while transmitting your inquiry.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact-section" className="pt-2 pb-12 md:pt-4 md:pb-20 bg-transparent relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle grid pattern background on outer container to elevate page alignment */}
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 z-0 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* LEFT HAND COLUMN: WARM HEADING, VALUE PROPOSITION, AND DIRECT DETAILS */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 text-left">
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#090d16] tracking-tight leading-none uppercase">
                Let's Build <br className="hidden md:block" /> Something <br /><span className="text-[#2ebd73]">Remarkable</span>.
              </h1>
              
              <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed max-w-md">
                Bring your product goals to our elite design and engineering studio. We combine beautiful digital patterns with secure, clean codebases. Complete the brief to initiate a custom blueprint estimate.
              </p>
            </div>

            {/* Response speed metric card */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-xs flex items-center space-x-4 max-w-sm select-none">
              <div className="w-10 h-10 rounded-full bg-[#ebfaf3] flex items-center justify-center text-[#2ebd73] shrink-0 relative">
                <Clock className="w-5 h-5 stroke-[2.5]" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-ping" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-bold block">
                  FAST RESPONSE
                </span>
                <span className="text-zinc-800 text-sm font-semibold block leading-tight mt-0.5 font-sans">
                  Response to inquiry within 4 hours
                </span>
              </div>
            </div>

            {/* Bulleted trust points */}
            <div className="space-y-4 pt-1 max-w-md">
              {[
                {
                  title: "Collaborate Directly with Creators",
                  desc: "Work directly with leading UI/UX designers and full-stack software architects from kickoff to delivery."
                },
                {
                  title: "Milestone-Based Security",
                  desc: "Simple, highly transparent fixed pricing mapped to delivery phases. You only pay for completed milestones."
                },
                {
                  title: "Total IP Ownership Handoff",
                  desc: "100% of all intellectual assets, source code repositories, and polished Figma canvases are yours."
                }
              ].map((pt, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#ebfaf3] text-[#2ebd73] flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                    ✓
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-zinc-900 font-bold text-sm font-sans tracking-tight">
                      {pt.title}
                    </h3>
                    <p className="text-zinc-500 text-xs font-light leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Options with Copy to Clipboard interaction */}
            <div className="pt-4 border-t border-zinc-200/60 space-y-4 max-w-xl">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                Direct Communication Hub
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div 
                  onClick={handleCopyEmail}
                  className="bg-zinc-50/50 hover:bg-[#ebfaf3] border border-zinc-100 hover:border-[#2ebd73]/25 p-3.5 rounded-xl cursor-pointer transition-all duration-300 group flex flex-col justify-between h-full min-h-[105px]"
                  title="Click to copy our email"
                >
                  <div className="space-y-2">
                    <Mail className="w-4 h-4 text-zinc-450 group-hover:text-[#2ebd73] transition-colors" />
                    <div className="text-left leading-none">
                      <span className="text-[9px] text-zinc-400 uppercase font-mono block mb-1">EMAIL US</span>
                      <span className="text-zinc-850 font-bold text-[11px] break-all leading-tight">contacthylestudios@gmail.com</span>
                    </div>
                  </div>
                  <div className="text-zinc-400 group-hover:text-[#2ebd73] transition-colors self-end mt-1">
                    {copiedEmail ? (
                      <span className="text-[9px] font-mono tracking-tight font-bold text-[#2ebd73] animate-pulse">Copied!</span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>

                <a 
                  href="tel:+2349032736331"
                  className="bg-zinc-50/50 hover:bg-[#ebfaf3] border border-zinc-100 hover:border-[#2ebd73]/25 p-3.5 rounded-xl cursor-pointer transition-all duration-300 group flex flex-col justify-between h-full min-h-[105px]"
                  title="Click to call us"
                >
                  <div className="space-y-2">
                    <Phone className="w-4 h-4 text-zinc-450 group-hover:text-[#2ebd73] transition-colors" />
                    <div className="text-left leading-none">
                      <span className="text-[9px] text-zinc-400 uppercase font-mono block mb-1 font-bold">PHONE CALL</span>
                      <span className="text-zinc-850 font-bold text-[11px] leading-tight">+2349032736331</span>
                    </div>
                  </div>
                  <div className="text-zinc-400 group-hover:text-[#2ebd73] transition-colors self-end mt-1">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>

                <div className="bg-zinc-50/50 border border-zinc-100 p-4 rounded-xl flex flex-col justify-between h-full min-h-[115px]">
                  <div className="space-y-3">
                    <span className="text-[10px] text-zinc-400 uppercase font-mono block font-extrabold tracking-widest">FOLLOW US</span>
                    <div className="flex items-center gap-4.5 pt-1.5">
                      <a 
                        href="https://www.facebook.com/share/1KLvZ6R1g3/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noreferrer" 
                        title="Facebook" 
                        className="text-zinc-400 hover:text-[#1877F2] hover:scale-120 active:scale-95 transition-all duration-200 block"
                      >
                        <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/hyle.studios?igsh=ZnJoYmIyaTN6bXBl&utm_source=qr" 
                        target="_blank" 
                        rel="noreferrer" 
                        title="Instagram" 
                        className="text-zinc-400 hover:text-[#E4405F] hover:scale-120 active:scale-95 transition-all duration-200 block"
                      >
                        <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://wa.me/2349039260212" 
                        target="_blank" 
                        rel="noreferrer" 
                        title="WhatsApp" 
                        className="text-zinc-400 hover:text-[#25D366] hover:scale-120 active:scale-95 transition-all duration-200 block"
                      >
                        <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.774 9.774 0 00-6.979-2.872C6.034 1.018 1.61 5.387 1.606 10.814c-.001 1.701.452 3.361 1.309 4.814L1.904 20.12l4.743-1.243-.1 1.277z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="text-[10px] text-zinc-450 font-sans font-medium tracking-tight block self-end">
                    @hylestudios
                  </div>
                </div>
              </div>
            </div>

          </div>          {/* RIGHT HAND COLUMN: INTERACTIVE FORM CONTAINER & DYNAMIC INPUTS */}
          <div className="lg:col-span-7 w-full">
            <motion.form 
              key="lead-specification-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="bg-white border border-zinc-200/90 rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-zinc-150/45 space-y-6 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ebfaf3]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-1 select-none">
                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight font-sans">
                  Start Your Project
                </h3>
                <p className="text-zinc-400 text-xs font-light">
                  Fill out this quick brief to jumpstart direct collaboration.
                </p>
              </div>

              {/* INTERACTIVE SERVICES MULTI-SELECT CHIPS */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-bold">
                    1. SELECT SERVICES NEEDED (Select multiple)
                  </label>
                  <span className="text-[10px] font-mono text-zinc-400 font-medium">
                    {selectedServices.length} Selected
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {servicesList.map((srv) => {
                    const isSelected = selectedServices.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => handleToggleService(srv.id)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-medium transition-all duration-300 cursor-pointer select-none font-sans ${
                          isSelected 
                            ? "bg-[#ebfaf3] text-[#2ebd73] border-[#2ebd73] shadow-xs scale-102" 
                            : "bg-white hover:bg-zinc-50 text-zinc-650 border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <div className="flex items-center space-x-1.5">
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#2ebd73] stroke-[3]" />}
                          <span>{srv.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ESTIMATED BUDGET AMOUNT INPUT */}
              <div className="space-y-1.5">
                <label htmlFor="input-budget" className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-bold block">
                  2. ESTIMATED BUDGET AMOUNT
                </label>
                <input
                  id="input-budget"
                  type="text"
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  placeholder="e.g. $2,500 USD"
                  className="w-full bg-white text-zinc-800 border border-zinc-200 focus:border-[#2ebd73]/70 focus:ring-1 focus:ring-[#2ebd73]/50 rounded-xl px-4 py-3 text-xs focus:outline-none transition-all duration-300 font-sans shadow-2xs"
                />
              </div>

              {/* BASIC TEXT INPUT CREDENTIALS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1.5">
                  <label htmlFor="input-fullname" className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-bold block">
                    3. YOUR NAME OR COMPANY
                  </label>
                  <input
                    id="input-fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Henderson"
                    className="w-full bg-white text-zinc-800 border border-zinc-200 focus:border-[#2ebd73]/70 focus:ring-1 focus:ring-[#2ebd73]/50 rounded-xl px-4 py-3 text-xs focus:outline-none transition-all duration-300 font-sans shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input-email" className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-bold block">
                    4. PREFERRED WORK EMAIL
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full bg-white text-zinc-800 border border-zinc-200 focus:border-[#2ebd73]/70 focus:ring-1 focus:ring-[#2ebd73]/50 rounded-xl px-4 py-3 text-xs focus:outline-none transition-all duration-300 font-sans shadow-2xs"
                  />
                </div>
              </div>

              {/* PROJECT SPECS OR GOALS BRIEF */}
              <div className="space-y-1.5 pt-1">
                <label htmlFor="input-brief" className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-bold block">
                  5. TELL US ABOUT YOUR PROJECT GOALS & DEADLINE
                </label>
                <textarea
                  id="input-brief"
                  rows={4}
                  required
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  placeholder="Briefly describe what your product is, desired features, integration needs, or timeline guidelines..."
                  className="w-full bg-white text-zinc-800 border border-zinc-200 focus:border-[#2ebd73]/70 focus:ring-1 focus:ring-[#2ebd73]/50 rounded-xl p-4 text-xs focus:outline-none transition-all duration-300 font-sans resize-none shadow-2xs leading-relaxed"
                />
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-rose-500 font-mono font-medium pl-1 bg-rose-50/50 border border-rose-100 p-2.5 rounded-lg flex items-center space-x-1.5"
                >
                  <span>⚠️</span>
                  <span>{error}</span>
                </motion.div>
              )}

              <button
                id="submit-spec-btn"
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-[#2ebd73] hover:bg-[#259b5e] disabled:opacity-75 disabled:cursor-not-allowed text-white font-extrabold font-sans text-xs tracking-wider rounded-xl uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-md shadow-[#2ebd73]/10 hover:shadow-[#2ebd73]/20 hover:scale-[1.01] active:scale-[0.99] cursor-pointer mt-4"
              >
                {sending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </motion.form>
          </div>

        </div>

      </div>

      {/* FIXED iOS FACE ID STYLE TRANSMISSION SUCCESS MODAL WITH HEAVY BACKDROP BLUR */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseAndRedirect}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/40 backdrop-blur-2xl px-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 280, 
                damping: 24,
                delay: 0.08
              }}
              className="flex flex-col items-center text-center space-y-7 max-w-sm w-full bg-white px-8 py-10 rounded-[2.5rem] shadow-[0_24px_64px_-16px_rgba(46,189,115,0.12)] border border-[#2ebd73]/10"
            >
              {/* iOS Face ID scanner bracket frames */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Top-Left Bracket */}
                <motion.div
                  initial={{ x: -14, y: -14, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 w-4.5 h-4.5 border-t-3 border-l-3 border-[#2ebd73]"
                />
                {/* Top-Right Bracket */}
                <motion.div
                  initial={{ x: 14, y: -14, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 right-0 w-4.5 h-4.5 border-t-3 border-r-3 border-[#2ebd73]"
                />
                {/* Bottom-Left Bracket */}
                <motion.div
                  initial={{ x: -14, y: 14, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 w-4.5 h-4.5 border-b-3 border-l-3 border-[#2ebd73]"
                />
                {/* Bottom-Right Bracket */}
                <motion.div
                  initial={{ x: 14, y: 14, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 right-0 w-4.5 h-4.5 border-b-3 border-r-3 border-[#2ebd73]"
                />

                {/* Face ID style check outline with draw effect */}
                <div className="w-18 h-18 rounded-full border border-zinc-50 flex items-center justify-center relative overflow-hidden bg-emerald-50/20 shadow-xs">
                  <svg className="w-full h-full p-1" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r="33"
                      stroke="#f4f4f5"
                      strokeWidth="3.5"
                      fill="transparent"
                    />
                    
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="33"
                      stroke="#2ebd73"
                      strokeWidth="4"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, rotate: -90 }}
                      animate={{ pathLength: 1, rotate: 270 }}
                      transition={{ duration: 0.75, ease: "easeOut" }}
                    />

                    <motion.path
                      d="M26 41 L36 50 L54 32"
                      stroke="#2ebd73"
                      strokeWidth="5"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.65, duration: 0.38, ease: "easeOut" }}
                    />
                  </svg>
                </div>
              </div>

              {/* Soft professional green text */}
              <div className="space-y-3">
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95, duration: 0.35 }}
                  className="text-xl font-black uppercase tracking-wider text-[#2ebd73] font-sans"
                >
                  Inquiry Transmitted
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className="text-[#229257] font-medium text-xs sm:text-[13px] leading-relaxed max-w-xs"
                >
                  Thank you for your inquiry, <span className="font-extrabold">{fullName}</span>. We will analyze your specification and reach out shortly at <span className="font-extrabold">{companyEmail}</span>.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.35, duration: 0.4 }}
                className="pt-1 w-full"
              >
                <div className="inline-flex items-center space-x-1.5 text-[#2ebd73] font-mono tracking-widest text-[9px] uppercase font-black py-1.5 px-3 rounded-lg bg-emerald-50/50 border border-emerald-100/40">
                  <span>TAP ANYWHERE TO GO HOME</span>
                  <ArrowRight className="w-3 h-3 text-[#2ebd73] shrink-0" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
