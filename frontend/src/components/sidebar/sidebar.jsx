import React from "react";
import purpleboy from "../../assets/Purple_boy.png";
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
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

export default function SidebarWithContentSeparator() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-full w-full text-black border-4 p-4 shadow-2xl rounded-none shadow-blue-gray-900/5">
      <div className="mb-2 p-4 text-black">
        <Typography variant="h5" color="blue-gray">
          WanderWisdom
        </Typography>
      </div>

      <List>
        <ListItem className="py-2  pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700  dark:text-white">
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem className="py-2  pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700  dark:text-white">
          <ListItemPrefix>
            <TagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Saved
        </ListItem>
        <ListItem className="py-2  pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700  dark:text-white">
          <ListItemPrefix>
            <GlobeAltIcon className="h-5 w-5" />
          </ListItemPrefix>
          Trips
        </ListItem>
        <ListItem className="py-2  pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700  dark:text-white">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
        </ListItem>
        <ListItem className="py-2  pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700  dark:text-white">
          <ListItemPrefix>
            <BellIcon className="h-5 w-5" />
          </ListItemPrefix>
          Notifications
          <ListItemSuffix>
            <Chip
              value="4"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full -ml-20 "
            />
          </ListItemSuffix>
        </ListItem>
        <hr className="my-2 w-40 border-blue-gray-900" />
        <ListItem className="py-2  pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700  dark:text-white">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
      </List>

      <div className="flex flex-row bg-purple-700  space-x-2 absolute bottom-5  bg-opacity-70 rounded-lg p-1">
        <img
          src={purpleboy}
          alt="pfp"
          className="rounded-full h-12 w-12 container"
        />
        <div className="flex flex-col ">
          <span className=" font-bold text-black ">vikas talreja</span>
          <span className="font-light">God</span>
        </div>
        <img
          src={ArrowRightEndOnRectangleIcon}
          className="h-12 w-5 cursor-pointer"
        />
      </div>
    </Card>
  );
}
