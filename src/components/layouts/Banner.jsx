import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import bannerModel from "/src/assets/bannerModel.png";
import Button from "../common/Button";
import { FaPlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-[#EEFFF9]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-[#1B1B1B] text-[60px] font-light w-131.5 leading-[71.5px]">
              Empower Your Team{" "}
              <span className="font-bold">With CoreWave's</span>
            </h1>
            <p className="text-[#717171] text-[20px] w-127.75 leading-7.5 mt-9.25">
              Boost Productivity and Wellness in Your Organization with
              CoreWave's Advanced Tools and Techniques
            </p>
            <div className="flex gap-x-5 mt-12.75">
              <Button btnTxt={"Explore More"} />
              <button
                className={
                  "py-3.5 px-6.25 border border-primary text-[#1B1B1B] rounded-[5px] cursor-pointer flex gap-x-3 items-center font-semibold"
                }
              >
                <div className="py-1.25 pl-1.75 pr-0.75 bg-[#DAF6EB] rounded-full">
                  <FaPlay className="text-primary" />
                </div>
                Watch Video
              </button>
            </div>
          </div>
          <div className="">
            <Images imgSrc={bannerModel} />
          </div>
        </div>
      </Container>
      
    </div>
  );
};

export default Banner;
