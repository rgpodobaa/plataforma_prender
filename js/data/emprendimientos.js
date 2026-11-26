/**
 * ============================================================================
 * BASE DE DATOS LOCAL DE EMPRENDIMIENTOS - PRENDER (CFP408)
 * ============================================================================
 * Nota para el equipo:
 * Para agregar o modificar emprendimientos, solo es necesario editar este archivo.
 * Las fotos se ubicarán en assets/images/emprendimientos/{id}/ provistas por
 * el curso de Fotografía.
 */

export const emprendimientos = [
  {
    id: "chiripiorca-creaciones",
    nombre: "Chiripiorca Creaciones",
    categoria: "Diseño",
    descripcionCorta: "Diseños personales y para emprendedores. Personalizamos regalos y los convertimos en recuerdos.",
    descripcionLarga: "Emprendimiento creativo nacido del amor por el diseño y por los detalles que hacen único cada momento. Nos especializamos en Diseño Gráfico, ambientación de eventos, diseño de páginas web y creaciones personalizadas, pensadas para cada persona, cada marca y cada ocasión personal. Para particulares, creamos piezas únicas y con sentido: regalos, recuerdos y decoración que cuentan una historia y se hacen con dedicación desde la idea hasta la entrega. Para emprendedores y comerciantes, vamos mucho más allá de lo gráfico. Brindamos asesorías personalizadas según la necesidad de cada emprendimiento, acompañando su desarrollo, su imagen y su crecimiento, con mentorías, orientación y herramientas prácticas para que cada proyecto avance con claridad y con identidad propia. En Chiripiorca Creaciones creemos que cada emprendimiento tiene algo especial para mostrar, y nuestro trabajo es ayudar a que se vea, se sienta y crezca. Creamos con amor, acompañamos con compromiso y celebramos cada logro junto a nuestros clientes.",
    emprendedor: "Nadia Virginia Robledo",
    fotoPrincipal: "assets/images/emprendimientos/chiripiorca/foto-1.jpeg",
    galeria: [
      "assets/images/emprendimientos/chiripiorca/foto-2.jpeg",
      "assets/images/emprendimientos/chiripiorca/foto-3.jpeg",
      "assets/images/emprendimientos/chiripiorca/foto-4.jpeg",
      "assets/images/emprendimientos/chiripiorca/foto-5.jpeg"
    ],
    redes: {
      whatsapp: "5491169285133",
      instagram: "chiripiorcacreaciones",
      email: "chiripiorcacreaciones@gmail.com"
    },
    destacado: true
  },
  {
    id: "daruma",
    nombre: "Daruma",
    categoria: "Diseño",
    descripcionCorta: "Objetos de diseño y piezas creativas para regalar, decorar y personalizar tus espacios.",
    descripcionLarga: "Daruma es un proyecto de diseño que crea piezas originales con una mirada creativa y atención en los detalles. Cada propuesta busca sumar identidad y color a los espacios cotidianos, además de ofrecer opciones especiales para regalar. Esta descripción es provisoria y debe reemplazarse por la información confirmada del emprendimiento.",
    emprendedor: "Nombre de ejemplo (reemplazar)",
    fotoPrincipal: "assets/images/emprendimientos/daruma/DARUMA.jpeg",
    galeria: [
      "assets/images/emprendimientos/daruma/foto-1.jpeg",
      "assets/images/emprendimientos/daruma/foto-2.jpeg"
    ],
    redes: {
      whatsapp: "5491100000002",
      instagram: "daruma.diseno.ejemplo",
      email: "daruma@ejemplo.com"
    },
    destacado: true
  },
  {
    id: "desde-cero",
    nombre: "Desde cero",
    categoria: "Textil",
    descripcionCorta: "Ropa para mujeres y niños, combinando tendencias y comodidad",
    descripcionLarga: "Desde cero ofrece prendas para mujeres y niños, con diseños pensados para acompañar distintas ocasiones y estilos. La propuesta combina tendencias actuales con comodidad para el uso diario. Esta descripción es provisoria y debe reemplazarse por la información confirmada del emprendimiento.",
    emprendedor: "Nombre de ejemplo (reemplazar)",
    fotoPrincipal: "assets/images/emprendimientos/desde-cero/DESDE-CERO.jpg",
    galeria: [
      "assets/images/emprendimientos/desde-cero/foto-1.jpeg",
      "assets/images/emprendimientos/desde-cero/foto-2.jpeg"
    ],
    redes: {
      whatsapp: "5491178171166",
      instagram: "desdecero_23",
      email: "desdecero@ejemplo.com"
    },
    destacado: true
  },
  {
    id: "design-pool-pro",
    nombre: "Design Pool Pro",
    categoria: "Piscinas",
    descripcionCorta: "Equipos, accesorios y soluciones para instalación y mantenimiento de piscinas",
    descripcionLarga: "Design Pool Pro reúne equipos y accesorios para proyectos de piscinas y brinda soluciones para su instalación y mantenimiento. Su propuesta busca acompañar cada etapa, desde la puesta en marcha hasta el cuidado periódico. Esta descripción es provisoria y debe reemplazarse por la información confirmada del emprendimiento.",
    emprendedor: "Nombre de ejemplo (reemplazar)",
    fotoPrincipal: "assets/images/emprendimientos/design-pool-pro/DESIGN-POOL-PRO.jpg",
    galeria: [
      "assets/images/emprendimientos/design-pool-pro/foto-1.jpeg",
      "assets/images/emprendimientos/design-pool-pro/foto-2.jpeg"
    ],
    redes: {
      whatsapp: "5491100000004",
      instagram: "design_pool_pro",
      email: "designpoolpro@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "brillo-urbano",
    nombre: "Estudio Brillo Urbano",
    categoria: "Belleza",
    descripcionCorta: "Cuidado capilar, estilismo, colorimetría y diseño de cejas y pestañas.",
    descripcionLarga: "Espacio dedicado al bienestar personal y estética capilar. Aplicamos tratamientos reconstructores, alisados y cortes adaptados a tu estilo.",
    emprendedor: "Camila Navarro",
    fotoPrincipal: "assets/images/emprendimientos/brillo-urbano/principal.webp",
    galeria: [
      "assets/images/emprendimientos/brillo-urbano/foto-1.webp",
      "assets/images/emprendimientos/brillo-urbano/foto-2.webp"
    ],
    redes: {
      whatsapp: "5491100000005",
      instagram: "brillourbano.cfp",
      email: "brillourbano@ejemplo.com"
    },
    destacado: true
  },
  {
    id: "tecno-fix",
    nombre: "TecnoFix Soluciones",
    categoria: "Informática",
    descripcionCorta: "Mantenimiento preventivo, armado de PCs, instalación de software y redes hogareñas.",
    descripcionLarga: "Servicio informático integral para particulares y pymes. Diagnóstico rápido, limpieza de componentes y optimización de rendimiento.",
    emprendedor: "Gonzalo Benítez",
    fotoPrincipal: "assets/images/emprendimientos/tecno-fix/principal.webp",
    galeria: [
      "assets/images/emprendimientos/tecno-fix/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000006",
      instagram: "tecnofix.cfp",
      email: "tecnofix@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "hierro-y-fuego",
    nombre: "Forja Urbana",
    categoria: "Herrería",
    descripcionCorta: "Parrillas artesanales, rejas de seguridad, percheros y banquetas estilo industrial.",
    descripcionLarga: "Herrería artesanal y artística. Combinamos hierro macizo con madera para crear objetos funcionales y duraderos para el hogar y jardín.",
    emprendedor: "Martín Sosa",
    fotoPrincipal: "assets/images/emprendimientos/hierro-y-fuego/principal.webp",
    galeria: [
      "assets/images/emprendimientos/hierro-y-fuego/foto-1.webp",
      "assets/images/emprendimientos/hierro-y-fuego/foto-2.webp"
    ],
    redes: {
      whatsapp: "5491100000007",
      instagram: "forjaurbana.cfp",
      email: "forjaurbana@ejemplo.com"
    },
    destacado: true
  },
  {
    id: "aroma-verde",
    nombre: "Huerta & Verde Urbano",
    categoria: "Jardinería",
    descripcionCorta: "Plantas de interior, plantines agroecológicos, sustratos y diseño de balcones.",
    descripcionLarga: "Asesoramiento botánico para tu hogar. Armamos huertas verticales y asesoramos en el cuidado orgánico de plantas de interior y jardín.",
    emprendedor: "Florencia Paz",
    fotoPrincipal: "assets/images/emprendimientos/aroma-verde/principal.webp",
    galeria: [
      "assets/images/emprendimientos/aroma-verde/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000008",
      instagram: "verdeurbano.cfp",
      email: "verdeurbano@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "delicias-sin-tacc",
    nombre: "Sabor Consciente Sin TACC",
    categoria: "Gastronomía",
    descripcionCorta: "Panificados y viandas 100% libres de gluten, con certificación y sabor casero.",
    descripcionLarga: "Cocina segura para celíacos e intolerantes. Elaboramos pizzas, pastas frescas y budines en cocina exclusiva sin contaminación cruzada.",
    emprendedor: "Lorena Maidana",
    fotoPrincipal: "assets/images/emprendimientos/delicias-sin-tacc/principal.webp",
    galeria: [
      "assets/images/emprendimientos/delicias-sin-tacc/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000009",
      instagram: "saborconsciente.cfp",
      email: "saborconsciente@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "cuero-legitimo",
    nombre: "Marroquinería Austral",
    categoria: "Textil",
    descripcionCorta: "Billeteras, cinturones, mochilas y accesorios cosidos a mano con cuero genuino.",
    descripcionLarga: "Diseños clásicos con terminaciones de alta calidad. Cada pieza es cortada y bruñida artesanalmente garantizando máxima vida útil.",
    emprendedor: "Esteban Roldán",
    fotoPrincipal: "assets/images/emprendimientos/cuero-legitimo/principal.webp",
    galeria: [
      "assets/images/emprendimientos/cuero-legitimo/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000010",
      instagram: "marroquineria.austral",
      email: "marroquineria.austral@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "pixel-creativo",
    nombre: "Pixel Estudio Visual",
    categoria: "Informática",
    descripcionCorta: "Diseño de identidad visual, flyers publicitarios, papelería comercial y stickers.",
    descripcionLarga: "Soluciones gráficas pensadas para pequeños comercios y profesionales. Creación de logos, plantillas para redes sociales y piezas de impresión.",
    emprendedor: "Rocío Castro",
    fotoPrincipal: "assets/images/emprendimientos/pixel-creativo/principal.webp",
    galeria: [
      "assets/images/emprendimientos/pixel-creativo/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000011",
      instagram: "pixelestudio.cfp",
      email: "pixelestudio@ejemplo.com"
    },
    destacado: true
  },
  {
    id: "confort-termico",
    nombre: "Clima & Frío Norte",
    categoria: "Electricidad",
    descripcionCorta: "Instalación, carga de gas y mantenimiento preventivo de aires acondicionados split.",
    descripcionLarga: "Matriculado con instrumental de precisión. Instalaciones prolijas con prueba de vacío, garantía de trabajo y soporte post-instalación.",
    emprendedor: "Diego Morales",
    fotoPrincipal: "assets/images/emprendimientos/confort-termico/principal.webp",
    galeria: [
      "assets/images/emprendimientos/confort-termico/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000012",
      instagram: "climayfrionorte.cfp",
      email: "climayfrio@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "barber-vintage",
    nombre: "El Galpón Barbería",
    categoria: "Belleza",
    descripcionCorta: "Cortes clásicos, degradados modernos, perfilado de barba y toallas calientes.",
    descripcionLarga: "Experiencia tradicional de barbería en un ambiente cálido. Atención personalizada con turnos previos y productos de primera línea.",
    emprendedor: "Santiago Herrera",
    fotoPrincipal: "assets/images/emprendimientos/barber-vintage/principal.webp",
    galeria: [
      "assets/images/emprendimientos/barber-vintage/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000013",
      instagram: "elgalponbarber.cfp",
      email: "elgalponbarber@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "sabores-de-casa",
    nombre: "Viandas Saludables Mamá Flor",
    categoria: "Gastronomía",
    descripcionCorta: "Menús semanales equilibrados, viandas listas para calentar y opciones vegetarianas.",
    descripcionLarga: "Comida casera, fresca y nutritiva para simplificar tu semana laboral. Entrega programada a domicilio en recipientes ecológicos.",
    emprendedor: "Florencia Méndez",
    fotoPrincipal: "assets/images/emprendimientos/sabores-de-casa/principal.webp",
    galeria: [
      "assets/images/emprendimientos/sabores-de-casa/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000014",
      instagram: "mamaflorviandas.cfp",
      email: "mamaflor@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "muebles-infantiles",
    nombre: "Pequeño Rincón Montessori",
    categoria: "Carpintería",
    descripcionCorta: "Mobiliario a escala para la primera infancia: torres de aprendizaje, percheros y camas bajas.",
    descripcionLarga: "Fabricamos muebles pedagógicos que fomentan la autonomía de los chicos. Maderas pulidas sin aristas filosas y laqueadas al agua no tóxicas.",
    emprendedor: "Agustín Delgado",
    fotoPrincipal: "assets/images/emprendimientos/muebles-infantiles/principal.webp",
    galeria: [
      "assets/images/emprendimientos/muebles-infantiles/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000015",
      instagram: "pequenorincon.cfp",
      email: "pequenorincon@ejemplo.com"
    },
    destacado: true
  },
  {
    id: "cerveza-artesanal",
    nombre: "Cervecería 408",
    categoria: "Gastronomía",
    descripcionCorta: "Cerveza artesanal de autor en estilos IPA, Golden y Stout en botellones y latas.",
    descripcionLarga: "Micro-cervecería experimental. Seleccionamos maltas especiales y lúpulos patagónicos para lograr recetas únicas con gran cuerpo y aroma.",
    emprendedor: "Damián Rossi",
    fotoPrincipal: "assets/images/emprendimientos/cerveza-artesanal/principal.webp",
    galeria: [
      "assets/images/emprendimientos/cerveza-artesanal/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000016",
      instagram: "cerveceria408.cfp",
      email: "cerveceria408@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "unas-glam",
    nombre: "Nails & Art Boutique",
    categoria: "Belleza",
    descripcionCorta: "Esmaltado semipermanente, kapping en gel y nail art a mano alzada.",
    descripcionLarga: "Cuidado profesional de manos y pies con instrumental esterilizado. Diseños personalizados para eventos y uso cotidiano.",
    emprendedor: "Julieta Romero",
    fotoPrincipal: "assets/images/emprendimientos/unas-glam/principal.webp",
    galeria: [
      "assets/images/emprendimientos/unas-glam/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000017",
      instagram: "nailsartboutique.cfp",
      email: "nailsart@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "sublimacion-creativa",
    nombre: "Estampa Libre",
    categoria: "Textil",
    descripcionCorta: "Tazas personalizadas, remeras estampadas, gorras y merchandising para eventos.",
    descripcionLarga: "Sublimación y vinilo textil en tiradas pequeñas y grandes. Hacemos realidad tu idea para regalos empresariales o celebraciones familiares.",
    emprendedor: "Franco Duarte",
    fotoPrincipal: "assets/images/emprendimientos/sublimacion-creativa/principal.webp",
    galeria: [
      "assets/images/emprendimientos/sublimacion-creativa/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000018",
      instagram: "estampalibre.cfp",
      email: "estampalibre@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "automatizacion-hogar",
    nombre: "SmartDomos",
    categoria: "Electricidad",
    descripcionCorta: "Domótica accesible: interruptores inteligentes Wi-Fi, cámaras de seguridad y sensores.",
    descripcionLarga: "Modernizá tu casa sin obras invasivas. Controlá luces, portones y aires acondicionados desde tu celular o comandos de voz.",
    emprendedor: "Mariano Silva",
    fotoPrincipal: "assets/images/emprendimientos/automatizacion-hogar/principal.webp",
    galeria: [
      "assets/images/emprendimientos/automatizacion-hogar/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000019",
      instagram: "smartdomos.cfp",
      email: "smartdomos@ejemplo.com"
    },
    destacado: false
  },
  {
    id: "encuadernacion-artesanal",
    nombre: "Hojas al Viento",
    categoria: "Textil",
    descripcionCorta: "Cuadernos cosidos a mano, agendas perpetuas, álbumes de fotos y recetarios únicos.",
    descripcionLarga: "Encuadernación artesanal con costuras expuestas (copta, japonesa, belga) utilizando papeles libres de ácido y telas de tapicería estampadas.",
    emprendedor: "Paula Vidal",
    fotoPrincipal: "assets/images/emprendimientos/encuadernacion-artesanal/principal.webp",
    galeria: [
      "assets/images/emprendimientos/encuadernacion-artesanal/foto-1.webp"
    ],
    redes: {
      whatsapp: "5491100000020",
      instagram: "hojasalviento.cfp",
      email: "hojasalviento@ejemplo.com"
    },
    destacado: true
  }
];
