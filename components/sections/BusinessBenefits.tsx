import * as React from 'react';
import type { FeatureItem } from '../../types';
import { getIcon } from '../IconMapper';

interface BusinessBenefitsProps {
  id?: string;
  title: string;
  subtitle: string;
  benefits: FeatureItem[];
}

const BusinessBenefits: React.FC<BusinessBenefitsProps> = ({ id, title, subtitle, benefits }) => {
  return (
    <section 
      id={id} 
      className="bg-neutral-900 text-white py-16 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-400">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = getIcon(benefit.icon);
            return (
                <div 
                  key={index} 
                  className="bg-neutral-800/50 p-6 rounded-2xl flex flex-col items-start transition-all duration-300 hover:bg-neutral-800 hover:shadow-2xl"
                >
                  <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-white">
                          {IconComponent && <IconComponent className="h-7 w-7" />}
                      </div>
                  </div>
                  <div className="mt-4">
                      <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                      <p className="mt-1 text-base text-neutral-400">{benefit.description}</p>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;