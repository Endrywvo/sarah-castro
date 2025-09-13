
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhoAmISection from '../components/WhoAmISection';
import GuidesSection from '../components/GuidesSection';

import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <WhoAmISection />
        <GuidesSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
