import React from "react";
import Button from "../common/Button";
import Images from "../common/Images";
import freeModel from "/src/assets/freeTrialModel.png";
import Container from "../common/Container";

const Free_trial = () => {
  return (
    <div className=" ">
      <div className="bg-primary pl-5 py-[80px] relative">
        <Container>
          <div className="">
            <h3 className="text-white text-[45px] font-semibold font-lato capitalize">
              Don’t worries, start your free trial today!
            </h3>
            <Button
              btnTxt={"Get Free Trial"}
              className={"!bg-[#2F2F2F] mt-[38px]"}
            />
            <Images
              imgSrc={freeModel}
              className={"absolute -bottom-1 right-[170px]"}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Free_trial;
