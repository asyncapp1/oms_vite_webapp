import * as React from 'react';
import { useAppContext } from '../context/AppContext';
import { getIcon } from '../components/IconMapper';

interface DownloadCardProps {
  icon: string;
  platform: string;
  description: string;
  cta: string;
  url?: string | null;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ icon, platform, description, cta, url }) => {
  const PlatformIcon = getIcon(icon);
  const CtaIcon = getIcon(url ? 'ExternalLinkIcon' : 'ClockIcon');

  const handleClick = (e: React.MouseEvent) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center transform hover:-translate-y-2">
      <div className="text-primary mb-6">
        {PlatformIcon && <PlatformIcon className="h-16 w-16" />}
      </div>
      <h3 className="text-2xl font-bold text-neutral-800 mb-2">{platform}</h3>
      <p className="text-neutral-600 mb-8 flex-grow">{description}</p>
      <a
        href={url || "#"}
        onClick={handleClick}
        className={`inline-flex items-center gap-2 justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg transition-all shadow-md hover:shadow-lg ${
          url 
            ? 'text-white bg-primary hover:bg-secondary cursor-pointer' 
            : 'text-neutral-500 bg-neutral-200 cursor-not-allowed'
        }`}
      >
        {CtaIcon && <CtaIcon className="h-5 w-5" />}
        <span>{cta}</span>
      </a>
    </div>
  );
};

const DownloadsPage: React.FC = () => {
  const { content } = useAppContext();
  const { downloadsPage } = content;

  return (
    <div className="bg-neutral-100 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
            {downloadsPage.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
            {downloadsPage.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {downloadsPage.cards.map((card: any) => (
            <DownloadCard
              key={card.platform}
              icon={card.icon}
              platform={card.platform}
              description={card.description}
              cta={card.cta}
              url={card.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;