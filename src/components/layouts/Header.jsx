import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import logo from "/src/assets/Logo.png";
import { Link } from "react-router";
import Button from "../common/Button";

const Header = () => {
  return (
    <div className="bg-[#EEFFF9] py-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <Link>
              <Images imgSrc={logo} />
            </Link>
          </div>
          <div className="flex items-center gap-x-35.5">
            <nav>
              <ul className="flex items-center gap-x-11.25 text-[#1B1B1B] text-base font-medium">
                <li>
                  <Link className="hover:text-primary duration-200">Home</Link>
                </li>
                <li>
                  <Link className="hover:text-primary duration-200">About</Link>
                </li>
                <li>
                  <Link className="hover:text-primary duration-200">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary duration-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary duration-200">Blog</Link>
                </li>
                <li>
                  <Link className="hover:text-primary duration-200">
                    Testimonial
                  </Link>
                </li>
              </ul>
            </nav>
            <Button btnTxt={"Register"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
