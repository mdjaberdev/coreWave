import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import clientOne from "/src/assets/clientOne.png";
import clientTwo from "/src/assets/clientTwo.png";
import clientThree from "/src/assets/clientThree.png";
import { FaStar } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Our_clientsaying = () => {
  return (
    <div className="mt-23.5 mb-25">
      <h3 className="text-[45px] text-[#1B1B1B] font-semibold font-lato capitalize text-center pb-12">
        What our clients saying
      </h3>
      <Container>
        {/* <div className="flex justify-between"> */}
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          pagination={true}
          modules={[Pagination]}
        >
          <SwiperSlide>
            {/* Client One  */}
            <div className="w-106 h-118.25 bg-[#F1F1F1] rounded-[15px] text-center py-11.25 px-12.25">
              <div className="relative inline-block">
                <Images imgSrc={clientOne} className={"mx-auto"} />
                <div className="bg-[#343434] p-3 rounded-full  text-white hover:bg-primary duration-150 absolute top-3 left-0">
                  <ImQuotesLeft className="text-xl " />
                </div>
              </div>
              <h4 className="font-lato font-semibold text-2xl text-[#1B1B1B] pt-3.75">
                Excellent Team!
              </h4>
              {/* Start  */}
              <div className="flex gap-x-1.5 justify-center pt-1">
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
              </div>
              <p className="text-[#7B7B7B] text-base font-lato leading-6 w-77.5 pt-5">
                The customer service team at this company was very responsive
                and helpful when I had questions about their products.
              </p>
              <h5 className="text-lg text-[#1B1B1B] font-lato font-semibold pt-3.75">
                Farhan Rio
              </h5>
              <span className="text-sm text-[#7B7B7B] font-lato">
                Happy Seller
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            {/* Client Two  */}
            <div className="w-106 h-118.25 bg-[#F1F1F1] rounded-[15px] text-center py-11.25 px-12.25">
              <div className="relative inline-block">
                <Images imgSrc={clientTwo} className={"mx-auto"} />
                <div className="bg-[#343434] p-3 rounded-full  text-white hover:bg-primary duration-150 absolute top-3 left-0">
                  <ImQuotesLeft className="text-xl " />
                </div>
              </div>
              <h4 className="font-lato font-semibold text-2xl text-[#1B1B1B] pt-3.75">
                Greate Service
              </h4>
              {/* Start  */}
              <div className="flex gap-x-1.5 justify-center pt-1">
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
              </div>
              <p className="text-[#7B7B7B] text-base font-lato leading-6 w-77.5 pt-5">
                The customer service team at this company was very responsive
                and helpful when I had questions about their products.
              </p>
              <h5 className="text-lg text-[#1B1B1B] font-lato font-semibold pt-3.75">
                Alizabeth Nancy
              </h5>
              <span className="text-sm text-[#7B7B7B] font-lato">
                Happy Seller
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            {/* Client Three  */}
            <div className="w-106 h-118.25 bg-[#F1F1F1] rounded-[15px] text-center py-11.25 px-12.25">
              <div className="relative inline-block">
                <Images imgSrc={clientThree} className={"mx-auto"} />
                <div className="bg-[#343434] p-3 rounded-full  text-white hover:bg-primary duration-150 absolute top-3 left-0">
                  <ImQuotesLeft className="text-xl " />
                </div>
              </div>
              <h4 className="font-lato font-semibold text-2xl text-[#1B1B1B] pt-3.75">
                The Best Agency!
              </h4>
              {/* Start  */}
              <div className="flex gap-x-1.5 justify-center pt-1">
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
              </div>
              <p className="text-[#7B7B7B] text-base font-lato leading-6 w-77.5 pt-5">
                The customer service team at this company was very responsive
                and helpful when I had questions about their products.
              </p>
              <h5 className="text-lg text-[#1B1B1B] font-lato font-semibold pt-3.75">
                Jenny Wilson
              </h5>
              <span className="text-sm text-[#7B7B7B] font-lato">
                Happy Seller
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Client One  */}
            <div className="w-106 h-118.25 bg-[#F1F1F1] rounded-[15px] text-center py-11.25 px-12.25">
              <div className="relative inline-block">
                <Images imgSrc={clientOne} className={"mx-auto"} />
                <div className="bg-[#343434] p-3 rounded-full  text-white hover:bg-primary duration-150 absolute top-3 left-0">
                  <ImQuotesLeft className="text-xl " />
                </div>
              </div>
              <h4 className="font-lato font-semibold text-2xl text-[#1B1B1B] pt-3.75">
                Excellent Team!
              </h4>
              {/* Start  */}
              <div className="flex gap-x-1.5 justify-center pt-1">
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
              </div>
              <p className="text-[#7B7B7B] text-base font-lato leading-6 w-77.5 pt-5">
                The customer service team at this company was very responsive
                and helpful when I had questions about their products.
              </p>
              <h5 className="text-lg text-[#1B1B1B] font-lato font-semibold pt-3.75">
                Farhan Rio
              </h5>
              <span className="text-sm text-[#7B7B7B] font-lato">
                Happy Seller
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            {/* Client Two  */}
            <div className="w-106 h-118.25 bg-[#F1F1F1] rounded-[15px] text-center py-11.25 px-12.25">
              <div className="relative inline-block">
                <Images imgSrc={clientTwo} className={"mx-auto"} />
                <div className="bg-[#343434] p-3 rounded-full  text-white hover:bg-primary duration-150 absolute top-3 left-0">
                  <ImQuotesLeft className="text-xl " />
                </div>
              </div>
              <h4 className="font-lato font-semibold text-2xl text-[#1B1B1B] pt-3.75">
                Greate Service
              </h4>
              {/* Start  */}
              <div className="flex gap-x-1.5 justify-center pt-1">
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
                <FaStar className="text-[#FAB93C] text-[26px]" />
              </div>
              <p className="text-[#7B7B7B] text-base font-lato leading-6 w-77.5 pt-5">
                The customer service team at this company was very responsive
                and helpful when I had questions about their products.
              </p>
              <h5 className="text-lg text-[#1B1B1B] font-lato font-semibold pt-3.75">
                Alizabeth Nancy
              </h5>
              <span className="text-sm text-[#7B7B7B] font-lato">
                Happy Seller
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default Our_clientsaying;
