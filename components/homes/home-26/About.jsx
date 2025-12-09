import React from "react";
import Image from "next/image";
import Members from "@/components/homes/home-26/Members";
import { teamMembersRRHH } from "@/data/team";

export default function About() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-40px] !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] !text-center">
        <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
          <div className="md:!px-3 lg:!px-0 xl:!px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256.01 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/globe-2.svg"
              className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] solid-mono text-[#605dba] text-grape !mb-5 m-[0_auto]"
            >
              <path
                className="fill-secondary"
                d="M128.11 256h-.24a126.37 126.37 0 01-22-1.84 8 8 0 112.72-15.76A114.68 114.68 0 00128 240a8.06 8.06 0 018.07 8 8 8 0 01-7.94 8zm33.52-12.5a8 8 0 014.77-10.25 112.18 112.18 0 0017.66-8.25 8 8 0 018 13.85 128.36 128.36 0 01-20.19 9.46 8 8 0 01-10.26-4.79zm-97.5-4.56a128.83 128.83 0 01-18.27-12.78 8 8 0 1110.25-12.27 114.33 114.33 0 0016 11.2 8 8 0 11-8 13.85zm150.69-27.71a8 8 0 01-1-11.26A112.91 112.91 0 00225 184a8 8 0 0113.86 8 130.3 130.3 0 01-12.78 18.26 8 8 0 01-11.28 1zm-197.59-19A128.41 128.41 0 017.76 172a8 8 0 1115-5.49 112.8 112.8 0 008.29 17.67 8 8 0 11-13.84 8zM244.8 156.7a8 8 0 01-6.5-9.26A112.3 112.3 0 00240 128a8.23 8.23 0 018-8.26 7.81 7.81 0 018 8.76 124.89 124.89 0 01-1.92 21.72 8 8 0 01-9.26 6.48zM8 136.13a7.89 7.89 0 01-8-7.87s.61-15 1.86-22.18a8 8 0 1115.76 2.7A114.47 114.47 0 0016 128a8.09 8.09 0 01-8 8.13zm225.1-46.88a110.41 110.41 0 00-8.32-17.63 8 8 0 0113.83-8.08 129 129 0 019.52 20.17 8 8 0 01-15 5.54zM19.9 75.18A8 8 0 0117 64.26 126.41 126.41 0 0129.73 46 8 8 0 1142 56.21a112.72 112.72 0 00-11.17 16 8 8 0 01-10.93 3zm179.76-33.24a113.17 113.17 0 00-16-11.16 8 8 0 117.95-13.87 127.39 127.39 0 0118.3 12.75 8 8 0 01-10.24 12.28zM60.78 28.26a8 8 0 012.88-11 128 128 0 0120.18-9.44 8 8 0 115.52 15 112.17 112.17 0 00-17.63 8.31 8 8 0 01-11-2.88zm86.29-10.64A112.4 112.4 0 00128 16a8.17 8.17 0 01-8.19-8 7.84 7.84 0 017.81-8h.38a127.72 127.72 0 0121.8 1.86 8 8 0 01-2.71 15.76z"
              />
              <path
                className="fill-primary"
                d="M128 32a96 96 0 1096 96 96.11 96.11 0 00-96-96zm62.61 145.66a103 103 0 00-14.49-7.76 160.22 160.22 0 005-33.9h26.48a79.47 79.47 0 01-17.01 41.66zM48.4 136h26.48a161.6 161.6 0 005 33.9 104.11 104.11 0 00-14.5 7.76A79.47 79.47 0 0148.4 136zm17-57.66a103.14 103.14 0 0014.5 7.76 160.2 160.2 0 00-5 33.9H48.4a79.47 79.47 0 0117-41.66zM120 79.7a106.49 106.49 0 01-20-3.43c5.41-13 12.6-22.11 20-26zm0 16V120H90.86A145.12 145.12 0 0195 91.49a122.72 122.72 0 0025 4.21zm0 40.3v24.3a121.26 121.26 0 00-25 4.23A144.37 144.37 0 0190.86 136H120zm0 40.3v29.48c-7.4-3.94-14.59-13-20-26a104.12 104.12 0 0120-3.44zm16 0a106.21 106.21 0 0120 3.43c-5.4 13-12.59 22.11-20 26zm0-16V136h29.1a144.37 144.37 0 01-4.16 28.51 122.49 122.49 0 00-25-4.21zm0-40.3V95.7a121.14 121.14 0 0025-4.23 142.91 142.91 0 014.1 28.53H136zm0-40.3V50.24c7.41 3.94 14.6 13 20 26a104.36 104.36 0 01-20 3.46zm27.94-23.08a80.19 80.19 0 0115.25 10 88.15 88.15 0 01-8.19 4.21 98.1 98.1 0 00-7.12-14.21zm-79 14.21a86.72 86.72 0 01-8.12-4.25 80.12 80.12 0 0115.24-10 95.14 95.14 0 00-7.12 14.25zm0 114.34a98.11 98.11 0 007.12 14.21 80.12 80.12 0 01-15.24-10 86.72 86.72 0 018.12-4.21zm86.1 0a88.15 88.15 0 018.13 4.25 80.19 80.19 0 01-15.25 10 99.14 99.14 0 007.08-14.25zM181.1 120a161 161 0 00-5-33.9 104.57 104.57 0 0014.49-7.76 79.47 79.47 0 0117 41.66z"
              />
            </svg>
            <h4>Recursos Humanos</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida eget metus cras justo.
            </p>
          </div>
        </div>
        {/*/column */}
        <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
          <div className="md:!px-3 lg:!px-0 xl:!px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 255.98 213.34"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/code.svg"
              className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] solid-mono text-[#605dba] text-grape !mb-5 m-[0_auto]"
            >
              <path
                className="fill-secondary"
                d="M104 213.34a11 11 0 01-2.59-.32 10.64 10.64 0 01-7.76-12.93l48-192a10.66 10.66 0 0120.68 5.17l-48 192a10.66 10.66 0 01-10.33 8.08z"
              />
              <path
                className="fill-primary"
                d="M74.66 181.34a10.57 10.57 0 01-7.54-3.12l-64-64a10.67 10.67 0 010-15.08l64-64a10.67 10.67 0 0115.09 15.08l-56.46 56.47 56.46 56.46a10.65 10.65 0 01-7.55 18.19zm106.65 0a10.55 10.55 0 01-7.53-3.12 10.67 10.67 0 010-15.08l56.46-56.47-56.46-56.46a10.67 10.67 0 1115.08-15.09l64 64a10.68 10.68 0 010 15.09l-64 64a10.58 10.58 0 01-7.55 3.13z"
              />
            </svg>
            <h4>Marketing</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida eget metus cras justo.
            </p>
          </div>
        </div>
        {/*/column */}
        <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
          <div className="md:!px-3 lg:!px-0 xl:!px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 255.98 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/team.svg"
              className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] solid-mono text-[#605dba] text-grape !mb-5 m-[0_auto]"
            >
              <circle className="fill-primary" cx={128} cy="26.67" r="26.67" />
              <circle className="fill-primary" cx="202.67" cy={176} r="26.67" />
              <circle className="fill-primary" cx="53.33" cy={176} r="26.67" />
              <path
                className="fill-primary"
                d="M173.33 106.67H82.66a8 8 0 01-8-8v-5.33A29.35 29.35 0 01104 64h48a29.35 29.35 0 0129.33 29.32v5.33a8 8 0 01-8 8.02zM248 256h-90.67a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48A29.36 29.36 0 01256 242.67V248a8 8 0 01-8 8zm-149.33 0H8a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48a29.37 29.37 0 0129.33 29.33V248a8 8 0 01-8 8z"
              />
              <path
                className="fill-secondary"
                d="M29.33 136.13a8 8 0 01-8-8 107.1 107.1 0 0161.73-96.77 8 8 0 116.73 14.51 91 91 0 00-52.48 82.26 8 8 0 01-7.98 8zm197.34 0a8 8 0 01-8-8 91 91 0 00-52.48-82.26 8 8 0 116.74-14.51 107.09 107.09 0 0161.73 96.77 8 8 0 01-8 8zM128 234.8a105.08 105.08 0 01-11.15-.58 8 8 0 011.66-15.9 93.73 93.73 0 0019.6-.06 8 8 0 011.76 15.9 110.68 110.68 0 01-11.87.64z"
              />
            </svg>
            <h4>Gestión</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida eget metus cras justo.
            </p>
          </div>
        </div>
        {/*/column */}
        <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
          <div className="md:!px-3 lg:!px-0 xl:!px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/devices.svg"
              className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] solid-mono text-[#605dba] text-grape !mb-5 m-[0_auto]"
            >
              <path
                className="fill-primary"
                d="M226.67 0H80a29.35 29.35 0 00-29.33 29.33v13.33H72v-8a13.34 13.34 0 0113.33-13.33h136a13.34 13.34 0 0113.33 13.33v186.67a13.35 13.35 0 01-13.33 13.33h-82.74A44.07 44.07 0 01132.7 256h94a29.33 29.33 0 0029.3-29.33V29.33A29.35 29.35 0 00226.67 0z"
              />
              <path
                className="fill-secondary"
                d="M97.17 64h-77C9 64 0 73.87 0 86v148c0 12.13 9 22 20.16 22h77c11.12 0 20.16-9.87 20.16-22V86c.01-12.13-9.03-22-20.15-22zm5.5 168c0 4.42-3.28 8-7.33 8H22c-4.05 0-7.33-3.58-7.33-8V85.33c0-4.42 3.28-8 7.33-8h3.66c4.05 0 7.33 3.58 7.33 8s3.28 8 7.33 8H77c4.05 0 7.33-3.59 7.33-8s3.28-8 7.33-8h3.66c4 0 7.33 3.58 7.33 8V232z"
              />
              <path
                className="fill-primary"
                d="M154.67 186.67A13.33 13.33 0 10168 200a13.35 13.35 0 00-13.33-13.33z"
              />
            </svg>
            <h4>Investigación</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida eget metus cras justo.
            </p>
          </div>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      {/*/.row */}
      <div className="flex flex-wrap mx-[-7.5px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !mx-auto xl:!order-2 lg:!order-2 px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0">
          <figure className="m-0 p-0">
            <Image
              className="!w-[800px] !h-[615px] object-cover"
              srcSet="/assets/img/illustrations/3d5@2x.png 2x"
              alt="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuF_FXlwSEj016MYOs_fcaBE98MabbL4s_Q&s"
              width={800}
              height={615}
            />
          </figure>
        </div>
        {/*/column */}
        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full !mr-auto px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0">
          <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35 !tracking-[0.02rem] !mb-3">
            Our Solutions
          </h2>
          <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-5 xxl:!pr-5">
            Just sit &amp; relax while we take care of your business needs.
          </h3>
          <p className="!mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget
            risus varius blandit sit amet non magna. Praesent commodo cursus
            magna.
          </p>
            <Members members={teamMembersRRHH} />
          {/*/.row */}
        </div>
        {/*/column */}
      </div>
    </>
  );
}
