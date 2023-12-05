import Image from "next/image";

import heroImg from "@/public/images/jarek-olszewski.jpg";
import s1Img from "@/public/images/s1.jpg";
import s2Img from "@/public/images/s2.jpg";
import s3Img from "@/public/images/s3s.jpg";
import s4Img from "@/public/images/s4.jpg";

const heroImgAlt = "Jarek Olszewski Fotograf";
const ImgClass = "h-full w-full object-cover image-scaleAnim";

export function HeroDesctop() {
    return (
        <div className="lg:flex hidden flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6 w-full items-center justify-center">
            <div className="lg:w-96 w-52 mt-60 lg:mt-0 overflow-hidden rounded-xl shadow-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "5s" }}
                    width={300}
                    height={500}
                    src={s1Img}
                    alt={heroImgAlt}
                />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center">
                <div className=" lg:w-40 h-40 overflow-hidden absolute lg:static -left-1 -rotate-12 lg:rotate-0 -bottom-16 rounded-xl shadow-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "16s" }}
                        width={150}
                        height={150}
                        src={s4Img}
                        alt={heroImgAlt}
                    />
                </div>
                <div className="w-40 h-40 lg:h-48 absolute lg:static -right-1 -bottom-16 overflow-hidden rounded-xl shadow-xl rotate-12 lg:rotate-0">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "18s" }}
                        width={150}
                        height={150}
                        src={s2Img}
                        alt={heroImgAlt}
                    />
                </div>
            </div>
            <div className="lg:w-60 h-96 absolute top-0 lg:static -z-10 w-full lg:flex overflow-hidden rounded-tl-[7rem] lg:rounded-xl shadow-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "8s" }}
                    width={300}
                    height={500}
                    src={heroImg}
                    alt={heroImgAlt}
                />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center ">
                <div className="w-40 lg:w-40 h-48 hidden lg:flex  overflow-hidden rounded-xl shadow-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "16s" }}
                        width={300}
                        height={500}
                        src={s1Img}
                        alt={heroImgAlt}
                    />
                </div>
                <div className="w-32 lg:w-40 h-32 hidden lg:flex overflow-hidden rounded-xl shadow-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "15s" }}
                        width={300}
                        height={500}
                        src={s2Img}
                        alt={heroImgAlt}
                    />
                </div>
            </div>
            <div className="lg:w-40 w-64 h-40 hidden lg:flex  overflow-hidden rounded-xl shadow-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "16s" }}
                    width={300}
                    height={500}
                    src={s3Img}
                    alt={heroImgAlt}
                />
            </div>
        </div>
    );
}
export function HeroMobile() {
    return (
        <div className="flex lg:hidden flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6 w-full items-center justify-center">
            <div className="lg:w-44 w-52 mt-60 lg:mt-0 rounded-xl shadow-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "5s" }}
                    width={300}
                    height={500}
                    src={s1Img}
                    alt={heroImgAlt}
                />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center">
                <div className=" lg:w-40 h-40 overflow-hidden absolute lg:static -left-1 -rotate-12 lg:rotate-0 -bottom-16 rounded-xl shadow-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "16s" }}
                        width={150}
                        height={150}
                        src={s4Img}
                        alt={heroImgAlt}
                    />
                </div>
                <div className="w-40 h-40 lg:h-48 absolute lg:static -right-1 -bottom-16 overflow-hidden rounded-xl shadow-xl rotate-12 lg:rotate-0">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "18s" }}
                        width={150}
                        height={150}
                        src={s2Img}
                        alt={heroImgAlt}
                    />
                </div>
            </div>
            <div className="lg:w-60 h-96 absolute top-0 lg:static -z-10 w-full lg:flex overflow-hidden rounded-tl-[7rem] lg:rounded-xl shadow-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "8s" }}
                    width={300}
                    height={500}
                    src={heroImg}
                    alt={heroImgAlt}
                />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center ">
                <div className="w-40 lg:w-40 h-48 hidden lg:flex  overflow-hidden rounded-xl shadow-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "16s" }}
                        width={300}
                        height={500}
                        src={s1Img}
                        alt={heroImgAlt}
                    />
                </div>
                <div className="w-32 lg:w-40 h-32 hidden lg:flex overflow-hidden rounded-xl shadow-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "15s" }}
                        width={300}
                        height={500}
                        src={s2Img}
                        alt={heroImgAlt}
                    />
                </div>
            </div>
            <div className="lg:w-40 w-64 h-40 hidden lg:flex  overflow-hidden rounded-xl shadow-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "16s" }}
                    width={300}
                    height={500}
                    src={s3Img}
                    alt={heroImgAlt}
                />
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section className="flex justify-center lg:py-20 py-2 opacityAnimation relative mb-6 mt-6 lg:mt-0 overflow-x-hidden w-full">
            <div className="flex justify-center  ">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col max-w-7xl justify-center items-center space-y-3 w-full ">
                        <div className="flex flex-col md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                            <h1 className="text-3xl w-max md:text-7xl font-bold relative mb-4 lg:mb-6">
                                Odkryj Sztukę Fotografii
                                <br /> Fotograf Siedlce
                                <span className="text-base md:text-xl absolute w-max -bottom-6 right-6 font-light">
                                    Jarek Olszewski
                                </span>
                            </h1>
                        </div>
                        <HeroDesctop />
                        <HeroMobile />
                    </div>
                </div>
            </div>
        </section>
    );
}
