"use client";
import ProjectCard from "@/components/projectCard";
import { Playfair_Display, Rubik, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Lottie from "lottie-react";
import { useSearchParams } from "next/navigation";

const pf_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});

const rubik = Rubik({ subsets: ["latin"] });
const spGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time * 1.5);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="">
      {/* <div className="absolute top-0 w-full h-full">
      <div className="bg-white/10 h-[1px] w-80 absolute top-20 left-0 -translate-y-2"/>
      <div className="bg-white/10 h-[1px] w-80 absolute top-20 right-0 -translate-y-2"/>
      <div className="bg-white/10 h-5/6 w-[1px] absolute top-20 right-16 -translate-y-2"/>
      <div className="bg-white/10 h-5/6 w-[1px] absolute top-20 left-16 -translate-y-2"/>
      </div> */}
      <section className="flex flex-col items-start gap-4 p-8 md:items-center md:px-40 h-96 md:flex-row ">
        <Image
          alt="A Picture Of Rhys"
          height={500}
          width={500}
          src={"/Rhys.jpg"}
          className="object-cover w-56 md:w-72 "
        />
        <div className="md:ml-10 h-72 ">
          <h1 className={`${pf_Display.className} text-4xl capitalize`}>
            Rhys Josmin Rodrigues
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

        <svg
          width="365"
          height="511"
          className="absolute right-0 w-40 h-auto md:top-auto top-12 md:w-72"
          viewBox="0 0 365 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>star trails</title>
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

        <svg
          className="absolute -z-10 left-8 blur-[110px] opacity-20  "
          // width="1000"
          // height="795"
          viewBox="-100 0 2129 795"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Blobs</title>
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
      {/* <div className="h-32 px-20 py-2 mt-56 mb-4 ">
        <div className="h-full  bg-white/[0.01] w-full rounded-xl ">
      <h1>Filters</h1>
        </div>
      </div> */}
      <section className="relative grid justify-center gap-12 px-8 mt-64 mb-64  lg:grid-cols-2 lg:px-24">
        <ProjectCard
          tags={[
            "Next JS",
            "Python",
            "NLP",
            "Huggingface",
            "AI",
            "ML",
            "Learning",
          ]}
          unoptimized
          src="/Axon.png"
          title="Axon"
          href="/Project/Axon"
          duration="April 2nd 2024 - April 3rd 2024"
          // site
          description="Created A Learning App to learn anything"
        />
        <ProjectCard
          tags={[
            "Next JS",
            "Tailwind",
            "Shadcn/ui",
            "Firebase",
            "FramerMotion",
          ]}
          unoptimized
          src="/DBCE ACM (3).png"
          title="DBCE ACM"
          href="https://dbce-acm.netlify.app/"
          duration="Jan 2023 - Ongoing"
          site
          description="Designed and made the website for
          seeing activities and details about the club"
        />
        <ProjectCard
          tags={["HTML", "CSS", "JS"]}
          src="/CRYPTO CLOUD.png"
          title="Crypto Cloud Expo"
          href="https://verdant-muffin-de31bf.netlify.app/"
          duration="Aug 2023 "
          site
          description="Created a website for an Expo in Dubai "
        />
        <ProjectCard
          tags={["HTML", "CSS", "JS", "Three JS"]}
          src="/Inspirus (2).png"
          title="Inspirus 7"
          href="https://inspirus.dbcegoa.ac.in/"
          site
          duration="Nov - Oct 2023"
          description="A Website to see the details of the Inspirus 7 Event"
        />
        <ProjectCard
          tags={["HTML", "CSS", "JS"]}
          src="/Irix2.png"
          title="IRIX"
          site
          href="https://irix.netlify.app/"
          duration="March 2023"
          description="A Placeholder for the main IRIX website "
        />
        <ProjectCard
          tags={[
            "python",
            "flask",
            "deepface",
            "duck-duck-go-image",
            "webscraping",
            "css",
            "twitter-api",
          ]}
          src="/Hackathon (1).png"
          title="My First Hackathon"
          duration="Oct 2022 "
          description="Participated in my first ever hackathon and won The 2nd place"
        />
        <ProjectCard
          tags={[
            "Blender",
            "3D",
            "Next JS",
            "Firebase",
            "Google Cloud",
            "Cloud Functions",
          ]}
          src="/SecondCity.png"
          title="Second City Studio"
          site
          duration="November 2023 - Current "
          // href="/Project/second-city-studio"
          href="https://secondcitystudio.xyz"
          description="Created A Website for users to check out the studio ,and an Admin Dashboard to Send Emails,Edit Content,View Logins etc"
        />
        <ProjectCard
          tags={["Blender", "3D"]}
          src="/Croissant.png"
          title="A Croissant"
          duration="January 2024 "
          description="Was Hungry, So Made a Croissant"
        />
        {/* <ProjectCard
        tags={['Three JS','React Three Fiber','Blender','3D']}
        // href="/Project/three-experiments"
        src="/Pig.jpg"
          title="Three JS Experiments"
          duration=""
          description=""
        /> */}
        <ProjectCard
          tags={["Blender", "3D", "Sculpting"]}
          src="/Planets.png"
          title=" Experiments"
          duration=" "
          description=""
          href="/Project/3D"
        />
        <ProjectCard
          site
          tags={["Next js", "API", "pokemon"]}
          src="/pookiedex.png"
          title="The Pookidex Collection"
          duration="July 2024 "
          description="A pokedex explorer made with framer motion and next js"
          href="https://pookiemon-delta.vercel.app/"
        />
        <ProjectCard
          tags={["Next js", "API", "pokemon"]}
          src="/TheIndustryIndights.png"
          title="The Industry Insights"
          duration="July 2024 "
          description="A CMS for NEWS?"
          // href="https://pookiemon-delta.vercel.app/"
        />

        {/* <div className="h-96" /> */}
      </section>
    </main>
  );
}
