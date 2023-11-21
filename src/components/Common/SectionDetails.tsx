"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface Props {
    sectionNumber: number;
    ref: React.MutableRefObject<null>;
}

export default function SectionDetails({ sectionNumber }: Props) {
    const secText = useRef(null);
    useLayoutEffect(() => {
        const text = SplitType.create(secText.current!, { types: "chars" });
        const charText = text.chars;
        gsap.from(charText, {
            scrollTrigger: {
                trigger: secText.current,
                start: "0px bottom",
                end: "bottom+=200px bottom",
            },

            stagger: 0.05,
            y: +30,
            duration: 1,
        });
    }, []);
    return (
        <div
            className="w-[40%] flex flex-col lg:items-end items-start overflow-hidden"
            ref={secText}
        >
            <span className="overflow-hidden">SECTION</span>
            <span className="w-full h-1 bg-black"></span>
            <span className="text-4xl overflow-hidden">{`0${sectionNumber.toString()}`}</span>
        </div>
    );
}
