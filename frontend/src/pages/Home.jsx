import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Logo from "../assets/main_logo.png";
import { Carousel, Button, useAccordion } from "@material-tailwind/react";
import Lakshadeep_1 from "../assets/Lakshadeep_1.jpeg";
import mumbai_1 from "../assets/Mumbai_1.jpg";
import Odisha from "../assets/Odisha_1.png";

function Home() {
  const [theme, setTheme] = useState("default");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleCarouselChange = (newIndex) => {
    setCarouselIndex(newIndex);

    if (newIndex === 0) {
      console.log("<f></f>irst");
      setTheme("theme1");
    } else if (newIndex === 1) {
      console.log("Second");
      setTheme("theme2");
    } else if (newIndex === 2) {
      console.log("Third");
      setTheme("theme3");
    }
  };

  return (
    <>
      {/* <div className=" absolute top-0 z-0 h-full w-screen opacity-70 bg-black">
        <Carousel
          transition={{ duration: 5 }}
          autoplayDelay={10000}
          autoplay={true}
          loop={false}
          className="rounded-xl"
        >
          <img
            src={Lakshadeep_1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={mumbai_1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={Odisha}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div> */}
      <div className={`space-y-12 md:space-y-0 z-20 relative`}>
        <Sidebar />
        <div className="flex flex-col space-x-5 md:flex-row md:justify-between md:mr-5">
          <div className="w-1/3">
            <div className=" w-screen space-x-3 flex justify-center md:justify-normal items-center md:w-max md:ml-10 md:h-max  ">
              <img className="h-[20vh]" src={Logo} />
              <span className="font-black text-3xl">WanderWisdom</span>
            </div>
            <span className="text-3xl hidden md:block ml-14 mt-10 ">
              Welcome to WanderWisdom,
              <br />
              where community meets culture!
              <br />
              We are a vibrant platform dedicated to showcasing the richness of
              local markets and tourist attractions, driven by the passion and
              insights of our community.
            </span>
          </div>
          <div className="flex mt-3 justify-center md:justify-end md:w-max">
            <div className=" w-[85vw] h-[40vh] md:w-[50vw] md:h-[80vh]">
              <Carousel
                transition={{ duration: 5 }}
                autoplayDelay={10000}
                autoplay={true}
                loop={false}
                className="rounded-xl"
              >
                <img
                  src={Lakshadeep_1}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src={mumbai_1}
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src={Odisha}
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-normal md:ml-12  ">
          <Button className="w-80 h-12" ripple={true}>
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
