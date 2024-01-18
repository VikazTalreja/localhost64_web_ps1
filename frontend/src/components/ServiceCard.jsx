import React, { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
// } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const ServiceCard = ({ name, icon, image }) => {
  return (
    // <div className="carder-solid flex flex-col border-black cursor-pointer  h-[230px] w-[190px]">
    //   <div className="card-image">
    //     <img width={6} height={6} src={icon} alt={name} />
    //   </div>
    //   <div className="card-text">{name}</div>
    // </div>
    //     <Card
    //       shadow={false}
    //       className="relative  h-[180px] active:border-purple-500 border-2 border-black w-[140px] grid items-end justify-center overflow-hidden text-center cursor-pointer"
    //       onClick={() => {
    //         if (onClick) {
    //           onClick(name); // Pass the name of the clicked service
    //         }
    //       }}
    //     >
    //       <CardBody className="flex flex-col items-center justify-center">
    //         <Avatar size="xl" variant="" alt="Icon" className="" src={icon} />
    //         <Typography variant="h5" className="mb-4 text-gray-400">
    //           {name}
    //         </Typography>
    //       </CardBody>
    //     </Card>
    //   );
    // };

    <Card className="h-[180px] w-[140px] transition-transform transform-gpu hover:scale-110 ">
      <CardHeader floated={false} className="h-80">
        <img
          src={image}
          alt="profile-picture"
          className="border-1 border-gray-800"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography color="blue-gray" className="mb-2">
          {name}
        </Typography>
        {/* <Typography
          color="blue-gray"
          className="font-medium"
          textGradient
        ></Typography> */}
      </CardBody>
    </Card>
  );
};
export default ServiceCard;
