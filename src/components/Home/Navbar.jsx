import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const navItems = [
  { value: "Blogs", path: "/blogs" },
  { value: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="min-h-[5rem] bg-blue-300 fixed w-full py-3 px-20 flex-col justify-center items-center lg:flex hidden z-[1000]">
        <div className="flex flex-row justify-between w-full gap-5 items-center">
          <div className="flex">
            <p>Blogs</p>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <p className="lg:text-lg text-base cursor-pointer select-none">
              Blogs
            </p>
            <p className="lg:text-lg text-base cursor-pointer select-none">
              Contact
            </p>
            <button
              onClick={() => navigate("/sign-in")}
              className="bg-white px-7 py-2 rounded-full border-2 border-[#3A4F39] font-semibold text-[#3a4f39]"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              className="bg-[#28661E] px-6 py-2 rounded-full border-2 border-[#28661E] font-semibold text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <nav className="min-h-[5rem] bg-blue-300 fixed w-full py-3 px-8 flex-col justify-center items-center flex lg:hidden z-[1000]">
        <div className="flex flex-row justify-between w-full gap-5 items-center">
          <div>
            <p>Blogs</p>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-black focus:outline-none focus:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            isSidebarOpen
              ? "h-full w-screen backdrop-blur-sm absolute top-0 left-0 z-[90]"
              : ""
          }`}
        ></motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isSidebarOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 h-screen w-64 bg-white z-[1000]`}
        >
          <button
            onClick={toggleSidebar}
            className="text-black float-right focus:outline-none focus:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="pt-5 flex flex-col gap-8">
            {navItems?.map((item, ind) => (
              <div
                key={ind}
                className="mt-6 cursor-pointer select-none"
                // onClick={() => navigate(`${item.path}`)}
              >
                <p className="text-xl text-center cursor-pointer font-semibold">
                  {item.value}
                </p>
              </div>
            ))}
            <button
            //   onClick={() => navigate("/sign-in")}
              className="bg-white px-7 py-2 rounded-full border-2 border-[#3A4F39] font-semibold text-[#3a4f39]"
            >
              Sign In
            </button>
            <button
            //   onClick={() => navigate("/sign-up")}
              className="bg-[#28661E] px-6 py-2 rounded-full border-2 border-[#28661E] font-semibold text-white"
            >
              Sign Up
            </button>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
