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
