"use client";

import { useRef, useEffect, useState } from "react";
import Button from "./Button";

export default function Hero() {
  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const unmuteVideos = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.muted = false;
      }
    };

    // Unmute videos after first user interaction
    const events = ["click", "touchstart", "scroll", "keydown"];
    events.forEach((event) => {
      window.addEventListener(event, unmuteVideos, { once: true });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, unmuteVideos);
      });
    };
  }, []);

  // Play/Pause video based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if section is in viewport (with some threshold)
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        
        setIsInView(isVisible);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    const playVideo = async (videoElement) => {
      if (!videoElement) return;
      
      try {
        if (isInView) {
          await videoElement.play();
        } else {
          videoElement.pause();
        }
      } catch (error) {
        // Auto-play was prevented or video paused
        console.log("Video playback error:", error);
      }
    };

    playVideo(videoRef.current);
    playVideo(mobileVideoRef.current);
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-600 via-black to-gray-800 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero/banner-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        </video>
        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/hero/banner-video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn"
          style={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          WE BUILD & REFINE
          <br />
          <span style={{ color: "#6B1C95" }}>SMART WEB SOLUTIONS</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp">
          We deliver end-to-end web design, development & marketing services
          with 200% approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
          <Button variant="primary" className="text-lg !px-4 py-2">
            Get Started
          </Button>
          <Button variant="outline" className="text-lg !px-4 py-2">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
