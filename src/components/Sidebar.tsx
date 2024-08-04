import React from "react";
import { IoClose, IoSettings, IoNotifications } from "react-icons/io5";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navIcons = [
  { icon: <FaUser />, label: "User" },
  { icon: <IoNotifications />, label: "Notification" },
  { icon: <FaEnvelope />, label: "Message" },
  { icon: <IoSettings />, label: "Setting" },
  { icon: <IoMdLogOut />, label: "Log Out" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 w-full p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-gray-900`}
    >
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-bold">Dash Fusion</p>
          <button onClick={onClose} className="text-3xl">
            <IoClose />
          </button>
        </div>
        <nav className="flex flex-col justify-center items-start gap-4 w-full h-full">
          {navIcons.map((item, index) => (
            <div key={index} className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center p-2 rounded-full cursor-pointer text-xl bg-gray-700">
                {item.icon}
              </div>
              <p className="text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
