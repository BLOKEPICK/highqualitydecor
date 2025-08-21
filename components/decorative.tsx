export function FloralCorner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" width="1em" height="1em" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M10 180c40-40 70-70 110-90c30-15 50-30 60-50c-20 5-40 10-60 30c-20 20-30 30-60 40S20 130 10 180z" opacity=".2"/>
    </svg>
  );
}
export function Ribbon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 360 60" width="100%" height="60" preserveAspectRatio="none" {...props}>
      <path d="M0,40 C60,20 120,60 180,40 C240,20 300,60 360,40 L360,60 L0,60 Z" fill="currentColor" />
    </svg>
  );
}
