import dashboard from "../assets/projects/dashboard.png";
import admins from "../assets/projects/admins.png";
import files from "../assets/projects/files.png";
import website from "../assets/projects/website.png";

import pickup from "../assets/projects/fresh-coffee-vercel.vercel.app-pickup.png";
import adminOrders from "../assets/projects/fresh-coffee-vercel.vercel.app-admin-orders-pending.png";
import calendarAdminPanel from "../assets/projects/calendar-admin-panel.png";
import calendarAdminMessages from "../assets/projects/calendar-admin-messages.png";
import calendarCreateServices from "../assets/projects/calendar-create-services.png";

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

  credentials: {
    username: "admin@demo.com",
    password: "demo123",
  },
};

export const projects = [
  {
    title: "Cafetería desde 1939",
    subtitle: "CoffeeShopAstro · Web de la cafetería",
    description:
      "Web de presentación y gestión de una cafetería, desarrollada con Astro y conectada al CMS Builder. Incluye las secciones de inicio, nosotros, proceso, menú, galería y blog, además de un formulario de contacto para realizar reservas. Desde la web también se puede acceder directamente a FreshCoffee, la aplicación de pedidos de la cafetería, para solicitar pedidos a domicilio o para recogerlos en tienda.",
    relation:
      "Este proyecto utiliza el CMS Builder para gestionar su contenido. Puedes consultar el Proyecto Destacado para conocer cómo funciona el CMS y acceder a su demo.",
    tags: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "PHP",
      "MySQL",
      "CMS Builder",
    ],
    demoUrl: "https://coffee-shop-astro-vercel.vercel.app/",
    codeUrl: "https://github.com/puricalvo/CoffeeShopAstro-vercel",
  },

  {
    title: "Fresh Coffee",
    subtitle: "La app de la Cafetería desde 1939",
    description:
      "Aplicación de pedidos de la cafetería desde 1939, desarrollada como proyecto independiente y conectada con la web CoffeeShopAstro. Permite consultar el catálogo, realizar pedidos para recoger en tienda o solicitar entrega a domicilio. Incluye un panel de administración para gestionar los pedidos y una pantalla Pickup para que la cafetería pueda controlar y mostrar los pedidos que ya están preparados.",
    relation:
      "Fresh Coffee forma parte del mismo proyecto que Cafetería desde 1939. La web pública está desarrollada con CoffeeShopAstro y Fresh Coffee funciona como su aplicación de pedidos independiente.",
    features: [
      "Catálogo de productos",
      "Carrito de compra",
      "Pedidos para recoger",
      "Panel de administración",
      "Gestión de pedidos",
      "Pantalla Pickup",
    ],
    adminDescription:
      "El panel de administración permite al encargado de la cafetería gestionar los pedidos y controlar su estado.",
    pickupDescription:
      "La pantalla Pickup está pensada para la cafetería y muestra los pedidos que ya están completados para facilitar su recogida.",
    gallery: [
      {
        src: adminOrders.src,
        title: "Panel de administración · Gestión de pedidos",
      },
      {
        src: pickup.src,
        title: "Pickup · Pedidos completados",
      },
    ],
    tags: [
      "Astro",
      "Vue",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Pinia",
      "PHP",
      "MySQL",
      "CMS Builder",
    ],
    demoUrl: "https://fresh-coffee-vercel.vercel.app/",
    codeUrl: "https://github.com/puricalvo/FreshCoffee-vercel",

    credentials: {
      username: "demo@demo.com",
      password: "demo123",
    },
  },

  {
    title: "Calendario de servicios",
    description:
      "Aplicación fullstack para organizar los servicios semanales de conductores. El panel de administración permite consultar los servicios por empleado y semana, asignar servicios, registrar descansos y hacer seguimiento de incidencias. También facilita la comunicación entre administración y conductores.",
    gallery: [
      {
        src: calendarAdminPanel.src,
        title: "Panel de administración · Servicios semanales por empleado",
      },
      {
        src: calendarCreateServices.src,
        title: "Panel de administración · Crear servicios o descansos",
      },
      {
        src: calendarAdminMessages.src,
        title: "Panel de administración · Historial de mensajes e incidencias",
      },
    ],
    features: [
      "Panel de administración con vista semanal por empleado",
      "Creación de servicios y registro de descansos",
      "Asignación de servicios a conductores",
      "Seguimiento de incidencias y mensajería interna",
    ],
    tags: [
      "React",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
    ],
    demoUrl: "https://calendar-blush-xi-53.vercel.app/",
    codeUrl: "https://github.com/puricalvo/calendar",
    apiUrl: "https://github.com/puricalvo/calendar-backend",
    credentials: [
      {
        title: "Calendario · Conductor 1",
        username: "user1@demo.invalid",
        password: "user123456",
      },
      {
        title: "Calendario · Conductor 2",
        username: "user2@demo.invalid",
        password: "user123456",
      },
    ],
  },

  {
    title: "TwitterGo - Red Social Serverless",
    description:
      "Red social construida con Go y React. Esta demo independiente está poblada con perfiles y publicaciones ficticios y se puede explorar en modo de solo lectura.",
    tags: ["Go", "React", "MongoDB", "GridFS", "API REST"],
    demoUrl: "https://puricalvo.github.io/twitterGo-demo-client/",
    codeUrl: "https://github.com/puricalvo/twittergo",
    credentials: [
      {
        title: "TwitterGo · Credenciales",
        username: "demo@twittergo.invalid",
        password: "demo123456",
      },
    ],
  },
];
