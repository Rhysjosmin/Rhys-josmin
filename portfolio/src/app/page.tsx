"use client";
import ProjectCard from "@/components/projectCard";
import { Playfair_Display, Rubik, Space_Grotesk } from "next/font/google";
import Image from "next/image";

const pf_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});

const rubik = Rubik({ subsets: ["latin"] });
const spGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col items-start gap-4 p-8 md:items-center md:px-40 h-96 md:flex-row ">
        <Image
          alt="A Picture Of Rhys"
          height={500}
          width={500}
          src={"/Rhys.jpg"}
          className="object-cover w-56 md:w-72  "
        />
        <div className="md:ml-10 h-72 ">
          <h1 className={`${pf_Display.className} text-4xl capitalize`}>
            rhys Josmin Rodrigues
          </h1>
          <p
            className={`${spGrotesk.className}  capitalize text-base mt-2 font-thin lg:w-96 `}
          >
            Rhys, a web developer based in Goa, started his journey crafting
            games in Scratch before mastering Blender and web development. He
            loves learning new things, especially when exams aren&apos;t
            involved.
          </p>
        </div>

        {/* <svg
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
        </svg> */}
        {/* <div className="absolute left-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <Lottie
            className="absolute -rotate-45 top-72 -right-52 hue-rotate-[180deg] saturate-[0]"
            animationData={trail}
          />
          <Lottie
            className="absolute -rotate-45 top-28 -right-72 hue-rotate-[180deg] saturate-[0]"
            animationData={trail}
          />
          <Lottie
            className="absolute -rotate-45 top-96 translate-y-10 translate-x-16 opacity-50 -right-52 hue-rotate-[-10deg]  saturate-[100]"
            animationData={trail}
          />
        </div>
        <div className="absolute left-0 right-0 w-full h-full overflow-hidden pointer-events-none blur-3xl">
          <Lottie
            className="absolute -rotate-45 top-72 -right-52 hue-rotate-[180deg] saturate-[0]"
            animationData={trail}
          />
          <Lottie
            className="absolute -rotate-45 top-28 -right-72 hue-rotate-[180deg] saturate-[0]"
            animationData={trail}
          />
          <Lottie
            className="absolute -rotate-45 top-96 translate-y-10 -right-52 translate-x-16  hue-rotate-[-10deg] saturate-[5000] brightness-200"
            animationData={trail}
          />
        </div> */}

        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          className="absolute -z-10 left-8 blur-[110px] opacity-60  "
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
      <section className=" grid lg:grid-cols-2 lg:px-24 px-8  justify-center gap-12    mt-64">
        <ProjectCard
          unoptimized
          src="/DBCE ACM (3).png"
          title="DBCE ACM"
          duration="Jan 2023 - Ongoing"
          description="Designed and made the website for
          seeing activities and details about the club"
        />
        <ProjectCard
          src="/CRYPTO CLOUD.png"
          title="Crypto Cloud Expo Scam"
          duration="Aug 2023 "
          description="Created a website for an Expo in Dubai "
        />
        <ProjectCard

          src="/Inspirus (2).png"
          title="Inspirus 7"
          duration="Nov - Oct 2023"
          description="A Website to see the details of the Inspirus 7 Event"
        />
        <ProjectCard
          src="/Hackathon (1).png"
          title="My First Hackathon"
          duration="Oct 2022 "
          description="Participated in my first ever hackathon and won The 2nd place"
        />

        <div className="h-56" />
      </section>
    </main>
  );
}

