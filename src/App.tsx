import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';
import SalesAdvisorWidget from './components/SalesAdvisorWidget';

const NeuralFeed = ({ businessName, accentColor }: { businessName: string, accentColor: string }) => {
  const [posts] = React.useState([
    {
      id: 1,
      title: `Innovación en ${businessName}`,
      content: 'Hoy hemos optimizado nuestros procesos usando IA para entregarte lo mejor. ¡Ven y descúbrelo!',
      date: 'Hace 2 horas',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
    }
  ]);

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Neural <span style={{ color: accentColor }}>Feed</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map(post => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Neural Update</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                Leer Más <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const gallery = [
    '/assets/gallery/Screenshot_2026-05-05-15-02-43-919_com.google.android.apps.maps.jpg',
    '/assets/gallery/Screenshot_2026-05-05-15-05-17-183_com.google.android.apps.maps.jpg',
  ];

  return (
    <div style={{ backgroundColor: "#150d1f", color: "white", fontFamily: "'Inter', sans-serif" }}>
      {/* HERO - Editorial full-screen */}
      <section className="relative min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "#150d1f" }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, #ff69b4 0%, transparent 70%)` }} />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center px-8">
              <h1
                className="text-5xl sm:text-7xl font-light mb-3 tracking-wide"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ferretería La 21
              </h1>
              <p className="text-sm uppercase tracking-[0.3em] mb-8" style={{ color: "#ff69b4" }}>
                Tu ferretería de confianza
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 w-full p-8 flex justify-between items-center">
          <div className="flex items-center gap-2 opacity-50">
            <div className="h-6 w-6 bg-red-600 rounded flex items-center justify-center"><MapPin size={12} /></div>
            <span className="font-bold uppercase tracking-tighter text-sm">Ferretería La 21</span>
          </div>
          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: "#ff69b4" }}>
            Explorar <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <ul className="list-none">
              <li className="flex items-center gap-2 mb-4">
                <MapPin size={14} className="text-red-600" />
                <span className="text-sm font-bold">Calle 123, Ciudad, País</span>
              </li>
              <li className="flex items-center gap-2 mb-4">
                <Phone size={14} className="text-red-600" />
                <span className="text-sm font-bold">+56 9 8765 4321</span>
              </li>
              <li className="flex items-center gap-2 mb-4">
                <Instagram size={14} className="text-red-600" />
                <span className="text-sm font-bold">@ferreteriala21</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Formulario de Contacto</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="NOMBRE COMPLETO" className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-xs font-bold focus:border-white transition-all outline-none" />
              <input type="email" placeholder="EMAIL" className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-xs font-bold focus:border-white transition-all outline-none" />
              <button className="w-full bg-white text-black py-5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all shadow-xl">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Neural Feed */}
      <NeuralFeed businessName="Ferretería La 21" accentColor="#ff69b4" />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <div className="h-6 w-6 bg-red-600 rounded flex items-center justify-center"><MapPin size={12} /></div>
            <span className="font-bold uppercase tracking-tighter text-sm">Ferretería La 21</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 text-center">
            Powered by <span className="text-white">Neural Nexus Federation</span> 2026
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </footer>

      {/* Beatriz Widget */}
      <SalesAdvisorWidget />
    </div>
  );
};

export default App;