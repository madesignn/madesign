import { Menu } from "@/src/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Website Design",
        path: "/pricingweb",
        newTab: false,
      },
      {
        id: 62,
        title: "E-commerce",
        path: "/pricingecom",
        newTab: false,
      },
      {
        id: 63,
        title: "Logo & Ad Design",
        path: "/pricinglogoad",
        newTab: false,
      },
      
    ],
  },
  {
    id: 3,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  
];
export default menuData;
