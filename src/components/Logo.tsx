/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import logoUrl from '../assets/logo.jpeg';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 40 }: LogoProps) {
  return (
    <div 
      className={`flex items-center justify-center pointer-events-none select-none ${className}`} 
      style={{ height: size }}
    >
      <img 
        src={logoUrl} 
        alt="Vigilance Logo" 
        className="h-full w-auto object-contain block mix-blend-multiply"
        style={{ 
          filter: 'contrast(2) brightness(1.3)',
        }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
