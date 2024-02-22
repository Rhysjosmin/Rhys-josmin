import { Rubik, Space_Grotesk } from "next/font/google"
import Image from "next/image"

const sp_grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400'] })
const rbk = Rubik({ subsets: ['latin'], weight: ['300', '400'] })

export default function Page() {
    return <div className={`${sp_grotesk.className} px-12 md:px-20`}>

        <section className="mt-12 ">
            <div className="grid grid-cols-5 grid-rows-2 ">
                <h1 className={`${rbk.className}  text-3xl font-bold row-start-1 col-start-1 col-span-4 `}>Second City Studio</h1>
                <p className="row-start-2 col-start-1  col-span-4">Web Front for the second city studio VR destination at birmingham</p>
                <div className="row-start-1 text-neutral-400  text-sm text-end col-start-5 items-end row-span-2 flex flex-col justify-end">
                    <p className="text-orange-500">Fullstack</p>
                    <p>2023-24</p>
                </div>
            </div>
            <Image src={"/Second City 2.png"} className="rounded-xl mt-8" alt={""} height={1000} width={2000} />
        </section>
    </div>
}