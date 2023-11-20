import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="p-8 flex items-center justify-center">
            <div>
                <Image
                    src="/Assets/logo-full.svg"
                    height={40}
                    width={200}
                    alt="dptsnhu logo full"
                />
                <span> &copy; Diptanshu Mahish 2023</span>
                <div className="flex justify-center items-center gap-3">
                    <Link href="/" className="underline">
                        Portfolio
                    </Link>
                    <Link href="/" className="underline">
                        Shop
                    </Link>
                </div>
            </div>
        </div>
    );
}
