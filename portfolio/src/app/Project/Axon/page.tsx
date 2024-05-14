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
    <div className={`${sp_grotesk.className} px-6 md:px-20 lg:px-40`}>
      <section className="mt-12 ">
        <div className="flex justify-between ">
          <div>
            <h1 className={`${rbk.className}  text-6xl font-bold `}>AXON</h1>
            <p className="">The Learning App</p>
          </div>
          <div className="flex flex-col items-end justify-end text-sm text-neutral-400 text-end">
            <p className="text-orange-500">Development</p>
            <p>2nd April 2024 - Present</p>
          </div>
        </div>
        <Image
          src={"/Axon.png"}
          className="mt-4 rounded-xl"
          alt={""}
          unoptimized
          height={1000}
          width={2000}
        />
      </section>
      <section className="relative py-12 prose prose-invert">
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
            statement was to analyze camera footage to find out crime-related
            information, you know the Detective kinda shit, and i don&apos;t.
            know bout you, but i feel everyone likes (the thought of) working
            with CNNs and Images, However, although i have a moderately good
            understanding of it , i decided against it. luckily my team mates
            agreed. and we settled on...{" "}
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
          <h3>1) Data Collection</h3>
          <p>
            So here&apos;s where we did 60% of the work. our first goal was to
            do a lot of Research, so we got a shared doc, and started pasting
            anything that seemed relevant, wether it was a link from hugging
            face or some algorithms from sentence transformers or something from
            ChatGPT.
          </p>
          <h3>2) Testing & Planning</h3>
          <p>
            Next we needed to check out what works and what doesn&apos;t, we had
            amazing ideas of what could be done,but realistically we needed to
            remove stuff and finalize that, here{" "}
            <Link href={"https://github.com/ryzxxn"}>@ryzxxn</Link> figured out
            the llm with mistral was okay at best, and we couldn&apos;t rely on
            it to give us what we needed every time, so i came up with an nlp
            pipeline, where we extracted the parts of speech using the POS in
            NLTK Library and convert it to our desired form the implementation
            of this was done by{" "}
            <Link href={"https://github.com/justSammy1604/"}>
              @justSammy1604
            </Link>
            . Another feature we wanted was to find a video explaining the
            topic, this was done by{" "}
            <Link href={"https://github.com/Terrence31"}>@Terrence31</Link>
          </p>
          <p>Work in Progress ...</p>
        </div>
      </section>
    </div>
  );
}
