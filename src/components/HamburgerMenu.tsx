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

  const navigateToPage = (path: string) => {
    window.location.href = path;
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Home', action: scrollToTop },
    { label: 'About', action: () => scrollToSection('about-spendora') },
    { label: 'Schedule', action: () => scrollToSection('workshop-schedule') },
    { label: 'Team', action: () => scrollToSection('meet-the-team') },
    { type: 'divider' },
    { label: 'Workshop Topics', type: 'header' },
    { label: 'Stock Markets', action: () => navigateToPage('/stock-markets') },
    { label: 'Budgeting', action: () => navigateToPage('/budgeting') },
    { label: 'Online Business', action: () => navigateToPage('/online-business') },
    { label: 'Crypto & NFTs', action: () => navigateToPage('/crypto-nfts') },
    { type: 'divider' },
    { label: 'Gallery', action: () => navigateToPage('/gallery') },
    { label: 'Donate', action: () => navigateToPage('/donate') },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <Button
        onClick={toggleMenu}
        size="icon"
        variant="liquid"
        className="fixed top-6 right-6 z-50 w-10 h-10 rounded-md"
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
          className="fixed inset-0 bg-background/40 backdrop-blur-md z-40 transition-all duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Side Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 liquid-glass-surface shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 pt-20">
          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              if (item.type === 'divider') {
                return <hr key={index} className="my-4 border-border" />;
              }
              
              if (item.type === 'header') {
                return (
                  <div key={index} className="py-2 px-4">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </h3>
                  </div>
                );
              }
              
              return (
                <button
                  key={index}
                  onClick={item.action}
                  className="block w-full text-left py-3 px-4 text-lg font-medium text-foreground hover:bg-foreground/5 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;