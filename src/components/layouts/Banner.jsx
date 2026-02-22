import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import bannerModel from "/src/assets/bannerModel.png";
import Button from "../common/Button";

const Banner = () => {
  return (
    <div className="bg-[#EEFFF9]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-[#1B1B1B] text-[60px] font-light w-[526px] leading-[71.5px]">
              Empower Your Team
              <span className="font-bold">With CoreWave's</span>
            </h1>
            <p className="text-[#717171] text-[20px] w-127.75 leading-7.5 mt-[37px]">
              Boost Productivity and Wellness in Your Organization with
              CoreWave's Advanced Tools and Techniques
            </p>
           <div className="flex gap-x-5 mt-[51px]">
             <Button btnTxt={"Explore More"}/>
            <Button className={"bg-transparent border border-[#06C279] !text-[#1B1B1B]"} btnTxt={"Watch Video"}/>
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
