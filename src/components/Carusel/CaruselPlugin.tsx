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

export function CarouselPlugin() {
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
    <div className="relative w-full h-full flex justify-center">
      <div className="w-[95%] hover-scale">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="relative w-full h-[600px] pl-4">
              <Card>
                <CardContent>
                  <Image
                    src={"/images/00.jpg"}
                    alt="Image 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center bg-white bg-opacity-75 p-4 rounded">
                      <h1 className="text-3xl font-bold">Spring Update</h1>
                      <p className="text-lg">
                        Introducing GPT-4o and making more capabilities available for free in
                        ChatGPT.
                      </p>
                      <button className="mt-2 px-4 py-2 bg-black text-white rounded">
                        Learn more
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="relative w-full h-[600px] pl-4">
              <Card>
                <CardContent>
                  <Image
                    src={"/images/01.jpg"}
                    alt="Image 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center bg-white bg-opacity-75 p-4 rounded">
                      <h1 className="text-3xl font-bold">Spring Update</h1>
                      <p className="text-lg">
                        Introducing GPT-4o and making more capabilities available for free in
                        ChatGPT.
                      </p>
                      <button className="mt-2 px-4 py-2 bg-black text-white rounded">
                        Learn more
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="relative w-full h-[600px] pl-4">
              <Card>
                <CardContent>
                  <Image
                    src={"/images/02.jpg"}
                    alt="Image 3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center bg-white bg-opacity-75 p-4 rounded">
                      <h1 className="text-3xl font-bold">Spring Update</h1>
                      <p className="text-lg">
                        Introducing GPT-4o and making more capabilities available for free in
                        ChatGPT.
                      </p>
                      <button className="mt-2 px-4 py-2 bg-black text-white rounded">
                        Learn more
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
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
          transition: transform 0.5s ease-in-out; /* アニメーションの速度を0.5秒に設定 */
        }

        .hover-scale:hover {
          transform: scale(1.02); /* 拡大率を1.02に設定 */
        }
      `}</style>
    </div>
  );
}
