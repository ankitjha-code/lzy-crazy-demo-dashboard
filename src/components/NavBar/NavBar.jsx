import { useState } from "react";
import {
  House,
  Store,
  Megaphone,
  MessageSquareMore,
  Settings,
  CircleUserRound,
  Menu,
} from "lucide-react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md relative">
      <div className="flex justify-between items-center p-4 relative">
        {/* Left */}
        <div className="flex items-center gap-2 z-10">
          <img src="./logo.jpg" alt="Logo" className="h-10 w-10" />
          <h1 className="font-bold text-blue-900 text-xl">zyCrazy</h1>
        </div>

        {/* Middle (Centered absolutely) */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-8 items-center">
          <div className="flex flex-col items-center">
            <House />
            <h3 className="text-sm">Home</h3>
          </div>
          <div className="flex flex-col items-center">
            <Store />
            <h3 className="text-sm">Market Place</h3>
          </div>
          <div className="flex flex-col items-center">
            <Megaphone />
            <h3 className="text-sm">Post Ads</h3>
          </div>
        </div>

        {/* Right */}
        <div className="hidden md:flex gap-5 items-center z-10">
          <div className="flex flex-col items-center">
            <MessageSquareMore />
            <h3 className="text-sm">Ads Response</h3>
          </div>
          <div className="flex flex-col items-center">
            <Settings />
            <h3 className="text-sm">Setting</h3>
          </div>
          <div className="flex flex-col items-center">
            <CircleUserRound />
            <h3 className="text-sm">Name</h3>
          </div>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden z-10">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-white shadow-md">
          <div className="flex items-center gap-2">
            <House />
            <h3>Home</h3>
          </div>
          <div className="flex items-center gap-2">
            <Store />
            <h3>Market Place</h3>
          </div>
          <div className="flex items-center gap-2">
            <Megaphone />
            <h3>Post Ads</h3>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquareMore />
            <h3>Ads Response</h3>
          </div>
          <div className="flex items-center gap-2">
            <Settings />
            <h3>Setting</h3>
          </div>
          <div className="flex items-center gap-2">
            <CircleUserRound />
            <h3>Name</h3>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
