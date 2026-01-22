import bg from './assets/background1.png';
import HeaderandFooter from './Components/HeaderandFooter';

function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative select-none"
      style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <HeaderandFooter />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col items-center mb-5 px-4 pt-15 sm:pt-8 md:pt-10 lg:pt-12">
            <p className="text-white tracking-tighter font-sofia-condensed font-black leading-[0.9] mb-4 md:mb-6 text-center text-glow
              text-[2.8rem] xs:text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] 
              mt-4 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16"
            >
              PORTFOLI<span className="text-orange-400">.</span>YO!
            </p>
            
            <p className="text-white font-akshar font-light opacity-90 text-center
              text-sm xs:text-base sm:text-lg
              mt-[-0.5rem] xs:mt-[-1rem] sm:mt-[-1.5rem] md:mt-[-1.5rem]
              px-2 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
            >
              Michael Rhoi Gonzales | Creative Designer & Developer
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 px-4 max-w-6xl mx-auto w-full mt-4 sm:mt-6 md:mt-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full">
              <p className="bg-orange-400 text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-bold font-akshar tracking-tight 
                hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-200 text-sm sm:text-base whitespace-nowrap">
                Illustrator
              </p>
              <p className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 
                font-bold font-akshar tracking-tight hover:bg-white/20 hover:shadow-lg hover:shadow-white/30 transition-all duration-200 
                text-sm sm:text-base whitespace-nowrap">
                Creative
              </p>
              <p className="bg-pink-500 text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-bold font-akshar tracking-tight 
                hover:shadow-lg hover:shadow-red-500/10 transition-all duration-200 text-sm sm:text-base whitespace-nowrap">
                Graphic Designer
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full">
              <p className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 
                font-bold font-akshar tracking-tight hover:bg-white/20 hover:shadow-lg hover:shadow-white/30 transition-all duration-200 
                text-sm sm:text-base whitespace-nowrap">
                Collaborator
              </p>
              <p className="bg-yellow-400 text-gray-800 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-bold font-akshar tracking-tight 
                hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-200 text-sm sm:text-base whitespace-nowrap">
                Digital Artist
              </p>
              <p className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 
                font-bold font-akshar tracking-tight hover:bg-white/20 hover:shadow-lg hover:shadow-white/30 transition-all duration-200 
                text-sm sm:text-base whitespace-nowrap">
                FrontEnd
              </p>
              <p className="bg-cyan-400 text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-bold font-akshar tracking-tight 
                hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200 text-sm sm:text-base whitespace-nowrap">
                UI/UX
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 py-4 sm:py-6 mt-auto">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <p className="text-white/60 text-xs sm:text-sm font-akshar font-light tracking-wide text-center 
              max-w-[90%] sm:max-w-none"
            >
              © 2024 Chroma Portfolio | Crafted with passion
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-md">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/michael-gonzales-ba65a2361/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-orange-300 transition-colors duration-200 
                  text-xs sm:text-sm font-akshar px-2 py-1"
              >
                LinkedIn
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/chromaa.png/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-orange-300 transition-colors duration-200 
                  text-xs sm:text-sm font-akshar px-2 py-1"
              >
                Instagram
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/MchaelRh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-orange-300 transition-colors duration-200 
                  text-xs sm:text-sm font-akshar px-2 py-1"
              >
                Facebook
              </a>
              
              {/* Email - Fixed */}
              <a 
                href="mailto:michaelrhoigonzales@gmail.com?subject=Portfolio Inquiry&body=Hello Michael,"
                className="text-white/70 hover:text-orange-300 transition-colors duration-200 
                  text-xs sm:text-sm font-akshar px-2 py-1"
              >
                Email
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;