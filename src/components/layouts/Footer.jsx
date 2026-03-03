import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import logo from "/src/assets/Logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { Link } from "react-router";
import Button from "../common/Button";

const Footer = () => {
  return (
    <div className="mt-25 mb-3.5">
      <Container>
        <div className="flex justify-between pb-10.5 border-b border-[#E0E0E0]">
          {/* Logo  */}
          <div className="">
            <Images imgSrc={logo} />
            <div className="text-[#7B7B7B] text-sm font-lato mt-6.5">
              <p>mukimsdesign@gmail.com</p>
              <p>+88 01767630044</p>
            </div>
            <div className="flex  gap-x-1.75 mt-5">
              <div className="h-7 w-7 flex justify-center items-center text-white p-2 rounded-full bg-primary cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="h-7 w-7 flex justify-center items-center text-white p-2 rounded-full bg-primary cursor-pointer">
                <FaTwitter />
              </div>
              <div className="h-7 w-7 flex justify-center items-center text-white p-2 rounded-full bg-primary cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="h-7 w-7 flex justify-center items-center text-white p-2 rounded-full bg-primary cursor-pointer">
                <FaBehance />
              </div>
            </div>
          </div>
          {/* Services */}
          <div className="">
            <h4 className="text-[#1B1B1B] text-xl font-semibold font-lato mb-6.25">
              Services
            </h4>
            <ul className="space-y-2.25 text-[#7B7B7B] text-sm font-lato">
              <li>
                <Link>Web Design</Link>
              </li>
              <li>
                <Link>Web Development</Link>
              </li>
              <li>
                <Link>SEO Marketing</Link>
              </li>
              <li>
                <Link>UI/UX Analysis</Link>
              </li>
              <li>
                <Link>Digital Marketing</Link>
              </li>
            </ul>
          </div>
          {/* Help  */}
          <div className="">
            <h4 className="text-[#1B1B1B] text-xl font-semibold font-lato mb-6.25">
              Help
            </h4>
            <ul className="space-y-2.25 text-[#7B7B7B] text-sm font-lato">
              <li>
                <Link>Account</Link>
              </li>
              <li>
                <Link>Support Center</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="">
            <h4 className="text-[#1B1B1B] text-xl font-semibold font-lato mb-6.25">
              Contact Us
            </h4>
            <div className="input mb-3.5">
              <input
                type="email"
                placeholder="Enter your mail"
                className="py-3.25 px-3.75 w-84.25 text-[#BDBDBD] text-sm font-lato border border-[#DDDDDD] rounded-[5px]"
              />
            </div>
            <Button btnTxt={"Request & Callback"} />
          </div>
        </div>
        <p className="text-[#7B7B7B] text-sm text-center font-medium font-lato mt-3.25">
          @2023 CoreWave. All copyrights reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
