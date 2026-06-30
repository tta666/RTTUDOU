import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#hero', active: true },
  { label: '关于', href: '#about', active: false },
  { label: '作品', href: '#projects', active: false },
  { label: '能力', href: '#skills', active: false },
  { label: '联系', href: '#contact', active: false },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        {/* SVG Logo */}
        <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff">
          <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
        </svg>
        <span className="text-white text-2xl font-playfair italic">TQ</span>
      </div>

      {/* Center - Navigation Pill */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              item.active
                ? 'bg-white text-gray-900'
                : 'text-white/80 hover:bg-white/20 hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right - Desktop Sign Up */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="#contact"
          className="bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          联系我
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg text-white/80 hover:text-white transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 bg-white text-gray-900 text-center text-sm font-semibold px-6 py-3 rounded-full"
            >
              联系我
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}