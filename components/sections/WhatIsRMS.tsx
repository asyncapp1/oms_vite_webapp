import * as React from 'react';
import { getIcon } from '../IconMapper';

interface WhatIsRMSProps {
  content: {
    title: string;
    description: string;
  }
}

const WhatIsRMS: React.FC<WhatIsRMSProps> = ({ content }) => {
  const LogoIcon = getIcon('SparklesIcon');
  return (
    <section className="bg-neutral-100 py-16 sm:py-24 bg-grid-pattern bg-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            {LogoIcon && <LogoIcon className="mx-auto h-12 w-12 text-accent" />}
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {content.title}
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRMS;