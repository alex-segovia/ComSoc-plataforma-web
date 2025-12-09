import React from "react";
import Image from "next/image";
import Members from "@/components/homes/home-26/Members";
import { teamMembersRRHH } from "@/data/team";

export default function About() {
  return (
    <>
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
