import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alberto Balderas — Mobile & Web Developer",
  author: "Alberto Balderas",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alberto-big.jpg",
  navLinks: [
    { text: "Habilidades", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/abalderas10/" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alberto Balderas",
    specialty: "Mobile & Web Developer",
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
        "• Desarrollo de sitios web modernos, rápidos y escalables con renderizado híbrido y rutas API personalizadas.",
        "• Implementación de sistemas de reservas y pagos en línea totalmente integrados y automatizados.",
        "• Creación de paneles de administración intuitivos y gestión avanzada de contenidos para equipos no técnicos.",
        "• Automatización de agendas, cobros y soporte mediante asistentes conversacionales inteligentes.",
        "• Integración de chatbots y agentes AI entrenados con la información y procesos de tu negocio.",
        "• Diseño de experiencias de usuario atractivas, responsivas y optimizadas para dispositivos móviles.",
        "• Despliegue continuo, optimización de velocidad y escalabilidad en la nube.",
        "• Estrategias avanzadas de SEO, mejora de performance y accesibilidad web.",
        "• Creación de identidad visual digital, guías de estilo y recursos gráficos personalizados.",
        "• Integración de APIs externas, automatización de flujos empresariales y conexión entre sistemas.",
        "• Implementación de analítica avanzada y monitoreo de comportamiento de usuarios para toma de decisiones."
      ],
    },
  ],
  projects: [
    {
      name: "Blog",
      summary: "Blog profesional adaptable a dispositivos móviles y fácil de administrar. Incluye panel para publicaciones, categorías y comentarios.",
      linkPreview: "#",
      linkSource: "#",
      image: "/blog1.png",
    },
    {
      name: "Photo Blog con Panel para administrar.",
      summary: "Crea y administra tu propio blog de fotografía con panel de control, subida de imágenes y categorías. Ideal para fotógrafos y creadores de contenido visual.",
      linkPreview: "#",
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
      summary: "Desarrollamos agentes conversacionales de IA personalizados para tu empresa, integrados a tu web y entrenados con tus datos. Automatiza reservas, cobros y atención al cliente con asistentes inteligentes adaptados a tus procesos y necesidades.",
      linkPreview: "#",
      linkSource: "#",
      image: "/ia-agent.png",
    },
  ],
  about: {
    description: `
      Hola, soy Alberto Balderas, apasionado por crear experiencias digitales que combinan diseño y tecnología. Mi enfoque es el desarrollo web y móvil con una visión integral de UI/UX, performance y escalabilidad.

      He liderado proyectos de e-commerce, soluciones educativas con IA, apps para restaurantes y branding digital, siempre buscando que cada solución tenga impacto real y medible.
    `,
    image: "/alberto-big.jpg",
  },
};

// #5755ff
