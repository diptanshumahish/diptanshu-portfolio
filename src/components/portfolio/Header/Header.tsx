import React from "react";
import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";
import CommonImage from "@/components/Common/CommonImage";
const hf = Herr_Von_Muellerhoff({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <div className="pt-[10vh] ">
            <div className=" text-center" data-scroll data-scroll-speed="0.2">
                <span className={`${hf.className}`}>diptanshu Mahish</span>
            </div>
            {/* main imagery */}
            <div className="lg:px-[5vw] lg:py-[5vh] p-2 flex flex-col gap-4">
                <div>
                    <CommonImage
                        imageLink="/Assets/Header/r1.svg"
                        alt="Imagery1"
                        classList="h-auto w-full "
                        height={1000}
                        width={1000}
                    />
                    {/* <Image
                        src="/Assets/Header/r1.svg"
                        height={1000}
                        width={1000}
                        alt="Imagery 1"
                        className="h-auto w-full "
                    /> */}
                </div>
                <div>
                    <CommonImage
                        imageLink="/Assets/Header/r2.svg"
                        alt="Imagery2"
                        classList="h-auto w-full "
                        height={1000}
                        width={1000}
                    />

                    {/* <Image
                        src="/Assets/Header/r2.svg"
                        height={900}
                        width={900}
                        alt="Imagery 3"
                        className="w-full h-auto"
                    /> */}
                </div>
                <div>
                    <CommonImage
                        imageLink="/Assets/Header/r3.svg"
                        alt="Imagery3"
                        classList="h-auto w-full "
                        height={1000}
                        width={1000}
                    />
                    {/* <Image
                        src="/Assets/Header/r3.svg"
                        height={900}
                        width={900}
                        alt="Imagery 2"
                        className="w-full h-auto"
                    /> */}
                </div>
            </div>
        </div>
    );
}
