import Footer24 from "@/components/footers/Footer24";
import Header25 from "@/components/headers/Header25";
import Hero from "@/components/homes/home-27/Hero";
import Services from "@/components/homes/home-27/Services";
import React from "react";
import Footer5 from "@/components/footers/Footer5";

export const metadata = {
  title:
    "Demo 27 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function DemoPage27() {
  return (
    <>
      <div className="color-navy demo27">
        <div className="grow shrink-0">
          <Header25 />

          <>
            <Hero />
            {/* /section */}
              <Services />
            {/* /section */}

          </>
        </div>
        <Footer5 hasMarginTop={false} />
      </div>
    </>
  );
}
