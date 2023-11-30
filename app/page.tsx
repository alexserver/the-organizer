import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='bg-slate-800 text-white'>
      <h1>Demo with ShadCn</h1>
      <Button>Click me</Button>
    </div>
  )
}
