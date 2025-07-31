
import * as React from 'react';
import { useAppContext } from '../context/AppContext';
import HeroSection from '../components/sections/HeroSection';
import WhatIsRMS from '../components/sections/WhatIsRMS';
import SolutionsShowcase from '../components/sections/SolutionsShowcase';
import FeaturesGrid from '../components/sections/FeaturesGrid';
import BusinessBenefits from '../components/sections/BusinessBenefits';
import GettingStarted from '../components/sections/GettingStarted';
import SecurityPrivacy from '../components/sections/SecurityPrivacy';
import ComingSoon from '../components/sections/ComingSoon';

const HomePage: React.FC = () => {
  const { content } = useAppContext();
  const { hero, whatIsRMS, homeSolutions, features, benefits, gettingStarted, security, comingSoon } = content;

  return (
    <div>
      <HeroSection content={hero} />
      <WhatIsRMS content={whatIsRMS} />
      <SolutionsShowcase content={homeSolutions} />
      <FeaturesGrid id={features.owners.id} title={features.owners.title} subtitle={features.owners.subtitle} featureCategories={features.owners.categories} />
      <BusinessBenefits id={benefits.id} title={benefits.title} subtitle={benefits.subtitle} benefits={benefits.items} />
      <GettingStarted id={gettingStarted.id} content={gettingStarted} />
      <SecurityPrivacy content={security} />
      <ComingSoon content={comingSoon} />
    </div>
  );
};

export default HomePage;