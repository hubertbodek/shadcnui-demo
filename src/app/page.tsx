import Image from 'next/image'
import tshirtImage from '../../public/tshirt.jpg'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
        <div>
          <Image src={tshirtImage} alt="T-shirt" className="max-w-lg" placeholder="blur" />
        </div>
        <div className="flex-1">
          <section className="flex flex-wrap items-center gap-y-6">
            <h1 className="text-4xl font-bold flex-1">T-shirt</h1>
            <span className="flex-1 text-right text-xl">$50</span>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </section>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </main>
  )
}
