
import { Moon, Sun, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 left-6 z-50 flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
      >
        {theme === 'light' ? (
          <Moon className="h-4 w-4 text-gray-700 dark:text-gray-200" />
        ) : (
          <Sun className="h-4 w-4 text-gray-700 dark:text-gray-200" />
        )}
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open('https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', '_blank')}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 transition-all duration-300 hover:scale-110"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="h-4 w-4 text-white" />
      </Button>
    </div>
  );
};

export default ThemeToggle;
