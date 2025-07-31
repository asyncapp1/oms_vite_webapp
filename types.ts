
import * as React from 'react';

export type Language = 'en' | 'hi';

export interface IconProps {
  className?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureCategory {
  categoryTitle: string;
  features: FeatureItem[];
}

export interface NavLinkItem {
  name: string;
  href: string;
  children?: undefined;
}

export interface NavDropdownItem {
  name: string;
  children: NavLinkItem[];
  href?: undefined;
}

export type NavItem = NavLinkItem | NavDropdownItem;

export interface SolutionShowcaseItem {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface SolutionPageContent {
  pageTitle: string;
  metaDescription: string;
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  features: {
    id: string;
    title: string;
    subtitle: string;
    categories: FeatureCategory[];
  };
}