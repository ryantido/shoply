"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/constants"
import { ArrowRight } from "lucide-react"

export function HeroCaroussel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      className="relative w-full my-4"      
    >
      <CarouselContent>
        {HeroCarousel.map(({ image, title, subtitle }, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[70vh] max-h-96 md:max-h-[720px] w-full overflow-hidden rounded-xl">

              <Image
                src={image}
                alt={title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-700 ease-out scale-105"                
              />

              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-xl space-y-6">
                    <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                      {title}
                    </h1>

                    <p className="text-md text-white/90 md:text-xl">
                      {subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="px-8 max-md:w-full">
                        Commander maintenant
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="hover:text-white text-white bg-input/15 border-input/30 hover:bg-input/30 transition-colors max-md:w-full"
                      >
                        En savoir plus <ArrowRight/>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
