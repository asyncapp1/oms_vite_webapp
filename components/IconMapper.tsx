
import * as React from 'react';
import type { IconProps } from '../types';

import { 
    OfficeBuildingIcon, MenuAlt2Icon, CollectionIcon, UserGroupIcon, TableIcon, ShoppingCartIcon, UserCircleIcon, 
    CashIcon, ChartBarIcon, LightBulbIcon, QrCodeIcon, DeviceMobileIcon, CheckCircleIcon, ClockIcon, CreditCardIcon, ShieldCheckIcon,
    CodeIcon, SearchCircleIcon, StarIcon, RefreshIcon, UsersIcon, ChatAlt2Icon, SupportIcon, BookOpenIcon, CogIcon, RocketLaunchIcon,
    KeyIcon, DatabaseIcon, EyeOffIcon, CloudUploadIcon, ServerIcon, DeviceTabletIcon, WifiOffIcon, SparklesIcon,
    CoffeeIcon, BeakerIcon, EmojiSadIcon, ExternalLinkIcon
} from './icons/HeroIcons';

import { 
    AndroidIcon, AppleIcon, WindowsIcon, WebIcon, DownloadIcon 
} from './icons/PlatformIcons';

const iconMap: { [key: string]: React.FC<IconProps> } = {
    OfficeBuildingIcon, MenuAlt2Icon, CollectionIcon, UserGroupIcon, TableIcon, ShoppingCartIcon, UserCircleIcon, 
    CashIcon, ChartBarIcon, LightBulbIcon, QrCodeIcon, DeviceMobileIcon, CheckCircleIcon, ClockIcon, CreditCardIcon, ShieldCheckIcon,
    CodeIcon, SearchCircleIcon, StarIcon, RefreshIcon, UsersIcon, ChatAlt2Icon, SupportIcon, BookOpenIcon, CogIcon, RocketLaunchIcon,
    KeyIcon, DatabaseIcon, EyeOffIcon, CloudUploadIcon, ServerIcon, DeviceTabletIcon, WifiOffIcon, SparklesIcon,
    CoffeeIcon, BeakerIcon, EmojiSadIcon, ExternalLinkIcon,
    AndroidIcon, AppleIcon, WindowsIcon, WebIcon, DownloadIcon
};

export const getIcon = (name: string): React.FC<IconProps> | null => {
    if (name in iconMap) {
        return iconMap[name];
    }
    // Return null if the icon is not found, can be handled in the component
    return null;
};