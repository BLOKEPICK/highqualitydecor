import clsx from 'clsx'
export default function Section({ children, className, id }:{ children: React.ReactNode, className?: string, id?: string }){
  return <div id={id} className={clsx('section', className)}>{children}</div>
}
