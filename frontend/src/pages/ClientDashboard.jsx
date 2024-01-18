import React from "react";

import profile from "../assets/profile_icon.png";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";
import services_data from "../data/services";
import Bar1 from "../components/sidebar/sidebar";
import Mountain from "../assets/Mountain.jpg";
import Beach from "../assets/beaches.jpg";
import Desert from "../assets/Desert.jpg";
import { UserIcon } from "@heroicons/react/24/outline";
import { SignalIcon } from "@heroicons/react/24/solid";

const ClientDashboard = () => {
  return (
    <div className="flex flex-row">
      {/* <div className="topnav flex items-center justify-between p-5">
        <div className="sidebar-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="profile-btn flex items-center justify-center">
          <button>
            <img width={40} height={40} src={profile} alt="profile-icon" />
          </button>
        </div>
      </div>
      <div className="role font-bold text-4xl p-4 md:text-5xl">Traveller</div>
      <div className="services-area flex flex-wrap gap-5 p-3 items-center justify-center mt-1 w-full md:gap-[8rem] md:mt-5">
        {services_data.map((service, idx) => (
          <ServiceCard name={service.name} icon={service.icon} />
        ))}
      </div> */}
      <section className="w-[15vw] h-screen ">
        <Bar1 />
      </section>
      <section className=" ml-3 w-full mt-8">
        <div className="flex flex-row justify-between">
          <div>
            <h5 className="text-lg text-gray-700">Good Morning username</h5>
            <h2 className="text-2xl font-semibold">
              Your adventure begins here - welcome to our travel community.
            </h2>
          </div>
          <div className="text-lg mr-7  cursor-pointer bg-white border-4 p-3 rounded-lg border-black border-opacity-20 hover:bg-blue-gray-300">
            <span className="block">Your Location</span>
            <SignalIcon className="h-6 w-6 inline " />
            <span className="inline">Ulhasnagar</span>
          </div>
        </div>

        <div className="flex flex-row space-x-5 mt-5 mr-5 overflow-auto">
          <div className="flex flex-row space-x-8 card  ">
            {services_data.map((service, idx) => (
              <ServiceCard name={service.name} icon={service.icon} />
            ))}
          </div>
          {/* <div className="card h-[230px] w-[190px] bg-black"></div> */}
        </div>
        <div>
          <div className="friends mt-7">
            <span className="text-2xl">Recommendations</span>
          </div>
          <div className=" grid grid-cols-1 gap-4 ml-3 mr-5 ">
            <div className="bg-black w-full h-20  rounded-lg"></div>
            <div className="bg-black w-full h-20 rounded-lg"></div>
          </div>
        </div>
      </section>
      <section className="w-[25vw] bg-purple-900">
        <div className="weather h-[30vh] w-full bg-black"></div>
        <div className="flex justify-start w-full items-center flex-col space-y-6">
          <span className="text-3xl">Let's Travel</span>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row items-center font-semibold space-x-4 ">
              <img
                src={Mountain}
                className=" cursor-pointer h-14 w-14 rounded-lg"
              />
              <span>Mountain</span>
            </div>
            <hr className="h-[1px] bg-black" />
            <div className=" flex flex-row items-center font-semibold space-x-4">
              <img
                src={Beach}
                className="h-14 w-14 cursor-pointer rounded-lg"
              />
              <span>Beach</span>
            </div>
            <hr className="h-[1px] bg-black" />
            <div className="flex flex-row items-center font-semibold space-x-4">
              <img
                src={Desert}
                className="h-14 w-14 cursor-pointer rounded-lg"
              />
              <span>Desert</span>
              <hr className="h-[1px] bg-black" />
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default ClientDashboard;
