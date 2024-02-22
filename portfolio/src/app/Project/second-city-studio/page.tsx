import { MaterialSymbolsLightOpenInNew } from "@/components/icons"
import { Rubik, Space_Grotesk } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const sp_grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })
const rbk = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export default function Page() {
    return <div className={`${sp_grotesk.className} px-12 md:px-20`}>

        <section className="mt-12 ">
            <div className="grid grid-cols-5 grid-rows-2 ">
                <h1 className={`${rbk.className}  text-4xl font-bold row-start-1 col-start-1 col-span-4 `}>Second City Studio</h1>
                <p className="row-start-2 col-start-1  col-span-4">A website for the second city studio VR destination at birmingham</p>
                <div className="row-start-1 text-neutral-400  text-sm text-end col-start-5 items-end row-span-2 flex flex-col justify-end">

                    <p className="text-orange-500">Fullstack</p>
                    <p>2023-24</p>
                </div>
            </div>
            <Image src={"/Second City 2.png"} className="rounded-xl mt-8" alt={""} height={1000} width={2000} />
        </section>
        <section>
            <div>
                <h1>
                    A website for accessio ......
                </h1>
                <p>The Website aims to ....</p>
            </div>
            <div>
                <h1 className=" font-medium mb-2">Website</h1>
                <Link className="text-indigo-500 " href={'https://secondcitystudio.xyz/'}>https://secondcitystudio.xyz/</Link>
            </div>
        </section>
    </div>
}