import React from "react";
import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";
const hf = Herr_Von_Muellerhoff({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <div className="pt-[10vh] ">
            <div className=" text-center" data-scroll data-scroll-speed="0.2">
                <span className={`${hf.className}`}>diptanshu Mahish</span>
            </div>
            <div className="lg:px-[5vw]  lg:py-[5vh] p-2 flex flex-col gap-4">
                <div>
                    <Image
                        src="/Assets/Header/r1.svg"
                        height={1000}
                        width={1000}
                        alt="Imagery 1"
                        className="h-auto w-full "
                    />
                </div>
                <div>
                    <Image
                        src="/Assets/Header/r2.svg"
                        height={900}
                        width={900}
                        alt="Imagery 3"
                        className="w-full h-auto"
                    />
                </div>
                <div>
                    <Image
                        src="/Assets/Header/r3.svg"
                        height={900}
                        width={900}
                        alt="Imagery 2"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
