"use client";

import RightPanel from "./right-panel";
import LeftPanel from "./left-panel";
import bg from "@/public/images/bg.jpeg";
import Image from "next/image";

export default function HomeContainer() {
    return (
        <>
            {/* <Image src={bg} alt="bg" className="w-full h-full absolute top-0 left-0 z-0 opacity-80 object-cover" /> */}
            <div className="border-2 border-gray-300 w-full h-full bg-gray-500/50 flex relative">
                <LeftPanel />
                <RightPanel />
            </div>
        </>
    );
}