import React from "react";
import { IoMdContact } from "react-icons/io";
import { TbWorldSearch } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";
import noopImg from "../assets/Image/noop.svg";
import noobImg2 from "../assets/Image/icon10.svg";
import nooobImg3 from "../assets/Image/icon-18.svg";
import noobImg4 from "../assets/Image/icon-16.svg";
import noobImg5 from "../assets/Image/icon-14.svg";
import noobImg6 from "../assets/Image/icon-13.svg";
import noobImg7 from "../assets/Image/icon-12.svg";
import noobImg8 from "../assets/Image/icon09.svg";

const BannerOne = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-10">
      <div className="grid grid-cols-1  gap-2 md:grid-cols-3 place-items-start md:place-items-center   bg-gradient-to-r from-[#b6ccf8] to-[#e4f5fe] h-80 md:h-44 rounded-lg">
        <div className="flex justify-center items-center gap-6 mt-4 ml-6">
          <div>
            {/* icon */}
            <IoMdContact className="text-6xl p-2 bg-white fill-orange-300 rounded-lg " />
          </div>
          <div>
            <h2 className="text-4xl font-bold">253,085</h2>
            <p className="text-sm text-gray-500 tracking-wider font-semibold">
              Student Enrolled
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 ml-6">
          <div>
            {/* icon */}
            <SlBookOpen className="text-6xl p-3 bg-white fill-rose-500 rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-bold">252</h2>
            <p className="text-sm text-gray-500 tracking-wider font-semibold">
              Total Course
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 ml-6">
          <div>
            <TbWorldSearch className="text-6xl p-3 bg-white fill-indigo-400/50 rounded-lg mr-4" />
          </div>
          <div>
            <h2 className="text-4xl text- font-bold">127</h2>
            <p className="text-sm text-gray-500 tracking-wider font-semibold">
              Countries
            </p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <h2 className="text-center text-3xl md:text-5xl  font-bold max-w-[500px]  md:max-w-[750px] mx-auto text-[#002058]">
          Unlimited access to 360+ courses and 1,600+ hands-on labs
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 md:place-items-center  gap-8 md:gap-0 py-20">
          <img
            src={noopImg}
            alt="noopImg"
            className="p-2 md:p-4 bg-gray-300 shadow-lg rounded-lg  translate-x-0 hover:-translate-y-4 duration-500"
          />
          <img
            src={noobImg2}
            alt="noobImg2"
            className="p-2 md:p-4 bg-indigo-400/50  shadow-lg rounded-lg  translate-x-0 hover:-translate-y-4 duration-500 "
          />
          <img
            src={nooobImg3}
            alt="nooobImg3"
            className="p-2 md:p-4 bg-indigo-400/50 rounded-lg shadow-lg   translate-x-0 hover:-translate-y-4 duration-500"
          />
          <img
            src={noobImg4}
            alt="noobImg4"
            className="p-[5px] md:p-3 bg-indigo-400/50 rounded-lg object-fill shadow-lg   translate-x-0 hover:-translate-y-4 duration-500"
          />
          <img
            src={noobImg5}
            alt="noobImg5"
            className="p-2 md:p-4 bg-indigo-400/50 rounded-lg object-cover shadow-lg   translate-x-0 hover:-translate-y-4 duration-500"
          />
          <img
            src={noobImg6}
            alt="noobImg6"
            className="p-[12px] md:p-4 bg-indigo-400/50 rounded-lg shadow-lg   translate-x-0 hover:-translate-y-4 duration-500"
          />
          <img
            src={noobImg7}
            alt="noobImg7"
            className="p-3 md:p-5 bg-indigo-400/50 rounded-lg shadow-lg  translate-x-0 hover:-translate-y-4 duration-500"
          />
          <img
            src={noobImg8}
            alt="noobImg8"
            width={75}
            className="p-1 md:p-4 bg-indigo-400/50 rounded-lg shadow-lg   translate-x-0 hover:-translate-y-4 duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
