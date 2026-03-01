import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import WeofferOne from "/src/assets/WeoffervarietyOne.png";
import WeofferThree from "/src/assets/WeoffervarietyThree.png";
import WeofferFour from "/src/assets/WeoffervarietyFour.png";
import Button from "../common/Button";

const Weoffer_variety = () => {
  return (
    <div className="bg-[#EEFFF9] rounded-tl-[350px] rounded-br-[350px] py-17.5 mb-22.5">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <div className="flex gap-x-10">
              <div className="w-78 h-80.5 bg-white py-10.5 px-12 hover:bg-primary  group mt-50 rounded-[10px] shadow-[0_0_20px_2px_rgba(0,0,0,0.05)]">
                <Images
                  imgSrc={WeofferOne}
                  className={"group-hover:bg-white duration-500"}
                />
                <h4 className="text-[#1B1B1B] text-[20px] font-semibold py-3.5 group-hover:text-white duration-500">
                  Web Development
                </h4>
                <p className="text-[#7B7B7B] text-base w-66.25 leading-6 group-hover:text-white duration-500">
                  Web development is the art of creating engaging and visually
                  appealing websites{" "}
                </p>
              </div>
              <div className="w-78 h-80.5 bg-white py-10.5 px-12 hover:bg-primary group rounded-[10px] shadow-[0_0_20px_2px_rgba(0,0,0,0.05)]">
                <Images
                  imgSrc={WeofferOne}
                  className={"group-hover:bg-white duration-200"}
                />
                <h4 className="text-[#1B1B1B] text-[20px] font-semibold py-3.5 group-hover:text-white duration-500">
                  UI/UX Analysis
                </h4>
                <p className="text-[#7B7B7B] text-base w-66.25 leading-6 group-hover:text-white duration-500">
                  Web development is the art of creating engaging and visually
                  appealing websites{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-x-10 mt-5">
              <div className="w-78 h-80.5 bg-white py-10.5 px-12 hover:bg-primary  group  rounded-[10px] shadow-[0_0_20px_2px_rgba(0,0,0,0.05)]">
                <Images
                  imgSrc={WeofferThree}
                  className={"group-hover:bg-white duration-500"}
                />
                <h4 className="text-[#1B1B1B] text-[20px] font-semibold py-3.5 group-hover:text-white duration-500">
                  SEO Marketing
                </h4>
                <p className="text-[#7B7B7B] text-base w-66.25 leading-6 group-hover:text-white duration-500">
                  Web development is the art of creating engaging and visually
                  appealing websites{" "}
                </p>
              </div>
              <div className="w-78 h-80.5 bg-white hover:bg-primary group rounded-[10px] shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] -mt-45">
                <Images
                  imgSrc={WeofferFour}
                  className={"group-hover:bg-white duration-200"}
                />
                <h4 className="text-[#1B1B1B] text-[20px] font-semibold py-3.5 group-hover:text-white duration-500">
                  Graphic Design
                </h4>
                <p className="text-[#7B7B7B] text-base w-66.25 leading-6 group-hover:text-white duration-500">
                  Web development is the art of creating engaging and visually
                  appealing websites{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-[#1B1B1B] text-[45px] font-semibold w-115 leading-13.5">
              We offer a variety of services such as
            </h3>
            <p className="text-[#7B7B7B] text-base w-137.5 leading-7 pt-7.25 pb-11.25">
              At our company, we pride ourselves on offering a variety of
              services to meet the diverse needs of our clients. Whether you're
              looking for marketing assistance, website design, or IT support,
              we've got you covered
            </p>
            <Button
              className={"!bg-[#DAF6EB] !text-primary"}
              btnTxt={"All Services"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Weoffer_variety;
