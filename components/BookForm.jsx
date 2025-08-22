'use client'
import { useEffect, useState } from 'react'

export default function BookForm(){
  const [step, setStep] = useState(1)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search)
      const svc = p.get('service')
      if (svc) {
        const el = document.querySelector('select[name="service"]')
        if (el) el.value = svc
      }
    }
  }, [])

  const next = () => setStep(s => Math.min(s+1, 3))
  const prev = () => setStep(s => Math.max(s-1, 1))

  async function onSubmit(e){
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try{
      await fetch('/api/book', { method:'POST', body: JSON.stringify(data) })
      setSuccess(true)
      form.reset()
      setStep(1)
    }catch{}
  }

  return (
    <form className="booking" onSubmit={onSubmit}>
      <div className="progress"><div className="bar" style={{width: `${(step/3)*100}%`}}/></div>

      {step === 1 && (
        <fieldset aria-label="Datos personales">
          <legend>Datos personales</legend>
          <label>Nombre completo
            <input type="text" name="name" required placeholder="Tu nombre" autoComplete="name" />
          </label>
          <label>Email
            <input type="email" name="email" required placeholder="tu@email.com" autoComplete="email" />
          </label>
          <div className="actions">
            <button type="button" className="btn btn-primary" onClick={next}>Siguiente</button>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset aria-label="Información del evento">
          <legend>Información del evento</legend>
          <label>Fecha del evento
            <input type="date" name="date" required />
          </label>
          <label>Tipo de servicio
            <select name="service" required>
              <option value="">Selecciona una opción</option>
              <option>Flower Bouquets</option>
              <option>Decoration</option>
              <option>Invitation Cards</option>
              <option>Venue Selection</option>
              <option>Entertainment</option>
              <option>Documentary</option>
              <option>Crafting Design</option>
            </select>
          </label>
          <div className="actions">
            <button type="button" className="btn btn-outline" onClick={prev}>Atrás</button>
            <button type="button" className="btn btn-primary" onClick={next}>Siguiente</button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset aria-label="Mensaje y confirmación">
          <legend>Mensaje y confirmación</legend>
          <label>Cuéntanos más sobre tu evento
            <textarea name="message" rows={5} placeholder="Tipo de evento, invitados, estilo, etc." />
          </label>
          <label className="checkbox">
            <input type="checkbox" name="optin" /> Quiero recibir novedades y promociones
          </label>
          <div className="actions">
            <button type="button" className="btn btn-outline" onClick={prev}>Atrás</button>
            <button type="submit" className="btn btn-primary">Confirmar Reserva</button>
          </div>
        </fieldset>
      )}

      <p className="form-note">También puedes escribirnos en <a href="https://www.instagram.com/highquality_decor/" target="_blank" rel="noopener">Instagram</a> o <a href="https://www.facebook.com/railedaris.soto.9/" target="_blank" rel="noopener">Facebook</a>.</p>
      {success && <div className="form-success" role="status" aria-live="polite">¡Tu solicitud fue enviada con éxito! Te contactaremos pronto.</div>}
    </form>
  )
}
