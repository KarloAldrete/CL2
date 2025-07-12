    interface Proyecto {
      slug: string;
      title: string;
      project_description: string;
      challenge: string;
      solution: string;
      techs: string[];
      time: string;
      previewUrl: string;
      testimonial_url: string;
      testimonial_name: string;
      testimonial_job_title: string;
      testimonial_text: string;
    }

    const proyectos: Proyecto[] = [ // Definimos el array proyectos con la nueva estructura
      {
        slug: "hello-pilates", // Extraído de la etiqueta roja "slug" junto al título
        title: "Hello Pilates",
        project_description: "Hello Pilates es un moderno estudio de pilates, recientemente establecido en la zona más exclusiva y vanguardista de la ciudad. Su objetivo era ofrecer una experiencia de fitness de primer nivel y, para ello, necesitaban una solución tecnológica que estuviera a la altura de sus instalaciones y ambiciones.",
        challenge: "Al iniciar operaciones, necesitaban una solución digital para gestionar su negocio de forma eficiente, evitando el caos de hojas de cálculo, cobros manuales y clases sobrevendidas. Problema central: ¿Cómo administrar pagos, clases y asistencia sin complicaciones?",
        solution: "Desarrollamos una landing page moderna que refuerza la identidad visual del estudio y una plataforma web personalizada con las siguientes funcionalidades clave:\\n\\n- Registro y login de clientes.\\n- Pago de mensualidades de forma sencilla y segura.\\n- Catálogo interactivo de clases con cupos en tiempo real.\\n- Calendario personalizado para que cada cliente gestione su rutina.\\n- Dashboard administrativo con métricas de actividad, estadísticas económicas y generación de reportes en PDF.\\n\\nTodo pensado para brindar una experiencia intuitiva tanto a clientes como a la administradora del estudio.",
        techs: ["Next.js", "Tailwind CSS", "Supabase", "Zustand"],
        time: "2 Meses",
        previewUrl: "/images/projects/preview-hello-pilates.jpg", 
        testimonial_url: "/images/testimonial-profile.jpg", 
        testimonial_name: "Maritea Buenrostro Hernandez",
        testimonial_job_title: "CEO Hello Pilates",
        testimonial_text: "Fue un gusto trabajar con CoderLabs, un trato eficiente y comprometidos con lo que mi proyecto necesitaba para iniciar como yo esperaba, eficiente, confiable y fácil de usar.",
      },
      {
        slug: "patio-inmobiliario",
        title: "Patio Inmobiliario",
        project_description: "Patio Inmobiliario es una empresa mexicana dedicada a la publicación y promoción de inmuebles, enfocada en brindar una experiencia confiable tanto para compradores como para quienes desean vender o rentar sus propiedades.",
        challenge: "Al ser un nuevo actor en el sector inmobiliario digital, necesitaban construir desde cero una identidad visual sólida y una plataforma que ofreciera una experiencia moderna y profesional para usuarios exigentes. Problema central: ¿Cómo posicionarse con una imagen profesional y facilitar una experiencia ágil para buscar y publicar inmuebles?",
        solution: "Diseñamos y desarrollamos la solución integral de la marca, que incluyó:\n\n- Diseño de identidad visual completa (colores, tipografía, estilo gráfico) en Figma.\n- Landing page enfocada en captar leads y mostrar el valor diferencial de la empresa.\n- Buscador de propiedades con filtros dinámicos por tipo, ubicación y precio.\n- Plataforma de gestión de publicaciones, permitiendo que propietarios y agentes suban y administren sus inmuebles con facilidad.\n\nLa experiencia está pensada para generar confianza tanto en compradores como en vendedores, asegurando una navegación intuitiva y funcional.",
        techs: ["Figma", "Next.js", "Supabase"],
        time: "4 meses",
        previewUrl: "/images/projects/preview-patio-inmobiliario.jpg",
        testimonial_url: "/images/testimonial-profile.jpg",
        testimonial_name: "Ivan Karlo",
        testimonial_job_title: "Cofundador de Patio Inmobiliario",
        testimonial_text: "Todo chido, el backend nos lo entregaron muy rapido y la ui quedo en segundos, no deberian llamarse coder deberian llamarse flash", 
      },
      {
        slug: "barralates-studio-fitness",
        title: "Barralates Studio Fitness",
        project_description: "Barralates es una franquicia de estudios fitness con presencia en varias sucursales dentro y fuera de la ciudad. Su enfoque combina barre, pilates y entrenamiento funcional, dirigido principalmente a mujeres que buscan una experiencia de entrenamiento integral.",
        challenge: "Con su crecimiento, necesitaban una plataforma unificada que facilitara a sus clientas pagar en línea, reservar clases según disponibilidad y organizar el flujo de trabajo entre múltiples sedes. Problema central: ¿Cómo ofrecer una experiencia digital simple para clientas y robusta para administrar varias sucursales?",
        solution: "Creamos una landing page profesional alineada con la identidad de la marca y desarrollamos una plataforma web escalable para todas sus sucursales, con funciones específicas para cada rol:\n\n- Clientes: registro, pagos en línea, reserva de clases por sede y horario.\n- Maestras: gestión de sus clases asignadas.\n- Administradoras: panel de métricas de uso, ingresos, clases activas y reportes.\n\nAdemás, el sistema permite asignación de roles por usuario y es adaptable al crecimiento de nuevas sucursales.",
        techs: ["Next.js", "Tailwind CSS", "Supabase", "Zustand"],
        time: "2 meses",
        previewUrl: "/images/projects/preview-barralates.jpg", 
        testimonial_url: "/images/testimonial-profile.jpg", 
        testimonial_name: "Maritea Buenrostro Hernandez", 
        testimonial_job_title: "CEO Hello Pilates", 
        testimonial_text: "Fue un gusto trabajar con CoderLabs, un trato eficiente y comprometidos con lo que mi proyecto necesitaba para iniciar como yo esperaba, eficiente, confiable y fácil de usar.", 
      }
    ];

    export function getProyectoBySlug(slug: string): Proyecto | undefined { // Descomentamos y exportamos la función
      return proyectos.find(proyecto => proyecto.slug === slug);
    }

    export { type Proyecto, proyectos }; // Exportamos la interfaz y el array