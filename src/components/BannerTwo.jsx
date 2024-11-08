import React from "react";
import shareImg from "../assets/share.png";
import { HiCheck } from "react-icons/hi2";

const BannerTwo = () => {
  return (
    <section className=" bg-gradient-to-t from-[#fbfdff] to-[#fde6e4]">
      <div className="max-w-screen-xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        <div>
          <img src={shareImg} alt="shareImg" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-5 text-[#002058]">
            Want to share your knowledge? Join us a Mentor
          </h2>
          <p className="text-lg mb-10 text-black/50">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video.
          </p>
          <p className="flex items-center gap-2 text-lg mb-5 font-semibold text-black/50">
            <HiCheck className="border border-rose-400 bg-rose-400 text-white fill-white rounded-full font-bold text-lg" />
            Best Courses
          </p>
          <p className="flex items-center gap-2 text-lg mb-5 font-semibold text-black/50">
            <HiCheck className="border border-rose-400 bg-rose-400 text-white fill-white text-lg rounded-full font-bold" />
            Top rated Instructors
          </p>
          <button
            className="border-2 border-indigo-400 px-6 py-2 rounded-full text-
           font-semibold hover:text-white hover:bg-indigo-400 transition-all duration-300 mt-5 "
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
