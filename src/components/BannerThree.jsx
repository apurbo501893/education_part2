import React from "react";
import instImg from "../assets/become-02-1.png";
import instImg2 from "../assets/become-01.png";
const BannerThree = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-20  ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between box-shadow shadow-lg bg-rose-400/50 rounded-lg h-72  md:h-48">
          <div className="ml-8">
            <h2 className="text-2xl font-bold">Become An Instructor</h2>
            <p className="text-black/50">
              Top instructors from around the world teach millions of students
              on Mentoring.
            </p>
          </div>
          <div>
            <img
              src={instImg}
              alt="instImg"
              width={250}
              height={250}
              className="flex items-center justify-center "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between md:justify-center box-shadow shadow-lg bg-yellow-400/50 rounded-lg h-72 md:h-48">
          <div className="ml-8">
            <h2 className="text-xl font-bold ">
              Transform Access To Education
            </h2>
            <p className="text-black/50">
              Create an account to receive our newsletter, course
              recommendations and promotions.
            </p>
          </div>
          <div>
            <img
              src={instImg2}
              alt="instImg2 "
              width={170}
              height={150}
              className="object-cover ml-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
