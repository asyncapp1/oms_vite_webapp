import * as React from 'react';
import { SparklesIcon } from './icons/HeroIcons';

interface LoaderProps {
    appName?: string;
}

const Loader: React.FC<LoaderProps> = ({ appName = "Aap Ka Parcha" }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 text-primary">
            <div className="flex flex-col items-center">
                <SparklesIcon className="h-16 w-16 text-primary" />
                <p className="mt-4 text-2xl font-bold text-primary tracking-wider">{appName}</p>
            </div>
        </div>
    );
};

export default Loader;