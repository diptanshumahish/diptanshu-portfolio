import AnimatedText from "@/components/Common/AnimatedText";
import SectionDetails from "@/components/Common/SectionDetails";
import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
export default function Contact() {
    return (
        <div>
            <div className="lg:px-[5vw] py-[5vh] p-2  flex lg:flex-row flex-col justify-between lg:gap-0 gap-4 lg:items-center w-full">
                <AnimatedText content={["Now how ", "do we", "connect?"]} />
                <SectionDetails sectionNumber={3} />
            </div>
            <div className="flex lg:flex-row flex-col-reverse bg-[#111]   ">
                <Image
                    src="/Assets/Contact/me.png"
                    height={900}
                    width={900}
                    alt="Diptanshu Mahish"
                    className="lg:w-[50%] w-full h-auto grayscale object-cover"
                />
                <div className="lg:w-[50%] w-full h-full p-[5vw] ">
                    <div className="flex  items-center gap-4">
                        <Image
                            src="/Assets/Contact/circle.svg"
                            height={900}
                            width={900}
                            alt="Diptanshu Mahish"
                            className="w-[15%] h-auto invert "
                        />
                        <h3 className="text-white text-2xl lg:w-[40%]">
                            Just fill up this form and I will get back to you
                            ASAP.
                        </h3>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
