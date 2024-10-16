import { Suspense } from 'react';
import LayoutContainer from '../LayoutContainer';
import { Footer } from './Footer';
import Header from './Header';
import SuspenseOutlet from '../SuspenseOutlet ';

function ClientLayout() {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <SuspenseOutlet />
      </main>
      <Footer />
    </LayoutContainer>
  );
}

export default ClientLayout;
