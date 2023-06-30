import Image from 'next/image'
import tshirtImage from '../../public/tshirt.jpg'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { sizes } from '@/data/sizes'
import { details } from '@/data/details'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center max-w-5xl">
        <div className="px-4">
          <Image src={tshirtImage} alt="T-shirt" className="max-w-lg" placeholder="blur" />
        </div>
        <div className="flex-1 px-4">
          <section className="flex flex-wrap items-center gap-y-6 mb-4">
            <h1 className="text-4xl font-bold flex-1">T-shirt</h1>
            <span className="flex-1 text-right text-3xl font-bold">$50</span>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </section>
          <RadioGroup className="flex flex-wrap mb-4">
            {sizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <RadioGroupItem value={size} id={size}>
                  {size}
                </RadioGroupItem>
              </div>
            ))}
          </RadioGroup>
          <div className="flex items-center mb-4 space-x-4">
            <Button className="flex-1 uppercase" size="lg">
              Add to cart
            </Button>
            <Button className="flex-1 uppercase" variant="outline" size="lg">
              Add to wishlist
            </Button>
          </div>
          <Accordion type="single" collapsible>
            {details.map((detail) => (
              <AccordionItem key={detail.title} value={detail.title}>
                <AccordionTrigger>{detail.title}</AccordionTrigger>
                <AccordionContent>{detail.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  )
}
