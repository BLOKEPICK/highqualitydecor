'use client';
import { useEffect, useState } from 'react';
export default function WhatsAppButton(){
  const [show, setShow] = useState(false);
  useEffect(()=>{ if (process.env.NEXT_PUBLIC_WHATSAPP && process.env.NEXT_PUBLIC_WHATSAPP.trim() !== '') setShow(true); }, []);
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || '';
  const href = phone ? `https://wa.me/${phone.replace('+','')}` : '#';
  return (<div className={`wa ${show ? 'show' : ''}`}><a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><span style={{fontWeight:800}}>WhatsApp</span></a></div>);
}
