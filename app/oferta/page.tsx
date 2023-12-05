"use client";

import { useState } from "react";
import Image from "next/image";
import HeroImg from "@/public/images/jarek-olszewski.jpg";
import Link from "next/link";
import { MainButton } from "@/ui/buttons/MainButton";

export default function OfertaPage() {
    const initialValues = Array(10).fill(null);
    const [values, setValues] = useState(initialValues);

    const totalValue = values.reduce((acc, cur) => acc + (cur || 0), 0);

    const handleRadioChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        categoryIndex: number
    ) => {
        const { value } = event.target;
        setValues((prevValues) => [
            ...prevValues.slice(0, categoryIndex),
            parseInt(value),
            ...prevValues.slice(categoryIndex + 1),
        ]);
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        categoryIndex: number
    ) => {
        const { value, checked } = event.target;
        setValues((prevValues) => [
            ...prevValues.slice(0, categoryIndex),
            checked ? parseInt(value) : null,
            ...prevValues.slice(categoryIndex + 1),
        ]);
    };

    return (
        <div className="flex flex-wrap items-start justify-center max-w-screen-2xl mx-auto relative mt-[45vh] md:mt-[60vh] opacityAnimation mb-20">
            <div className="p-2 fixed lg:left-1/2 left-[45%] -translate-x-1/2 lg:top-[60%] top-[45%] -translate-y-1/2 z-10 animate-bounce rounded-full text-white lg:text-black">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
            <div className="w-full h-[30vh] fixed left-0 top-0 lg:top-[3.2rem] ">
                <div className="lg:-z-10">
                    <Image
                        className="rounded-lg"
                        src={HeroImg}
                        alt="fotograf siedlce"
                    />
                </div>
                <div className="absolute left-1/2 lg:left-[60%] top-[73%] lg:top-[100%] text-white text-center lg:text-start lg:text-4xl lg:font-normal font-semibold -translate-x-1/2 -translate-y-1/2 text-lg tracking-wide">
                    <p>Wypełnij Formularz</p>
                    <p className="-my-1 lg:my-0">lub</p>
                    <p className="mb-3">Zadzwoń</p>
                    <div className="flex items-center justify-start">
                        <Link
                            href="tel:570750307"
                            className="lg:py-2 py-2.5 flex items-center justify-center px-4 z-10 rounded-2xl shadow-xl shadow-emerald-400/20 font-medium text-sm lg:text-base w-max bg-gradient-to-bl from-emerald-600 to-emerald-800 lg:text-white"
                        >
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-3 fill-green-500 text-green-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                />
                            </svg>
                            (+48) 570 750 307
                        </Link>
                    </div>
                </div>
            </div>
            <form
                className="p-6 rounded-lg border bg-white text-black shadow-xl z-20"
                action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
                method="post"
                accept-charset="UTF-8"
            >
                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">
                        Jakiej usługi potrzebujesz?
                    </p>
                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="radio"
                                name="PageType"
                                value="2400"
                                checked={values[0] === 2400}
                                onChange={(e) => handleRadioChange(e, 0)}
                            />
                            Fotograf ślubny
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="PageType"
                                value="900"
                                checked={values[0] === 900}
                                onChange={(e) => handleRadioChange(e, 0)}
                            />
                            Reportaz Chrztu
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="PageType"
                                value="500"
                                checked={values[0] === 500}
                                onChange={(e) => handleRadioChange(e, 0)}
                            />
                            Sesja indywidualna
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="PageType"
                                value="700"
                                checked={values[0] === 700}
                                onChange={(e) => handleRadioChange(e, 0)}
                            />
                            Studniówka
                        </label>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t1">
                        Opisz swoją wizję
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-lg border"
                        type="text"
                        id="t1"
                        name="OpisFirmy"
                    />
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t4">
                        Posiadasz identyfikację wizualną firmy?
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-lg border"
                        type="text"
                        id="t4"
                        name="IdentyfikacjaFirmy"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                        Opisz czy posiadasz kolory firmowe, logo lub wykonane
                        grafiki jak wizytówki czy grafiki socialmedia. Będzie to
                        miało wpływ na ujednolicenie strony z Twoją marką.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t5">
                        Wygląd strony - Inspirację
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-lg border"
                        type="text"
                        id="t5"
                        placeholder="Pomoze okreslic wyglad strony internetowej"
                        name="Inspiracja"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                        Jeżeli istnieją strony, które Ci się podobają to załącz
                        powyżej linki do nich lub skorzystaj z takich źródeł
                        inspiracji jak{" "}
                    </p>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Wydrukowanie Zdjęć?</p>
                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="radio"
                                name="Domena"
                                value="70"
                                checked={values[1] === 70}
                                onChange={(e) => handleRadioChange(e, 1)}
                            />
                            Tak
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="Domena"
                                value="0"
                                checked={values[1] === 0}
                                onChange={(e) => handleRadioChange(e, 1)}
                            />
                            Nie
                        </label>
                    </div>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Album z zdjęciami?</p>
                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="radio"
                                name="Hosting"
                                value="200"
                                checked={values[2] === 200}
                                onChange={(e) => handleRadioChange(e, 2)}
                            />
                            Tak
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="Hosting"
                                value="0"
                                checked={values[2] === 0}
                                onChange={(e) => handleRadioChange(e, 2)}
                            />
                            Nie
                        </label>
                    </div>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Opcje dodatkowe:</p>
                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="checkbox"
                                name="Sekcja Blog"
                                value="100"
                                checked={values[4] === 100}
                                onChange={(e) => handleCheckboxChange(e, 4)}
                            />
                            Prezent niespodzianka
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                name="Sekcja News"
                                value="100"
                                checked={values[5] === 100}
                                onChange={(e) => handleCheckboxChange(e, 5)}
                            />
                            Dodatkowye ujęcia
                        </label>
                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                name="Formularz Kontaktowy"
                                value="50"
                                checked={values[6] === 50}
                                onChange={(e) => handleCheckboxChange(e, 6)}
                            />
                            Zdjęcia w wersji B&W i kolorowej
                        </label>
                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                name="Mapa Google 2D/3D"
                                value="50"
                                checked={values[7] === 50}
                                onChange={(e) => handleCheckboxChange(e, 7)}
                            />
                            Licencja na wykorzystanie zdjęć w celu komercyjnym
                        </label>
                    </div>
                </div>

                <div className="flex items-center justify-between px-1 mt-8 md:mt-16">
                    <p className="font-semibold text-green-700 w-max">
                        Cena: {totalValue}
                    </p>
                    <MainButton className="btn-main py-2 px-4">
                        Wyślij Formularz
                    </MainButton>
                </div>
            </form>
        </div>
    );
}
