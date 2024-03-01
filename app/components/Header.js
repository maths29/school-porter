import { SiMinutemailer } from "react-icons/si";
import { MdOutlineCall } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-[#ddd] flex justify-end gap-4 p-1 items-center">
      <div className="text-[#fd5f00] flex gap-1">
        <SiMinutemailer />
        <p className="text-black text-xs md:text-base">Email</p>
      </div>
      <div className="text-[hsl(23,100%,50%)] flex gap-1">
        <MdOutlineCall />
        <p className="text-black text-xs md:text-base">Call</p>
      </div>
      <button className="bg-[#fd5f00] text-white text-sm px-1 py-1 border rounded-xl">Apply Now</button>
    </header>
  );
};

export default Header;
