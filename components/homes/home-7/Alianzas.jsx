import { brandImages } from "@/data/brands";
import Image from "next/image";
import React from "react";

export default function Alianzas() {
    return (
        <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
            <div className="container pt-10 xl:pt-14 lg:pt-14 md:pt-14 pb-8 xl:pb-10 lg:pb-10 md:pb-10">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0">
                    <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!mt-2 lg:!mt-2 !mt-[50px]">
                        <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                            Nuestras Alianzas
                        </h2>
                        <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 xxl:!pr-5">
                            Contamos con más de ... alianzas
                        </h3>
                    </div>
                    {/* /column */}
                    <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] xl:!mt-0 lg:!mt-0">
                        <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] !mt-[-70px]">
                            {brandImages.map((src, index) => (
                                <div
                                    className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[70px]"
                                    key={index}
                                >
                                    <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                                        <Image src={src} alt="image" width="450" height="301" />
                                    </figure>
                                </div>
                            ))}
                        </div>
                        {/*/.row */}
                    </div>
                    {/* /column */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container */}

            {/* /.container */}
        </section>
    );
}