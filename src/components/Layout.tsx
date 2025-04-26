import React, { PropsWithChildren } from 'react';
import { Footer } from './Footer';

interface LayoutProps extends PropsWithChildren {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 