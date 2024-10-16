import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SuspenseOutlet() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
}
