import React, { useState } from 'react';
import { X, Download, ExternalLink, ShoppingCart, Lock } from 'lucide-react';
import profileImg from './assets/life.jpg';

const AdventCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const dayContent = [
    { title: "Planilla de Gratitud", description: "Comienza el mes escribiendo 5 cosas por las que estás agradecida hoy. Esta práctica diaria te ayudará a mantener una actitud positiva durante todo diciembre. Comienza el mes escribiendo 5 cosas por las que estás agradecida hoy. Esta práctica diaria te ayudará a mantener una actitud positiva durante todo diciembre.", buttonText: "Descargar Planilla", buttonAction: "link", buttonLink: "https://mpago.li/1U68nE9", viewDate: "2025-11-01" },
    { title: "Lista de Deseos", description: "Crea tu lista de deseos para el próximo año. Incluye metas personales, profesionales y sueños que quieres cumplir. ¡Visualiza tu futuro!", buttonText: "Descargar Lista", buttonAction: "link", buttonLink: "https://mpago.li/1U68nE9", viewDate: "2025-11-02" },
    { title: "Recetas Navideñas", description: "Descarga esta colección de recetas navideñas especiales. Incluye galletas, postres y bebidas calientes para compartir en familia.", buttonText: "Ver Recetas", buttonAction: "link", buttonLink: "https://mpago.li/1U68nE9", viewDate: "2025-11-03" },
    { title: "Playlist Navideña", description: "Tu guía para crear la playlist perfecta. Incluye sugerencias de canciones clásicas y modernas para ambientar tu hogar.", buttonText: "Escuchar Playlist", buttonAction: "link", buttonLink: "https://mpago.li/1U68nE9", viewDate: "2025-11-04" },
    { title: "Planificador Semanal", description: "Organiza tu semana con este planificador especial de diciembre. Incluye espacio para tareas, eventos y momentos de autocuidado.", buttonText: "Descargar", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-05" },
    { title: "Tarjetas Navideñas", description: "Plantillas imprimibles de tarjetas navideñas para personalizar y enviar a tus seres queridos. Diseños únicos y con mucho amor.", buttonText: "Descargar Plantillas", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-06" },
    { title: "Diario de Adviento", description: "Reflexiona cada día con prompts especiales. Este diario te guiará a través de pensamientos positivos y momentos de introspección.", buttonText: "Comprar Diario", buttonAction: "buy", buttonLink: "#", viewDate: "2025-12-07" },
    { title: "Lista de Películas", description: "50 películas navideñas que no puedes perderte este diciembre. Desde clásicos hasta estrenos recientes para maratonear.", buttonText: "Ver Lista", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-08" },
    { title: "Rutina de Autocuidado", description: "Plan de autocuidado para diciembre. Incluye rutinas de skincare, meditación y momentos para ti en medio del ajetreo navideño.", buttonText: "Descargar Guía", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-09" },
    { title: "Checklist de Regalos", description: "Organiza tus compras navideñas con esta checklist. Incluye presupuesto, ideas de regalos y seguimiento de compras.", buttonText: "Descargar", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-10" },
    { title: "Decoración DIY", description: "Guía paso a paso para crear tus propias decoraciones navideñas. Proyectos fáciles y económicos para embellecer tu hogar.", buttonText: "Ver Tutorial", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-11" },
    { title: "Calendario de Eventos", description: "Planifica todos tus eventos de diciembre: cenas, reuniones, fiestas. No te pierdas ninguna celebración importante.", buttonText: "Descargar Calendario", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-12" },
    { title: "Guía de Outfits", description: "Ideas de outfits para cada ocasión navideña. Desde looks casuales hasta elegantes para tus eventos especiales.", buttonText: "Ver Guía", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-13" },
    { title: "Lista de Propósitos", description: "Plantilla para escribir tus propósitos de año nuevo de manera efectiva. Incluye método SMART para lograr tus metas.", buttonText: "Descargar Plantilla", buttonAction: "#", buttonLink: "#", viewDate: "2025-12-14" },
    { title: "Presupuesto Navideño", description: "Administra tus gastos de diciembre con esta plantilla. Controla regalos, comidas y celebraciones sin estrés financiero.", buttonText: "Descargar Excel", buttonAction: "#", buttonLink: "#", viewDate: "2025-12-15" },
    { title: "Recetario de Postres", description: "Deliciosos postres navideños para sorprender a tu familia. Recetas fáciles con ingredientes accesibles.", buttonText: "Comprar Recetario", buttonAction: "buy", buttonLink: "#", viewDate: "2025-12-16" },
    { title: "Planificador de Menú", description: "Organiza tus comidas navideñas con este planificador. Incluye lista de compras y tiempos de preparación.", buttonText: "Descargar", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-17" },
    { title: "Actividades en Familia", description: "50 actividades divertidas para hacer en familia durante diciembre. Crea recuerdos inolvidables con tus seres queridos.", buttonText: "Ver Actividades", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-18" },
    { title: "Guía de Regalos Creativos", description: "Ideas de regalos hechos a mano y personalizados. Sorprende con detalles únicos que salen del corazón.", buttonText: "Descargar Guía", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-19" },
    { title: "Tracker de Hábitos", description: "Mantén tus buenos hábitos durante las fiestas. Plantilla para dar seguimiento a ejercicio, agua, sueño y más.", buttonText: "Descargar Tracker", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-20" },
    { title: "Playlist de Meditación", description: "Música relajante para meditar en medio del ajetreo navideño. Encuentra tu paz interior cada día.", buttonText: "Escuchar", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-21" },
    { title: "Juegos Navideños", description: "Colección de juegos divertidos para tus reuniones. Incluye juegos de mesa, dinámicas grupales y más.", buttonText: "Comprar Pack", buttonAction: "buy", buttonLink: "#", viewDate: "2025-12-22" },
    { title: "Guía de Wrapping", description: "Aprende técnicas creativas para envolver regalos. Tutoriales paso a paso para presentaciones espectaculares.", buttonText: "Ver Tutorial", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-23" },
    { title: "Nochebuena Perfecta", description: "Planifica tu cena de Nochebuena sin estrés. Incluye menú sugerido, timeline de preparación y decoración de mesa.", buttonText: "Descargar Guía", buttonAction: "link", buttonLink: "#", viewDate: "2025-12-24" }
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