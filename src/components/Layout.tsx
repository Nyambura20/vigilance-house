/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isDashboard = pathname.startsWith('/dashboard') || pathname.startsWith('/hire') || pathname === '/monitor';

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
      <main className={`flex-grow ${isDashboard ? '' : 'pt-24'}`}>
        {children}
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}
