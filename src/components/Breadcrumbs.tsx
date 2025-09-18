import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNames: { [key: string]: string } = {
    'stock-markets': 'Stock Markets',
    'crypto-nfts': 'Crypto & NFTs',
    'online-business': 'Online Business',
    'success-stories': 'Success Stories',
    'budgeting': 'Budgeting',
    'gallery': 'Gallery',
    'donate': 'Donate',
    'success': 'Success'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 px-4">
      <Link 
        to="/" 
        className="flex items-center hover:text-foreground transition-colors liquid-glass-btn px-2 py-1 rounded-lg"
        data-liquid
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = breadcrumbNames[value] || value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <React.Fragment key={to}>
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="text-foreground font-medium">{displayName}</span>
            ) : (
              <Link 
                to={to}
                className="hover:text-foreground transition-colors liquid-glass-btn px-2 py-1 rounded-lg"
                data-liquid
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;