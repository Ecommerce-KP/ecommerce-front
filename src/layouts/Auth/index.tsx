import { Footer } from '@/components/layouts/Footer';
import LayoutContainer from '../LayoutContainer';
import SuspenseOutlet from '../SuspenseOutlet ';
import Header from '@/components/layouts/Header';

function AuthLayout() {
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

export default AuthLayout;
