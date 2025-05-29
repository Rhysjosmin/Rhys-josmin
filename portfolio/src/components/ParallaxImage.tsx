import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const MotionImage = motion(Image);
const spGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300"] });

export default function ParallaxImage({
  onLoad,
  height,
  src,
  width,
  alt,
  className,
  unoptimized,
  title,
}: {
  onLoad: () => void;
  className?: string;
  src: string;
  height: number;
  width: number;
  alt: string;
  unoptimized?: boolean;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "5%"]);
  return (
    <div
      ref={ref}
      className={cn(className, "overflow-hidden rounded relative group ")}
    >
      {/* <div className="absolute -bottom-[100%] group-hover:opacity-100 opacity-0  group-hover:bottom-0 transition-all bg-gradient-to-t from-black p-3  z-10 w-full ">
        <h1 className={cn(spGrotesk.className, "font-bold")}>{title}</h1>
        <p className="text-sm font-thin"></p>
      </div> */}
      <MotionImage
        onLoad={onLoad}
        className="object-cover w-full h-[120%]  group-hover:opacity-60 transition-opacity"
        style={{ translateY: x }}
        src={src}
        height={height}
        width={width}
        alt={alt}
        unoptimized={unoptimized}
      />
    </div>
  );
}
