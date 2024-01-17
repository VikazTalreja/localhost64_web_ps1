import React from "react";

import profile from "../assets/profile_icon.png";
import ServiceCard from "../components/ServiceCard";

import services_data from "../data/services";

const ClientDashboard = () => {
  return (
    <div>
      <div className="topnav flex items-center justify-between p-5">
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
      </div>
    </div>
  );
};

export default ClientDashboard;
