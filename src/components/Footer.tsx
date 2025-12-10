
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-10 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground mb-3 italic text-lg">
          "Um sorriso saudável é o reflexo de cuidados diários e conhecimento sobre higiene oral"
        </p>
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <p className="gradient-text font-semibold text-lg">
            Sarah Castro
          </p>
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </div>
        <p className="text-muted-foreground text-sm mt-4">
          © {new Date().getFullYear()} - Sarah Castro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
