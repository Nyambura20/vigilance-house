/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer';
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue-light shadow-lg hover:shadow-brand-blue/20',
    secondary: 'bg-brand-green text-white hover:opacity-90 shadow-lg hover:shadow-brand-green/20',
    outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
    ghost: 'text-slate-600 hover:bg-slate-100'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
