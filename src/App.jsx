import React, { useState } from 'react';
import { X, Download, ExternalLink, ShoppingCart, Lock } from 'lucide-react';
import profileImg from './assets/life.jpg';

const AdventCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const dayContent = [
  { 
    title: "Hoy comienzo a cuidarme",
    description: "Date un momento consciente: siéntate, respira, siente tu cuerpo sin juzgar. Recuerda que mereces cuidado y atención. Hoy inicia tu viaje de autocuidado con intención.",
    buttonText: "Ver recurso",
    buttonAction: "link",
    buttonLink: "https://open.spotify.com/episode/0SFCyliu8wnsDbrn7r2lF3",
    viewDate: "2025-12-01"
  },
  { 
    title: "Reconociendo lo bueno en mí",
    description: "Haz una lista de 5 cosas que te gustan de ti. Escríbelas en tu libreta o celular y léelas cada vez que dudes de ti.",
    buttonText: "Ver recurso",
    buttonAction: "link",
    buttonLink: "https://www.canva.com/design/DAG6Yz1zu_0/5c_NiL8GpRBBlONQlwHeQw/view",
    viewDate: "2025-12-02"
  },
  { 
    title: "¿Quién soy cuando me siento auténtica?",
    description: "Reflexiona: ¿en qué momentos del día te sientes más tú? ¿Con quién, haciendo qué? Estos instantes te conectan con tu esencia.",
    buttonText: "Ver recurso",
    buttonAction: "link",
    buttonLink: "https://pin.it/4tVf29p4z",
    viewDate: "2025-12-03"
  },
  { 
    title: "Respira para reencontrarte",
    description: "Dedica 10 minutos a una respiración consciente: inhala 4 seg, retén 4, exhala 6. Observa tu cuerpo sin prisa. Permítete volver a ti.",
    buttonText: "Ver recurso",
    buttonAction: "link",
    buttonLink: "https://open.spotify.com/playlist/37i9dQZF1DX6QClArDhvcW",
    viewDate: "2025-12-04"
  },
  { 
    title: "Acepto mi imperfección",
    description: "La perfección no es la meta. Acepta tus imperfecciones como parte de tu historia y belleza. Suelta los estándares externos.",
    buttonText: "Ver recurso",
    buttonAction: "link",
    buttonLink: "https://open.spotify.com/episode/0oFGkHHbPU9r4XqjBLNRTq",
    viewDate: "2025-12-05"
  },
  { 
    title: "Cuestiona tus pensamientos negativos",
    description: "Cuando aparezca una voz negativa pregúntate: ¿esto es verdad siempre? Cuestionar tus pensamientos transforma tu diálogo interno.",
    buttonText: "Ver recurso",
    buttonAction: "link",
    buttonLink: "https://open.spotify.com/episode/1yaw5TPJ5VcqY5Hjz5CEIx",
    viewDate: "2025-12-06"
  },
  { 
    title: "Despido lo que ya no me sirve",
    description: "Escribe qué hábitos, creencias o culpas quieres soltar antes de fin de año. Realiza un pequeño rito simbólico para liberarte.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-07"
  },
  { 
    title: "Hoy me doy un regalo",
    description: "Haz algo que te guste solo para ti: música, un baño relajante, dibujar o caminar al aire libre.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-08"
  },
  { 
    title: "Mi valor no depende de otros",
    description: "Tu valor no depende de la aprobación ajena. Eres valiosa por quien eres, no por lo que otros digan.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-09"
  },
  { 
    title: "Poner límites — cuidar mi paz",
    description: "Identifica algo que te quite energía y pon un límite saludable. Decir «no» también es autocuidado.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-10"
  },
  { 
    title: "Energías que nutren / las que agotan",
    description: "Haz una lista de actividades/personas que te dan energía y otra de lo que te drena. Aprende a elegir con intención.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-11"
  },
  { 
    title: "Carta de gratitud a mi ser pasado",
    description: "Escribe una carta a tu yo del pasado agradeciendo su esfuerzo, valentía y resiliencia. Reconoce cuánto has crecido.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-12"
  },
  { 
    title: "Crecer sin compararme",
    description: "En lugar de compararte, define qué significa para ti crecer. Crea tus propios estándares.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-13"
  },
  { 
    title: "Práctica de gratitud diaria",
    description: "Agradece 3 cosas del día, por más simples que sean. La gratitud cultiva una mente amorosa.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-14"
  },
  { 
    title: "Decisiones que honran mi bienestar",
    description: "Piensa: ¿qué decisión simple podría mejorar hoy tu bienestar? Las pequeñas decisiones construyen tu paz.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-15"
  },
  { 
    title: "Desconecta para reconectar",
    description: "Apaga redes o el celular una hora antes de dormir. Observa cómo tu mente se calma y tu descanso mejora.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-16"
  },
  { 
    title: "Soy suficiente tal como soy",
    description: "Afirmación del día: “Soy suficiente tal como soy”. Repítelo y siéntelo en tu cuerpo.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-17"
  },
  { 
    title: "Sé tu propia amiga",
    description: "Cuando aparezca la inseguridad, trátate como tratarías a tu mejor amiga: con cariño y comprensión.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-18"
  },
  { 
    title: "¿Qué significa amor propio para mí?",
    description: "Escribe tu propia definición de amor propio. Tener claridad te ayuda a tomar decisiones alineadas contigo.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-19"
  },
  { 
    title: "Crea sin juzgar",
    description: "Escribe, dibuja, canta o baila sin juzgarte. La creatividad sana y te conecta contigo.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-20"
  },
  { 
    title: "Mi bienestar también importa",
    description: "Cuidar de ti no es egoísmo. Tu bienestar es prioridad y fuente de amor.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-21"
  },
  { 
    title: "Celebra tus logros del año",
    description: "Haz un repaso del año: ¿qué lograste? Celebra cada paso, por pequeño que sea.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-22"
  },
  { 
    title: "Lecciones que me regaló el año",
    description: "Reflexiona: ¿qué aprendiste de ti este año? Escribe esas lecciones para guiarti en tu crecimiento.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-23"
  },
  { 
    title: "Mi intención para el nuevo año",
    description: "Elige un valor o hábito que quieras cultivar el próximo año: amor propio, calma, gratitud o valentía.",
    buttonText: "Sin recurso",
    buttonAction: "none",
    buttonLink: "",
    viewDate: "2025-12-24"
  }
];


  const dayIcons = [
    '🎅', '🍬', '🎀', '☕', '🎄', '🥛', '✉️', '🌿', '🕯️', '🎄',
    '🧁', '⛄', '🍭', '🎁', '⭐', '🏠', '❄️', '🎀', '☃️', '🎊',
    '🕯️', '🍪', '⛄', '🎁'
  ];

  const treeRows = [
    { days: [1], gap: 0 },
    { days: [2, 3], gap: 2.5 },
    { days: [4, 5, 6], gap: 1.5 },
    { days: [7, 8, 9, 10], gap: 0.5 },
    { days: [11, 12, 13, 14, 15], gap: 0 },
    { days: [16, 17, 18, 19, 20, 21], gap: 0 },
    { days: [22, 23, 24], gap: 1.5 }
  ];

  const openDay = (day) => {
    const dayData = dayContent[day - 1];
    if (canViewDay(day)) {
      setSelectedDay(day);
    }
  };

  const closeModal = () => {
    setSelectedDay(null);
  };

  const handleButtonClick = (day) => {
    const dayData = dayContent[day - 1];
    
    switch(dayData.buttonAction) {
      case 'download':
        alert('Descargando: ' + dayData.title);
        break;
      case 'link':
        window.open(dayData.buttonLink, '_blank');
        break;
      case 'buy':
        window.open(dayData.buttonLink, '_blank');
        break;
      default:
        break;
    }
  };

  const getButtonIcon = (action) => {
    switch(action) {
      case 'download':
        return <Download className="w-5 h-5" />;
      case 'link':
        return <ExternalLink className="w-5 h-5" />;
      case 'buy':
        return <ShoppingCart className="w-5 h-5" />;
      default:
        return <Download className="w-5 h-5" />;
    }
  };

  // viewDate logic: a day is viewable when today's date is greater or equal
  // to the day's number in the current month/year. If you want to lock
  // this to a specific month (e.g., December), change the month used below.
  const canViewDay = (day) => {
    const today = new Date();
    today.setHours(0,0,0,0);

    const dayData = dayContent[day - 1];
    if (dayData && dayData.viewDate) {
      // Parse YYYY-MM-DD into a local date to avoid UTC parsing issues
      const parts = dayData.viewDate.split('-').map(Number);
      if (parts.length === 3) {
        const [y, m, d] = parts;
        const viewDate = new Date(y, m - 1, d); // local midnight
        return today >= viewDate;
      }
      // fallback to Date constructor if parsing fails
      const viewDate = new Date(dayData.viewDate);
      viewDate.setHours(0,0,0,0);
      return today >= viewDate;
    }

    // Fallback: create a date for this month's `day` at midnight
    const dayDate = new Date(today.getFullYear(), today.getMonth(), day);
    dayDate.setHours(0,0,0,0);
    return today >= dayDate;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-green-50 p-4 md:p-8 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200"
            style={{
              left: Math.random() * 100 + '%',
              top: '-20px',
              fontSize: (Math.random() * 15 + 15) + 'px',
              animation: 'fall ' + (Math.random() * 5 + 8) + 's linear infinite',
              animationDelay: Math.random() * 10 + 's',
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif text-gray-800 mb-2">
            CALENDARIO DE
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-4" style={{fontFamily: 'cursive', color: '#f472b6'}}>
            Adviento
          </h2>
        </div>

        <div className="text-center mb-6">
          <div className="inline-block bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-pink-200">
            <p className="text-pink-500 font-semibold">
              ✨ Haz clic en cada día para descubrir tu sorpresa ✨
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 md:gap-3">
          {treeRows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="flex justify-center gap-1.5 md:gap-3"
              style={{
                paddingLeft: row.gap * 35 + 'px',
                paddingRight: row.gap * 35 + 'px'
              }}
            >
              {row.days.map((day) => {
                const dayData = dayContent[day - 1];
                const isLocked = !canViewDay(day);
                
                return (
                  <button
                    key={day}
                    onClick={() => openDay(day)}
                    disabled={isLocked}
                    className={'relative overflow-hidden transform transition-all duration-300 rounded-lg ' + (!isLocked ? 'hover:scale-110 hover:shadow-2xl cursor-pointer' : 'cursor-not-allowed')}
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #9dc8a5 0%, #b5d6bb 100%)',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                      border: '3px solid rgba(255,255,255,0.5)',
                      opacity: isLocked ? 0.5 : 1
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-1">
                      <>
                        <div className="text-2xl md:text-3xl mb-1">{dayIcons[day - 1]}</div>
                        <span className="text-xs font-bold text-white bg-pink-500 px-2 py-0.5 rounded">
                          {day}
                        </span>
                      </>
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-pink-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-pink-300 shadow-lg bg-gradient-to-br from-pink-100 to-green-100">
                <img src={profileImg} alt="María González" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#f472b6'}}>
                Xim Hernández
              </h3>
              <p className="text-gray-700 italic mb-4 text-sm md:text-base">
                💐 amor propio • inspiración • lifestyle
🪞viviendo mi proceso y guiándote en el tuyo
cdmx 💌
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href="https://instagram.com/lifewithxim" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm font-semibold"
                >
                  <span>📷</span>
                  Instagram
                </a>
                
                <a 
                  href="https://tiktok.com/@lifewithxim" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all text-sm font-semibold"
                >
                  <span>🎵</span>
                  TikTok
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedDay && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative transform transition-all animate-in border-4 border-green-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-pink-500 hover:text-pink-700 transition-colors bg-pink-50 rounded-full p-2 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div 
                className="inline-flex items-center justify-center w-28 h-28 rounded-2xl mb-4 shadow-xl border-4 border-white"
                style={{background: 'linear-gradient(135deg, #9dc8a5 0%, #b5d6bb 100%)'}}
              >
                <div className="text-6xl">{dayIcons[selectedDay - 1]}</div>
              </div>
              <div className="inline-block text-white px-6 py-2 rounded-full mb-3 text-2xl font-bold" style={{background: '#f472b6'}}>
                Día {selectedDay}
              </div>
              <h2 className="text-3xl font-bold text-green-600 mb-2">
                {dayContent[selectedDay - 1].title}
              </h2>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 mb-6 shadow-inner border-2 border-green-200 max-h-48 overflow-auto">
              <p className="text-gray-700 leading-relaxed text-center">
                {dayContent[selectedDay - 1].description}
              </p>
            </div>

            <button
              onClick={() => handleButtonClick(selectedDay)}
              className="w-full py-4 rounded-full font-bold text-white shadow-xl transform transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #f9a8d4 0%, #f472b6 100%)',
              }}
            >
              {getButtonIcon(dayContent[selectedDay - 1].buttonAction)}
              {dayContent[selectedDay - 1].buttonText}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation: animate-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdventCalendar;