"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color } from "three";

const vertexShader = `uniform float u_time;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;
  
  // Uncomment for a more complex effect
  // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`;

const fragmentShader = `varying vec2 vUv;

uniform vec3 colorA;
uniform vec3 colorB;

void main() {
  vec2 normalizedPixel = gl_FragCoord.xy / 600.0;
  vec3 color = mix(colorA, colorB, normalizedPixel.x);

  gl_FragColor = vec4(color, 1.0);
}
`;

const MovingPlane = () => {
	const mesh = useRef();

	const uniforms = useMemo(
		() => ({
			u_time: { value: 0.0 },
			colorA: { value: new Color(0.912, 0.191, 0.652) },
			colorB: { value: new Color(1.0, 0.777, 0.052) },
		}),
		[],
	);

	useFrame((state) => {
		const { clock } = state;
		mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
	});

	return (
		<mesh
			ref={mesh}
			position={[0, 0, 0]}
			rotation={[-Math.PI / 2, 0, 0]}
			scale={1.5}
		>
			<planeGeometry args={[1, 1, 32, 32]} />
			<shaderMaterial
				fragmentShader={fragmentShader}
				vertexShader={vertexShader}
				uniforms={uniforms}
				wireframe
			/>
		</mesh>
	);
};

const Scene = () => {
	return (
		<Canvas camera={{ position: [1.0, 1.5, 1.0] }}>
			<MovingPlane />
			<axesHelper />
			<OrbitControls />
		</Canvas>
	);
};

export default Scene;
