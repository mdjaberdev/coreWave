import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import projectOne from '/src/assets/projectOne.png'
import projectTwo from '/src/assets/projectTwo.png'
import projectThree from '/src/assets/projectThree.png'
import Button from "../common/Button";

const Ourproject = () => {
  return (
    <div className="mb-25">
      <Container>
        <div className="text-center">
          <h3 className="text-[#1B1B1B] text-[45px] font-semibold capitalize">
            our latest project
          </h3>
        </div>
        <div className="flex justify-center gap-x-18.25 mt-8.25">
          <button className="text-[#7B7B7B] text-base font-medium cursor-pointer">
            Web Development
          </button>
          <button className="text-[#7B7B7B] text-base font-medium cursor-pointer">
            UI/UX Design
          </button>
          <button className="text-[#7B7B7B] text-base font-medium cursor-pointer">
            Graphic Design
          </button>
          <button className="text-[#7B7B7B] text-base font-medium cursor-pointer">
            Motion Graphic
          </button>
        </div>
        <div className="flex  gap-x-5 mt-13">
          <div className="text-center">
            <Images imgSrc={projectOne} />
            <h4 className="text-[#1B1B1B] text-[22px] font-semibold mt-5">
              Portfolio Landing Page
            </h4>
            <p className="text-[#7B7B7B] text-base px-[40px] leading-6">
              Web development is the art of creating engaging and visually
              appealing websites{" "}
            </p>
          </div>
          <div className="text-center">
            <Images imgSrc={projectTwo} />
            <h4 className="text-[#1B1B1B] text-[22px] font-semibold mt-5">
              Portfolio Landing Page
            </h4>
            <p className="text-[#7B7B7B] text-base px-[40px] leading-6">
              Web development is the art of creating engaging and visually
              appealing websites{" "}
            </p>
          </div>
          <div className="text-center">
            <Images imgSrc={projectThree} />
            <h4 className="text-[#1B1B1B] text-[22px] font-semibold mt-5">
              Portfolio Landing Page
            </h4>
            <p className="text-[#7B7B7B] text-base px-[40px] leading-6">
              Web development is the art of creating engaging and visually
              appealing websites{" "}
            </p>
          </div>
        </div>
        <div className="text-center mt-11">
          <Button btnTxt={"View All Projects"} />
        </div>
      </Container>
    </div>
  );
}

export default Ourproject;
