import React, { useState, useEffect } from "react";
import axios from "axios";

import profile from "../assets/profile_icon.png";
import sou from "../assets/sou.png";

import attractions_data from "../data/attractions";
import AttractionCard from "../components/AttractionCard";

const Attractions = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const [locData, setLocData] = useState([]);

  const geoCodeHandler = async () => {
    const searchBox = document.getElementById("search-box");
    console.log(searchBox.value);
    let location = searchBox.value + " India";

    //conversion
    await axios
      .get(
        `https://api.geoapify.com/v1/geocode/search?text=${location}&lang=en&limit=10&type=city&apiKey=cf05ecee8b624478acb1afcbc30ff408`
      )
      .then((res) => {
        console.log(res);
        let _lon = res.data.features[0].geometry.coordinates[0];
        let _lat = res.data.features[0].geometry.coordinates[1];
        console.log(_lat);
        console.log(_lon);
        setLat(_lat);
        setLon(_lon);
        console.log(lat);
        console.log(lon);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const attractionsData = async () => {
    console.log(lat);
    console.log(lon);
    //loc data
    await axios
      .get(
        `https://api.geoapify.com/v2/places?categories=tourism.attraction,tourism.sights&filter=circle:${lon},${lat},10000&limit=8&apiKey=cf05ecee8b624478acb1afcbc30ff408`
      )
      .then((res) => {
        console.log("places");
        console.log(res.data.features);
        setLocData(res.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (lat !== "" && lon !== "") {
      attractionsData();
    }
  }, [lat, lon]);

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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="profile-btn flex items-center justify-center">
          <button>
            <img width={40} height={40} src={profile} alt="profile-icon" />
          </button>
        </div>
      </div>
      {/**/}
      <div className="attractions font-bold text-4xl p-4 flex items-center justify-center md:text-5xl">
        Places of Attraction
      </div>
      {/**/}
      <div className="search-bar flex flex-col justify-center items-center mt-10 md:flex-row md:gap-2">
        <div className="bar flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Enter a location.."
            className="outline-none border-b-2 border-black w-[70vw]"
            id="search-box"
          />
          <button
            onClick={() => {
              geoCodeHandler();
            }}
          >
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        {"or"}
        <button className="bg-green-500 rounded-[0.5rem] p-2 border-black">
          Use GPS
        </button>
      </div>
      {/**/}
      <div className="accommodations-area mt-5 p-10 flex flex-wrap gap-5 justify-center items-center">
        {locData.map((dat, idx) => (
          <AttractionCard
            key={idx}
            name={dat.properties.name}
            address={
              dat.properties.address_line1 + " " + dat.properties.address_line2
            }
            lat={dat.properties.lat}
            lon={dat.properties.lon}
            image={sou}
          />
        ))}
      </div>
    </div>
  );
};

export default Attractions;
