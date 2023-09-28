import React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const SliderX = () => {
  return (
    <>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="group-hover:scale-110 transition-all duration-500 max-h-[400px]"
              src="/img/blog/green-1.jpg"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <Separator className="my-4" />
    </>
  );
};

export default SliderX;
