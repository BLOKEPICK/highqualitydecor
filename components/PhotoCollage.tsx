import Image from 'next/image'

export default function PhotoCollage(){
  return (
    <div className="relative h-[340px] md:h-[420px]">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-64 md:w-80 rotate-[-4deg] polaroid">
        <div className="relative aspect-[4/5]">
          <Image src="https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?q=80&w=1600&auto=format&fit=crop" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="absolute left-[calc(50%-180px)] md:left-[calc(50%-260px)] top-8 w-56 md:w-72 rotate-[6deg] polaroid">
        <div className="relative aspect-[4/5]">
          <Image src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1600&auto=format&fit=crop" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="absolute left-[calc(50%+100px)] md:left-[calc(50%+160px)] top-16 w-56 md:w-72 rotate-[10deg] polaroid">
        <div className="relative aspect-[4/5]">
          <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop" alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}
