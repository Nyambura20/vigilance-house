/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';

export default function Footer() {
  const { user } = useAuth();
  
  return (
    <footer className="bg-brand-blue text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo size={48} />
            </Link>
            <p className="text-slate-300 leading-relaxed text-sm">
              Elevating household standards through professional training, secure hiring, and advanced monitoring solutions.
            </p>
            <div className="flex gap-3">
              {[Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              {[
                { name: 'Home', path: '/' },
                ...(user?.role !== 'client' ? [{ name: 'Train with Us', path: '/train' }] : []),
                { name: 'Hire Help', path: '/hire' },
                { name: 'Monitoring Tools', path: '/monitor' },
                { name: 'About Vigilance', path: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-green transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-4">Support</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              {['FAQ', 'Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-green transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>123 Security Plaza, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <span>info@vigilance.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vigilance Househelp. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
