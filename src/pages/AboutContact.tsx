/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Shield, Users, Award, Target } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function AboutContact() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-blue text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Our Mission is Safety & Professionalism.</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Vigilance was founded on a simple belief: that every home deserves professional, vetted help, and every worker deserves fair training and recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Stats/Values Grid */}
      <section className="container-custom -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, label: 'Secure', value: '100% Vetted' },
            { icon: Users, label: 'Community', value: '5K+ Homes' },
            { icon: Award, label: 'Quality', value: 'ISO Certified' },
            { icon: Target, label: 'Success', value: '98% Placement' }
          ].map((item, i) => (
            <Card key={i} className="text-center p-8">
              <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-brand-green mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <p className="text-3xl font-bold text-brand-blue mb-1">{item.value}</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{item.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" alt="The Vigilance Story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-blue/20" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-brand-blue">The Vigilance Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2020, Vigilance started as a small training center in Nairobi aimed at improving the skills of domestic workers. We quickly realized that the gap wasn't just in training, but in the trust between employers and employees.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we are a comprehensive platform that handles everything from identity verification to continuous professional development and smart home monitoring.
            </p>
            <Button variant="outline">Learn More About Our Team</Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-brand-blue">Get in Touch</h2>
                <p className="text-slate-600 text-lg">Have questions? Our support team is here to help you 24/7.</p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email Us', value: 'hello@vigilance.co.ke' },
                  { icon: Phone, label: 'Call Us', value: '+254 700 000 000' },
                  { icon: MapPin, label: 'Visit Us', value: '123 Security Plaza, Nairobi' }
                ].map((contact, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-green shrink-0">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{contact.label}</p>
                      <p className="text-lg font-bold text-brand-blue">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-10 md:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input type="text" placeholder="Jane" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" placeholder="jane@example.com" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue transition-all bg-white">
                    <option>General Inquiry</option>
                    <option>Hiring Help</option>
                    <option>Training Programs</option>
                    <option>Monitoring System</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue transition-all"></textarea>
                </div>
                <Button className="w-full h-14 uppercase tracking-widest text-sm font-bold">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
