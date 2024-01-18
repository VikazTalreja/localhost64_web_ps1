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

function BusinessDashboard() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return <div className="flex flex-row"></div>;
}

export default BusinessDashboard;
