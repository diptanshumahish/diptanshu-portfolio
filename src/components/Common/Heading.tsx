"use client";
import React, { useRef } from "react";
import AnimatedText from "./AnimatedText";
import SectionDetails from "./SectionDetails";

interface Props {
    heading: string[];
    number: number;
}

export default function Heading({ heading, number }: Props) {
    const mainRef = useRef(null);
    return (
        <div className="lg:px-[5vw] z-10 py-[5vh] p-2  flex lg:flex-row flex-col justify-between lg:gap-0 gap-4 lg:items-center w-full">
            <AnimatedText content={heading} ref={mainRef} key={heading[0]} />
            <SectionDetails sectionNumber={number} ref={mainRef} />
        </div>
    );
}
