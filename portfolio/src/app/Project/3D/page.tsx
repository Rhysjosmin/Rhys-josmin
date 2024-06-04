"use client";

import ParallaxImage from "@/components/ParallaxImage";
import { Playfair_Display, Rubik, Space_Grotesk } from "next/font/google";

const pf_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});

const rubik = Rubik({ subsets: ["latin"] });
const spGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300"] });

export default function Page() {
  return (
    <div className="p-12 min-h-screen flex flex-col items-center justify-center ">
      <div className="md:w-5/6">
        <div className="w-full mb-12 md:mb-32">
          <h1 className={`${rubik.className} font-black text-4xl font-serif`}>
            3D Projects
          </h1>
          <p className={`${spGrotesk.className} mt-2 w-3/4`}>
            Here are a bunch of 3d Projects ive worked on, most of them for fun
            and to try new stuff, a few for competitions, a few freelancing gigs
            too
          </p>
        </div>
        <div className="grid  md:grid-cols-2  gap-2 w-full ">
          <ParallaxImage
            title="Chonk Sploby"
            className="  row-span-1  col-span-2"
            alt=""
            src={"/Chonk.png"}
            height={500}
            width={500}
          />
          <ParallaxImage
            title="A Marshmallow"
            className="  row-span-2 "
            alt=""
            src={"/MarshmelloOnPlate.jpg"}
            height={500}
            width={500}
          />
          <ParallaxImage
            title="A Pig"
            className="  row-span-2 "
            alt=""
            src={"/Pig.jpg"}
            height={500}
            width={500}
          />
          <ParallaxImage
            title="Alvin The Chipmunk"
            className="  row-span-2 "
            alt=""
            src={"/Alvin.png"}
            height={500}
            width={500}
          />
          <ParallaxImage
            title="A Croissant"
            className=""
            alt=""
            src={"/Croissant.png"}
            height={500}
            width={500}
          />
          <ParallaxImage
            title="Dragons Egg"
            className=""
            alt=""
            src={"/Dragons Egg- Sculpt January.png"}
            height={500}
            width={500}
          />
          <ParallaxImage
            title="Planets"
            className="row-span-1 col-span-2 "
            alt=""
            src={"/Planets.png"}
            height={500}
            width={500}
          />
          <ParallaxImage
            title="Planets"
            className="row-span-1 col-span-2 "
            alt=""
            src={"/Planets.png"}
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
