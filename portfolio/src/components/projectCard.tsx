import Image from "next/image";
import Link from "next/link";


import {
  Dai_Banna_SIL,
  PT_Serif,
  Rubik,
  Space_Grotesk,
} from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
const spGrotesk = Space_Grotesk({ subsets: ["latin"] });

const dmSerifDisplay = PT_Serif({
  subsets: ["latin"],
  weight: ["700"],
});

export default function ProjectCard({
  src,
  title,
  duration,
  description,
  className,
  unoptimized = false,
}: {
  src: string;
  title: string;
  duration: string;
  description: string;
  className?: string;
  unoptimized?: boolean;
}) {
  return (
    <div className={`w-full cursor-pointer  ${className}`}>
      <Image
        src={src}
        className="rounded-2xl h-80 md:w-[35rem]  object-cover"
        height={1000}
        width={1000}
        alt="Image"
        unoptimized={unoptimized}
      />
      <div>
        <div
          className={`${spGrotesk.className} w-full  flex  gap-4 items-center font-light mt-2`}
        >
          <h1 className={`${rubik.className} text-3xl font-bold`}>{title}</h1>
          <p className="text-orange-400   whitespace-nowrap">{duration}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function _ProjectCard({
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
