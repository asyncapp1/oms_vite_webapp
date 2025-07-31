
import * as React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import type { SolutionPageContent } from '../types';
import HeroSection from '../components/sections/HeroSection';
import FeaturesGrid from '../components/sections/FeaturesGrid';

const BusinessCategoryPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const { content } = useAppContext();
    const [pageContent, setPageContent] = React.useState<SolutionPageContent | null | undefined>(undefined);
    
    React.useEffect(() => {
        if (content && category && content.solutions) {
            const currentContent = content.solutions[category];
            setPageContent(currentContent);

            if (currentContent) {
                document.title = currentContent.pageTitle;
                
                let metaDescription = document.querySelector('meta[name="description"]');
                if (!metaDescription) {
                    metaDescription = document.createElement('meta');
                    metaDescription.setAttribute('name', 'description');
                    document.head.appendChild(metaDescription);
                }
                metaDescription.setAttribute('content', currentContent.metaDescription);
            }
        } else if (content && !content.solutions) {
             setPageContent(null); // Explicitly set to null if solutions object is missing
        }
    }, [category, content]);
    
    // Still loading content or haven't determined if page exists
    if (pageContent === undefined) {
        return null; // or a loader
    }
    
    // Content loaded, but this category does not exist
    if (!pageContent) {
        return <Navigate to="/404" replace />;
    }
    
    return (
        <div>
            <HeroSection content={pageContent.hero} />
            <FeaturesGrid 
                id={pageContent.features.id}
                title={pageContent.features.title}
                subtitle={pageContent.features.subtitle}
                featureCategories={pageContent.features.categories}
                bgClass="bg-white"
            />
        </div>
    );
};

export default BusinessCategoryPage;
