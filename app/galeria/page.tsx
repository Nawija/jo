import Image from "next/image";
import Link from "next/link";

export default function Galeria() {
    return (
        <>
            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
                <div className="after:content relative mb-5 flex h-[600px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-20 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <span className="flex max-h-full max-w-full items-center justify-center">
                            {/* <Bridge /> */}
                        </span>
                        <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                    </div>
                    <p className="mb-4 text-4xl font-medium">Jarek Olszewski</p>
                    <h1 className="mb-4 mt-8 text-base font-bold uppercase tracking-widest">
                        06/12/2023
                    </h1>
                    <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                        Serdecznie witam, galeria zdjęć, które uwieczniły
                        wyjątkowe chwile z tego niepowtarzalnego wydarzenia.
                    </p>
                    <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                        Mam nadzieję, że każda z zamieszczonych fotografii
                        pozwoli na współdzielenie emocji i przeżyć związanych z
                        tym wyjątkowym momentem.
                    </p>
                    <div className="z-10 mt-6 space-x-2">
                        <a
                            className="pointer rounded-lg border border-white bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Pobierz Zdjecia
                        </a>
                        <a
                            className="pointer rounded-lg border border-white bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Pobierz Ulubione
                        </a>
                    </div>
                </div>
                <Link
                    href="/"
                    shallow
                    className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                    <Image
                        alt="fotografia jarek olszewski"
                        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                        style={{ transform: "translate3d(0, 0, 0)" }}
                        placeholder="blur"
                        src="/public/images/s1.jpg"
                        width={520}
                        height={380}
                        sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                    />
                </Link>
            </div>
            <footer className="p-6 text-center text-white/80 sm:p-12">
                Dziękuję za skorzystanie z moich usług, Podziel się opinią na{" "}
                <a
                    href="/"
                    target="_blank"
                    className="font-semibold text-white hover:text-white/80"
                    rel="noreferrer"
                >
                    Google
                </a>{" "}
                lub{" "}
                <a
                    href="/"
                    target="_blank"
                    className="font-semibold text-white hover:text-white/80"
                    rel="noreferrer"
                >
                    Facebook
                </a>
            </footer>
        </>
    );
}
