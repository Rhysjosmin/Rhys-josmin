import ProjectCard from "@/components/projectCard";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Image from "next/image";

const pf_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});

const spGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <section className="px-40 h-96 flex items-center  ">
        <Image
          alt="A Picture Of Rhys"
          height={500}
          width={500}
          src={"/Rhys.jpg"}
          className=" w-72 object-cover"
        />
        <div className="h-72 ml-10">
          <h1 className={`${pf_Display.className} text-4xl capitalize`}>
            rhys Josmin Rodrigues
          </h1>
          <p
            className={`${spGrotesk.className}  capitalize text-xl mt-2 font-thin w-96`}
          >
            is a Web Developer based in Goa, He started his journey making games
            in scratch, then slowly learning blender, then web development. Rhys
            loves learning new stuff as long as he doesn’t need to answer an
            exam bout it
          </p>
        </div>
        <svg
          width="365"
          height="511"
          className="absolute right-0"
          viewBox="0 0 365 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="437.354"
            y1="0.353553"
            x2="110.354"
            y2="327.354"
            stroke="url(#paint0_linear_0_1)"
          />
          <line
            x1="245.354"
            y1="265.354"
            x2="0.353552"
            y2="510.354"
            stroke="url(#paint1_linear_0_1)"
          />
          <line
            x1="470.354"
            y1="135.354"
            x2="225.354"
            y2="380.354"
            stroke="url(#paint2_linear_0_1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="110"
              y1="327"
              x2="437"
              y2="2.50771e-07"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="-1.13918e-06"
              y1="510"
              x2="245"
              y2="265"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_1"
              x1="225"
              y1="380"
              x2="470"
              y2="135"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#579AFF" />
              <stop offset="1" stop-color="#0066FF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute -z-10 left-8 blur-[100px] opacity-60  "
          // width="1000"
          // height="795"
          viewBox="-100 0 2129 795"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="-82" width="530" height="530" rx="265" fill="#7E7C54" />
          <rect
            x="-102"
            y="265"
            width="530"
            height="530"
            rx="265"
            fill="#7FA4C8"
          />
          <rect
            x="296"
            y="128"
            width="530"
            height="530"
            rx="265"
            fill="#36272B"
          />
          <rect
            x="599"
            y="246"
            width="530"
            height="530"
            rx="265"
            fill="#BF8872"
          />
        </svg>
      </section>
      <section className="min-h-[150vh] w-full px-40 mt-64">
        <div className={spGrotesk.className}>
          <h1 className="text-3xl">My</h1>
          <h1 className="text-8xl font-black">Projects</h1>
        </div>
        <div className="mt-12 flex flex-wrap gap-10">
          <ProjectCard aspect="1/1" src="/MarshmelloOnPlate.jpg" />
          <ProjectCard aspect="9/16" src="/ScSweb.png" />
        </div>
      </section>
    </main>
  );
}
