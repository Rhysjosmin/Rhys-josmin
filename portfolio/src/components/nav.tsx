"use client";
import { DM_Sans, Playfair_Display } from "next/font/google";

import Link from "next/link";
import { useState } from "react";

const pf_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});
const dm_Sans = DM_Sans({ subsets: ["latin"], style: ["italic"] });
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center flex-col  ">
      <div className="flex items-center justify-between w-full max-w-screen-xl p-12">
        <h1 className={`${pf_Display.className} text-3xl`}>R.J.R</h1>
        <div className="md:flex gap-8 hidden">
          <Links />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" cursor-pointer md:hidden flex h-8 w-8 relative items-center rounded-full"
        >
          <div
            className={`h-[1px] bg-white/90 absolute duration-300 transition-transform ${
              open ? "rotate-45" : "-translate-y-2"
            }  left-0 right-0`}
          ></div>
          <div
            className={`h-[1px] bg-white/90 absolute duration-300 transition-transform ${
              open ? "-rotate-45" : "translate-y-2"
            } left-0 right-0`}
          ></div>
          <div
            className={`h-[1px] bg-white/90 absolute duration-300 transition-transform ${
              open ? "scale-x-0" : ""
            }  left-0 right-0`}
          ></div>
        </div>
      </div>
      <div
        className={`${
          open ? "h-40" : "h-0 hidden"
        }  w-full md:hidden flex flex-col  items-center gap-2`}
      >
        <Links />
      </div>
    </div>
  );
}

const Links = () => {
  return (
    <>
      {" "}
      <Link
        className={`${dm_Sans.className} hover:text-emerald-500 transition duration-300 p-2 font-light italic`}
        href={"#work"}
      >
        Work
      </Link>
      <Link
        className={`${dm_Sans.className} hover:text-emerald-500 transition duration-300 p-2 font-light italic`}
        href={""}
      >
        About
      </Link>
      <Link
        className={`${dm_Sans.className} hover:text-emerald-500 transition duration-300 p-2 font-light italic`}
        href={""}
      >
        Resume
      </Link>
    </>
  );
};
