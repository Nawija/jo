import { playball } from "@/ui/fonts";
import Link from "next/link";

export function Logo({
    title,
    smallTitle,
}: {
    title: string;
    smallTitle: string;
}) {
    return (
        <Link href="/" className="flex-c z-50 relative">
            <div className="relative -mt-1">
                <p className="text-white font-medium ml-1.5">{title}</p>
                <p
                    className={`absolute right-2 -bottom-3 text-[14px] ${playball.className}`}
                >
                    {smallTitle}
                </p>
            </div>
        </Link>
    );
}
