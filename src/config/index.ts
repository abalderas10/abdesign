import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alberto Balderas — Developer",
  author: "Alberto Balderas",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alberto-big.jpg",
  navLinks: [
    { text: "Features", href: "#features" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/abalderas10/" },
    { text: "Github", href: "https://github.com/abalderas10" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alberto Balderas",
    specialty: "Developer",
    summary:
      "Transformo ideas en experiencias digitales impactantes. Como desarrollador especializado en diseño de interfaces (UI), creación de aplicaciones web y móviles, y mantenimiento técnico continuo, ofrezco soluciones completas para proyectos digitales.\n\nCon base en la Ciudad de México (CDMX), trabajo con metodologías ágiles para garantizar productos.",
    email: "alberto.balderas@email.com",
  },
  experience: [
    {
      company: "Habilidades",
      position: "",
      startDate: "",
      endDate: "",
      summary: [
        "Desarrollo web moderno con renderizado híbrido y APIs personalizadas",
        "Sistemas de reservas y pagos en línea automatizados",
        "Paneles de administración intuitivos para gestión de contenidos",
        "Chatbots y asistentes AI personalizados para tu negocio",
        "Diseño UI/UX responsive y optimizado para móviles",
        "Optimización de rendimiento, SEO y analítica avanzada"
      ],
    },
  ],
  projects: [
    {
      name: "Growth BDM",
      summary: "Next.js, serverless, cobros Stripe, agendamiento con Cal.com, galería de imágenes Cloudinary y blog con Wisp.",
      linkPreview: "https://www.growthbdm.com/",
      linkSource: "#",
      image: "/growthbdm.png",
    },
    {
      name: "Blog",
      summary: "Blog profesional adaptable a dispositivos móviles y fácil de administrar. Incluye panel para publicaciones, categorías y comentarios.",
      linkPreview: "https://creaconstruye.vercel.app/",
      linkSource: "#",
      image: "/blog.png",
    },
    {
      name: "Photo Blog con Panel para administrar.",
      summary: "Crea y administra tu propio blog de fotografía con panel de control, subida de imágenes y categorías. Ideal para fotógrafos y creadores de contenido visual.",
      linkPreview: "https://abm-photo-blog.vercel.app/",
      linkSource: "#",
      image: "/photoblog.png",
    },
    {
      name: "Villa Galeon",
      summary: "Página en Next.js con sistema de pagos y reservas, agente AI para reservar y blog.",
      linkPreview: "https://villagaleon.com",
      linkSource: "",
      image: "/villagaleon.png",
    },
    {
      name: "Agentes de IA conversacionales",
      summary: "Asistentes inteligentes personalizados para tu negocio. Automatiza reservas, pagos y atención al cliente con IA entrenada con tus datos y procesos.",
      linkPreview: "#",
      linkSource: "#",
      image: "/wave.png",
    },
    {
      name: "Galería de Imagenes Evento",
      summary: "Galería de imágenes para el Workshop Oportunidades de Desarrollo en el Sector Comercial e Industrial - Agentes de Inteligencia Artificial IAMIA.",
      linkPreview: "https://workshop.growthbdm.com/",
      linkSource: "#",
      image: "/growthbdm.png",
    },
  ],
  about: {
    description: `
      ¡Hola! Soy Alberto, me apasiona llevar proyectos desde la idea inicial hasta su implementación tecnológica. Me especializo en desarrollo con IA first, LLMs, MCP y Agentes AI Conversacionales.

      Disfruto creando soluciones que combinan lo mejor de la tecnología actual para resolver problemas reales de manera innovadora.
    `,
    image: "/alberto-big.jpg",
  },
};

// #5755ff
