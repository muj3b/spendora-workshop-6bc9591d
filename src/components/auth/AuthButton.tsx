import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogOut, Heart } from 'lucide-react';

export const AuthButton = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center space-x-2">
        <Button asChild variant="ghost" size="sm">
          <Link to="/login">Sign In</Link>
        </Button>
        <Button asChild size="sm">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">{user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <button 
            onClick={() => window.open('https://buy.stripe.com/cNicN5gG3f8ocU4cjN0Ba00', '_blank')}
            className="flex items-center space-x-2 w-full"
          >
            <Heart className="w-4 h-4" />
            <span>Donate</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut} className="flex items-center space-x-2">
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};