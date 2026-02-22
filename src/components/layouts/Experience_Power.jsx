import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import Images from "../common/Images";
import ExperienceImg from "/src/assets/ExprienceImg.png";

const Experience_Power = () => {
  return (
    <div className="mt-21.25 mb-42.5">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-[#1B1B1B] text-[45px] font-semibold w-115 leading-13.5">
              Experience The Power Of Corewave
            </h3>
            <p className="text-[#7B7B7B] text-base w-137.5 leading-7 pt-7.25 pb-11.25">
              Are you ready to take your business to the next level? Look no
              further than Corewave. Our innovative technology and expert team
              can help you unlock your business's full potential. By harnessing
              the power of Corewave, you can streamline your operations, improve
              efficiency
            </p>
            <Button
              className={"!bg-[#DAF6EB] !text-primary"}
              btnTxt={"Learn More"}
            />
          </div>
          <div className="">
            <Images imgSrc={ExperienceImg} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience_Power;
