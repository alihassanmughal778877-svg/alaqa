"use client";

import Button from "./Button";
import Lottie from "lottie-react";
import iconCustomDevelopment from "./animations/New-animation.json";
// import iconCustomDevelopment from "./animations/Filled-icon.json";
// import iconCustomDevelopment from "./animations/lineicon.json";

export default function DrivingTransformation() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden group">
      {/* Decorative background elements - same as second section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Digital Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              DRIVING YOUR
              <br />
              <span className="bg-gradient-to-r from-[#6B1C95] to-[#5A1780] bg-clip-text text-transparent">
                DIGITAL TRANSFORMATION
              </span>
            </h2>
            <div className="w-24 h-1 mb-6" style={{ backgroundColor: "#6B1C95" }}></div>
            <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              We help enterprises through custom business solutions and provide
              IT outsourcing services to companies with agility, quality, and
              commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button variant="outline" className="w-full sm:w-auto transition-all duration-300 hover:scale-105">
                Hire Our Team
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto transition-all duration-300 hover:scale-105">
                View Services
              </Button>
            </div>
          </div>

          {/* Right Visual - Centered */}
          <div className="relative order-1 md:order-2 mb-8 md:mb-0 flex items-center justify-center">
            {/* Background blurred element - BLACK by default, PURPLE on hover */}
            <div
              className="w-90 h-64 sm:h-80 md:h-96 rounded-lg flex items-center justify-center transform rotate-12 opacity-20 overflow-hidden transition-all duration-500 group-hover:opacity-30 group-hover:scale-105"
              style={{
                background: "linear-gradient(to bottom right, #000000, #1a1a1a)", // BLACK default
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(to bottom right, #6B1C95, #5A1780)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(to bottom right, #000000, #1a1a1a)"}
            >
              <Lottie
                animationData={iconCustomDevelopment}
                loop={true}
                autoplay={true}
                style={{ width: "200px", height: "200px", opacity: 0.5 }}
              />
            </div>

            {/* Main square - BLACK by default, PURPLE on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg transform -rotate-12 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-0"
                style={{ 
                  background: "linear-gradient(to bottom right, #000000, #1a1a1a)", // BLACK default
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #6B1C95 0%, #5A1780 50%, #4A1266 100%)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "linear-gradient(to bottom right, #000000, #1a1a1a)"}
              >
                {/* Decorative overlay */}
                <div className="absolute inset-0 opacity-10 rounded-lg overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                </div>
                
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center transition-all duration-500"
                >
                  <Lottie
                    animationData={iconCustomDevelopment}
                    loop={true}
                    autoplay={true}
                    style={{ width: "200px", height: "200px" }}
                    className="animate-rotate-smooth transition-all duration-500 group-hover:scale-110"
                  />
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes rotate-smooth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-rotate-smooth {
          animation: rotate-smooth 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
