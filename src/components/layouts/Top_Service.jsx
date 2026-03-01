import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { CiFaceSmile } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";
import CountUp from "react-countup";

const Top_Service = () => {
  return (
    <div>
      <div className="bg-[#F5F5F5] pt-17.5 pb-19.5 rounded-tl-[300px] rounded-br-[300px]">
        <Container>
          <div className="flex items-center gap-x-40.75">
            <div className="">
              <h3 className="text-[#1B1B1B] text-[45px] capitalize font-semibold font-lato w-107.5 leading-13.5">
                Take your business to new heights with our top services.
              </h3>
              <p className="pt-5 text-[#7B7B7B] text-base font-lato w-135.75 leading-6.5">
                At our company, we pride ourselves on offering a variety of
                services to meet the diverse needs of our clients. Whether
                you're looking for marketing assistance, website design, or IT
                support, we've got you covered
              </p>
              <Button btnTxt={"Get In Touch Now"} className={"mt-9.25"} />
            </div>
            <div className="flex gap-x-10">
              <div className="space-y-10">
                <div className="h-58.75 w-70 bg-white hover:bg-[#7AE0B9] group rounded-[15px] py-10 px-18 flex justify-center items-center shadow-[0_0_20px_2px_rgba(0,0,0,0.05)]">
                  <div className="text-center">
                    <div className="">
                      <CiFaceSmile className="text-[90px] mx-auto group-hover:text-white" />
                    </div>
                    <p className=" group-hover:text-white text-xl font-semibold font-lato pt-2">
                      Project Done
                    </p>
                    <h5 className="group-hover:text-white text-[30px] font-semibold font-lato">
                      <CountUp end={1200} duration={5} /> +
                    </h5>
                  </div>
                </div>
                <div className="h-58.75 w-70 bg-white hover:bg-[#7AE0B9] group rounded-[15px] py-10 px-18 flex justify-center items-center shadow-[0_0_20px_2px_rgba(0,0,0,0.05)]">
                  <div className="text-center">
                    <RiUserStarLine className="text-[90px] mx-auto group-hover:text-white" />
                    <p className=" group-hover:text-white text-xl font-semibold font-lato pt-2">
                      Happy Clients
                    </p>
                    <h5 className="group-hover:text-white text-[30px] font-semibold font-lato">
                      <CountUp end={500} duration={5} /> +
                    </h5>
                  </div>
                </div>
              </div>
              <div className="space-y-10 mt-23.75">
                <div className="h-58.75 w-70 bg-white hover:bg-[#7AE0B9] group rounded-[15px] py-10 px-18 flex justify-center items-center shadow-[0_0_20px_2px_rgba(0,0,0,0.05)]">
                  <div className="text-center">
                    <IoBriefcaseOutline className="text-[90px] mx-auto group-hover:text-white" />
                    <p className=" group-hover:text-white text-xl font-semibold font-lato pt-2">
                      Running Work
                    </p>
                    <h5 className="group-hover:text-white text-[30px] font-semibold font-lato">
                      <CountUp end={120} duration={5} /> +
                    </h5>
                  </div>
                </div>
                <div className="h-58.75 w-70 bg-white hover:bg-[#7AE0B9] group rounded-[15px] py-10 px-18 flex justify-center items-center shadow-[0_0_20px_2px_rgba(0,0,0,0.05)]">
                  <div className="text-center">
                    <GiAchievement className="text-[90px] mx-auto group-hover:text-white" />
                    <p className=" group-hover:text-white text-xl font-semibold font-lato pt-2">
                      Achevement
                    </p>
                    <h5 className="group-hover:text-white text-[30px] font-semibold font-lato">
                      <CountUp end={150} duration={5} /> +
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Top_Service;
