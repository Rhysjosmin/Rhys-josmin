import { Environment } from "@react-three/drei";

export default function Page() {
  return <div></div>;
}

export function SphExp() {
  return (
    <>
      <Environment preset="city" />
      <mesh position={[0, 1, 0]}>
        <sphereGeometry />
        <meshPhysicalMaterial metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <planeGeometry />
        <meshPhysicalMaterial color={"rgb(234,88,12)"} />
      </mesh>
    </>
  );
}
