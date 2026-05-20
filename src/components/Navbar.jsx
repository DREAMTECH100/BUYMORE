import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "Categories",
    "Deals",
    "Delivery",
    "About",
    "Contact",
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-lg shadow-lg">
              B
            </div>

            <h1 className="text-2xl font-black tracking-tight">
              BUY<span className="text-red-600">MORE</span>
            </h1>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -2 }}
                className="relative text-[15px] font-medium text-gray-700 hover:text-red-600 transition"
              >
                {link}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-red-50 transition"
            >
              <FiSearch className="text-xl text-gray-700" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-red-50 transition"
            >
              <FiShoppingCart className="text-xl text-gray-700" />

              <div className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                2
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Shop Now
            </motion.button>
          </div>

          {/* MOBILE ICON */}
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl cursor-pointer"
          >
            {open ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-[80%] h-screen bg-white z-[100] shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h1 className="text-2xl font-black">
                BUY<span className="text-red-600">MORE</span>
              </h1>

              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-semibold text-gray-800 hover:text-red-600 transition"
                >
                  {link}
                </motion.a>
              ))}

              <button className="mt-6 bg-red-600 text-white py-4 rounded-full font-semibold text-lg shadow-lg">
                Start Shopping
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}