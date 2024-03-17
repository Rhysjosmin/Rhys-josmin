import { Rubik } from "next/font/google";

const rbk = Rubik({ subsets: ["latin"], weight: ["300", "800"] });

export default function Page() {
  return (
    <main className={`${rbk.className} px-12 mb-20 md:px-20`}>
      <h1 className="font-black text-3xl pb-3 mb-2 lg:w-2/3 ">About Me</h1>
      <p className="text-lg">
        Hi there! I&apos;m Rhys Josmin Rodrigues, and I&apos;m a multidisciplinary
        creative with a passion for blending art, technology, and innovation.
        With a background in programming, 3D artistry, and music, I thrive on
        pushing the boundaries of what&apos;s possible in the digital realm.
      </p>
      <p className="text-lg mt-4">
        As a Full Stack Developer, I specialize in crafting immersive web
        experiences and harnessing the power of deep learning to create
        intelligent solutions. Simultaneously, my skills as a 3D artist allow me
        to bring imagination to life, whether through mesmerizing VFX showreels
        or captivating NFT artworks.
      </p>
      <p className="text-lg mt-4">
        At my core, I&apos;m driven by a relentless curiosity and a desire to make a
        meaningful impact. As the founder of Neural Kissan, I explore the
        intersection of technology and art, aiming to democratize access to
        fresh food and inspire awe with each creation.
      </p>
      <p className="text-lg mt-4">
        Join me on this journey as I continue to innovate, create, and make the
        world a more beautiful and accessible place, one line of code, one
        brushstroke, and one melody at a time.
      </p>
    </main>
  );
}
