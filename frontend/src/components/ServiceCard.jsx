import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const ServiceCard = ({ name, icon }) => {
  return (
    // <div className="carder-solid flex flex-col border-black cursor-pointer  h-[230px] w-[190px]">
    //   <div className="card-image">
    //     <img width={6} height={6} src={icon} alt={name} />
    //   </div>
    //   <div className="card-text">{name}</div>
    // </div>
    <Card
      shadow={false}
      className="relative h-[230px] w-[190px] grid items-end justify-center overflow-hidden text-center cursor-pointer"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {name}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {name}
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="Icon"
          className="border-2 border-white"
          src={icon}
        />
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
