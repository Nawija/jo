import { MainButton } from "@/ui/buttons/MainButton";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex md:flex-row flex-col items-center justify-center w-full overflow-hidden">
            <div className="md:w-1/2 my-12 md:p-24 space-y-10">
                <h1 className="text-3xl">
                    Lorem ipsum is placeholder text commonly
                </h1>
                <p>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visuals placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                </p>
                <MainButton>Portfolio</MainButton>
            </div>
            <div className="w-1/2 space-y-10">
                <img
                    src="https://images.pexels.com/photos/18977904/pexels-photo-18977904/free-photo-of-kubek-zastawa-stolowa-porcelana-elegancki.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="xx"
                    height={300}
                    width={400}
                />
            </div>
        </div>
    );
}
