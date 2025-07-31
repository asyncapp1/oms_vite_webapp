import * as React from 'react';
import { useAppContext } from '../context/AppContext';
import { getIcon } from './IconMapper';

const Footer: React.FC = () => {
    const { content } = useAppContext();
    const { appName, footer } = content;
    const LogoIcon = getIcon('SparklesIcon');
    const currentYear = new Date().getFullYear();
    const copyrightText = footer.copyright.replace('{year}', currentYear.toString());

  return (
    <footer className="bg-neutral-900 text-neutral-300 relative">
       <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center space-x-3 text-2xl font-bold">
              {LogoIcon && <LogoIcon className="h-7 w-7 text-accent" />}
              <span className="text-white">{appName}</span>
            </div>
          <p className="mt-4 max-w-xl text-neutral-400">
            {footer.tagline}
          </p>
        </div>
        <div className="mt-8 border-t border-neutral-700/50 pt-8 text-center text-sm text-neutral-500">
            <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;