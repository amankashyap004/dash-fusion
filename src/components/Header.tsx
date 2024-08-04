"use client";

import React, { useState } from "react";
import { IoMenu, IoSearch, IoSettings, IoNotifications } from "react-icons/io5";
import { FaEnvelope, FaUser } from "react-icons/fa";

import Sidebar from "./Sidebar";

const navIcons = [
  { icon: <FaEnvelope /> },
  { icon: <IoSettings /> },
  { icon: <IoNotifications /> },
  { icon: <FaUser /> },
];

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="flex p-4 w-full bg-gray-900 z-50 fixed top-0">
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      )}
      <nav className="flex justify-between items-center w-full">
        <section className="flex justify-center items-center gap-4">
          <p className="text-lg font-bold">Dash Fusion</p>
          <form className="hidden lg:flex justify-center items-center gap-2 border-[1px] border-gray-400 border-opacity-30 px-4 py-1 rounded-lg">
            <IoSearch />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none py-1"
            />
          </form>
        </section>
        <section className="hidden lg:flex justify-center items-center gap-2">
          {navIcons.map((icon, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-2 rounded-full cursor-pointer bg-gray-700"
            >
              {icon.icon}
            </div>
          ))}
        </section>
        <section className="lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="text-3xl">
            <IoMenu />
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
