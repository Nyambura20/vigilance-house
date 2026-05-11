/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Logo from '../Logo';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 border-4 border-slate-100 border-t-brand-green rounded-full shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo size={40} />
        </div>
      </div>
      <p className="font-display font-bold text-xl text-brand-blue tracking-widest animate-pulse">
        VIGILANCE
      </p>
    </div>
  );
}
