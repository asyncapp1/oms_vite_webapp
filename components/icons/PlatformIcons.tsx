
import * as React from 'react';

interface IconProps {
    className?: string;
}

export const AndroidIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M16.5,8c0,1.5-1.2,2.8-2.8,2.8S11,9.5,11,8s1.2-2.8,2.8-2.8S16.5,6.5,16.5,8z M7.5,8C7.5,9.5,6.3,10.8,4.8,10.8S2,9.5,2,8s1.2-2.8,2.8-2.8S7.5,6.5,7.5,8z M18,12.5c-2.5,0-4.5,2-4.5,4.5v3h9v-3C22.5,14.5,20.5,12.5,18,12.5z M9,12.5c-2.5,0-4.5,2-4.5,4.5v3h9v-3C13.5,14.5,11.5,12.5,9,12.5z"/></svg>
);

export const AppleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M19.1,12.2c0.3-2.1-1.3-3.6-3.2-3.6c-1.9,0-3.5,1.4-4.5,1.4c-1,0-2.4-1.3-3.9-1.3c-2.1,0-4.1,1.7-4.1,4.5 c0,2.9,2.4,7.4,4.6,9.8c1.1,1.2,2.4,2.5,4.1,2.5c1.7,0,2.2-0.8,4.1-0.8s2.5,0.8,4.1,0.8c1.7,0,2.8-1.3,3.9-2.5 C22.9,18,19.1,15.6,19.1,12.2z M15.8,3.2c1.1-1.4,1-3.2-0.6-4.2c-1.2-0.8-2.8-0.2-3.9,1.1c-1,1.2-1.1,2.9,0.5,3.9 C13.1,5,14.7,4.5,15.8,3.2z"/></svg>
);

export const WindowsIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M2,22h9.5v-9.5H2V22z M2,11.5h9.5V2H2V11.5z M12.5,2v9.5H22V2H12.5z M12.5,22H22v-9.5H12.5V22z"/></svg>
);

export const WebIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M10.1,18.9c-0.3,0.3-0.8,0.3-1.1,0.1 c-0.8-0.6-1.5-1.3-2.1-2.1c-0.2-0.3-0.2-0.7,0.1-1c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0,0.3,0l1.2,0.4c0.4,0.1,0.6,0.5,0.4,0.9 C8.6,17.4,9.2,18.1,10.1,18.9z M12,20c-0.6,0-1-0.4-1-1v-4h2v4C13,19.6,12.6,20,12,20z M17.2,16.2c-0.2-0.3-0.6-0.5-0.9-0.4 l-1.2,0.4c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2-0.1-0.3-0.2c-0.3-0.3-0.2-0.7,0.1-1c0.7-0.9,1.3-1.6,2.1-2.1c0.3-0.2,0.7-0.2,1,0.1 C20,13.1,18,15.2,17.2,16.2z"/></svg>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);