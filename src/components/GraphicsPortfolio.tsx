import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Palette, Image as ImageIcon, X } from 'lucide-react';

const ExtendedPortfolioModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const extendedProjects = [
    {
      title: "Cyberpunk Poster Series",
      category: "Digital Art",
      description: "Neon-infused aesthetic exploring urban futurism and high-tech dystopia.",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Eco-Friendly Package Design",
      category: "Branding",
      description: "Sustainable materials and organic typography for a modern lifestyle brand.",
      image: "https://images.unsplash.com/photo-1589365278144-c9e705b843ba?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Minimalist App Icon Set",
      category: "UI/UX",
      description: "Clean, consistent iconography for a productivity-focused mobile application.",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Corporate Annual Report",
      category: "Print Design",
      description: "Sophisticated layout and data visualization for a global finance firm.",
      image: "https://images.unsplash.com/photo-1544383023-53fafa015bb9?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Art Gallery Brochure",
      category: "Editorial",
      description: "Minimalist grid system and elegant serif typography for a contemporary exhibition.",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-[#050505] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-20">
              <div>
                <h2 className="text-3xl font-display font-bold tracking-tight">EXTENDED <span className="text-[#D4AF37]">GALLERY</span></h2>
                <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mt-1">Exploring the limits of visual design</p>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white"
                id="close-gallery-modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Grid */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {extendedProjects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative h-[300px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-900"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span className="text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest">{project.category}</span>
                      <h4 className="text-xl font-bold mt-1">{project.title}</h4>
                      <p className="text-white/40 text-xs mt-2 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Footer Note */}
              <div className="mt-16 text-center pb-8">
                <div className="w-12 h-1 px-1 bg-white/10 rounded-full mx-auto mb-6" />
                <p className="text-white/30 text-sm font-mono uppercase tracking-[0.3em]">End of Gallery</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const GraphicsPortfolio = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const projects = [
    {
      title: "Afrobeat Day Party Flyer",
      category: "Event Graphics",
      description: "High-energy typography and vibrant color palette for a premium music event.",
      image: "https://images.unsplash.com/photo-1514525253361-bee8718a242a?auto=format&fit=crop&q=80&w=800",
      isUserImage: true
    },
    {
      title: "Luxury Branding Identity",
      category: "Branding",
      description: "Minimalist logo and corporate identity set with gold foil accents.",
      image: "https://images.unsplash.com/photo-1541462608141-ad4d719cf038?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Dynamic kit for high-engagement product launches and tech announcements.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Web Interface Concept",
      category: "UI Design",
      description: "A dark-themed premium dashboard concept with intuitive accessibility.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section id="graphics" className="py-32 px-4 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[#D4AF37] text-sm font-mono tracking-widest mb-4 block uppercase">Visual Showroom</span>
            <h2 className="text-4xl md:text-6xl font-bold">Graphics Projects</h2>
          </div>
          <div className="flex items-center gap-4 text-white/40 font-mono text-sm max-w-sm text-right">
             Merging artistic creativity with technical precision to deliver high-impact visual narratives.
             <div className="p-3 bg-white/5 rounded-full">
                <Palette size={20} className="text-[#D4AF37]" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
                <div className="mb-4">
                   <span className="px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-mono uppercase tracking-widest border border-[#D4AF37]/20">
                     {project.category}
                   </span>
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">{project.title}</h3>
                <p className="text-white/50 text-sm max-w-md line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.description}
                </p>
                
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#D4AF37]">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => setIsGalleryOpen(true)}
             className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all cursor-pointer gold-glow-hover"
           >
              <ImageIcon size={18} />
              <span className="font-mono text-sm uppercase tracking-widest">View Extended Portfolio</span>
           </motion.button>
        </div>

        <ExtendedPortfolioModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
      </div>
    </section>
  );
};
