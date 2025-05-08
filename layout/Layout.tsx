

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
