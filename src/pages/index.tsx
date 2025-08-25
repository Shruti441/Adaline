import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Modal from '../components/Modal';
import ScrollSection from '../components/ScrollSection'; // ✅ imported section

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !sectionRef.current) return;

      const scrollTop = window.scrollY;
      const maxScroll = 2000;
      const scrollFraction = Math.min(1, scrollTop / maxScroll);
      const duration = videoRef.current.duration || 1;
      videoRef.current.currentTime = scrollFraction * duration;

      const scale = 1 + scrollFraction * 0.3;
      videoRef.current.style.transform = `scale(${scale})`;

      // ✅ Scroll logic for updating section
      const sectionTop = sectionRef.current.offsetTop;
      if (scrollTop > sectionTop - 300) {
        const relativeScroll = scrollTop - sectionTop;
        const index = Math.min(Math.floor(relativeScroll / 500), 3); // ✅ 3 not 2
        setActiveStep(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logos = [
    <span key="discord">Discord</span>,
    <span key="mck">McKinsey & Company</span>,
    <span key="hubspot">HubSpot</span>,
    <span key="reforge">Reforge</span>,
    <span key="carvana">Carvana</span>,
  ];

  return (
    <div className="relative min-h-screen font-sans text-[#102610]">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://cdn.videvo.net/videvo_files/video/free/2018-08/small_watermarked/180709_03_Cosmos_4k_001_preview.webm"
        muted
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 transition-transform duration-200"
      />

      {/* Foreground Content */}
      <div className="min-h-screen bg-gradient-to-b from-[#f3efe4]/90 to-[#dcd4ba]/90">
        <Navbar setShowModal={setShowModal} />
        <Hero logos={logos} />
        <VideoSection />
      </div>

      {/* Scroll-based dynamic section */}
     <ScrollSection activeStep={activeStep} sectionRef={sectionRef} />


      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
