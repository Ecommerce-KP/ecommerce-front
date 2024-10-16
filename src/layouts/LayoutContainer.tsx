import { ReactNode } from 'react';

import { cn } from '@/libs/utils/shadcn';

interface LayoutContainerProps {
  className?: string;
  children: ReactNode;
}

function LayoutContainer({ className, children }: LayoutContainerProps) {
  return (
    <div className={cn('w-dvw h-dvh sm:w-dvw sm:dvh', className)}>
      <div className='max-w-[1440px] mx-auto'>{children}</div>
    </div>
  );
}

export default LayoutContainer;
