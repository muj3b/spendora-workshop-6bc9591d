import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Home', action: scrollToTop },
    { label: 'Features', action: () => scrollToSection('features') },
    { label: 'About Spendora', action: () => scrollToSection('about-spendora') },
    { label: 'Workshop Schedule', action: () => scrollToSection('workshop-schedule') },
    { label: 'Meet The Team', action: () => scrollToSection('meet-the-team') },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <Button
        onClick={toggleMenu}
        size="icon"
        variant="ghost"
        className="fixed top-6 right-6 z-50 w-10 h-10 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        )}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Side Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 pt-20">
          <nav className="space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="block w-full text-left py-3 px-4 text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;