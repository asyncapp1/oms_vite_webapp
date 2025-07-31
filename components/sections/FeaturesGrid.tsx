import * as React from 'react';
import type { FeatureCategory, FeatureItem } from '../../types';
import { getIcon } from '../IconMapper';

const FeatureCard: React.FC<FeatureItem> = ({ icon, title, description }) => {
  const IconComponent = getIcon(icon);
  
  const iconContent = IconComponent
    ? <IconComponent className="h-6 w-6" />
    : <span className="text-2xl">{icon}</span>;

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-white">
          {iconContent}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
        <p className="mt-2 text-base text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

interface FeaturesGridProps {
  id?: string;
  title: string;
  subtitle: string;
  featureCategories: FeatureCategory[];
  bgClass?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ id, title, subtitle, featureCategories, bgClass = 'bg-neutral-50' }) => {
  
  return (
    <section 
      id={id} 
      className={`${bgClass} py-16 sm:py-24`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-16">
          {featureCategories.map((category) => (
            <div key={category.categoryTitle}>
              <h3 className="text-2xl font-bold text-center text-primary mb-8">
                {category.categoryTitle}
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {category.features.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;