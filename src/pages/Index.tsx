
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhoAmISection from '../components/WhoAmISection';
import HygieneGuideSection from '../components/HygieneGuideSection';

import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <WhoAmISection />
        <HygieneGuideSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
