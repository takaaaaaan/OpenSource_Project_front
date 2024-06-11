"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

interface SubCarouselProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
    description: string;
    link: string;
  }>;
}

export function SubCarousel({ images }: SubCarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full h-[1300px] flex justify-center">
      <div className="w-[95%]">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <div className="absolute right-6 -top-12 transform -translate-y-1/2 z-10 flex space-x-2">
            <div className="hover-scale-b">
              <CarouselPrevious className="transform -translate-y-1/2" />
            </div>
            <div className="hover-scale-b">
              <CarouselNext className="transform -translate-y-1/2" />
            </div>
          </div>
          <CarouselContent className="flex space-x-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="relative w-full h-[400px] basis-1/5">
                <div className="p-5">
                  {image.src ? (
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Link href={image.link} target="_blank" rel="noopener noreferrer">
                        <div className="absolute top-2 left-2 z-10 text-white bg-black bg-opacity-75 p-1 rounded">
                          {image.title}
                        </div>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                        <div className="absolute bottom-2 left-2 z-10 text-white bg-black bg-opacity-75 p-1 rounded">
                          {image.description}
                        </div>
                      </Link>
                    </CardContent>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center rounded-lg">
                      {/* 空のCarouselItem */}
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${current === index + 1 ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .hover-scale {
          transition: transform 0.5s ease-in-out;
        }

        .hover-scale:hover {
          transform: scale(1.04);
        }

        .hover-scale-b {
          transition: transform 0.5s ease-in-out;
        }

        .hover-scale-b:hover {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
