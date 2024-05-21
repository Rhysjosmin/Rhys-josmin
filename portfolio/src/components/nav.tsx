"use client";
import { DM_Sans, Playfair_Display, Italiana } from "next/font/google";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const pf_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});
const dm_Sans = DM_Sans({ subsets: ["latin"], style: ["italic"] });
const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });

export function VX_NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center p-12 ">
      <div className="flex items-center justify-between w-1/2 h-12 px-5 border rounded-full bg-white/5 border-white/10 backdrop-blur-3xl">
        <Link className={`${italiana.className} text-2xl`} href={""}>
          RJR
        </Link>
        <div
          className={`${italiana.className} flex items-center gap-8 text-sm`}
        >
          <Link href={""}>Home</Link>
          <Link href={""}>Projects</Link>
          <Link href={""}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center print:hidden ">
      <div className="flex items-center justify-between w-full max-w-screen-xl p-12">
        <Link
          onClick={() => setOpen(false)}
          className={`${pf_Display.className} font-black text-3xl`}
          href={"/"}
        >
          R.J.R
        </Link>
        <div className="hidden gap-8 md:flex">
          <Links onOpen={()=>setOpen(false)} />
        </div>
        <div className="z-20 flex gap-8 md:hidden ">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative z-10 h-6 cursor-pointer w-7"
          >
            <div
              className={`h-[1px] transition-all bg-white w-full absolute top-1/2 ${
                open ? "scale-x-0" : "scale-x-1"
              }`}
            />
            <div
              className={`h-[1px] transition-all bg-white w-full absolute ${
                open ? "top-1/2 -rotate-45" : "top-0 "
              }`}
            />
            <div
              className={`h-[1px] transition-all bg-white w-full absolute  ${
                open ? "bottom-1/2 rotate-45" : "bottom-0"
              }`}
            />
          </button>
        </div>
        <div
          className={`z-10 top-0 divide-violet-100 divide-y left-0 flex flex-col text-6xl font-thin italic p-8 pt-24 bg-black w-full transition-all duration-300 delay-200 absolute md:hidden ${
            open ? "h-screen" : "h-0 opacity-0 pointer-events-none"
          } `}
        >
          <Links onOpen={()=>setOpen(false)} />
        </div>
        <div
          className={`z-[5] top-0 left-0  w-full transition-all duration-500 h-screen pointer-events-none absolute md:hidden ${
            open ? "bg-black/30 backdrop-blur-lg" : ""
          } `}
        />
      </div>
    </div>
  );
}

const Links = ({ onOpen }: { onOpen: any }) => {
  return (
    <>
      {" "}
      {/* <Link
        className={`${dm_Sans.className} hover:text-emerald-500 transition duration-300 p-2 font-light italic`}
        href={""}
      >
        Work
      </Link> */}
      <Link
        onClick={onOpen}
        className={`${dm_Sans.className} hover:text-emerald-500 transition duration-300 p-2 font-light italic`}
        href={"/About"}
      >
        About Me
      </Link>
      <Link
        onClick={onOpen}
        className={`${dm_Sans.className} hover:text-emerald-500 transition duration-300 p-2 font-light italic`}
        href={"https://flowcv.com/resume/9r20trqjai"}
      >
        Resume
      </Link>
    </>
  );
};
