// Environment detection utilities
export const isDevelopment = () => {
  return (
    window.location.hostname === 'localhost' ||
    window.location.hostname.includes('webcontainer') ||
    window.location.hostname.includes('local-credentialless') ||
    window.location.hostname.includes('127.0.0.1') ||
    window.location.port === '8080'
  );
};

export const isProduction = () => {
  return !isDevelopment();
};

export const getEnvironment = () => {
  return isDevelopment() ? 'development' : 'production';
};

// Check if required environment variables are available
export const hasRequiredEnvVars = () => {
  return !!(
    import.meta.env.VITE_SUPABASE_URL &&
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
};

export const getSupabaseFunctionUrl = (functionName: string) => {
  if (!hasRequiredEnvVars()) {
    throw new Error('Missing required Supabase environment variables');
  }
  
  return `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/${functionName}`;
};