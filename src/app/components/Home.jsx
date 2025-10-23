import FeatureSection from './FeatureSection';
import ContactForm from './ContactForm';
//import GoogleCalendarWidget from './GoogleCalendarWidget';
import PropTypes from "prop-types";
import HomeComingSoon from './HomeComingSoon';

const PINK = "#FF29D7";


const Home = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Home Coming Soon */}
      <HomeComingSoon />
      
      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col sm:flex-row items-center sm:items-start justify-between px-4 sm:px-16 relative z-10 min-h-[600px] sm:min-h-[700px]">
        <div className="flex flex-col gap-6 mt-12 sm:mt-24 max-w-xl w-full z-20">
          <h1 className="text-4xl sm:text-7xl font-extrabold mb-2" style={{ color: PINK }}>Welcome</h1>
          <p className="text-base sm:text-xl font-light tracking-wide mb-6">THE GLOBAL COMMUNITY<br className="hidden sm:block"/>OF WOMEN IN WEB3</p>
          <div className="flex gap-6 mt-2 flex-wrap">
            <span className="flex items-center gap-2 text-sm sm:text-base">
              <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-xs" style={{ color: PINK }}>X</span> SHEBN_
            </span>
            <span className="flex items-center gap-2 text-sm sm:text-base">
              <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-xs" style={{ color: PINK }}>T</span> SHEBN
            </span>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-full h-full sm:w-[80vw] sm:h-[90vh] pointer-events-none select-none flex items-end justify-end z-10">
          <img 
            src="/images/home/DISENOUX.png"
            alt="Pink planet" 
            className="w-full h-full object-cover object-bottom" 
            draggable="false"
          />
        </div>
      </main>
     
      {/* BLOQUE DE EMPODERAMIENTO */}
      <section className="relative bg-black text-white py-24 border-t-4 border-b-4 border-pink-500 overflow-hidden min-h-[300px]">
        <img
          src="/images/home/izquierda.png"
          alt=""
          className="absolute top-0 left-0 h-full max-w-[250px] w-auto object-contain z-0 hidden sm:block"
        />
        <img
          src="/images/home/derecha.png"
          alt=""
          className="absolute top-0 right-0 h-full max-w-[250px] w-auto object-contain z-0 hidden sm:block"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Empowering women through collaboration,<br />
            innovation and ecosystem opportunities
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Promoting innovation and the development of technological solutions<br />
            that address challenges in the industry
          </p>
        </div>
      </section>

      <FeatureSection />
      {/* <GoogleCalendarWidget /> */}
      <ContactForm />
      {children}

      <div className="w-full h-2 sm:h-4 absolute bottom-0 left-0 z-20" style={{ background: PINK }}></div>
    </section>
  );
};

Home.propTypes = {
  children: PropTypes.node,
};

export default Home;
