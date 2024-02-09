import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-[#011431]">
      <div>
        <span className="md:hidden flex justify-between text-white items-center px-1">
          <h1 className="text-xl font-bold">Swift School</h1>
          <MdMenu />
        </span>
        <span className="hidden md:flex">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
