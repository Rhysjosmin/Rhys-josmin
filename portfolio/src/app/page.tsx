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
      <section className="flex md:items-center p-8  gap-4  md:px-40 h-96 flex-col items-start md:flex-row ">
        <Image
          alt="A Picture Of Rhys"
          height={500}
          width={500}
          src={"/Rhys.jpg"}
          className="object-cover md:w-72 w-56 "
        />
        <div className="md:ml-10 h-72">
          <h1 className={`${pf_Display.className} text-4xl capitalize`}>
            rhys Josmin Rodrigues
          </h1>
          <p
            className={`${spGrotesk.className}  capitalize text-xl mt-2 font-thin w-96`}
          >
            Rhys, a web developer based in Goa, started his journey crafting
            games in Scratch before mastering Blender and web development. He
            loves learning new things, especially when exams aren&apos;t
            involved.
          </p>
        </div>
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
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
              x2="43"
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

        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
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
      <section className="min-h-[150vh]  w-full px-8 md:px-20 mt-64">
        <div className={spGrotesk.className}>
          <h1 className="text-3xl">My</h1>
          <h1 className="font-black text-8xl">Projects</h1>
        </div>
        <div
          id="work"
          className="grid grid-cols-1 gap-6 mt-12 md:grid-rows-4 md:grid-cols-6 min-w-96 "
        >
          {/* <ProjectCard
            className="row-span-2 md:col-span-3"
            title="Marshmallow Lovers"
            src="/MarshmelloOnPlate.jpg"
          /> */}
          <ProjectCard
            title="Second City Studio"
            className="md:col-span-3 "
            src="/ScSweb.png"
          />
          <ProjectCard
            title="DBCE ACM"
            className="md:col-span-3 "
            src="/Acm.png"
          />

          <div className="grid w-full h-full row-span-2 gap-6 md:grid-rows-2 md:grid-cols-2 md:col-span-4 aspect-square ">
            <ProjectCard
              title="An Inventory Management System"
              className="w-full h-full "
              src="/Inventory Management.png"
            />
            <ProjectCard
              title="Inspirus 7"
              className="w-full h-full "
              src="/Inspirus.png"
            />
            <ProjectCard
              title="Crypto Cloud Expo"
              className="w-full h-full "
              src="/CryptoCloudExpo.png"
            />
            <ProjectCard
              title="Recruitment Helper"
              className="w-full h-full "
              src="/Hackathon.png"
            />
          </div>
          {/* <ProjectCard
            title="Chonk"
            className="row-span-2 md:col-span-2"
            src="/Troll.jpg"
          /> */}
        </div>
        <div className="h-56" />
      </section>
    </main>
  );
}
