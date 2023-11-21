"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

interface Props {
    content: string[];
}

export default function AnimatedText({ content }: Props) {
    const aniText = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const text = SplitType.create(aniText.current!, { types: "chars" });
        const charText = text.chars;
        gsap.from(charText, {
            scrollTrigger: {
                trigger: aniText.current,
                start: "top bottom",
                end: "bottom+=300px bottom",
            },

            stagger: 0.05,
            y: +120,
            duration: 1,
        });
    }, []);
    return (
        <div className="relative flex flex-col overflow-hidden" ref={aniText}>
            {content.map((ele, idx) => {
                return (
                    <p
                        className="lg:text-7xl md:text-6xl text-4xl overflow-hidden  uppercase"
                        key={idx}
                    >
                        {ele}
                    </p>
                );
            })}
        </div>
    );
}
