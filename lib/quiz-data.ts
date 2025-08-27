export const quizSteps = [
  {
    id: 1,
    question: "¡HAZ QUE ÉL SE OBSESIONE CONTIGO Y NO TE DEJE IR JAMÁS!",
    description: "Haz la prueba rápida de 2 minutos y descubre cómo activar el 'cerebro reptiliano' de tu hombre.",
    subtext: "Este quiz es para mujeres que quieren que él las persiga sin parar:",
    options: ["SÍ, ESTOY LISTA PARA QUE ÉL ME DESEE OBSESIVAMENTE"],
    warning:
      "⚠️ ATENCIÓN: ¡Este método es tan poderoso que solo debes usarlo si estás lista para que él te persiga sin parar!",
    elements: {
      heartbeat: true,
      timer: "Prueba de 2 minutos",
    },
  },
  {
    id: 2,
    question: "¿CUÁL ES TU EDAD?",
    description: "(Esta información es crucial para personalizar tu plan y hacer que él te vea como 'la única')",
    options: [
      "18-29 - Fase de descubrimientos emocionales",
      "29-39 - Período de consolidación de valores",
      "39-49 - Momento de reevaluación de prioridades",
      "50+ - Fase de madurez emocional",
    ],
    elements: {
      ageIcons: true,
      counter: "mujeres que ya hicieron la prueba hoy",
    },
  },
  {
    id: 3,
    question: "¿CUÁNTO TIEMPO LLEVAN SEPARADAS DE ÉL?",
    description: "(El tiempo es un factor crítico para tu estrategia de reconquista y obsesión)",
    options: ["Menos de una semana", "Hace 1 mes", "De 2 a 6 meses", "Más de 6 meses"],
    bonusUnlock: {
      id: 1,
      title: "21 DISPARADORES EMOCIONALES QUE FUNCIONAN",
      value: 47,
      description: "Las 21 frases exactas que hacen que piense en ti obsesivamente.",
    },
  },
  {
    id: 4,
    question: "¿CÓMO FUE SU SEPARACIÓN?",
    description: "(Esta información es vital para determinar tu estrategia específica para que él se arrepienta)",
    options: ["Él terminó conmigo", "Yo terminé con él", "Decidimos terminar de mutuo acuerdo"],
    elements: {
      analysisText: "Calculando tasa de éxito para tu caso...",
      successRate: "¡Tu caso tiene características prometedoras!",
    },
  },
  {
    id: 5,
    question: "¿CUÁNTO TIEMPO ESTUVIERON JUNTAS?",
    description: "(La duración de la relación influye directamente en tu estrategia para que él te persiga)",
    options: ["Más de 3 años", "De 1 a 3 años", "De 6 meses a 1 año", "Menos de 6 meses"],
  },
  {
    id: 6,
    question: "¿CUÁL FUE LA PARTE MÁS DOLOROSA DE LA RUPTURA?",
    description: "(Identificar tu dolor principal es esencial para tu recuperación emocional y para que él te deseje)",
    options: [
      "😔 Lidiar con la soledad y el vacío",
      "😢 La montaña rusa emocional: ira, tristeza, arrepentimiento",
      "😐 Lidiar con recuerdos y memorias",
      "💔 Imaginarlo con otra mujer",
      "📅 Darme cuenta de que los planes que hicimos nunca se harán realidad",
      "⚡ Otro",
    ],
    elements: {
      profileAnalysis: "Personalizando tu estrategia emocional...",
      profileComplete: "46%",
    },
  },
  {
    id: 7,
    question: "¿CUÁL ES TU SITUACIÓN ACTUAL CON TU EX?",
    description: "(Esta información determinará tu punto de partida para que él te busque sin parar)",
    options: [
      "🧐 Estoy aplicando contacto cero",
      "😢 Él me ignora completamente",
      "❌ Me ha bloqueado en todas las redes sociales",
      "📞 Hablamos solo de cosas necesarias",
      "🤔 Charlamos de vez en cuando",
      "😌 Seguimos siendo amigos",
      "🔥 Hemos tenido encuentros íntimos después de la ruptura",
    ],
    elements: {
      profileComplete: "62%",
      testimonialSection: {
        depoimentos: [
          {
            avatar: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/01.webp",
            nome: "Laura, 32 años",
            texto: "Honestamente, pensé que mi ex nunca volvería a buscarme. Estaba resignada. Pero después de aplicar solo dos de los 'Mensajes Obsesivas', su teléfono no paraba de sonar. ¡En menos de una semana, estaba rogando por una segunda oportunidad y ahora está más obsesionado que nunca! Este método es pura magia."
          },
          {
            avatar: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/02.webp",
            nome: "Andrea, 28 años",
            texto: "Siempre fui yo quien lo buscaba, quien se sentía ansiosa y dependiente. Con 'Mensajes Obsesivas', aprendí a activar su deseo de una manera que nunca imaginé. Ahora es él quien me persigue, quien me valora y me hace sentir la mujer más importante de su vida. ¡Recuperé mi poder y mi paz!"
          },
          {
            avatar: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/03.webp",
            nome: "Valeria, 35 años",
            texto: "Mi situación era desesperada: mi ex me había bloqueado de todas partes y ya estaba saliendo con otra. Creí que todo estaba perdido. Pero el 'Protocolo de Emergencia' y los 'Mensajes Obsesivas' me dieron la estrategia exacta. No solo me desbloqueó, sino que dejó a la otra y ahora solo tiene ojos para mí. ¡Es increíble cómo funciona!"
          }
        ]
      }
    },
  },
  {
    id: 8,
    question: "¿ÉL YA ESTÁ SALIENDO CON OTRA PERSONA?",
    description: "(Esta información es crucial para definir tu enfoque estratégico y hacer que él la olvide)",
    options: [
      "🚫 No, está soltero",
      "🤷 No estoy segura",
      "😔 Sí, está saliendo con alguien",
      "💔 Sí, tiene una relación seria",
      "🔄 Está saliendo con varias personas",
    ],
    bonusUnlock: {
      id: 2,
      title: "PROTOCOLO DE EMERGENCIA 72H",
      value: 37,
      description: "Qué hacer cuando todo parece perdido y tienes 72 horas para actuar.",
    },
    elements: {
      profileComplete: "77%",
    },
  },
  {
    id: 9,
    question: "¿CUÁNTO QUIERES RECUPERARLO Y HACERLO OBSESIVO POR TI?",
    description: "(Tu nivel de compromiso determinará tu éxito para que él te persiga)",
    subtext:
      "El 91% de las mujeres que seleccionaron nivel 4 reconquistaron a su ex en menos de 21 días usando la fórmula de Mensajes Obsesivas.",
    options: ["1 - No estoy segura", "2 - Me lo estoy pensando", "3 - Lo quiero bastante", "4 - Lo quiero muchísimo"],
    note: "Solo trabajo con mujeres decididas a transformar su situación amorosa. La fórmula de Mensajes Obsesivas fue desarrollada para quien está preparada para actuar.",
    elements: {
      thermometer: true,
      profileComplete: "85%",
    },
  },
  {
    id: 10,
    question: "EXPERTA ANALIZANDO TU CASO...",
    description: "Espera mientras analizo tus respuestas para crear tu estrategia personalizada.",
    options: [],
    autoAdvance: true,
    elements: {
      expertPhoto: true,
      expertImage: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/a11f9051-833b-49e1-925d-bdc2a3421d10.png",
      autoMessage: "Basándome en 7 años de experiencia ayudando a mujeres como tú...",
      profileComplete: "90%",
    },
  },
  {
    id: 11,
    question: "¡FELICITACIONES! He analizado tus respuestas y tengo buenas noticias para ti.",
    description:
      "Basándome en tu perfil y situación específica, la fórmula de Mensajes Obsesivas tiene un 90,5% de probabilidades de hacer que él te desee obsesivamente.",
    options: ["¿VAMOS AL SIGUIENTE PASO?"],
    note: "Estoy aquí para guiarte personalmente en este viaje de obsesión. En los últimos 7 años, he ayudado a más de 3.847 mujeres a tener a sus hombres obsesionados usando este método exclusivo.",
    elements: {
      expertPhoto: true,
      expertImage: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/a11f9051-833b-49e1-925d-bdc2a3421d10.png",
      profileComplete: "95%",
      helpedCounter: "Mujeres ayudadas hoy: 17",
      compatibilityCalc: "90,5%",
    },
  },
  {
    id: 12,
    question: "RESULTADOS COMPROBADOS",
    subtext: "EL 91% DE MIS ESTUDIANTES VIERON RESULTADOS ESPECTACULARES EN LOS PRIMEROS 7 DÍAS APLICANDO LA FÓRMULA DE MENSAJES OBSESIVAS",
    description: "",
    options: ["¡YO TAMBIÉN QUIERO ESOS RESULTADOS!"],
    elements: {
      bigNumber: "91%",
      profileComplete: "98%",
      testimonialSection: {
        depoimentos: [
          {
            avatar: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/01.webp",
            nome: "Laura, 32 años",
            texto: "Honestamente, pensé que mi ex nunca volvería a buscarme. Estaba resignada. Pero después de aplicar solo dos de los 'Mensajes Obsesivas', su teléfono no paraba de sonar. ¡En menos de una semana, estaba rogando por una segunda oportunidad y ahora está más obsesionado que nunca! Este método es pura magia."
          },
          {
            avatar: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/02.webp",
            nome: "Andrea, 28 años",
            texto: "Siempre fui yo quien lo buscaba, quien se sentía ansiosa y dependiente. Con 'Mensajes Obsesivas', aprendí a activar su deseo de una manera que nunca imaginé. Ahora es él quien me persigue, quien me valora y me hace sentir la mujer más importante de su vida. ¡Recuperé mi poder y mi paz!"
          },
          {
            avatar: "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/03.webp",
            nome: "Valeria, 35 años",
            texto: "Mi situación era desesperada: mi ex me había bloqueado de todas partes y ya estaba saliendo con otra. Creí que todo estaba perdido. Pero el 'Protocolo de Emergencia' y los 'Mensajes Obsesivas' me dieron la estrategia exacta. No solo me desbloqueó, sino que dejó a la otra y ahora solo tiene ojos para mí. ¡Es increíble cómo funciona!"
          }
        ]
      }
    },
  },
  {
    id: 13,
    question: "¡INCREÍBLE! TU PERFIL REVELA ALGO SORPRENDENTE...",
    description:
      "Basándome en tus respuestas, he identificado 3 patrones específicos que aumentan dramáticamente tus posibilidades de éxito para que él te persiga.",
    subtext:
      "El 94% de las mujeres con tu perfil exacto lograron resultados extraordinarios cuando aplicaron la estrategia correcta.",
    options: ["¡QUIERO CONOCER MI PERFIL COMPLETO!"],
    note: "⚠️ IMPORTANTE: Esta información es muy específica para tu situación. Solo la compartiré contigo en la siguiente pantalla.",
    elements: {
      profileAnalysis: "Analizando patrones de éxito...",
      profileComplete: "98%",
      mysteryReveal: true,
      successPattern: "94%",
    },
  },
  {
    id: 14,
    question: "ÚLTIMO PASO: VALIDANDO TU ESTRATEGIA PERSONALIZADA",
    description: "Estoy preparando tu plan específico basado en los 3 patrones únicos que identifiqué en tu caso.",
    subtext:
      "En los próximos segundos verás exactamente por qué tu situación tiene características tan prometedoras para que él te desee obsesivamente...",
    options: ["¡SÍ, QUIERO VER MI ESTRATEGIA AHORA!"],
    note: "🎯 Tu estrategia personalizada incluye los pasos exactos que funcionaron para mujeres en tu misma situación.",
    elements: {
      finalValidation: true,
      profileComplete: "100%",
      strategyPreparation: true,
      anticipationBuilder: true,
    },
  },
]

export const bonuses = [
  {
    id: 1,
    title: "21 DISPARADORES EMOCIONALES QUE FUNCIONAN",
    value: 47,
    description: "Las 21 frases exactas que hacen que piense en ti obsesivamente.",
    details: ["✓ 7 Gatillos de Nostalgia", "✓ 7 Gatillos de Curiosidad", "✓ 7 Gatillos de Deseo"],
  },
  {
    id: 2,
    title: "PROTOCOLO DE EMERGENCIA 72H",
    value: 37,
    description: "Qué hacer cuando todo parece perdido y tienes 72 horas para actuar.",
    details: ["✓ Plan de Acción Inmediata", "✓ Independencia Emocional", "✓ Comunicación Magnética"],
  },
]

export const testimonials = [
  {
    name: "Emília, 29 años",
    text: "Usé la 'Bomba de Deseo' hoy y, ¡guau! Digamos que tuve que desactivar mis notificaciones. ¡Él no paraba de buscarme!",
    rating: 5,
  },
  {
    name: "Sofía, 31 años",
    text: "De ser 'una más', él me envió un mensaje como 'la ÚNICA' en su mente: ¡este método es oro puro!",
    rating: 5,
  },
  {
    name: "Olivia, 35 años",
    text: "Toda mujer necesita este libro. Es como un arma secreta para el mundo moderno de las citas.",
    rating: 5,
  },
  {
    name: "Isabella, 27 años",
    text: "Enviar la 'Mensaje del Arrepentimiento' fue tan satisfactorio. ¡Hizo que él recordara nuestros momentos en un instante!",
    rating: 5,
  },
  {
    name: "Mia, 33 años",
    text: "Después de probar 'Mensajes Obsesivas', nuestra comunicación cambió por completo. ¡Ahora tenemos conversaciones profundas, de corazón a corazón, todas las noches!",
    rating: 5,
  },
  {
    name: "Abigail, 25 años",
    text: "Honestamente, pensé que esto era solo otro truco. ¿Pero el cambio inmediato en sus respuestas? ¡Me quedé impresionada!",
    rating: 5,
  },
]

export const socialProofMessages = [
  "¡Estás entre el 17% más decidido a que él te persiga!",
  "¡Tu perfil muestra compatibilidad con la obsesión masculina!",
  "¡Bonificación liberada por desbloqueo!",
  "¡Has desbloqueado los 2 bonos - valor total de $84!",
  "El 87% de las mujeres en tu situación lograron resultados en menos de 14 días",
  "Estás más comprometida que el 73% de las mujeres que hicieron esta prueba",
  "-",
  "-",
  "-",
  "-",
]

export function getPersonalizedContent(content, gender) {
  if (typeof content === "string") {
    return content
  }

  if (typeof content === "object" && content !== null) {
    if (content.masculino && content.feminino) {
      return content.feminino
    }
    return content
  }

  return content
}