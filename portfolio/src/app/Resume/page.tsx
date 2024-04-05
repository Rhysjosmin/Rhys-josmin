import { Rubik } from "next/font/google";
import Link from "next/link";

const rbk = Rubik({ subsets: ["latin"], weight: ["300", "800"] });

export default function Resume() {
  return (
    <main className={`${rbk.className} px-12 md:px-20`}>
      <section className="mb-8">
        <h1 className="font-black text-3xl border-b pb-3 mb-2 lg:w-2/3 print:w-full">
          Rhys Josmin Rodrigues
        </h1>
        <p className="text-lg">Full-Stack Developer | Designer | 3D Artist</p>
        <p className="text-teal-300 text-sm print:text-black">Goa, India</p>
        <p className="text-teal-300 text-sm print:text-black">rod.rhys20031@gmail.com</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="mb-4 lg:w-2/3 print:w-full print:text-xs">
          Rhys Josmin Rodrigues (He/Him) is a multi-talented polymath who
          seamlessly blends code, design, and artistic expression as a
          programmer, 3D artist, and cellist. With a diverse skillset spanning
          full-stack web development, deep learning, VFX, and more, he crafts
          immersive digital experiences that push boundaries and defy
          conventions. As the founder of Neural Kissan, Rhys explores the
          boundless potential of technology and art, creating awe-inspiring NFT
          artworks, mind-bending VFX showreels, and captivating projects that
          blend cutting-edge techniques with a touch of whimsy, inviting
          audiences on mesmerizing journeys through his creations.
        </p>
      </section>

      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 print:w-full print:grid-cols-2">
      <div>
          <h2 className="text-2xl font-bold mb-4 ">Projects</h2>
          <div className="list-disc list-inside space-y-2">
            <div>
              <h3 className="font-bold">Neural Kissan</h3>
              <p>
                Co-founded startup focusing on creating products that allow users to grow plants regardless of seasonal conditions, aiming to help the working class access fresh food.
              </p>
              <p>
                Link:{" "}
                <Link
                  href="www.neuralkissan.com"
                  className="text-teal-500 hover:underline"
                >
                  Website{" "}
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-bold">Rhys Josmin Website</h3>
              <p>Personal portfolio website showcasing work and skills.</p>
              <p>
                Link:{" "}
                <Link
                  href="https://rhysjosmin.netlify.app/"
                  className="text-teal-500 hover:underline"
                >
                  Website
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-bold">Inspirus Website Redesign</h3>
              <p>
                Website redesign project for Inspirus, showcasing web
                development and design skills.
              </p>
            </div>
            <div>
              <h3 className="font-bold">ACM Website</h3>
              <p>
                Website developed for the ACM (Association for Computing
                Machinery) organization, highlighting the ability to create
                professional and functional websites.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Instagram Clone Tailwind</h3>
              <p>
                Clone of the popular Instagram app, built using Tailwind CSS,
                demonstrating front-end development skills and ability to
                recreate popular user interfaces.
              </p>
              <p>
                Link:{" "}
                <Link
                  href="https://rhysjosmin.github.io/Instagram-Tailwind/"
                  className="text-teal-500 hover:underline"
                >
                  Website
                </Link>
              </p>
            </div>

            <div>
              <h3 className="font-bold">Threads Clone React Native</h3>
              <p>
                Clone of the Threads app, built using React Native, highlighting
                skills in mobile app development and replicating popular app
                features.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Shortest Path From Image</h3>
              <p>
                Web application that solves the shortest path problem,
                showcasing problem-solving skills and ability to create
                practical and useful tools.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 print:grid-cols-1">
            <div>
              <h3 className="font-bold mb-2">Front-end</h3>
              <p className="text-sm">
                React, Next.js, Nuxt.js, Vue.js, JavaScript, TypeScript, React
                Native, Flutter, Tailwind, Framer ,D3
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Back-end</h3>
              <p className="text-sm">
                Python,Node.js, Django, Flask, MongoDB,SQL
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">AI/ML</h3>
              <p className="text-sm">Tensorflow, Pytorch, YOLO, NLP, Vector Databases (Chroma DB)</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">3D,Design and Simulation</h3>
              <p className="text-sm">Blender, Houdini, Figma</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Other</h3>
              <p className="text-sm">
                Git, Docker, Google Cloud, AWS, Project Management
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
