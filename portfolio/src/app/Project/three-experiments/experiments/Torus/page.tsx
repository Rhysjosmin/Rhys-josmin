"use client";
import {
	Backdrop,
	DragControls,
	Environment,
	MeshTransmissionMaterial,
	OrbitControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import { Vector3 } from "three";

export default function Page() {
	return <div></div>;
}

export function TorusExp() {
	const full = useRef(null);
  const t1=useRef(null);
	useFrame(({ clock }) => {
		if (full !== null && full.current !== null) {
			(full.current as any).position.y = Math.sin(
				clock.getElapsedTime() * 1.1,
			);
			(t1.current as any).rotation.x = Math.sin(
				clock.getElapsedTime() * 0.1,
			);
			(t1.current as any).rotation.z = Math.sin(
				clock.getElapsedTime() * 2,
			);

			(full.current as any).rotation.y = clock.getElapsedTime() * 1.2;
			// (full.current as any).rotation.z=clock.getElapsedTime();
		}
	});
	return (
		<group>
			<Environment preset="sunset" />
			<group ref={full}>
				<mesh ref={t1} position={[0, 2, 0]} rotation={[0, 1, 0]}>
					<torusGeometry />
					<meshPhysicalMaterial metalness={1} roughness={0} />
				</mesh>
				<mesh position={[1, -1, 1]} rotation={[0, 2, 2]}>
					<torusGeometry />
					<meshPhysicalMaterial metalness={1} roughness={0} />
				</mesh>
			</group>
		</group>
	);
}
