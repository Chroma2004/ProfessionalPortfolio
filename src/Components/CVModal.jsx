import { useEffect, useCallback } from 'react';
import cvImage from '../assets/CV.png';
import DownloadIcon from '../assets/download.svg';
import CloseIcon from '../assets/close.svg';

export default function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-2 sm:p-4 bg-black/60 transition-opacity duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="CV Modal"
    >
      <div 
        className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="bg-white shadow-2xl rounded-sm relative overflow-hidden animate-paper-open
            w-[95vw] max-w-[95vw] h-auto max-h-[80vh]
            sm:w-[90vw] sm:max-w-[90vw] sm:max-h-[85vh]
            md:w-[60vw] md:max-w-[85vw] md:max-h-[85vh]
            lg:w-[45vw] lg:max-w-[75vw] lg:max-h-[90vh]
            xl:w-[32vw] xl:max-w-[60vw] xl:max-h-[90vh]
            2xl:w-[27vw] 2xl:max-w-[40vw] 2xl:max-h-[95vh]"
        >
          <img 
            src={cvImage} 
            alt="CV - Michael Rhoi Gonzales"
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>

        {/* Buttons Container */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
          {/* Download Button */}
          <a 
            href={cvImage} 
            download="Michael_Rhoi_Gonzales_CV.jpg"
            className="bg-orange-400/90 border border-orange-300 text-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 font-semibold font-akshar tracking-tight hover:bg-orange-500 hover:border-orange-400 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 ease-out flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm sm:text-base whitespace-nowrap"
            aria-label="Download CV as JPG"
          >
            <img src={DownloadIcon} alt="" className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span>Download CV</span>
          </a>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="bg-gray-700/90 border border-gray-600 text-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 font-semibold font-akshar tracking-tight hover:bg-gray-800 hover:border-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 ease-out flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base whitespace-nowrap"
            aria-label="Close modal"
          >
            <img src={CloseIcon} alt="" className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            <span>Close</span>
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes paperOpen {
          0% { transform: scale(0.1) rotate(-5deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(1deg); opacity: 0.9; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-paper-open {
          animation: paperOpen 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
}