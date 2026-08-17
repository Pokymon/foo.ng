import { ServiceDetail, CaseStudy, TechTool, FAQItem } from "./types";

export const SERVICES: ServiceDetail[] = [
  {
    id: "mobile",
    name: "Mobile App Development",
    shortDesc: "We create high-performance mobile applications for both iOS and Android across multiple industries and use cases.",
    fullDesc: "We create high-performance mobile applications for both iOS and Android across multiple industries and use cases. Our team ensures that your app is beautifully designed, fast, responsive, and integrates secure, real-time features to support future scale.",
    icon: "Smartphone",
    tag: "iOS & Android",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite", "Firebase Auth"],
    capabilities: [
      "Modern UI/UX Design",
      "Cross-Platform Compatibility",
      "High-Speed Performance",
      "Scalable App Architecture",
      "Secure Authentication Systems",
      "API & Backend Integration",
      "Push Notifications",
      "Real-Time Features",
      "App Store & Play Store Deployment",
      "Ongoing Maintenance & Updates"
    ]
  },
  {
    id: "web",
    name: "Web Development",
    shortDesc: "Building modern digital experiences that drive growth, combining beautiful high-performance design with powerful functionality.",
    fullDesc: "At Hyle Studios, we design and develop high-performance websites and web applications built for speed, scalability, and user engagement. From sleek business websites and eCommerce platforms to advanced SaaS applications and custom web systems, we create digital products that combine beautiful design with powerful functionality.",
    icon: "Globe",
    tag: "Digital Growth",
    techStack: ["React", "Next.js", "TypeScript", "JavaScript", "Supabase", "Django", "Cursor", "Node.js", "Tailwind CSS", "Vite"],
    capabilities: [
      "Responsive Web Design",
      "Frontend & Backend Development",
      "API & Database Integration",
      "Authentication & User Systems",
      "Payment Gateway Integration",
      "SEO Optimization",
      "Performance Optimization",
      "Cloud Deployment",
      "Secure & Scalable Architecture",
      "CMS & Content Management Systems"
    ]
  },
  {
    id: "game",
    name: "Game Development",
    shortDesc: "We Build Worlds. You Create The Legacy.",
    fullDesc: "From mobile games and indie titles to immersive multiplayer experiences, Hyle Studios transforms ideas into unforgettable games that captivate players and keep them coming back for more.",
    icon: "Gamepad2",
    tag: "Immersive Experiences",
    techStack: ["Unity", "Unreal Engine", "WebGL", "HTML5 Canvas", "C#", "Three.js"],
    capabilities: [
      "Complete Game Design & Development",
      "Gameplay System Development",
      "Cross-Platform Compatibility",
      "UI/UX Design For Games",
      "Character & Environment Design",
      "Multiplayer Integration",
      "Performance Optimization",
      "Analytics & Monetization Systems",
      "Publishing & Store Deployment",
      "Ongoing Support & Updates"
    ]
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    shortDesc: "We design user-centered digital experiences that balance aesthetics, usability, and functionality.",
    fullDesc: "We design user-centered digital experiences that balance aesthetics, usability, and functionality. We translate business rules directly into delightful ergonomics, beautiful responsive layouts, and consistent spacing rules.",
    icon: "Figma",
    tag: "Pixel-Perfect Aesthetics",
    techStack: ["Figma Design", "Adobe Creative Suite", "Spline 3D", "CSS/SVG Tokens", "Design System"],
    capabilities: [
      "High-fidelity Product UI design, UX research, and user wireframe mapping",
      "Interactive prototypes, mobile applications, and web interfaces design",
      "Centralized design systems and SaaS dashboard workspace layouts",
      "User experience optimization, accessibility, and clean interface designs",
      "Conversion-focused layouts that maintain consistent visual systems"
    ]
  },
  {
    id: "branding",
    name: "Graphic Design & Branding",
    shortDesc: "We help businesses establish strong, memorable visual identities and pixel-perfect branding creatives.",
    fullDesc: "We help businesses establish strong and memorable visual identities. Our multidisciplinary design services range from logo creation to complete brand guidelines and outstanding digital marketing creatives.",
    icon: "Paintbrush",
    tag: "Visual Identity",
    techStack: ["Adobe Illustrator", "Photoshop", "InDesign", "Vector Art", "Brand Guidelines"],
    capabilities: [
      "Outstanding logo design, brand identity systems, and brand style guides",
      "Social media branding, custom product packaging, and event branding",
      "Graphic design: marketing flyers, event posters, invitations, and stationery",
      "High-impact presentation decks, advertising materials, and business cards",
      "Consistent social media graphics and digital marketing creatives"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "hylefit",
    name: "Hyle Fit",
    tagline: "High-Performance Exercise & Inertial Tracking App",
    category: "Mobile App & Performance Dashboard",
    description: "A gorgeous, dark physical training framework tracks workout intensities, calorie burn, and pulse metrics. Built with reactive custom animated charts that simulate biological signals in real time.",
    tags: ["Physical Science", "React Native", "Real-Time Plots", "Local Cache"],
    mockAppId: "hylefit",
    stats: [
      { label: "Rendering Velocity", value: "120 FPS" },
      { label: "Active Cohort", value: "240K+" },
      { label: "Crash Incident Ratio", value: "<0.01%" }
    ]
  },
  {
    id: "vaultify",
    name: "Vaultify",
    tagline: "Ultra-Secure Neobanking & Fintech Suite",
    category: "SaaS Web Platform",
    description: "Multi-currency digital asset platform supporting rapid transfers, card customizing utility ranges, and transparent ledger analytics. Designed with a Swiss typography layout.",
    tags: ["Fintech Suite", "Express Server", "Advanced Cryptography", "Tailwind UI"],
    mockAppId: "vaultify",
    stats: [
      { label: "Annual Settlement Volume", value: "$4.1B" },
      { label: "Client Latency Gap", value: "45ms" },
      { label: "Security Inspection Grade", value: "Class AAA" }
    ]
  },
  {
    id: "mercato",
    name: "Mercato",
    tagline: "Next-Generation Visual E-Commerce Platform",
    category: "SaaS Headless Workspaces",
    description: "Visually premium shopping layout utilizing dynamic search, micro-animations, fast fluid layouts, and fully optimized transactional shopping cart states.",
    tags: ["Commerce Engine", "Dynamic Search", "Responsive Grid", "Headless GraphQL"],
    mockAppId: "mercato",
    stats: [
      { label: "Transactional Conversion Spike", value: "+38%" },
      { label: "Page Weight Compressed", value: "x4" },
      { label: "Uptime Maintenance Log", value: "99.998%" }
    ]
  }
];

export const TECH_TOOLS: TechTool[] = [
  { name: "TypeScript", category: "Languages", icon: "Code-2" },
  { name: "JavaScript (ES6+)", category: "Languages", icon: "Braces" },
  { name: "CSS/HTML5", category: "Languages", icon: "Hash" },
  { name: "React", category: "Development", icon: "Laptop" },
  { name: "Next.js", category: "Development", icon: "Layers" },
  { name: "Vite", category: "Development", icon: "Zap" },
  { name: "Express", category: "Development", icon: "Server" },
  { name: "Tailwind CSS", category: "Design", icon: "Palette" },
  { name: "Figma", category: "Design", icon: "Component" },
  { name: "Spline 3D", category: "Design", icon: "Boxes" },
  { name: "Google Cloud Platform", category: "Infrastructure", icon: "Cloud" },
  { name: "Docker", category: "Infrastructure", icon: "Container" },
  { name: "Nginx", category: "Infrastructure", icon: "Shield" },
  { name: "Gemini AI Models", category: "AI & Cloud", icon: "Sparkles" },
  { name: "Google GenAI SDK", category: "AI & Cloud", icon: "Cpu" },
  { name: "GitHub Actions", category: "AI & Cloud", icon: "Shuffle" }
];

export const PRICING_PLANS = [
  {
    name: "Blog & Content Platforms",
    price: "$500",
    period: "flat rate per project",
    tagline: "Fast and optimized blogging systems with SEO-friendly architecture, content builders, and clean reading experiences.",
    features: [
      "High score speed layouts (Jamstack / Next.js)",
      "Automatic rich structured schema tags",
      "Lightweight Markdown text compilation CMS",
      "Non-intrusive progressive reading timeline bar",
      "Seamless RSS feeds & Substack automation hooks"
    ],
    cta: "Order Blog Platform Build",
    popular: false
  },
  {
    name: "Portfolio & Creative Websites",
    price: "$800",
    period: "flat rate per project",
    tagline: "Visually engaging portfolio websites for creators, agencies, brands, and professionals looking to stand out.",
    features: [
      "Breathtaking 3D/CSS motion micro-state triggers",
      "Ultra-responsive elegant media grid showcases",
      "Optimized assets serving under 1.2s load speeds",
      "Subtle typographic layout alignment guides",
      "Smooth newsletters or custom quote fields"
    ],
    cta: "Order Portfolio Build",
    popular: false
  },
  {
    name: "Business Websites",
    price: "$1,200",
    period: "flat rate per project",
    tagline: "Professional corporate and company websites designed to establish trust, strengthen your online presence, and convert visitors.",
    features: [
      "Up to 8 bespoke developed fluid layout pages",
      "Fully responsive pixel-perfect mobile viewports",
      "Advanced secure forms with spam filters built-in",
      "Global distribution via high-speed edge delivery",
      "Visual Headless CMS content editor setup"
    ],
    cta: "Order Business Website Build",
    popular: false
  },
  {
    name: "eCommerce Platforms",
    price: "$2,500",
    period: "flat rate per project",
    tagline: "Modern online stores with secure payment systems, product management, inventory handling, and checkout flow.",
    features: [
      "Advanced inventory handling with auto-alerts",
      "Multiple security gateways (Apple Pay, Stripe)",
      "Micro-animated instant checkout basket loop",
      "Real-time automated weight/shipping webhooks",
      "Complete account portal & track order history"
    ],
    cta: "Order eCommerce Platform Build",
    popular: false
  },
  {
    name: "SaaS Platforms",
    price: "$3,000",
    period: "flat rate per project",
    tagline: "Scalable software-as-a-service platforms with powerful dashboards, user systems, subscriptions, and cloud-based functionality.",
    features: [
      "Advanced dashboard and telemetry analytics",
      "Multi-tenant safe authorization and access roles",
      "Ready-to-use Stripe/LemonSqueezy pipelines",
      "Automated edge cloud-server deployment",
      "30 days dedicated hypercare support window"
    ],
    cta: "Order SaaS Platform Build",
    popular: false
  },
  {
    name: "Custom Web Applications",
    price: "from $4,000",
    period: "based on scope and scale",
    tagline: "Tailored web-based systems built specifically for your custom workflow, automated business lines, and unique operational rules.",
    features: [
      "Bespoke system dashboard architecture layouts",
      "Self-documenting interactive REST / GraphQL API",
      "Dedicated cloud structured database engines",
      "Secure SSL socket encrypted end-to-end lines",
      "Custom software tool integration webhooks"
    ],
    cta: "Order Custom Application Build",
    popular: false
  }
];

export const SERVICES_PRICING = [
  {
    id: "mobile",
    name: "Mobile App Development",
    price: "$3,500",
    period: "average project startup",
    tagline: "High-performance applications compiled for iOS and Android.",
    icon: "Smartphone",
    features: [
      "Cross-platform Flutter or React Native frameworks",
      "Fully customized interactive page transitions (120 FPS)",
      "Secure device authorization & bio scan interfaces",
      "Real-time notifications, local DB cache, and sync",
      "App Store & Google Play Store publishing support"
    ]
  },
  {
    id: "web",
    name: "Web App & SaaS Development",
    price: "$3,000",
    period: "average project startup",
    tagline: "Fluid SaaS structures, operational systems, and responsive platforms.",
    icon: "Globe",
    features: [
      "Complete bespoke application workspaces & Next.js systems",
      "Advanced role-based permissions & member admin hubs",
      "Dynamic payments processing (Stripe subscriptions/webhooks)",
      "Continuous data model validation & reliable backend setups",
      "Production deployment to high-speed hosting nodes"
    ]
  },
  {
    id: "game",
    name: "Game Development",
    price: "$4,000",
    period: "average project startup",
    tagline: "Immersive games and multiplayer interactive products across engines.",
    icon: "Gamepad2",
    features: [
      "PC, web browser, and mobile interactive game systems",
      "Fluid 2D/3D physics environments & asset setups",
      "Highly responsive character control mechanisms",
      "Unique indie game mechanics and structural loops",
      "Gameplay optimization, publishing, and assets export"
    ]
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    price: "$2,000",
    period: "average project startup",
    tagline: "Beautiful usability structures and high-fidelity prototypes.",
    icon: "Figma",
    features: [
      "Comprehensive product wireframes and user flow mapping",
      "High-fidelity visual design layouts using modern grids",
      "Fully interactive prototype simulations for client review",
      "Tailored design tokens guides, scales, and component sheets",
      "Ongoing layout optimization & accessibility conversion audits"
    ]
  },
  {
    id: "branding",
    name: "Graphic Design & Branding",
    price: "$1,500",
    period: "average project startup",
    tagline: "Memorable corporate guidelines and complete brand collateral.",
    icon: "Paintbrush",
    features: [
      "Professional custom logo systems & brand guidelines document",
      "Modern marketing flyers, posters, and print-ready designs",
      "Cohesive social media kits & digital identity assets",
      "Premium business cards and corporate stationery layout",
      "Outstanding pitch deck presentation slides design"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do your flat-rate project bundles work?",
    answer: "Our project bundles operate on a simple, transparent flat-rate basis. We estimate the milestones upfront, and you pay a fixed price per milestone. This completely eliminates unpredictable hourly rates and unexpected bills."
  },
  {
    question: "Are there any hidden fees or extra costs?",
    answer: "Never. We believe in absolute transparency. All pricing is finalized in our creative blueprint and proposal document before any design assets or code compilations begin."
  },
  {
    question: "Can we customize a package to fit our exact needs?",
    answer: "Yes, absolutely. While our standard bundles represent popular solutions, we routinely tailor custom scopes to fit your desired features, timeline, and development goals of your project."
  },
  {
    question: "What are your standard payment terms?",
    answer: "We typically split the project pricing into clear milestones, such as 50% upfront to initiate onboarding and design, and 50% upon final visual QA approval, code compiling, and repository handover."
  },
  {
    question: "Who owns the intellectual property and source code?",
    answer: "You do. 100% of all visual assets, design tokens, Figma artboards, native codebases, and deployment configurations are permanently transferred to your ownership upon milestone delivery and final payment."
  },
  {
    question: "How do you handle revisions if we need to adjust something?",
    answer: "Each milestone includes dedicated iterative feedback cycles. We present our designs and builds, collect your input, and implement revisions to ensure the final product perfectly aligns with your vision."
  }
];

export const PROCESS_STEPS = [
  {
    phase: "01",
    name: "Discovery & Strategy Workspace",
    description: "We drill into your business architecture, outline structural constraints, define target conversion metrics, and design complete project technical schemas."
  },
  {
    phase: "02",
    name: "High-Fidelity Ergonomic Design",
    description: "Using clean grid systems and visual design details, we outline every responsive layout state and user flow in Figma, with detailed interactive prototypes."
  },
  {
    phase: "03",
    name: "Elite Engineering Build-Out",
    description: "Our solutions pods write modular TypeScript codebases styled with Tailwind CSS utility classes, utilizing robust state rules and high-speed build scripts."
  },
  {
    phase: "04",
    name: "Strict QA Validation & Launch",
    description: "Every button is audited, responsiveness is inspected, server routes are hardened, and your product is safely rolled out onto Google Cloud container hosting."
  }
];
