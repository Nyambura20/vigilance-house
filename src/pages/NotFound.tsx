/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="mx-auto flex justify-center">
          <Logo size={120} />
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-brand-blue">404</h1>
          <h2 className="text-2xl font-bold text-slate-800">Security Check: Page Not Found</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            The resource you are looking for might have been moved, deleted, or is temporarily unavailable under the current security protocol.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => window.history.back()} variant="outline">
            <ArrowLeft className="w-5 h-5" /> Go Back
          </Button>
          <Link to="/">
            <Button>
              <Home className="w-5 h-5" /> Return Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
