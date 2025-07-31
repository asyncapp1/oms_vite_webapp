import * as React from 'react';
import type { FeatureItem } from '../../types';
import { getIcon } from '../IconMapper';

interface SecurityPrivacyProps {
    content: {
        title: string;
        subtitle: string;
        features: FeatureItem[];
    }
}

const SecurityPrivacy: React.FC<SecurityPrivacyProps> = ({ content }) => {
    const SectionIcon = getIcon('ShieldCheckIcon');
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    {SectionIcon && <SectionIcon className="mx-auto h-12 w-12 text-accent" />}
                    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">{content.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
                        {content.subtitle}
                    </p>
                </div>

                <dl className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {content.features.map((feature) => {
                        const IconComponent = getIcon(feature.icon);
                        const iconContent = IconComponent
                            ? <IconComponent className="h-6 w-6" />
                            : <span className="text-xl font-bold">{feature.icon}</span>;

                        return (
                            <div key={feature.title} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-white">
                                        {iconContent}
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-bold text-neutral-900">{feature.title}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-neutral-600">
                                    {feature.description}
                                </dd>
                            </div>
                        );
                    })}
                </dl>
            </div>
        </section>
    );
};

export default SecurityPrivacy;