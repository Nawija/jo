import { playball } from "@/ui/fonts";
import Image from "next/image";
import seovileo from "@/public/seovileo.svg"

export function Logo({ title }: { title: string }) {
    return (
        <div className="flex-c z-50 relative">
            <Image src={seovileo} height={25} width={25} alt="seovileo logo" />
            <p className="text-white font-medium ml-1.5">{title}</p>
            <p
                className={`absolute right-0 -bottom-2.5 text-[14px] ${playball.className}`}
            >
                developer
            </p>
        </div>
    );
}
