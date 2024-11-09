import blogOne from "../assets/blog1.jpg";
import blogTwo from "../assets/blog2.jpg";
import blogThree from "../assets/blog3.jpg";
import blogFour from "../assets/blog4.jpg";
import blogFive from "../assets/blog5.jpg";
import blogSix from "../assets/blog6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCalendarAlt } from "react-icons/fa";

const BannerFive = () => {
  const dataImg = [
    {
      title: "Programming Content Guideline For begineners",
      name: "Graphics Design",
      date: "january 1, 2022",
      image: blogOne,
    },
    {
      title: " Complete PHP programming Career",
      name: "Business",
      date: "january 1, 2022",
      image: blogTwo,
    },
    {
      title: "Expand Your Career Opportunities with Python",
      name: "Course",
      date: "january 1, 2022",
      image: blogThree,
    },
    {
      title: "Learn Webs Application Development from Experts",
      name: "Education",
      date: "january 1, 2022",
      image: blogFour,
    },
    {
      title: "Learn Webs Application Development from Experts",
      name: "Education",
      date: "january 1, 2022",
      image: blogFive,
    },
    {
      title: "Learn Webs Application Development from Experts",
      name: "Education",
      date: "january 1, 2022",
      image: blogSix,
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-screen-xl mx-auto py-20 h-full">
      <h2 className="text-4xl font-bold text-center mb-10">Latest Blogs</h2>
      <p className="text-center mb-10 max-w-[650px] mx-auto text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
        accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse
        imperdiet.
      </p>
      <Slider {...settings}>
        {dataImg.map((item, index) => (
          <div>
            <div
              key={index}
              className="border border-gray-300  rounded-lg shadow h-96 max-h-96 overflow-hidden"
            >
              <img
                src={item?.image}
                alt="dataImg"
                width={320}
                height={320}
                className=" object-fill rounded-t-lg h-48 w-full hover:scale-110 transition-all duration-500 ease-in-out  "
              />
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <h2 className="text-xl font-bold mt-5">{item?.title}</h2>
                <p className="font-semibold text-black/50 tracking-wider">
                  {item?.name}
                </p>
                <p className="font-semibold text-black/50 tracking-wider text-base flex items-center gap-4">
                  <FaCalendarAlt className="fill-red-400" />
                  {item?.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerFive;
