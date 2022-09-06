import { AiFillHome } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const Topbar = () => (
  <div className="bg-white shadow fixed w-full z-10">
    <div className="h-16 max-w-screen-lg mx-auto flex justify-between items-center lg:px-12">
      <img src="/logo.png" alt="" width={110} />
      <div className="flex justify-end gap-x-2 sm:gap-x-6 text-lg sm:text-2xl cursor-pointer">
        <AiFillHome />
        <FaTelegramPlane />
        <FiPlusSquare />
        <BiSearch />
        <MdFavoriteBorder />
        <BsFillPersonFill />
      </div>
    </div>
  </div>
);

export default Topbar;
