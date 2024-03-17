"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useDragControls } from "framer-motion";
import { MotionCanvas, LayoutCamera } from "framer-motion-3d";
import Link from "next/link";
import { Experience as SphExp } from "./experiments/Sphere/page";
import { Experience as TorusExp } from "./experiments/Torus/page";
import { Scene } from "three";
import React from "react";
export default function Page() {
	const controls = useDragControls();
	return (
		<main className=" ">
			<div className="w-full overflow-hidden">
				<motion.div
					drag="x"
					dragMomentum
					dragPropagation
					// dragElastic={.2}
					// dragTransition={{  bounceDamping: 10 }}
					dragConstraints={{ left: -1230, right: 10 }}
					className="flex gap-0.5 h-svh cursor-grab "
				>
					<Experiment experience={<SphExp />} />
					<Experiment experience={<TorusExp />} />
					<Experiment experience={<SphExp />} />
				</motion.div>
			</div>

			<section className="p-12 text-3xl">
				<p>Made these abominations during my free time</p>
			</section>
		</main>
	);
}

function Experiment({ experience }: { experience: React.ReactNode }) {
	return (
		<motion.div className="h-3/4  w-full aspect-video  ">
			<Canvas className="rounded-3xl ">{experience}</Canvas>
		</motion.div>
	);
}
