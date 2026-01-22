import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetailModal = ({ project, onClose, typeColors, categoryIcons, programIcons }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.image];
  
  // Get programs array
  const programs = project.programs || [];
  
  // Get current image description or use project description
  const getCurrentDescription = () => {
    if (images[currentImageIndex]?.description) {
      return images[currentImageIndex].description;
    }
    return project.longDescription || project.description;
  };

  // Function to properly format the description with line breaks and sections
  const formatDescription = (text) => {
    if (!text) return '';
    
    // If text contains markdown-style formatting
    if (text.includes('**') || text.includes('•')) {
      return text.split('\n\n').map((paragraph, index) => {
        // Handle bold headers
        if (paragraph.includes('**') && paragraph.includes(':')) {
          const cleanText = paragraph.replace(/\*\*/g, '');
          return (
            <h4 key={index} className="font-bold text-white mt-4 mb-3 text-base">
              {cleanText}
            </h4>
          );
        }
        
        // Handle bullet points
        if (paragraph.includes('•')) {
          const lines = paragraph.split('\n');
          return (
            <div key={index} className="mb-3">
              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex items-start mb-2 ml-1">
                  <span className="mr-2 text-gray-400">•</span>
                  <span className="flex-1">{line.replace('•', '').trim()}</span>
                </div>
              ))}
            </div>
          );
        }
        
        // Regular paragraph
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {paragraph}
          </p>
        );
      });
    }
    
    // For simple text, just render with line breaks
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed last:mb-0">
        {paragraph}
      </p>
    ));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full max-w-7xl max-h-[95vh] mx-4 flex flex-col items-center justify-center p-2 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 bg-black/50 text-white hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Image Container - Left/Top on mobile */}
          <div className="relative w-full lg:w-2/3 h-2/3 lg:h-full flex flex-col items-center justify-center">
            {/* Title - Mobile */}
            <div className="lg:hidden w-full mb-3 flex justify-center">
              <h2 className="text-xl font-semibold text-white break-words text-center px-4">
                {project.title}
              </h2>
            </div>
            
            <div className="relative w-full h-full max-w-4xl flex items-center justify-center bg-gray-900/30 rounded-lg overflow-hidden">
              <img
                src={typeof images[currentImageIndex] === 'string' ? images[currentImageIndex] : images[currentImageIndex]?.url || images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center hover:bg-black/10 transition-all duration-200 backdrop-blur-sm border border-white/20"
                >
                  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center hover:bg-black/10 transition-all duration-200 backdrop-blur-sm border border-white/20"
                >
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                </button>
              </>
            )}

            {/* Image Counter - FIXED POSITION AT BOTTOM */}
            {images.length > 1 && (
              <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 backdrop-blur-sm bg-black/50 px-3 py-1 md:px-4 md:py-2 rounded-full">
                <div className="flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Image Counter Text */}
            {images.length > 1 && (
              <div className="absolute bottom-2 md:bottom-4 right-4 z-20 backdrop-blur-sm bg-black/50 px-2 py-1 rounded text-xs text-white/80">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Description Container - Right/Bottom */}
          <div className="w-full lg:w-1/3 h-1/3 lg:h-full flex flex-col bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 overflow-hidden">
            {/* Title - Desktop */}
            <div className="hidden lg:block mb-4">
              <h2 className="text-2xl font-bold text-white break-words">
                {project.title}
              </h2>
            </div>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto pr-2">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                Project Details:
              </h3>
              <div className="text-sm md:text-base text-gray-200 leading-relaxed">
                {formatDescription(getCurrentDescription())}
              </div>

              {/* Program Used Section */}
              {programs.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                    Technologies & Tools:
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {programs.map((program, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 text-white rounded-full text-xs md:text-sm backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {programIcons && programIcons[program] && (
                          <img 
                            src={programIcons[program]} 
                            alt={program}
                            className="w-4 h-4 md:w-5 md:h-5"
                          />
                        )}
                        <span>{program}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills/Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                    Skills Demonstrated:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white rounded-full text-xs backdrop-blur-sm border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;