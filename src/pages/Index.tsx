
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ScheduleSection from '../components/ScheduleSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ScheduleSection />
        <AboutSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
