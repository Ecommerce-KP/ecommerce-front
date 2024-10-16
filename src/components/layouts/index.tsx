import React from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { cn } from '@/libs/utils/shadcn';

interface LayoutInterface {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutInterface) {
  return (
    <div className={cn('w-dvw h-dvh sm:w-dvw sm:dvh')}>
      <Header />
      Hello ửolds
      <div className={`w-full ${className}`}>{children}</div>
      <Footer />
    </div>
  );
}
