
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getIcon } from '../components/IconMapper';

const NotFoundPage: React.FC = () => {
  const { content } = useAppContext();
  const { notFoundPage } = content;
  const SadIcon = getIcon('EmojiSadIcon');
  
  // Fallback content in case context is not ready
  const title = notFoundPage?.title || '404 - Page Not Found';
  const subtitle = notFoundPage?.subtitle || "Oops! The page you're looking for doesn't exist.";
  const cta = notFoundPage?.cta || "Go to Homepage";

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-white text-center px-4">
      <div>
        {SadIcon && <SadIcon className="mx-auto h-16 w-16 text-amber-400 mb-4" />}
        <h1 className="text-6xl font-extrabold text-primary tracking-tight">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-bold text-neutral-800">
          {title}
        </h2>
        <p className="mt-2 text-lg text-neutral-600">
          {subtitle}
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;