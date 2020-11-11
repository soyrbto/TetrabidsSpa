const navbarItems = ["Servicios", "Blog", "Productos", "FAQ"];
const secNavbarItems = ["Servicios", "Productos", "Contacto"];
const visibleSections = ["Home", "Servicios", "Productos", "Contacto"];
const desktopSection = ["Home", "section-container"];

const accordionData = [
  {
    title: "Disponibles en todo momento",
    body:
      "Durante el desarrollo de tu pagina, aplicacion o plataforma estamos disponibles para ti, o tu equipo en todo momento. Creemos que una buena comunicacion es clave, asi que siempre podras estar al dia con los avances.",
  },
  {
    title: "Ve como tu proyecto se hace realidad",
    body:
      "Durante el desarrollo de tu pagina, aplicacion o plataforma estamos disponibles para ti, o tu equipo en todo momento. Creemos que una buena comunicacion es clave, asi que siempre podras estar al dia con los avances.",
  },
  {
    title: "Optimizacion y desarrollo",
    body:
      "Durante el desarrollo de tu pagina, aplicacion o plataforma estamos disponibles para ti, o tu equipo en todo momento. Creemos que una buena comunicacion es clave, asi que siempre podras estar al dia con los avances.",
  },
];

const servicesData = {
  title: "Servicios",
  abstract:
    "Tambien suelen ser las fases de desarrollo de una aplicacion movil o web, en el caso de paginas institucionales o landing page, algunas fases son muy simples aunque igual estan presentes.",
  serviceItems: [
    "asesoria",
    "seudocódigo",
    "UI UX",
    "Desarrollo",
    "Optimizacion",
    "Mantenimiento",
  ],
  asesoria: `En la actualidad hay muchas maneras diferentes de desarrollar una pagina o aplicacion, cada una con sus distintos pro y contras. <br>
   <br>
   Elegir desde el principio el camino que deseas, y conocer los costos asociados de los diferentes acercamientos, es el primer paso para evitar gastos innecesarios a futuro, y perdidas de tiempo...`,
  seudocódigo: `El seudocódigo es la estructura lógica sin escribir código realmente. Tenerlo desde fases tempranas, ayuda a tener una idea general del proyecto, crear una mejor arquitectura y tomar mejores decisiones. <br>
   <br>
   además de que le permite al dueño del producto estar seguro que todas las características tienen su lugar y no tendrá que pasar por el proceso de agregar y buscarles lugar a mitad del desarrollo.`,
  "UI UX": `UI y UX o, interfaz de usuario y experiencia de usuario, es el diseño de los componentes visuales, e interactivos de cualquier página o aplicación.<br>
  <br>
  Intuitivos, accesibles, estéticos, son algunas de las características finales, después de un proceso, de estudio de los usuarios, objetivos que deben cumplir y pruebas que deben cursar para entender cuál es la mejor manera de llevarlos a cabo.`,
  Desarrollo: `Es la fase donde se toman los lineamientos técnicos, la estructura lógica del seudocódigo y los diseños de las interfaces como guía para desarrollar el software. <br>
  <br>
  hay ciclos de fase de desarrollo y pruebas conforme se van cumpliendo los objetivos de desarrollo.`,
  Optimizacion: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia non neque debitis quod quibusdam maxime temporibus, laboriosam, suscipit ratione minus! Perferendis, doloremque odio officia, harum tempora dolores repudiandae vel minus molestiae necessitatibus blanditiis ipsam. Incidunt placeat illum impedit nulla esse, earum ad et facere! Voluptates et, incidunt, magnam dolore placeat voluptatum porro velit animi maiores dignissimos natus recusandae autem.`,
  Mantenimiento: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia non neque debitis quod quibusdam maxime temporibus, laboriosam, suscipit ratione minus! Perferendis, doloremque odio officia, harum tempora dolores repudiandae vel minus molestiae necessitatibus blanditiis ipsam. Incidunt placeat illum impedit nulla esse, earum ad et facere! Voluptates et, incidunt, magnam dolore placeat voluptatum porro velit animi maiores dignissimos natus recusandae autem.`,
};

const productsData = {
  title: "Productos",
  abstract: `Productos simples para temas complejos, si quieres informacion mas detallada del alcance que podemos tener en un proyecto contactanos.`,
  productItems: ["Wordpress", "Headless wordpress", "Paginas a medida"],
  Wordpress: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia non neque debitis quod quibusdam maxime temporibus, laboriosam, suscipit ratione minus! Perferendis, doloremque odio officia, harum tempora dolores repudiandae vel minus molestiae necessitatibus blanditiis ipsam. Incidunt placeat illum impedit nulla esse, earum ad et facere! Voluptates et, incidunt, magnam dolore placeat voluptatum porro velit animi maiores dignissimos natus recusandae autem.`,
  "Headless wordpress": `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia non neque debitis quod quibusdam maxime temporibus, laboriosam, suscipit ratione minus! Perferendis, doloremque odio officia, harum tempora dolores repudiandae vel minus molestiae necessitatibus blanditiis ipsam. Incidunt placeat illum impedit nulla esse, earum ad et facere! Voluptates et, incidunt, magnam dolore placeat voluptatum porro velit animi maiores dignissimos natus recusandae autem.`,
  "Paginas a medida": `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officia non neque debitis quod quibusdam maxime temporibus, laboriosam, suscipit ratione minus! Perferendis, doloremque odio officia, harum tempora dolores repudiandae vel minus molestiae necessitatibus blanditiis ipsam. Incidunt placeat illum impedit nulla esse, earum ad et facere! Voluptates et, incidunt, magnam dolore placeat voluptatum porro velit animi maiores dignissimos natus recusandae autem.`,
};

const contactData = {
  title: "¿Quieres conocer mas de nuestros servicios?",
  subtitle: "Escribenos y nos contactaremos contigo a la brevedad posible.",
  email: "contacto@tetrabids",
  location: "Agencia totalmente remota",
};

export {
  navbarItems,
  accordionData,
  servicesData,
  productsData,
  secNavbarItems,
  contactData,
  visibleSections,
  desktopSection,
};
