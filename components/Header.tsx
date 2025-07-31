
import * as React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getIcon } from './IconMapper';
import { MenuIcon, XIcon, ChevronDownIcon } from './icons/HeroIcons';
import type { NavItem } from '../types';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, content } = useAppContext();
  
  const { appName, header } = content;
  const navLinks = header.navLinks || [];
  const LogoIcon = getIcon('SparklesIcon');

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);

    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setSolutionsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setSolutionsOpen(false);
    }
  };

  return (
    <header className="bg-white/70 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
              {LogoIcon && <LogoIcon className="h-7 w-7" />}
              <span>{appName}</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-2 lg:space-x-6">
            {navLinks.map((link: NavItem) => (
              link.children ? (
                <div key={link.name} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <button className="flex items-center px-3 py-2 text-base font-medium text-neutral-600 transition-colors rounded-md hover:text-primary">
                    <span>{link.name}</span>
                    <ChevronDownIcon className={`h-5 w-5 ml-1 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSolutionsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {link.children.map(child => (
                           <Link key={child.name} to={child.href} className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-primary" role="menuitem">
                              {child.name}
                           </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2 text-base font-medium text-neutral-600 transition-colors rounded-md hover:text-primary"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLanguage} 
              className="text-base font-medium text-neutral-600 hover:text-primary transition-colors"
            >
              {header.languageSwitcher}
            </button>
            <div>
              <NavLink to="/downloads" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg">
                {header.cta}
              </NavLink>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-primary hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link: NavItem) => (
              link.children ? (
                <div key={link.name}>
                  <h3 className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">{link.name}</h3>
                  {link.children.map(child => (
                    <Link key={child.name} to={child.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-white hover:bg-primary transition-colors">
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-white hover:bg-primary transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
            <hr className="my-2 border-neutral-200" />
            <button onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-white hover:bg-primary transition-colors">
              {header.languageSwitcher}
            </button>
            <NavLink to="/downloads" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-white bg-primary hover:bg-secondary transition-colors">
              {header.cta}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
