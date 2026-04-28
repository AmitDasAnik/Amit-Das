import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, TrendingUp, Award, Palette, Cpu, Smartphone, Layout, Send, Facebook, Download, MessageCircle } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      <div className="glass px-8 py-3 rounded-full flex items-center gap-8">
        <a href="#hero" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Home</a>
        <a href="#about" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">About</a>
        <a href="#expertise" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Expertise</a>
        <a href="#ielts" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">IELTS</a>
        <a href="#contact" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
};

export const Hero = ({ onDownloadCV }: { onDownloadCV?: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-32">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.4em] mb-6 block"
          >
            Digital Artisan & Analyst
          </motion.span>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold mb-8 leading-[0.9] tracking-tight">
            I'M <span className="text-gradient-gold">AMIT</span>,<br/>
            CST & <span className="text-white/40">TRADER</span>.
          </h1>
          <p className="text-xl text-white/50 font-light leading-relaxed max-w-lg mb-10">
            Merging technical CST expertise with visual storytelling and precision analysis. 
            Transforming complex systems into elegant digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <motion.a 
              href="#contact"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-[#D4AF37] text-black font-bold rounded-2xl gold-glow hover:bg-[#F9E29B] transition-all flex items-center gap-2"
            >
              Start Project
              <Send size={18} />
            </motion.a>
            <motion.button 
              onClick={onDownloadCV}
              whileHover={{ y: -5, scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl transition-all flex items-center gap-3 backdrop-blur-sm"
            >
              <Download size={20} className="text-[#D4AF37]" />
              CV Download
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative aspect-square max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 to-transparent rounded-[3rem] rotate-6 border border-[#D4AF37]/30 blur-2xl opacity-50" />
            <div className="absolute inset-0 bg-[#0A0A0A] rounded-[3rem] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] ring-1 ring-white/5">
              <img 
                src="/artifact/input_file_1.png" 
                alt="Amit Kumar Das" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl gold-glow max-w-[200px]"
          >
             <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <TrendingUp size={20} />
                </div>
                <div className="font-bold text-xl">2024</div>
             </div>
             <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">SSC Excellence Batch</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-[4/5] bg-neutral-900 rounded-[2.5rem] overflow-hidden glass p-1 ring-1 ring-white/10">
             <img 
               src="/artifact/input_file_1.png" 
               alt="About Amit" 
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl gold-glow hidden md:block max-w-[280px] border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              CST Engineer
              <Cpu size={20} className="text-[#D4AF37]" />
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Studying at Shahjalal Polytechnic Institute with a focus on high-performance systems and digital architecture.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 order-1 lg:order-2"
        >
          <div>
            <span className="text-[#D4AF37] font-mono text-sm tracking-[0.4em] uppercase mb-4 block">Professional Profile</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Innovative <br/> <span className="text-white/40">Approach</span></h2>
            <p className="text-white/50 text-xl leading-relaxed font-light">
              I am Amit, a modern digital professional blending technical skills with a keen eye for design. My approach is rooted in delivering absolute precision whether it's in computer systems, creative branding, or financial market analysis.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37] mt-1 shrink-0">
                  <Palette size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Graphic Design</h4>
                  <p className="text-white/40 text-sm">Crafting premium visual identities and digital assets that command attention.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37] mt-1 shrink-0">
                  <TrendingUp size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Market Trading</h4>
                  <p className="text-white/40 text-sm">Strategic analysis and quantitative decision-making in global financial markets.</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export const Expertise = () => {
  const skills = [
    { title: "Graphic Design", icon: <Palette />, items: ["Professional Posters", "High-End Banners", "Luxury Branding", "Minimalist Layouts"], color: "#D4AF37" },
    { title: "CST Expertise", icon: <Cpu />, items: ["System Operations", "Tech Troubleshooting", "Network Management", "Architecture"], color: "#00E5FF" },
    { title: "Financial Trading", icon: <TrendingUp />, items: ["Forex Strategy", "Crypto Analysis", "Risk Management", "Market Psychology"], color: "#D4AF37" }
  ];

  return (
    <section id="expertise" className="py-32 px-4 bg-neutral-950/50 relative overflow-hidden">
       <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] text-sm font-mono tracking-widest mb-4 block">CAPABILITIES</span>
          <h2 className="text-4xl md:text-6xl font-bold">The Expertise Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl group"
            >
              <div className="mb-8 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{skill.title}</h3>
              <ul className="space-y-4">
                {skill.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/50 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Freelance = () => {
  const platforms = [
    { name: "Freelancer.com", icon: <Briefcase />, link: "#", color: "#D4AF37" },
    { name: "Fiverr", icon: <Layout />, link: "#", color: "#1DBF73" },
    { name: "Upwork", icon: <Smartphone />, link: "#", color: "#6FDA44" }
  ];

  return (
    <section className="py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[#D4AF37] text-sm font-mono tracking-widest mb-4 block">COLLABORATIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold">Global Presence</h2>
          </div>
          <p className="text-white/40 max-w-md text-right">Available for high-impact freelance projects across the world's leading platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.a
              key={i}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-[#D4AF37]/30 transition-all group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 rounded-xl bg-black/50 text-[#D4AF37]">
                  {platform.icon}
                </div>
                <span className="text-xl font-medium tracking-tight">{platform.name}</span>
              </div>
              <ExternalLink size={20} className="text-white/20 group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const IELTS = () => {
  return (
    <section id="ielts" className="py-32 px-4 relative">
       <div className="max-w-7xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[100px] -mr-48 -mt-48" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D4AF37] text-sm font-mono tracking-widest mb-6 block uppercase">Language Milestone</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">The IELTS <br/>Preparation Journey</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Elevating communication beyond borders. Currently bridging the gap between technical prowess and linguistic excellence through rigorous IELTS preparation.
              </p>
              
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Target Band Score</span>
                    <span className="text-[#D4AF37] font-bold">8.0</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F9E29B] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-sm text-white/40 uppercase mb-2 font-mono">Current Status</div>
                    <div className="text-xl font-bold text-[#D4AF37]">Advanced Prep</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-sm text-white/40 uppercase mb-2 font-mono">Exam Horizon</div>
                    <div className="text-xl font-bold">Q4 2026</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-80 h-80 border border-[#D4AF37]/20 rounded-full flex items-center justify-center p-8 border-dashed"
              >
                <div className="w-64 h-64 border border-[#D4AF37]/40 rounded-full flex items-center justify-center p-8">
                  <div className="text-5xl font-display font-light text-[#D4AF37]">8.0</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[#D4AF37] text-sm font-mono tracking-widest mb-6 block uppercase">GET IN TOUCH</span>
            <h2 className="text-4xl md:text-7xl font-bold mb-10">Start a <br/>Conversation</h2>
            
            <div className="space-y-10">
              <a href="mailto:amitdas20r@gmail.com" className="flex items-start gap-6 group hover:text-[#D4AF37] transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase mb-1 font-mono">Email Me</div>
                  <div className="text-xl font-medium underline underline-offset-8">amitdas20r@gmail.com</div>
                </div>
              </a>

              <a href="tel:+8801601666636" className="flex items-start gap-6 group hover:text-[#D4AF37] transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase mb-1 font-mono">Connect Direct</div>
                  <div className="text-xl font-medium underline underline-offset-8">01601666636</div>
                </div>
              </a>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase mb-1 font-mono">Location</div>
                  <div className="text-xl font-medium text-white/60">Sylhet, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-14 rounded-[2.5rem]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase font-mono text-white/40 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D4AF37]/50 transition-colors text-white placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-mono text-white/40 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D4AF37]/50 transition-colors text-white placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-mono text-white/40 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D4AF37]/50 transition-colors text-white placeholder:text-white/20 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-6 rounded-2xl hover:bg-[#F9E29B] transition-all gold-glow flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = ({ onDownloadCV }: { onDownloadCV?: () => void }) => {
  return (
    <footer className="py-20 border-t border-white/5 px-4 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-display font-bold text-3xl tracking-tighter">
            AMIT KUMAR <span className="text-[#D4AF37]">DAS</span>
          </div>
          <p className="text-white/30 text-xs font-mono tracking-widest uppercase">
            © 2026 AMIT KUMAR DAS. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="https://www.facebook.com/amitdas20r" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-all hover:scale-110" title="Facebook">
              <Facebook size={22} />
            </a>
            <a href="https://wa.me/8801601666636" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-all hover:scale-110" title="WhatsApp">
              <MessageCircle size={22} />
            </a>
          </div>
          <button 
            onClick={() => window.alert('You can download the full source code from the "Settings" menu (Top Right) -> "Download as ZIP".')}
            className="text-[10px] font-mono text-white/20 uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
          >
            Export Source Code
          </button>
        </div>

        <motion.button 
          onClick={onDownloadCV}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all font-mono text-sm uppercase tracking-widest gold-glow group cursor-pointer"
        >
          <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          Download CV
        </motion.button>
      </div>
    </footer>
  );
};
