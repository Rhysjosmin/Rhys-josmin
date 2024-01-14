import Image from "next/image";
import Link from "next/link";


import { Dai_Banna_SIL, PT_Serif } from "next/font/google";

const dmSerifDisplay = PT_Serif({
  subsets: ["latin"],
  weight: ["700"],
});
export default function ProjectCard({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className: string | null;
}) {
  return (
    <div className={`relative cursor-pointer group  ${className}`}>
      <h1
        className={`${dmSerifDisplay.className} text-white group-hover:-translate-y-5 transition-all duration-700 absolute z-10 text-2xl bottom-5 left-5`}
      >
        {title}
      </h1>
      <div className="relative w-full h-full overflow-hidden ">
        <Image
          src={src}
          className={
            "  object-top h-full w-full group-hover:scale-110 group-hover:saturate-100  saturate-50  transition-all duration-700  ease-in-out grayscale-[0.2] group-hover:grayscale-[0.1] brightness-100 group-hover:brightness-[20%] aspect-auto object-cover"
          }
          height={800}
          width={800}
          alt=""
        />
      </div>
      <Image
        src={src}
        className={
          "absolute -z-10 group-hover:opacity-30  transition-all duration-200 blur-[80px] opacity-5 top-0 h-full w-auto aspect-auto object-cover"
        }
        height={400}
        width={400}
        alt=""
      />
    </div>
  );
}
