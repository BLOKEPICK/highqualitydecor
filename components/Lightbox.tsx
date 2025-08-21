'use client';
import { useEffect, useState } from 'react';
export default function Lightbox({ images }:{ images:string[]; }){
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string>('');
  useEffect(()=>{ function onKey(e:KeyboardEvent){ if(e.key==='Escape') setOpen(false); } window.addEventListener('keydown', onKey); return ()=>window.removeEventListener('keydown', onKey);},[]);
  return (<>
    <div className="gallery">{images.map((s,i)=>(<img key={i} src={s} alt={"Portfolio "+(i+1)} onClick={()=>{setSrc(s);setOpen(true);}}/>))}</div>
    <div className={`lightbox ${open?'open':''}`} onClick={()=>setOpen(false)}><button className="close" onClick={()=>setOpen(false)} aria-label="Close">×</button>{open && <img src={src} alt="Zoomed" />}</div>
  </>);
}
