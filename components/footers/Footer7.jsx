"use client";
import { footerLinks, footerLinks2 } from "@/data/footerLinks";
import { socialLinks } from "@/data/socials";
import Link from "next/link";
import React from "react";

export default function Footer7() {
  return (
    <footer className="bg-gradient-reverse-purple">
      <div className="container pt-[4.5rem] xl:pt-[7rem] lg:pt-[7rem] md:pt-[7rem] pb-[1.75rem]">

        {/*/.card */}
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <div className="widget">
              <h3 className="h2 !mb-[.75rem] xl:!text-[1.35rem] !text-[calc(1.26rem_+_0.12vw)] !leading-[1.35]">
                Join the Community
              </h3>
              <p className="lead text-[0.95rem] !leading-[1.6] font-medium !mb-5">
                Let's make something great together. We are trusted by over
                5000+ clients. Join them by using our services and grow your
                business.
              </p>
              <a
                href="#"
                className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !text-[.85rem]"
              >
                Join Us
              </a>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full lg:!ml-[16.66666667%] xl:!ml-[16.66666667%] !mt-[30px] xl:!mt-0 lg:!mt-0">
            <div className="widget">
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Need Help?
              </h4>
              <ul className="pl-0 list-none text-inherit !mb-0">
                {footerLinks2.map((elm, i) => (
                  <li key={i} className={i != 0 ? "!mt-[0.35rem]" : ""}>
                    <Link
                      className="!text-[#60697b] hover:!text-[#747ed1]"
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
          <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] xl:!mt-0 lg:!mt-0">
            <div className="widget">
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Learn More
              </h4>
              <ul className="pl-0 list-none text-inherit !mb-0">
                {footerLinks.map((elm, i) => (
                  <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                    <Link
                      className="!text-[#60697b] hover:!text-[#747ed1]"
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
          <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] xl:!mt-0 lg:!mt-0">
            <div className="widget">
              <h4 className="widget-title !mb-3 !text-[1rem] !leading-[1.45]">
                Get in Touch
              </h4>
              <address className="not-italic !leading-[inherit] !mb-4">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
              <a
                href="mailto:first.last@email.com"
                className="!text-[#60697b] hover:!text-[#60697b]"
              >
                info@email.com
              </a>
              <br />
              00 (123) 456 78 90
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
        </div>
        {/*/.row */}
        <hr className="!mt-13 xl:!mt-20 lg:!mt-20 md:!mt-20 !mb-7" />
        <div className="xl:!flex lg:!flex md:!flex items-center justify-between">
          <p className="!mb-2 xl:!mb-0 lg:!mb-0">
            © {new Date().getFullYear()} Sandbox. All rights reserved.
          </p>
          <nav className="nav social xl:!text-right lg:!text-right md:!text-right">
            {socialLinks.map((elm, i) => (
              <a
                key={i}
                className="m-[0_0_0_.7rem] max-md:m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                href={elm.href}
              >
                <i
                  className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-[${elm.color}] text-[1rem]`}
                />
              </a>
            ))}
          </nav>
          {/* /.social */}
        </div>
        {/* /div */}
      </div>
      {/* /.container */}
    </footer>
  );
}
