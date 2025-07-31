import * as React from 'react';
import type { FeatureItem } from '../../types';

interface GettingStartedProps {
    id?: string;
    content: {
        title: string;
        subtitle: string;
        owner: {
            title: string;
            steps: FeatureItem[];
        }
    }
}

const Step: React.FC<{ item: FeatureItem; index: number; isLast: boolean }> = ({ item, index, isLast }) => (
    <li className="relative pl-14 pb-8">
        {!isLast && <div className="absolute left-[18px] top-5 h-full w-0.5 bg-neutral-300"></div>}
        <div className="absolute left-0 top-0 flex-shrink-0 flex items-center justify-center w-10 h-10 bg-accent text-white rounded-full font-bold text-lg ring-8 ring-neutral-100">
            {index + 1}
        </div>
        <div>
            <h4 className="text-lg font-bold text-neutral-800">{item.title}</h4>
            <p className="mt-1 text-neutral-600">{item.description}</p>
        </div>
    </li>
);

const GettingStarted: React.FC<GettingStartedProps> = ({ id, content }) => {
    return (
        <section 
            id={id} 
            className="bg-neutral-100 py-16 sm:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">{content.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600">
                        {content.subtitle}
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <h3 className="text-2xl font-bold text-center text-primary mb-8">{content.owner.title}</h3>
                        <ol>
                            {content.owner.steps.map((step, index) => (
                                <Step key={index} item={step} index={index} isLast={index === content.owner.steps.length - 1} />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GettingStarted;