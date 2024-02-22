import { Rubik, Space_Grotesk } from "next/font/google"
import Image from "next/image"

const sp_grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400'] })
const rbk = Rubik({ subsets: ['latin'], weight: ['300', '400'] })

export default function Page() {
    return <div className={`${sp_grotesk.className} px-12`}>

        <section className="mt-12">
            <div className="grid grid-cols-2 grid">
                <h1 className={`${rbk.className}  text-3xl font-bold `}>Second City Studio</h1>
                <p>Web Front for the second city studio VR destination at birmingham</p>
                <div>
                    <p>Fullstack</p>
                    <p>2023-24</p>
                </div>
            </div>
            <Image src={"/Second City 2.png"} className="rounded-xl mt-8" alt={""} height={1000} width={2000} />
        </section>
    </div>
}