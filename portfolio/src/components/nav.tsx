import { DM_Sans, Playfair_Display } from "next/font/google";

import Link from "next/link";

const pf_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});
const dm_Sans = DM_Sans({ subsets: ["latin"], style: ["italic"] });
export default function NavBar() {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center justify-between w-full max-w-screen-xl p-12">
        <h1 className={`${pf_Display.className} text-2xl`}>R.J.R</h1>
        <div className="flex gap-8">
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
        </div>
      </div>
    </div>
  );
}
