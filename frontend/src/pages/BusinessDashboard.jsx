import React from "react";
import Bar1 from "../components/sidebar/sidebar";
import purpleboy from "../assets/Purple_boy.png";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
  TagIcon,
  GlobeAltIcon,
  BellIcon,
  ArrowRightEndOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

import { StatisticsCard } from "../components/card/index";
import statisticsCardsData from "../data/statistics-card-data";
import { ProfileMenu } from "../components/profilehandler";
import { CarouselTransition } from "../components/carasouel";

function BusinessDashboard() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="flex flex-row">
      <section className="h-max-screen">
        <Bar1 />
      </section>
      <section className="w-full mt-10 mx-3 relative">
        <div className="bg-gray-300 rounded-lg mb-5 p-2">
          <span className=" block text-3xl font-bold">Welcome Back Vikas,</span>
          <span className="block text-2xl font-semibold mt-5 mb-5">
            Daily Report
          </span>
          <div className=" flex flex-col items-center absolute top-3 right-10">
            <ProfileMenu />
            <span className="mt-2 font-bold">Vikas Talreja</span>
          </div>
        </div>
        <div className="mb-12 grid gap-y-10 gap-x-10 md:grid-cols-2 xl:grid-cols-4">
          {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          ))}
        </div>
        <div className=" flex flex-row">
          <div className="w-1/2 *h-full bg-black"></div>
          <div className=" flex w-1/2 bg-purple-800 h-full">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
              <figure class="max-w-screen-md mx-auto">
                <span className="lg:text-7xl md:text-5xl text-4xl text-gray-900  dark:text-white ">
                  What People Say About Us
                </span>
                <blockquote>
                  <p class="text-xl mt-11 font-medium text-gray-900 md:text-2xl dark:text-white">
                    "An exceptional platform where 'Wander wisely, connect
                    globally' is not just a slogan but a lived experience.
                    Personalized journeys, vibrant community—my travels have
                    found a new dimension here."
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <img
                    class="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 font-medium text-gray-900 dark:text-white">
                      Micheal Gough
                    </div>
                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      CEO at Google
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessDashboard;
