import '../styles/globals.css'; // Make sure you import your global styles
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add the 'dark' class to the HTML tag to enable dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
