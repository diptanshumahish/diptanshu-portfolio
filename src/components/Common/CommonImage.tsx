"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BarLoader } from "react-spinners";

interface Props {
    imageLink: string;
    width: number;
    height: number;
    alt: string;
    classList: string;
    dataScroll?: string;
}

export default function CommonImage({
    imageLink,
    alt,
    height,
    width,
    classList,
    dataScroll,
}: Props) {
    const [showLoader, setLoader] = useState(true);

    return (
        <>
            {showLoader && (
                <div
                    style={{ height: height, width: width }}
                    className="w-full flex items-center justify-center"
                >
                    <BarLoader className="dark:invert" />
                </div>
            )}

            <Image
                {...(dataScroll && {
                    "data-scroll": true,
                    "data-scroll-speed": dataScroll,
                })}
                src={imageLink}
                width={width}
                height={height}
                alt={alt}
                className={classList}
                onLoadingComplete={(image) => {
                    setLoader(false);
                    image.classList.remove("max-h-0");
                }}
            />
        </>
    );
}
