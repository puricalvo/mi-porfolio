import dashboard from "../assets/projects/dashboard.png";
import admins from "../assets/projects/admins.png";
import files from "../assets/projects/files.png";
import website from "../assets/projects/website.png";

export const featuredProject = {
  title: "CMS Builder",
  description:
    "CMS desarrollado desde cero con una arquitectura modular, orientado a la creación de sitios web dinámicos mediante un panel de administración completamente configurable.",
  gallery: [
    {
      src: dashboard.src,
      title: "Panel de Control",
    },
    {
      src: admins.src,
      title: "Gestión de Usuarios",
    },
    {
      src: files.src,
      title: "Gestor Multimedia",
    },
    {
      src: website.src,
      title: "Sitio Web",
    },
  ],
  features: [
    "API REST propia",
    "Dashboard dinámico",
    "Instalador automático",
    "Sistema de permisos",
    "OpenAI (opcional)",
    "Demo pública",
  ],
  tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "REST API", "OpenAI"],
  demoUrl: "https://cms-builder.ifree.page/dashboard",
  websiteUrl: "https://cms-builder.ifree.page/web/",
  codeUrl: "https://github.com/puricalvo/cms-builder",
  installerUrl: "https://github.com/puricalvo/cms-install-builder",
};

export const projects = [
  {
    title: "TwitterGo - Red Social Serverless",
    description:
      "Arquitectura Serverless desarrollada con Go, AWS Lambda, API Gateway, S3 y React.",
    tags: ["Go", "React", "AWS Lambda", "S3"],
    demoUrl: "https://puricalvo.github.io/twitterGo-client",
    codeUrl: "https://github.com/puricalvo/twittergo",
  },
];
