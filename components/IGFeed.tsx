'use client';
import { useEffect, useState } from 'react';
export default function IGFeed(){
  const [ready, setReady] = useState(false);
  useEffect(()=>{ fetch('/ig-widget.html',{method:'HEAD'}).then(r=>setReady(r.ok)).catch(()=>setReady(false)); },[]);
  if(!ready) return <div className="notice">The Instagram feed will appear once you replace <code>/public/ig-widget.html</code> with your widget code.</div>;
  return <iframe src="/ig-widget.html" title="Instagram Feed" style={{width:'100%',height:'700px',border:'1px solid #eee',borderRadius:12}}/>;
}
