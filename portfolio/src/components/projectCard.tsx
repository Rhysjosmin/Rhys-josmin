import Image from "next/image";
import Link from "next/link";

import {
  Dai_Banna_SIL,
  PT_Serif,
  Rubik,
  Space_Grotesk,
} from "next/font/google";
import { useState } from "react";
import { MaterialSymbolsLightOpenInNew } from "./icons";
import { useSearchParams } from "next/navigation";
const rubik = Rubik({ subsets: ["latin"] });
const spGrotesk = Space_Grotesk({ subsets: ["latin"] });

const dmSerifDisplay = PT_Serif({
  subsets: ["latin"],
  weight: ["700"],
});

export default function ProjectCard({
  src,
  title,
  href,
  duration,
  description,
  className,
  tags,
  unoptimized = false,
  site = false,
}: {
  src: string;
  href?: string;
  title: string;
  duration: string;
  description: string;
  className?: string;
  tags: string[];
  unoptimized?: boolean;
  site?: boolean;
}) {

  const [imageLoaded, setLoadState] = useState(false);
  return (
    <div className={`w-full  group relative ${className}`}>
      
      <div className="absolute overflow-hidden w-full h-full border border-white/5  rounded-md z-0 transition-all duration-300 ease-in-out opacity-0 group-hover:scale-105 group-hover:opacity-50">
        <Image
          src={src}
          className={
            "h-full w-full blur-3xl   group-hover:scale-[150] ease-linear scale-100 transition-all duration-[500s] opacity-30 saturate-200"
          }
          height={200}
          width={200}
          alt="Image"
          unoptimized={unoptimized}
        />
      </div>
      <Image
        onLoad={() => setLoadState(true)}
        src={src}
        className={`${
          imageLoaded ? "block h-80 opacity-100" : "opacity-0 h-0 translate-y-5"
        } transition-[opacity,transform] z-10 relative duration-1000 rounded-2xl    object-cover`}
        height={1000}
        width={1000}
        alt="Image"
        unoptimized={unoptimized}
      />
      <div
        className={`${
          imageLoaded ? "h-0 opacity-0" : "h-80 opacity-100"
        } transition-opacity relative z-10 duration-1000 rounded-2xl  md:w-[35rem]  object-cover bg-white/20  animate-pulse`}
      />

      <div className="mb-2 relative z-10">
        <div
          className={`${spGrotesk.className} w-full  flex  gap-4 items-center font-light mt-2`}
        >
          <h1 className={`${rubik.className} text-3xl font-bold`}>{title}</h1>
          <p className="text-orange-400   whitespace-nowrap">{duration}</p>
        </div>
        <p className="w-3/4">{description}</p>
      </div>
      <div className="relative z-10 flex justify-between items-start">
        <span className=" text-xs text-orange-300  gap-1 flex flex-wrap">
          {tags.map((i) => (
            <Link
              href={`/?filter=${i}`}
              className="bg-neutral-300/5 p-1  rounded-md"
              key={i}
            >
              #{i}
            </Link>
          ))}
        </span>
        {href ? (
          <Link
            className=" items-center  hover:text-sky-600 flex gap-1 text-sm hover:underline"
            href={href}
          >
            {site?"Website":"Read More"} <MaterialSymbolsLightOpenInNew />
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export function _ProjectCard({
  src,
  title,
  className,
  unoptimized = false,
}: {
  src: string;
  title: string;
  className: string | null;
  unoptimized?: boolean;
}) {
  return (
    <div className={`relative cursor-pointer group  ${className}`}>
      <h1
        className={`${dmSerifDisplay.className} drop-shadow-md   text-white bg-black right-0  transition-all duration-700 absolute z-10 text-2xl bottom-0 pb-5 p-2 rounded-tl-lg left-5`}
      >
        {title}
      </h1>
      <div className="relative w-full h-full overflow-hidden ">
        <Image
          src={src}
          className={
            "  object-top h-full w-full group-hover:scale-110 group-hover:saturate-100  saturate-[10%]  transition-all duration-700  ease-in-out grayscale-[0.7] group-hover:grayscale-[0] brightness-[25%] group-hover:brightness-[100%] aspect-auto object-cover"
          }
          unoptimized={unoptimized}
          height={2000}
          width={2000}
          alt=""
        />
      </div>
      <Image
        src={src}
        className={
          "absolute -z-10 group-hover:opacity-40  transition-all saturate-200 duration-500 blur-[80px] opacity-5 top-0 h-full w-auto aspect-auto object-cover"
        }
        height={800}
        width={800}
        alt=""
      />
    </div>
  );
}
