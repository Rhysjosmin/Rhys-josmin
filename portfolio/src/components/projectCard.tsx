import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  src,
  aspect,
}: {
  src: string;
  aspect: string;
}) {
  return (
    <div className="relative">
      <Image
        src={src}
        className={`h-72 w-auto aspect-[${aspect}] object-cover`}
        height={400}
        width={400}
        alt=""
      />
      <Image
        src={src}
        className={`absolute -z-10 blur-[150px] opacity-60 top-0 h-72 w-auto aspect-[${aspect}] object-cover`}
        height={400}
        width={400}
        alt=""
      />
    </div>
  );
}
