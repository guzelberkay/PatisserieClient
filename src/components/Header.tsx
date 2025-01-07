import Navigation from './Navigation';
import { SITE_CONFIG } from '../constants/config';
import Logo from '../images/Logo.png'
export default function Header() {
  return (
    <header className="bg-amber-50 py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
              src={Logo}
              alt="Logo"
              style={{height: '100%', maxHeight: '10vh', objectFit: 'contain'}}
          />

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