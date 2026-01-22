import { Link } from 'react-router-dom';
import { useState } from 'react';
import CVModal from '../Components/CVModal';
import { Menu, X } from 'lucide-react';
import background2 from '../assets/background2.png';

export default function HeaderandFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <p className="text-white text-xl sm:text-2xl font-bold font-akshar tracking-tight cursor-pointer hover:text-orange-300 transition-colors">
              Chroma<span className="text-orange-400">.</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <Link to="/" className="text-white text-base lg:text-lg font-bold font-akshar tracking-tight relative group cursor-pointer">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/works" className="text-white text-base lg:text-lg font-bold font-akshar tracking-tight relative group cursor-pointer">
              <span className="relative z-10">Works</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button 
              onClick={openModal}
              className="text-white text-base lg:text-lg font-bold font-akshar tracking-tight relative group cursor-pointer"
            >
              <span className="relative z-10">About me</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 pt-16">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${background2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            <div className="absolute inset-0 bg-black/10" />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl sm:text-3xl font-bold font-akshar tracking-tight relative group cursor-pointer py-2 px-4"
              >
                <span className="relative z-10">Home<span className="text-orange-400">.</span></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/works" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl sm:text-3xl font-bold font-akshar tracking-tight relative group cursor-pointer py-2 px-4"
              >
                <span className="relative z-10">Works<span className="text-orange-400">.</span></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button 
                onClick={openModal}
                className="text-white text-2xl sm:text-3xl font-bold font-akshar tracking-tight relative group cursor-pointer py-2 px-4"
              >
                <span className="relative z-10">About me<span className="text-orange-400">.</span></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
        )}

      </div>

      <CVModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}