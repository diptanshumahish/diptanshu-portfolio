import React, { useRef } from "react";
import AnimatedText from "./AnimatedText";
import SectionDetails from "./SectionDetails";

interface Props {
    heading: string[];
    number: number;
}

export default function Heading({ heading, number }: Props) {
    return (
        <div className="lg:px-[5vw]  py-[5vh] p-2  flex lg:flex-row flex-col justify-between lg:gap-0 gap-4 lg:items-center w-full">
            <AnimatedText content={heading} key={heading[0]} />
            <SectionDetails sectionNumber={number} key={number} />
        </div>
    );
}
