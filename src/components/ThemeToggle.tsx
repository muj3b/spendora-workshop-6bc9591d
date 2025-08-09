import { Moon, Sun, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 left-6 z-50 flex items-center space-x-2">
      <Button
        variant="liquid"
        size="icon"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <Moon className="h-4 w-4 text-foreground" />
        ) : (
          <Sun className="h-4 w-4 text-foreground" />
        )}
      </Button>
      
      <Button
        variant="liquid"
        size="icon"
        onClick={() => window.open('https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', '_blank')}
        aria-label="Follow us on Instagram"
      >
        <Instagram className="h-4 w-4 text-foreground" />
      </Button>
    </div>
  );
};

export default ThemeToggle;
