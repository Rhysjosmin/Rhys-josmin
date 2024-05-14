"use client";

import Lottie from "lottie-react";
import groovyWalkAnimation from "@pub/lottie/Name Animation.json";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex  h-96">
      <div className="flex flex-col flex-grow p-8">
        <Link
          className="text-teal-100/50 hover:underline"
          href={"mailto:rod.rhys20031@gmail.com"}
        >
          Email
        </Link>
        <Link
          className="text-teal-100/50 hover:underline"
          href={"https://github.com/Rhysjosmin"}
        >
          Github
        </Link>
        {/* <Link className="text-teal-100/50 hover:underline" href={'https://github.com/Rhysjosmin'}>Youtube</Link> */}
        {/* <Link
          className="text-teal-100/50 hover:underline"
          href={"https://github.com/Rhysjosmin"}
        >
          Instagram
        </Link> */}
        <Link
          className="text-teal-100/50 hover:underline"
          href={"https://www.linkedin.com/in/rhys-josmin-rodrigues-1806a3222/"}
        >
          LinkedIn
        </Link>
        {/* <Link
          className="text-teal-100/50 hover:underline"
          href={""}
        >
          Tinder
        </Link> */}
      </div>
      <Lottie
        className="w-56 h-min "
        animationData={groovyWalkAnimation}
        loop={true}
      />
    </div>
  );
}
