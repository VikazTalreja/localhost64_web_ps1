import React from "react";

import profile from "../assets/profile_icon.png";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";
import services_data from "../data/services";
import Bar1 from "../components/sidebar/sidebar";
import Mountain from "../assets/Mountain.jpg";
import Beach from "../assets/beaches.jpg";
import Desert from "../assets/Desert.jpg";

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
      <section className="w-[15vw] h-screen">
        <Bar1 />
      </section>
      <section className="w-full mt-8">
        <div>
          <h5 className="text-lg text-gray-700">Good Morning username</h5>
          <h2 className="text-2xl font-semibold">
            Your adventure begins here - welcome to our travel community.
          </h2>
        </div>
        <div className="w-full relative flex justify-between mt-10  text-xl mr-6">
          <input
            type="text"
            className=" w-full mr-12 placeholder-gray-400 text-gray-900 p-3 border-black"
            placeholder="Search"
          />
          <button className="p-4 bg-purple-500 rounded-lg mr-12">Search</button>
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
