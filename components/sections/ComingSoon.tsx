import * as React from 'react';
import type { FeatureItem } from '../../types';
import { getIcon } from '../IconMapper';

const ComingSoon: React.FC<{ content: any }> = ({ content }) => {
  return (
    <section className="bg-neutral-800 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{content.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-300">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature: FeatureItem, index: number) => {
            const IconComponent = getIcon(feature.icon);
            return (
                <div 
                  key={index} 
                  className="bg-neutral-700/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:bg-neutral-700 transform hover:-translate-y-1"
                >
                    <div className="flex-shrink-0 text-accent mb-4">
                        {IconComponent && <IconComponent className="h-8 w-8" />}
                    </div>
                    <h3 className="text-lg font-bold text-white flex-grow">{feature.title}</h3>
                    <p className="mt-2 text-base text-neutral-300 ">{feature.description}</p>
                    <span className="mt-4 text-xs font-bold uppercase tracking-wider text-accent bg-neutral-600/50 px-3 py-1 rounded-full">Coming Soon</span>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;