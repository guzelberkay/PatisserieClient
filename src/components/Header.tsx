import { UtensilsCrossed } from 'lucide-react';
import Navigation from './Navigation';
import { SITE_CONFIG } from '../constants/config';

export default function Header() {
  return (
    <header className="bg-amber-50 py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="h-8 w-8 text-amber-600" />
          <div>
            <h1 className="text-2xl font-serif font-bold text-amber-900">{SITE_CONFIG.name}</h1>
            <p className="text-sm text-amber-700">{SITE_CONFIG.tagline}</p>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
}