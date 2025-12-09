"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";
export default function Footer5({ hasMarginTop = true }) {
  return (
    <footer
      className={`bg-[#21262c] opacity-100 !text-[#cacaca] ${
        hasMarginTop ? "!mt-5 xl:!mt-24 lg:!mt-24 md:!mt-24" : ""
      } `}
    >
      <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <Image
                className="!mb-4"
                srcSet="/assets/img/logo-light@2x.png 2x"
                alt="image"
                src="/assets/img/logo-light.png"
                width={134}
                height={26}
              />
              <p className="!mb-4">
                © {new Date().getFullYear()} Sandbox.
                <br className="hidden xl:block lg:block !text-[#cacaca]" />
                All rights reserved.
              </p>
              <nav className="nav social social-white">
                {socialLinks.map((elm, i) => (
                  <a
                    key={i}
                    className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href={elm.href}
                  >
                    <i
                      className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem]`}
                    />
                  </a>
                ))}
              </nav>
              {/* /.social */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3">Get in Touch</h4>
              <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
              <a
                className="!text-[#cacaca] hover:!text-[#3f78e0]"
                href="mailto:first.last@email.com"
              >
                info@email.com
              </a>
              <br />
              00 (123) 456 78 90
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3">Learn More</h4>
              <ul className="pl-0 list-none !mb-0">
                {footerLinks.map((elm, i) => (
                  <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                    <Link
                      className="!text-[#cacaca] hover:!text-[#3f78e0]"
                      href={elm.href}
                    >
                      {elm.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          {/* /column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </footer>
  );
}
