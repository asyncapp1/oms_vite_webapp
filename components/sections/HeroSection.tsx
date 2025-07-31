import * as React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  content: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section className="relative bg-white overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-white"></div>
       <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-200/30 rounded-full filter blur-3xl opacity-50"></div>
       <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-amber-200/30 rounded-full filter blur-3xl opacity-50"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-32 lg:py-40 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight">
            <span className="block">{content.titleLine1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500 mt-2">{content.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-600">
            {content.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/#get-started" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-primary/40"
            >
              {content.primaryCta}
            </a>
            <div>
              <Link to="/downloads" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary bg-white hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-neutral-400/20">
                {content.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;