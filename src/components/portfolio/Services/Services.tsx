import AnimatedText from "@/components/Common/AnimatedText";
import SectionDetails from "@/components/Common/SectionDetails";
import React from "react";
import ServiceItem from "./ServiceItem";

export default function Services() {
    return (
        <div className="overflow-hidden h-fit">
            <div className="lg:px-[5vw] py-[5vh] p-2  flex lg:flex-row flex-col justify-between lg:gap-0 gap-4 lg:items-center w-full">
                <AnimatedText
                    content={["And Now ", "What Services", "Do I Offer?"]}
                />
                <SectionDetails sectionNumber={2} />
            </div>
            <div className=" py-4 overflow-hidden">
                <ServiceItem
                    bgColor="#C8ADFF"
                    imageScrollSpeed="-0.09"
                    highlight="#FF93D4"
                    bgImage="/Assets/back-light-3.svg"
                    details="Empower your brand with a standout online presence. Your
                    website is the face of your brand, and I specialize in
                    crafting unique, clean, and modern websites that captivate
                    your audience. From sleek aesthetics to seamless
                    functionality, I create minimalist designs that resonate
                    with your vision. Elevate your brand's digital identity with
                    a website that leaves a lasting impression. With a keen eye
                    for detail and a commitment to excellence, I bring your
                    unique requirements to life. Let's collaborate to make
                    your website the star of your brand's online journey.
                    Unleash the potential of your digital presence – let's build
                    something extraordinary together."
                    itemNumber="01"
                    mainImage="/Assets/services/frontend.svg"
                    name="Website Development."
                    scrollSpeed="-0.9"
                    key="fd"
                />
                <ServiceItem
                    bgColor="#DCFF93"
                    imageScrollSpeed="-0.08"
                    highlight="#93C5FF"
                    bgImage="/Assets/back-light-3.svg"
                    details="Empower your brand with a standout online presence. Your
                    website is the face of your brand, and I specialize in
                    crafting unique, clean, and modern websites that captivate
                    your audience. From sleek aesthetics to seamless
                    functionality, I create minimalist designs that resonate
                    with your vision. Elevate your brand's digital identity with
                    a website that leaves a lasting impression. With a keen eye
                    for detail and a commitment to excellence, I bring your
                    unique requirements to life. Let's collaborate to make
                    your website the star of your brand's online journey.
                    Unleash the potential of your digital presence – let's build
                    something extraordinary together."
                    itemNumber="02"
                    mainImage="/Assets/services/app.svg"
                    name="App Development"
                    scrollSpeed="-0.8"
                    key="ad"
                />
                <ServiceItem
                    bgColor="#FF9393"
                    imageScrollSpeed="-0.05"
                    highlight="#D4FFCD"
                    bgImage="/Assets/back-light-3.svg"
                    details="Empower your brand with a standout online presence. Your
                    website is the face of your brand, and I specialize in
                    crafting unique, clean, and modern websites that captivate
                    your audience. From sleek aesthetics to seamless
                    functionality, I create minimalist designs that resonate
                    with your vision. Elevate your brand's digital identity with
                    a website that leaves a lasting impression. With a keen eye
                    for detail and a commitment to excellence, I bring your
                    unique requirements to life. Let's collaborate to make
                    your website the star of your brand's online journey.
                    Unleash the potential of your digital presence – let's build
                    something extraordinary together."
                    itemNumber="02"
                    mainImage="/Assets/services/des.svg"
                    name="UI/UX Work + Brand Content "
                    scrollSpeed="-0.8"
                    key="ui"
                />
            </div>
        </div>
    );
}
