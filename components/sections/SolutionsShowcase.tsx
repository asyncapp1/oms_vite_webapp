
import * as React from 'react';
import { Link } from 'react-router-dom';
import { getIcon } from '../IconMapper';
import type { SolutionShowcaseItem } from '../../types';

interface SolutionsShowcaseProps {
  content: {
    title: string;
    subtitle: string;
    items: SolutionShowcaseItem[];
  };
}

const SolutionCard: React.FC<SolutionShowcaseItem> = ({ icon, title, description, href }) => {
  const IconComponent = getIcon(icon);
  return (
    <Link to={href} className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-orange-100 text-primary mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        {IconComponent && <IconComponent className="h-8 w-8" />}
      </div>
      <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </Link>
  );
};

const SolutionsShowcase: React.FC<SolutionsShowcaseProps> = ({ content }) => {
  if (!content || !content.items) {
    return null;
  }
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">{content.title}</h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-neutral-600">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.items.map((item) => (
            <SolutionCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;
