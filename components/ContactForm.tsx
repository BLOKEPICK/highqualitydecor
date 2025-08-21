'use client';
import { useEffect, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(()=>{
    const url = new URL(window.location.href);
    const pre = url.searchParams.get('package') || url.searchParams.get('service');
    if (pre) {
      const select = document.querySelector('select[name="service"]') as HTMLSelectElement | null;
      if (select) select.value = pre;
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
        setMessage('Thanks! We will contact you shortly.');
        form.reset();
      } else {
        const data = await res.json().catch(()=>({error:'Request failed'}));
        setStatus('error');
        setMessage(data?.error || 'Something went wrong. Please try again.');
      }
    } catch (err:any) {
      setStatus('error');
      setMessage(err?.message || 'Network error. Please try again.');
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="grid cols-2">
        <input className="input" name="name" placeholder="Full name" required />
        <input className="input" name="email" type="email" placeholder="Email" required />
      </div>
      <div className="grid cols-2">
        <input className="input" name="phone" placeholder="Phone (optional)" />
        <select className="select" name="service">
          <option value="">Select a service / package</option>
          <option>Flower Bouquets</option>
          <option>Decoration</option>
          <option>Invitation Cards</option>
          <option>Entertainment</option>
          <option>Documentary</option>
          <option>Graphic Design</option>
          <option>Essential</option>
          <option>Signature</option>
          <option>Luxe</option>
        </select>
      </div>
      <div className="grid cols-2">
        <input className="input" name="eventDate" type="date" placeholder="Event Date (optional)" />
        <input className="input" name="city" placeholder="City / State" />
      </div>
      <textarea className="textarea" name="message" placeholder="Tell us about your event" required />
      <div className="notice">We cover the entire United States. For precise quotes we consider travel distance, venue size and date.</div>
      <button className="btn btn-primary" disabled={status==='loading'}>{status==='loading' ? 'Sending...' : 'Send Request'}</button>
      {status!=='idle' && <div className={`notice ${status==='success'?'success':''} ${status==='error'?'error':''}`}>{message}</div>}
    </form>
  );
}
