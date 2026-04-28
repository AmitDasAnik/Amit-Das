import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, User, BookOpen, Briefcase, Heart, Award } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  const handleDownload = () => {
    const cvText = `
CURRICULUM VITAE
----------------

PERSONAL INFORMATION
Name: AMIT KUMAR DAS
Father's Name: Ananta Kumar Das
Mother's Name: Rita Rani Das
Marital Status: Unmarried
Nationality: Bangladeshi
Address: Sylhet, Bangladesh
Email: amitdas20r@gmail.com
Phone: 01601666636

CAREER OBJECTIVE
To obtain a challenging position as a Computer Operator where I can utilize my technical 
proficiency and dedication to contribute effectively to the organization's success.

EDUCATIONAL QUALIFICATION
Degree: SSC (Secondary School Certificate)
Year of Passing: 2024
Result: GPA 4.17
Board: Sylhet

TECHNICAL SKILLS
- Computer Operations (MS Word, Excel, PowerPoint)
- Graphic Design (Adobe Photoshop, Illustrator)
- System Troubleshooting & Maintenance
- Forex & Crypto Trading Analysis

PROFESSIONAL EXPERIENCE
- Computer Operator (Current)
- Freelance Graphic Designer
    `;
    
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Amit_Kumar_Das_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5">
              <h2 className="text-xl font-display font-bold tracking-tight">CURRICULUM <span className="text-[#D4AF37]">VITAE</span></h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                id="close-cv-modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[70vh] overflow-y-auto no-scrollbar space-y-8">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center border border-[#D4AF37]/30">
                  <User size={40} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AMIT KUMAR DAS</h3>
                  <p className="text-[#D4AF37] font-mono text-sm uppercase tracking-widest">Computer Operator & Graphic Designer</p>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/60">
                    <Heart size={18} className="text-[#D4AF37]" />
                    <span className="text-sm font-medium">Father: Ananta Kumar Das</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Heart size={18} className="text-[#D4AF37]" />
                    <span className="text-sm font-medium">Mother: Rita Rani Das</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <div className="w-[18px]" />
                    <span className="text-sm font-medium text-[#D4AF37]">Marital Status: Unmarried</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={18} className="text-[#D4AF37]" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">Education</h4>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold">SSC (Secondary School Certificate)</h5>
                    <span className="text-[#D4AF37] font-mono text-xs">Batch 2024</span>
                  </div>
                  <p className="text-sm text-white/40 mb-1">Sylhet Board</p>
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-[#D4AF37]" />
                    <span className="text-sm font-bold">GPA: 4.17</span>
                  </div>
                </div>
              </div>

              {/* Objective */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={18} className="text-[#D4AF37]" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">Objective</h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
                  "Seeking a challenging position as a Computer Operator where I can utilize my technical proficiency and dedication to contribute effectively to the organization's success."
                </p>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 border-t border-white/5 flex gap-4">
              <button 
                onClick={handleDownload}
                className="flex-1 bg-[#D4AF37] text-black font-bold py-4 rounded-xl hover:bg-[#F9E29B] transition-all flex items-center justify-center gap-2 gold-glow"
                id="download-cv-btn"
              >
                <Download size={18} />
                Download CV (.txt)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
