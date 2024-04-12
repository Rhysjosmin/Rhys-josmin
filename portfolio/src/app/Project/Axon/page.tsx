"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rubik, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const sp_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const rbk = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  const { scrollY } = useScroll();

  return (
    <div className={`${sp_grotesk.className} px-12 md:px-20`}>
      <section className="mt-12 ">
        <div className="flex justify-between ">
          <div>
            <h1 className={`${rbk.className}  text-6xl font-bold `}>
              AXON
            </h1>
            <p className="">
              The Learning App
            </p>
          </div>

          <div className=" text-neutral-400  text-sm text-end  items-end  flex flex-col justify-end">
            <p className="text-orange-500">Development</p>
            <p>2nd April 2024 - Present</p>
          </div>
        </div>
        <Image
          src={"/Axon.png"}
          className="rounded-xl mt-4"
          alt={""}
          unoptimized
          height={1000}
          width={2000}
        />
      </section>
      <section className="prose prose-invert py-12 relative">
    
        <div>
          <h1>
            <span className="text-white/20">(chapter 1) :</span> Why
          </h1>
          <p>
            A Few Days Before we made this, a notice came up in our college
            group, it was an announcement for the Hackathon &quot;
            <Link
              href={
                "https://www.gecspectrum.com/competitions/65f5c3460197f7897ad54efa"
              }
            >
              Spectrathon
            </Link>
            &quot;,it was a Hackathon Held by the{" "}
            <Link href={"https://www.gec.ac.in/"}>
              Goa College of Engineering
            </Link>
            . i saw it and i realized that id never really taken part for an
            Offline Hackathon , id lead a team to organize one, but id never
            participated myself, sooo , i did and i formed a team with a few of
            my friends and we went thru the problem statements.
          </p>
          <h3>Choices?</h3>
          <p>
            The Problem Statements consisted of around 20 statements which were
            either about AI, CNNs,LLMs and some others. this was the time AI and
            LLMs were Famous, people knew more about AI than{" "}
            <del>when their dad would get back with the milk</del> &quot;other
            words&quot;.
            <br />
            so we had to choose, the work with CNNs seemed very interesting, the
            statement was to analyze camera footage to find out crime-related information, you
            know the Detective kinda shit, and i don&apos;t. know bout you, but
            i feel everyone likes (the thought of) working with CNNs and Images,
            However, although i have a moderately good understanding of it , i
            decided against it. luckily my team mates agreed. and we settled on...{" "}
            <blockquote>
              <h3>Artificial Intelligence</h3>Domain specific Learner
              facilitator Assist Software Given a learning resource the
              application should assist the learner in preparing for exams. For
              the facilitator the teaching material should be prepared
              automatically. The learning resource could be electronic materials
              on a particular subject.
            </blockquote>
          </p>
        </div>
        <div className="mt-12">

          <h1>
            <span className="text-white/20">(chapter 2) :</span> How
          </h1>
          <blockquote>
            Choosing is Easy, But Knowing How to do it, is easy if you&apos;re a
            nerd - Someone smart
          </blockquote>

          <p>
            So here&apos;s where we did 60% of the work. our first goal was to
            do a lot of Research, so we got a shared doc, and started pasting
            anything that seemed relevant, wether it was a link from hugging
            face or some algorithms from sentence transformers or something from
            ChatGPT
          </p>
          <p>
           Article in Progress
          </p>
        </div>
      </section>
    </div>
  );
}
