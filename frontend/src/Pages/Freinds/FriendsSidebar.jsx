import { FaGift, FaUserPlus } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { RiUserShared2Fill } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";

export const FriendsSidebar = [
  //   {
  //     id: 10,
  //     title: "Home",
  //     icon: <HiMiniUsers />,
  //   },
  {
    id: 1,
    title: "Friends request",
    icon: <RiUserShared2Fill size={20} />,
    icons_2: <IoIosArrowForward size={25} />,
  },
  {
    id: 2,
    title: "Suggestions",
    icon: <FaUserPlus size={20} />,
    icons_2: <IoIosArrowForward size={25} />,
  },
  {
    id: 3,
    title: "All Friends",
    icon: <BiSolidUserDetail size={20} />,
    icons_2: <IoIosArrowForward size={25} />,
  },
  {
    id: 4,
    title: "Birthdays",
    icon: <FaGift size={20} />,
  },
  {
    id: 5,
    title: "Custom lists",
    icon: <BiSolidUserDetail size={20} />,
    icons_2: <IoIosArrowForward size={25} />,
  },
];
