'use client'
import { useState } from 'react'

const steps = ['Event','Details','Contact'] as const
type Step = typeof steps[number]

export default function QuoteForm(){
  const [step, setStep] = useState<Step>('Event')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    type:'', date:'', city:'', guests:'', budget:'',
    services: [] as string[],
    notes:'', name:'', email:'', phone:''
  })

  const next = ()=> setStep(steps[Math.min(steps.indexOf(step)+1, steps.length-1)])
  const prev = ()=> setStep(steps[Math.max(steps.indexOf(step)-1, 0)])
  const toggleService = (s:string)=> setData(d=>({...d, services: d.services.includes(s) ? d.services.filter(x=>x!==s) : [...d.services, s]}))

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setLoading(true)
    try{ await new Promise(r=>setTimeout(r,600)); alert('Thank you! We will get back to you within 24 hours.') }
    finally{ setLoading(false) }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="w-full h-2 bg-black/10 rounded-pill overflow-hidden">
        <div className="h-full bg-ser-plum transition" style={{width: step==='Event' ? '33%' : step==='Details' ? '66%' : '100%'}} />
      </div>
      <div className="flex items-center justify-between text-sm text-ser-gray">
        {steps.map(s => <span key={s} className={s===step? 'text-ser-ink' : ''}>{s}</span>)}
      </div>

      {step==='Event' && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Event Type</label>
            <select required value={data.type} onChange={e=>setData({...data, type:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2">
              <option value="">Select</option>
              <option>Wedding</option><option>Quinceañera</option><option>Graduation</option>
              <option>Baby Shower</option><option>Memorial</option><option>Birthday</option><option>Corporate</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Date</label>
            <input required type="date" value={data.date} onChange={e=>setData({...data, date:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">City / State</label>
            <input required placeholder="Miami, FL" value={data.city} onChange={e=>setData({...data, city:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">Guests (approx.)</label>
            <input required type="number" min={1} placeholder="120" value={data.guests} onChange={e=>setData({...data, guests:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">Budget (USD)</label>
            <input required type="number" min={0} placeholder="5000" value={data.budget} onChange={e=>setData({...data, budget:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2" />
          </div>
        </div>
      )}

      {step==='Details' && (
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Services Needed</div>
            <div className="grid sm:grid-cols-2 gap-2">
              {['Flower Bouquets','Decoration','Invitation Cards','Entertainment','Documentary','Graphic Design','Gift Wrapping','Crafting Design'].map(s => (
                <label key={s} className="flex items-center gap-2 border border-black/10 rounded-xl3 px-3 py-2 bg-white">
                  <input type="checkbox" checked={data.services.includes(s)} onChange={()=>toggleService(s)} /> {s}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Additional Notes</label>
            <textarea rows={4} placeholder="Theme, colors, venue, special requests…" value={data.notes} onChange={e=>setData({...data, notes:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2"></textarea>
          </div>
        </div>
      )}

      {step==='Contact' && (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <label className="text-sm font-medium">Full Name</label>
            <input required placeholder="Your name" value={data.name} onChange={e=>setData({...data, name:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2" />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-medium">Email</label>
            <input required type="email" placeholder="you@mail.com" value={data.email} onChange={e=>setData({...data, email:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2" />
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-medium">Phone</label>
            <input required placeholder="+1 (___) ___-____" value={data.phone} onChange={e=>setData({...data, phone:e.target.value})} className="mt-2 w-full bg-white border border-black/10 rounded-xl3 px-3 py-2" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <button type="button" onClick={prev} disabled={step==='Event'} className="btn-ghost disabled:opacity-40">Back</button>
        {step !== 'Contact' ? (
          <button type="button" onClick={next} className="btn-primary">Next</button>
        ) : (
          <button disabled={loading} type="submit" className="btn-primary">{loading? 'Sending…' : 'Submit Request'}</button>
        )}
      </div>
    </form>
  )
}
