import { DeckData } from "@/lib/types";

export const deckData: DeckData = {
  client: "Eugenio",
  meetingContext: "Follow-up de diagnóstico operativo",
  navigation: [
    {
      key: "cover",
      index: 1,
      label: "Portada",
      kicker: "Mission Audit",
      theme: "neutral",
    },
    {
      key: "understanding",
      index: 2,
      label: "Operación",
      kicker: "Lo que entendimos",
      theme: "neutral",
    },
    {
      key: "cost",
      index: 3,
      label: "Costo",
      kicker: "Costo actual",
      theme: "risk",
    },
    {
      key: "vision",
      index: 4,
      label: "Evolución",
      kicker: "Hacia dónde va",
      theme: "value",
    },
    {
      key: "architecture",
      index: 5,
      label: "Arquitectura",
      kicker: "Sistema futuro",
      theme: "value",
    },
    {
      key: "phase",
      index: 6,
      label: "Fase 1",
      kicker: "Lo que proponemos",
      theme: "value",
    },
    {
      key: "investment",
      index: 7,
      label: "Inversión",
      kicker: "Tiempo e inversión",
      theme: "neutral",
    },
    {
      key: "next-step",
      index: 8,
      label: "Cierre",
      kicker: "Siguiente paso",
      theme: "value",
    },
  ],
  cover: {
    eyebrow: "Diagnóstico ejecutivo + roadmap propuesto",
    title: "FloxIA Mission Audit",
    subtitle:
      "Diagnóstico ejecutivo + roadmap propuesto",
    supportingLine:
      "Cómo reducir fricción operativa, recuperar tiempo directivo y construir una capa real de control multiproyecto",
    callouts: [
      "Control multiproyecto",
      "Visibilidad ejecutiva",
      "Roadmap por capas",
    ],
  },
  understanding: {
    eyebrow: "Lo que entendimos",
    title: "Lo que entendimos de tu operación",
    summary: "La operación sí funciona. El problema no es ausencia de control; es la forma en que hoy se sostiene.",
    blocks: [
      {
        title: "Ecosistema actual",
        items: [
          "Siete Cimas",
          "Soulba",
          "propiedades adjudicadas",
          "frentes financieros",
          "otros negocios activos",
        ],
        accent: "neutral",
      },
      {
        title: "Multiproyecto / multisociedad",
        items: [
          "varios frentes activos al mismo tiempo",
          "distintos responsables",
          "distintas unidades y ritmos",
        ],
        accent: "neutral",
      },
      {
        title: "Control actual artesanal pero funcional",
        items: [
          "sí existe control",
          "sí existe orden",
          "pero depende de esfuerzo humano constante",
        ],
        accent: "value",
      },
      {
        title: "Operación sostenida por herramientas dispersas",
        items: [
          "Excel",
          "minutas",
          "correo",
          "chats",
          "seguimiento manual",
        ],
        accent: "risk",
      },
    ],
    highlightedStatement:
      "Hoy sí existe control, pero ese control depende demasiado de intervención humana constante.",
  },
  cost: {
    eyebrow: "Costo de inacción",
    title: "Lo que esto te está costando hoy",
    blocks: [
      {
        title: "Tiempo",
        kicker: "Revisar, perseguir y reconstruir contexto",
        summary: "Saltar entre Excel, minutas, correo y chats para entender qué sí avanzó.",
        detail: "En una operación con Siete Cimas, Soulba, propiedades adjudicadas y otros frentes activos, demasiado tiempo se sigue yendo en recomponer estado en vez de decidir.",
      },
      {
        title: "Atención",
        kicker: "Demasiada energía mental en sostener el control",
        summary: "La dirección termina funcionando como recordatorio, integrador y seguimiento.",
        detail: "Cuando el orden depende de memoria, correo y seguimiento manual, la energía ejecutiva se consume en sostener la operación en lugar de conducirla.",
      },
      {
        title: "Velocidad",
        kicker: "Algunos temas avanzan solo cuando vuelven al radar",
        summary: "Las minutas no siempre se convierten en seguimiento vivo dentro de un sistema.",
        detail: "Eso hace que ciertos frentes se enfríen hasta que alguien los vuelve a empujar manualmente, y el ritmo operativo pierde continuidad.",
      },
      {
        title: "Escalabilidad",
        kicker: "Cada nuevo frente agrega más fricción",
        summary: "Más proyectos, sociedades y frentes financieros significan más dependencia humana.",
        detail: "Si el control sigue viviendo en herramientas dispersas y coordinación manual, crecer solo multiplica la fricción y vuelve más cara la complejidad.",
      },
    ],
    highlightedStatement:
      "Hoy el costo no está solo en la complejidad. Está en el tiempo directivo que se sigue yendo en sostener manualmente el control. Ese tiempo debería estar en decisiones, no en perseguir.",
  },
  vision: {
    eyebrow: "Evolución de la operación",
    title: "Hacia dónde puede evolucionar tu operación",
    subtitle:
      "Si esto se implementa bien, una operación hoy funcional pero artesanal puede volverse mucho más visible, delegable y escalable.",
    transformations: [
      {
        fromLabel: "Hoy",
        fromTitle: "Lectura fragmentada del negocio",
        fromDescription:
          "Excel, minutas, chats, correo y revisión por proyecto obligan a reconstruir el contexto manualmente.",
        toLabel: "Evolución",
        toTitle: "Lectura ejecutiva central",
        toDescription:
          "Una sola capa para entender qué pasa en Siete Cimas, Soulba, adjudicadas y otros frentes sin tener que recomponer la foto completa cada vez.",
      },
      {
        fromLabel: "Hoy",
        fromTitle: "Acuerdos que dependen de seguimiento manual",
        fromDescription:
          "Minutas, pendientes y temas que hoy viven entre Word, correo, juntas y memoria personal.",
        toLabel: "Evolución",
        toTitle: "Seguimiento vivo entre reuniones",
        toDescription:
          "Tareas, responsables, alertas y continuidad real para que los temas no se enfríen y los acuerdos no dependan de insistencia posterior.",
      },
      {
        fromLabel: "Hoy",
        fromTitle: "Tiempo directivo absorbido por coordinación",
        fromDescription:
          "Perseguir pendientes, confirmar estatus y volver a conectar piezas consume tiempo que debería usarse para decidir.",
        toLabel: "Evolución",
        toTitle: "Operación más delegable y escalable",
        toDescription:
          "Más control sin microgestión, más tiempo recuperado para dirección y una base mucho más sólida para crecer sin sumar el mismo nivel de fricción.",
      },
    ],
    closingStatement:
      "El objetivo no es meter más software.\nEs dejar de sostener el control manualmente.",
  },
  architecture: {
    eyebrow: "Visión del sistema",
    title: "La arquitectura del sistema a futuro",
    subtitle:
      "Una infraestructura operativa pensada para dar visibilidad, seguimiento y control sobre los frentes más relevantes del negocio.",
    centralModule: {
      title: "Mission Control Ejecutivo",
      description:
        "La capa central de lectura y priorización para dirigir la operación con una sola vista.",
      items: [
        "prioridades",
        "alertas",
        "pendientes críticos",
        "lectura multiproyecto",
      ],
    },
    modules: [
      {
        title: "Seguimiento Operativo por Proyecto",
        description:
          "Continuidad real entre responsables, estatus y frentes activos.",
        items: [
          "responsables",
          "continuidad entre juntas",
          "focos por frente",
        ],
      },
      {
        title: "Minutas, Tareas y Acuerdos",
        description:
          "De reunión a seguimiento vivo, con continuidad real entre acuerdos y ejecución.",
        items: [
          "acuerdos convertidos en tareas",
          "fechas compromiso",
          "historial y continuidad",
        ],
      },
      {
        title: "Núcleo Inmobiliario y Frentes Activos",
        description:
          "Una lectura agrupada del ecosistema actual de Eugenio.",
        items: [
          "Siete Cimas",
          "Soulba",
          "adjudicadas",
          "otros frentes relevantes",
        ],
      },
      {
        title: "Control Financiero y Reporteo",
        description:
          "La capa para leer movimiento, flujo y comparación ejecutiva entre proyectos y sociedades.",
        items: [
          "ventas",
          "gastos",
          "flujo",
          "inversionistas",
        ],
      },
      {
        title: "Automatización Aplicada",
        description:
          "La evolución natural para reducir más fricción y convertir seguimiento manual en sistema.",
        items: [
          "alertas automáticas",
          "captura inteligente de pendientes",
          "apoyo a seguimiento y priorización",
        ],
      },
    ],
    supportStatement:
      "La Fase 1 no construye todo esto completo,\npero sí deja correctamente puesta la base para llegar ahí.",
  },
  phase: {
    eyebrow: "Propuesta aterrizada",
    title: "Roadmap de implementación por fases",
    subtitle:
      "La propuesta no es construir todo de golpe. Es avanzar por capas, empezando por la que más valor devuelve más rápido.",
    phases: [
      {
        label: "Fase 1",
        title: "Fase 1 · Capa inicial de control",
        description:
          "La primera fase busca devolver visibilidad, seguimiento y tiempo útil sin reemplazar toda la operación actual.",
        modules: [
          {
            title: "Dashboard ejecutivo central",
            description:
              "Una sola vista para prioridades, estatus, frentes activos y focos que necesitan atención.",
          },
          {
            title: "Ficha básica por proyecto",
            description:
              "Base mínima para que cada frente tenga contexto, responsable, estatus y siguientes pasos visibles.",
          },
          {
            title: "Alertas básicas",
            description:
              "Señales puntuales para que lo importante vuelva al radar antes de volverse fricción.",
          },
        ],
      },
      {
        label: "Fase 2",
        title: "Fase 2 · Continuidad operativa",
        description:
          "Una vez montada la capa inicial de control, la segunda fase convierte reuniones y acuerdos en seguimiento vivo.",
        modules: [
          {
            title: "Minutas → tareas",
            description:
              "Convertir acuerdos de reunión en seguimiento real, con responsables y claridad operativa.",
          },
          {
            title: "Cobranza y facturación",
            description:
              "Extender la continuidad operativa hacia seguimiento de cobros, emisión y control básico de facturación.",
          },
        ],
      },
      {
        label: "Fase 3",
        title: "Fase 3 · Capa comercial",
        description:
          "La tercera fase amplía el sistema hacia el frente comercial para dar seguimiento más estructurado a prospectos, ventas y pipeline.",
        modules: [
          {
            title: "CRM y ventas",
            description:
              "Módulo comercial para dar visibilidad a prospectos, seguimiento, avance de ventas y lectura más clara del pipeline.",
          },
        ],
      },
    ],
  },
  investment: {
    eyebrow: "Alcance e inversión",
    title: "Qué incluye esta Fase 1",
    deliverables: [
      "sesión de aterrizaje y priorización",
      "mapeo de fuentes actuales prioritarias",
      "diseño del Mission Board",
      "estructura base de proyectos",
      "flujo de minutas y tareas",
      "inbox de pendientes",
      "alertas iniciales",
      "primera versión funcional del sistema",
    ],
    duration: "3 a 5 semanas",
    investmentLabel: "Inversión Fase 1",
    investmentAmount: "MXN $118,000 + IVA",
    note:
      "Esta fase deja correctamente puesta la base para la evolución posterior del sistema.",
  },
  nextStep: {
    eyebrow: "Cierre sugerido",
    title: "Siguiente paso sugerido",
    intro: "Si esto hace sentido, el siguiente paso es:",
    steps: [
      "definir el ecosistema inicial",
      "alinear fuentes prioritarias",
      "arrancar diseño e implementación de Fase 1",
      "entregar una primera capa de control útil y visible",
    ],
    kickoffTitle: "Propuesta de arranque",
    kickoffItems: [
      "validamos alcance",
      "confirmamos frente inicial",
      "agendamos kickoff",
      "iniciamos Fase 1",
    ],
    closingStatement:
      "La oportunidad no es meter tecnología por meterla. Es dejar de pagar con tiempo y atención problemas que ya deberían resolverse con un sistema claro.",
  },
};
