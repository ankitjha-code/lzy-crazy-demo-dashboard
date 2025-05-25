import React from "react";

import { Link } from "react-router-dom";
import {
  ImageIcon,
  LogOut,
  Megaphone,
  Plus,
  PlusCircle,
  PlusCircleIcon,
  ShoppingBagIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-20 lg:w-64 bg-base-200 shadow-lg flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-5 flex justify-center lg:justify-start">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.jpg" className="h-10 w-10" alt="Logo" />
          <h1 className="font-bold text-blue-800 hidden lg:inline">zyCrazy</h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-6">
        <Link
          to="/"
          className="flex flex-col items-center lg:items-start gap-1 px-2 lg:px-3 text-sm"
        >
          <Plus className="size-6 text-base-content opacity-70" />
          <span className="hidden lg:inline mt-1">Add Category</span>
        </Link>

        <Link
          to="/addShop"
          className="flex flex-col items-center lg:items-start gap-1 px-2 lg:px-3 text-sm"
        >
          <ShoppingBagIcon className="size-6 text-base-content opacity-70" />
          <span className="hidden lg:inline mt-1">Add Shop</span>
        </Link>

        <Link
          to="/banner"
          className="flex flex-col items-center lg:items-start gap-1 px-2 lg:px-3 text-sm"
        >
          <ImageIcon className="size-6 text-base-content opacity-70" />
          <span className="hidden lg:inline mt-1">Banner</span>
        </Link>

        <Link
          to="/ads"
          className="flex flex-col items-center lg:items-start gap-1 px-2 lg:px-3 text-sm"
        >
          <Megaphone className="size-6 text-base-content opacity-70" />
          <span className="hidden lg:inline mt-1">Post Ads</span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 mt-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-start gap-2">
          <LogOut className="w-5 text-gray-500 cursor-pointer" />
          <p className="font-bold hidden lg:inline">Logout</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
