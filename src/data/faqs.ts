export interface FAQItem {
  id: string;
  question: {
    es: string;
    en: string;
  };
  answer: {
    es: string;
    en: string;
  };
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "anticipacion",
    question: {
      es: "¿Con cuánta anticipación debo reservar una fecha?",
      en: "How far in advance should I reserve our date?",
    },
    answer: {
      es: "Recomendamos agendar con al menos 1 a 2 semanas de anticipación para fechas comunes, y de 3 a 4 semanas para temporadas altas (Día de las Madres, San Valentín, diciembre) o fines de semana nupciales. Sin embargo, si tu serenata es urgente para hoy o mañana, consúltanos por WhatsApp para verificar disponibilidad inmediata de agenda.",
      en: "We recommend reserving at least 1 to 2 weeks ahead for standard dates, and 3 to 4 weeks ahead for peak seasons (Mother’s Day, Valentine’s, December) or wedding weekends. If you need a last-minute serenade for today or tomorrow, contact us via WhatsApp to check instant schedule availability.",
    },
  },
  {
    id: "cobertura",
    question: {
      es: "¿Qué zonas de Puerto Vallarta y Riviera Nayarit cubren?",
      en: "Which areas of Puerto Vallarta and Riviera Nayarit do you cover?",
    },
    answer: {
      es: "Cubrimos todo el municipio de Puerto Vallarta (Zona Hotelera, Marina, Zona Romántica, Conchas Chinas, Mismaloya) y Riviera Nayarit (Nuevo Nayarit, Bucerías, La Cruz de Huanacaxtle, Sayulita y Punta de Mita). Para traslados fuera de la zona metropolitana se aplica una cuota mínima de viáticos previamente acordada.",
      en: "We cover all of Puerto Vallarta (Hotel Zone, Marina, Romantic Zone, Conchas Chinas, Mismaloya) and Riviera Nayarit (Nuevo Nayarit, Bucerias, La Cruz, Sayulita, and Punta de Mita). A minimal pre-agreed travel fee applies for locations beyond the main metropolitan area.",
    },
  },
  {
    id: "sorpresa",
    question: {
      es: "¿Cómo se maneja la dinámica de la sorpresa en una serenata?",
      en: "How is a surprise serenade coordinated?",
    },
    answer: {
      es: "Coordinamos minuciosamente el punto de encuentro y la hora exacta a través de WhatsApp. Llegamos de forma discreta, afinamos previamente y nos posicionamos para entrar tocando y cantando a media voz el tema elegido. Puedes indicarnos si deseas que entreguemos un ramo de rosas o un presente que nos proporciones al llegar.",
      en: "We coordinate the exact meeting point and timing via WhatsApp. We arrive discreetly, tune beforehand, and position ourselves to enter playing and harmonizing the chosen introductory ballad. We can also deliver flowers or gifts upon arrival.",
    },
  },
  {
    id: "canciones",
    question: {
      es: "¿Puedo elegir las canciones del repertorio para mi evento?",
      en: "Can I customize the setlist for my celebration?",
    },
    answer: {
      es: "¡Por supuesto! Puedes seleccionar tus piezas predilectas de nuestro repertorio de boleros tradicionales, baladas de rondalla y serenatas mexicanas. Si requieres una canción especial que no se encuentre en la lista habitual, la preparamos con anticipación para tu momento especial.",
      en: "Certainly! You can select your favorite pieces from our catalog of traditional boleros, Mexican serenades, and romantic ballads. If you request a song outside our standard setlist, we arrange it in advance for your event.",
    },
  },
  {
    id: "audio",
    question: {
      es: "¿Se requiere algún equipo de audio o amplificación en el lugar?",
      en: "Is sound amplification equipment required on site?",
    },
    answer: {
      es: "En serenatas, playas íntimas y reuniones de sobremesa nos presentamos en formato 100% acústico natural (el volumen de los requintos, guitarras y el contrabajo es perfecto y envolvente). Para grandes banquetes, bodas en salones o eventos masivos, podemos coordinarnos con el equipo de sonido de tu banquetero o conectar nuestro propio sistema.",
      en: "For serenades, intimate beach proposals, and family dinners, we perform in pure 100% acoustic format (the resonance of the guitars, requintos, and upright bass is warm and naturally balanced). For large banquet halls or wedding receptions, we coordinate with the venue sound engineer or provide our sound equipment.",
    },
  },
  {
    id: "pago",
    question: {
      es: "¿Cómo se realiza el apartado y la liquidación del servicio?",
      en: "How are the deposit and final payment handled?",
    },
    answer: {
      es: "Solicitamos un anticipo accesible para asegurar tu fecha y hora en el calendario oficial de la Rondalla. El saldo restante se liquida tranquilamente el día de la presentación (en efectivo o transferencia bancaria).",
      en: "We request an initial deposit to secure your date and time on our calendar. The remaining balance is settled comfortably on the day of the performance (via cash or bank transfer).",
    },
  },
];