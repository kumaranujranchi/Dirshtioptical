'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

const BookingForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    concerns: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-[2rem] p-12 text-center shadow-2xl shadow-primary/5 border border-outline-variant/10 animate-fade-in">
        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-outlined text-teal-600 text-4xl">check_circle</span>
        </div>
        <h3 className="text-3xl font-extrabold text-primary mb-4 tracking-tighter">Appointment Requested!</h3>
        <p className="text-on-surface-variant mb-8 leading-relaxed font-medium">
          Thank you, {formData.firstName}. We&apos;ve received your request for <span className="text-primary font-bold">{formData.date}</span>. Our team in Ranchi will call you shortly to confirm your slot.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setStatus('idle')}
          className="rounded-full px-8"
        >
          Book Another Slot
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-outline-variant/10">
      <h3 className="text-2xl font-extrabold text-primary mb-8 tracking-tighter">Reserve Your Free Slot</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">First Name</label>
            <input
              required
              type="text"
              placeholder="Rahul"
              className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-teal-500 transition-all"
              value={formData.firstName}
              onChange={e => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Last Name</label>
            <input
              required
              type="text"
              placeholder="Sharma"
              className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-teal-500 transition-all"
              value={formData.lastName}
              onChange={e => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Mobile Number</label>
            <input
              required
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-teal-500 transition-all"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Email (Optional)</label>
            <input
              type="email"
              placeholder="rahul@example.com"
              className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-teal-500 transition-all"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Preferred Date</label>
            <input
              required
              type="date"
              className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-teal-500 transition-all"
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Preferred Time</label>
            <select 
              required
              className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-teal-500 transition-all appearance-none"
              value={formData.time}
              onChange={e => setFormData({...formData, time: e.target.value})}
            >
              <option value="">Select a slot</option>
              <option>10:00 AM - 11:00 AM</option>
              <option>11:00 AM - 12:00 PM</option>
              <option>12:00 PM - 01:00 PM</option>
              <option>03:00 PM - 04:00 PM</option>
              <option>04:00 PM - 05:00 PM</option>
              <option>05:00 PM - 06:00 PM</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-outline ml-1">Primary Concerns</label>
          <textarea
            rows={3}
            placeholder="e.g. eye strain, blurred vision, headaches..."
            className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-teal-500 transition-all resize-none"
            value={formData.concerns}
            onChange={e => setFormData({...formData, concerns: e.target.value})}
          />
        </div>

        <Button 
          type="submit"
          variant="secondary" 
          size="lg" 
          className="w-full rounded-2xl py-6 flex items-center justify-center gap-3 shadow-xl shadow-secondary/10"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <span className="material-symbols-outlined">calendar_add_on</span>
          )}
          Confirm Appointment
        </Button>
        
        <p className="text-[10px] text-outline text-center font-bold uppercase tracking-widest">
          100% Secure & Confidential Ocular Consultation
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
