import rider from "../assets/rider.png";
import thrift from "../assets/thrift.png";
import portfolio from "../assets/portfolio.png";
import safeguard from "../assets/safeguard.png";

import {
  AiOutlineDashboard,
  AiOutlineProfile,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";

export const Links = [
  { heading: "home", icon: AiOutlineDashboard },
  { heading: "about", icon: AiOutlineProfile },
  { heading: "projects", icon: AiOutlineProject },
  { heading: "contacts", icon: AiOutlineContacts },
];

export const Projects = [
  {
    title: "Rider App",
    link: "https://delivery-client-server.vercel.app/",
    img: rider,
  },
  {
    title: "Thrift",
    link: "https://thrift-git-main-josrph135.vercel.app/",
    img: thrift,
  },
  {
    title: "Safeguard pet",
    link: "https://safeguard-one.vercel.app/",
    img: safeguard,
  },
  {
    title: "Portfolio",
    link: "https://micheal-portfolio-dusky.vercel.app/",
    img: portfolio,
  },
];
