import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#191617] text-white flex flex-col items-center pt-12">
      {/* Hero Section */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-[#ff33cc]">SHEBN</span><br />
            The Global Community<br />
            of Women in Blockchain<br />
            and Web3
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Empowering women through collaboration, innovation and ecosystem opportunities. Promoting innovation and the development of technological solutions that address challenges in the industry.
          </p>
          <button className="mt-4 bg-white text-black font-extrabold text-xl px-8 py-4 rounded-[18px] border border-white hover:bg-[#ff33cc] hover:text-white transition w-fit">
            ¡GET START NOW!
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src="/images/home/world-map.png" alt="World Map" width={420} height={320} className="drop-shadow-2xl" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#ff33cc] mt-16 py-8 px-6 md:px-12 flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-5xl font-extrabold">7573</span>
          <span className="text-lg font-bold">New professionals<br /><span className="font-normal">Actived</span></span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-4xl font-extrabold">121</span>
          <span className="text-lg font-bold">New projects<br /><span className="font-normal">Completed</span></span>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-[#ff33cc] py-12 px-6 md:px-12 flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Testimonial 1 */}
        <div className="bg-black rounded-[32px] p-6 max-w-xs flex flex-col items-center shadow-lg">
          <span className="text-2xl font-bold mb-2">User</span>
          <p className="text-white text-center mb-4">The information presented here helped me understand and adapt to this new trend.</p>
          <div className="flex mb-4">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Image src="/images/shared/avatar1.png" alt="Karina Gómez" width={40} height={40} className="rounded-full" />
            <div className="text-left">
              <div className="font-bold text-sm">Karina Gómez</div>
              <div className="text-xs text-gray-300">Founder of AVALANCHE</div>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-black rounded-[32px] p-6 max-w-xs flex flex-col items-center shadow-lg">
          <span className="text-2xl font-bold mb-2">User</span>
          <p className="text-white text-center mb-4">Thanks to this platform I was able to meet my current colleagues.</p>
          <div className="flex mb-4">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Image src="/images/shared/avatar2.png" alt="Camila Soto" width={40} height={40} className="rounded-full" />
            <div className="text-left">
              <div className="font-bold text-sm">Camila Soto</div>
              <div className="text-xs text-gray-300">Marketing Director</div>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-black rounded-[32px] p-6 max-w-xs flex flex-col items-center shadow-lg">
          <span className="text-2xl font-bold mb-2">User</span>
          <p className="text-white text-center mb-4">Could you elaborate on examples of companies that already use blockchain?</p>
          <div className="flex mb-4">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Image src="/images/shared/avatar3.png" alt="Silvia Mercado" width={40} height={40} className="rounded-full" />
            <div className="text-left">
              <div className="font-bold text-sm">Silvia Mercado</div>
              <div className="text-xs text-gray-300">Developer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Home part 2*/}
      <div className="min-h-screen w-full bg-[#191617] text-white flex flex-col items-center">
            
            <div className="text-center px-4">
              <p className="text-5xl font-bold">CONNECT WITH TEAMS AROUND THE WORLD</p>
            </div>

            <div className="flex justify-center py-10">
              <button href="#" className="rounded-xl px-6 py-4 text-2xl font-semibold border border-white">Join teams for startups that scale</button>
            </div>

            {/* Tablero Visual */}
            <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 py-8">
              
              <img className="w-208 h-125" src="/images/home/artboard-2.png" alt="Art Board" />
                        
              <div className="absolute top-0 w-5/6 h-125 md:w-216">
                <div className="flex justify-around">
                  <img className="w-22 h-20 md:w-28 md:h-26 rounded-full" src="/images/home/persona-1.png" alt="Persona1" />          
                  <img className="w-25 h-23 rounded-full" src="/images/home/persona-1.png" alt="Persona2" />
                </div>

                <div className="relative w-full h-[100px] flex items-center">
                  <img className="w-18 h-14 rounded-2xl bg-white p-2" src="/images/home/click.png" alt="Click" />
                  <img className="absolute left-1/2 transform -translate-x-1/2 w-24 h-22 rounded-full" src="/images/home/persona-1.png" alt="Persona3" />                       
                </div>

                <div className="relative mt-14 w-full flex md:justify-around">
                  <button className="rounded-xl bg-black border-4 border-white flex items-center py-2 px-6 text-base md:text-xl font-bold text-[#FF29D7] text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg> Start getting to Know
                  </button>
                  <img className="absolute right-0 top-1/2 -translate-y-1/2 w-18 h-14 rounded-2xl bg-white p-2" src="/images/home/candado.png" alt="Candado" />
                </div>

                <div className="flex justify-center">
                  <img className="w-20 h-18 rounded-full mt-16" src="/images/home/persona-1.png" alt="Persona 4" />
                  <img className="w-50 h-28 rotate-23" src="/images/home/artboard-9.png" alt="Flecha" />
                </div>

                <div className="flex justify-around items-center">
                  <img className="w-24 h-22 rounded-full" src="/images/home/persona-1.png" alt="Persona 5" />
                  <img className="w-18 h-14 md:ml-60 rounded-2xl bg-white p-2 mt-9" src="/images/home/like.png" alt="Like" />   
                  <img className="w-24 h-22 md:ml-20 rounded-full" src="/images/home/persona-1.png" alt="Persona 6" />
                </div>

              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 my-10">
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <img className="w-40 h-10" src="/images/home/logo-buckspay.png" alt={`Buckspay ${i}`} />
                  <img className="w-15 h-10" src="/images/home/artboard-24.png" alt={`Logo ${i}`} />
                </React.Fragment>
              ))}

            </div>

        </div>

      {/* Home part 3*/}
      <div className="">
        <div className="w-full py-12 px-6 flex flex-col md:flex-row gap-6 justify-center items-center pt-50">
          <div className="w-full grid-cols-1 justify-items-center">
            <p className="text-4xl text-[#ffffff] font-semibold flex justify-center">PUBLISH<img className="w-24 h-17 ml-6" src="/images/home/artboard-10.png" alt="Nube" /></p>
            <p className="text-4xl text-[#ffffff] font-semibold">YOUR PROJECT</p>
         </div>
         <div className="w-full grid-cols-1 px-18">
            <p className="text-2xl text-[#ffffff] text-left">Space where women can provide their ideas and receive feedback from the community, promoting innovation and the development of technological solutions that address challenges in the industry.</p>
          </div>
        </div>          
        <div className="w-full py-12 px-6 flex flex-col md:flex-row gap-8 justify-center pb-50 bg-[url(/images/home/artboard-12.png)] bg-size-[1400px_400px] bg-center bg-no-repeat">
          <div className="w-full grid grid-cols-1 justify-items-center gap-8">
            <button className="border border-[#ffffff] rounded-xl py-3 px-10 text-xl font-semibold bg-[#000000]">Upload my project</button>
            <button className="border border-[#ffffff] rounded-xl py-3 px-10 text-xl font-semibold bg-[#000000]">Search for projects</button>
          </div>
          <div className="w-full grid grid-cols-2">
            <div className="grid-cols-1 justify-items-start">
              <p className="text-5xl font-medium text-[#ffffff]">7.6+</p>
              <p className="text-base text-[#ffffff] ">Active professionals</p>
            </div>
            <div className="grid-cols-1 justify-items-start">
              <p className="text-5xl font-medium text-[#ffffff]">120+</p>
              <p className="text-base text-[#ffffff]">Completed projects</p>
            </div> 
          </div>          
        </div>
                      
      </div>

      {/* Home part 4 */}
      <div className="w-full py-12 px-6 flex flex-col md:flex-rows-2 gap-8 justify-center items-center my-20">
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-3xl font-semibold">CONTACT US</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <div className="w-full bg-[#FF29D7] rounded md:rounded-l-lg justify-items-center content-center ">
              <img className="w-83 h-80" src="/images/home/artboard-25.png" alt="customer service icon" />
            </div>
            <div className="w-full bg-[#373A40] rounded md:rounded-r-lg py-12 px-8">
              <div className="grid grid-cols-1 pb-4">
                <label htmlFor="country" className="font-semibold text-[#ffffff] mb-1">COUNTRY</label>
                <select name="country" id="country" className="col-start-1 row-start-2 bg-[#D9D9D9] rounded-lg text-[#000000] appearance-none p-2 pl-4 outline-2 outline-offset-0 outline-transparent">
                  <option value="">Choose your country</option>
                  <option value="US">United Stated</option>
                  <option value="CA">Canada</option>
                  <option value="MX">Mexico</option>
                  <option value="GB">United kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="ES">Spain</option>
                  <option value="AR">Argentina</option>
                  <option value="BR">Brazil</option>
                  <option value="CO">Colombia</option>
                  <option value="VE">Venezuela</option>
                  <option value="CL">Chile</option>
                </select>
                <svg className="pointer-events-none col-start-1 row-start-2 mr-2 size-7 self-center justify-self-end fill-[#000000] sm:size-7" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
                </svg>              
              </div>
              <div className="grid grid-cols-1 pb-4">
                <label className="font-semibold text-[#ffffff] mb-1" htmlFor="identificacion">TYPE OF IDENTIFICATION</label>               
                <select name="identificacion" id="identificacion" className="col-start-1 row-start-2 bg-[#D9D9D9] rounded-lg text-[#000000] appearance-none p-2 pl-4 outline-2 outline-offset-0 outline-transparent">
                  <option value="">DNI</option>
                </select>
                <svg className="pointer-events-none col-start-1 row-start-2 mr-2 size-7 self-center justify-self-end fill-[#000000] sm:size-7" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </div>
              <div className="grid grid-cols-1 pb-4">
                <label className="font-semibold text-[#ffffff] mb-1" htmlFor="idnumber">IDENTIFICATION NUMBER</label>
                <input type="number" name="idnumber" id="idnumber" placeholder="Enter your identification number" className="w-full h-10 bg-[#D9D9D9] rounded-lg p-2 pl-4 appearance-none outline-2 outline-offset-0 outline-transparent text-[#000000] " />                
              </div>
              <div className="grid grid-cols-1 pb-4">
                <label className="font-semibold text-[#ffffff] mb-1" htmlFor="fullname">FULL NAME</label>
                <input type="text" name="fullname" id="fullname" placeholder="Enter your full name" className="w-full h-10 bg-[#D9D9D9] rounded-lg p-2 pl-4 appearance-none outline-2 outline-offset-0 outline-transparent text-[#000000] " />                
              </div>
              <div className="grid grid-cols-1 pb-4">
                <label className="font-semibold text-[#ffffff] mb-1" htmlFor="phone">PHONE</label>
                <input type="number" name="phone" id="phone" placeholder="Enter a phone number" className="w-full h-10 bg-[#D9D9D9] rounded-lg p-2 pl-4 appearance-none outline-2 outline-offset-0 outline-transparent text-[#000000] " />                
              </div>
              <div className="grid grid-cols-1 pb-4">
                <label className="font-semibold text-[#ffffff] mb-1" htmlFor="email">EMAIL</label>
                <input type="email" name="email" id="email" placeholder="Your email here" className="w-full h-10 bg-[#D9D9D9] rounded-lg p-2 pl-4 appearance-none outline-2 outline-offset-0 outline-transparent text-[#000000] " />                
              </div>
              <div className="grid grid-cols-1 pb-4">
                <label className="font-semibold text-[#ffffff] mb-1" htmlFor="message">MESSAGE</label>
                <textarea name="message" id="message" type="text" placeholder="Enter your message" className="w-full bg-[#D9D9D9] rounded-lg p-2 pl-4 appearance-none outline-2 outline-offset-0 outline-transparent text-[#000000]" rows={4}></textarea>
              </div>
              <div className="grid grid-cols-1 mt-4">
                <label htmlFor="" className="pl-4 text-[#ffffff]">
                  <input type="checkbox"  className="accent-[#FF29D7]/75"/> I agree to all the
                  <a href="" className="text-[#FF29D7] hover:text-[#DE69C7]"> Terms and Conditions</a>                
                </label>
              </div>
              <div className="flex justify-center mt-8">
                <button className="cursor-pointer bg-[#000000] border rounded-lg border-[#ffffff] px-5 font-semibold  hover:bg-[#FF29D7] hover:text-white">
                  SEND
                </button>
              </div>
            </div>
        </div>
      </div>


    </div>
  );
};

export default Home; 