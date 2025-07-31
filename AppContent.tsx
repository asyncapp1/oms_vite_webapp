
import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import HomePage from './pages/HomePage';
import DownloadsPage from './pages/DownloadsPage';
import BusinessCategoryPage from './pages/BusinessCategoryPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';

const AppContent: React.FC = () => {
    const { loading, error, content } = useAppContext();
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    if (loading) {
        const initialAppName = content?.appName || 'Aap Ka Parcha';
        return <Loader appName={initialAppName} />;
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-neutral-50 text-red-500">
                <div className="text-2xl font-bold">Error: {error}</div>
            </div>
        );
    }

    if (!content || Object.keys(content).length === 0) {
        return <Loader appName="Aap Ka Parcha" />;
    }

    return (
        <div className="bg-neutral-50 text-neutral-800 antialiased font-sans">
            <Header />
            <main>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/downloads" element={<DownloadsPage />} />
                    <Route path="/solutions/:category" element={<BusinessCategoryPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default AppContent;
