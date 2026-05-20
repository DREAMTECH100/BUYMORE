import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingBasket,
  FaTruck,
  FaAppleAlt,
  FaStore,
  FaArrowLeft,
} from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("home");

  const categories = [
    {
      title: "Fresh Produce",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Farm-fresh fruits and vegetables sourced daily from trusted suppliers.",
    },
    {
      title: "Beverages",
      image:
        "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Soft drinks, juices, energy drinks and premium refreshments.",
    },
    {
      title: "Frozen Foods",
      image:
        "https://images.pexels.com/photos/3692875/pexels-photo-3692875.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Frozen poultry, seafood, meats and ready-to-cook essentials.",
    },
    {
      title: "Household",
      image:
        "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Cleaning supplies, toiletries and everyday household products.",
    },
  ];

  const products = [
    {
      name: "Premium Grocery Package",
      price: "₦18,500",
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Fresh Farm Vegetables",
      price: "₦9,000",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Household Essentials",
      price: "₦15,000",
      image:
        "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Frozen Food Combo",
      price: "₦22,000",
      image:
        "https://images.pexels.com/photos/3692875/pexels-photo-3692875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  const renderPage = () => {
    switch (page) {
      case "deals":
        return (
          <section className="min-h-screen pt-40 px-6 md:px-16 bg-gradient-to-b from-red-50 to-white">
            <div className="max-w-7xl mx-auto">
              <button
                onClick={() => setPage("home")}
                className="flex items-center gap-3 mb-10 text-red-600 font-semibold"
              >
                <FaArrowLeft />
                Back Home
              </button>

              <h1 className="text-6xl font-black mb-6">
                Hot Deals & Promotions
              </h1>

              <p className="text-xl text-gray-500 max-w-3xl mb-16">
                Discover exclusive discounts, bundle offers and premium savings
                across groceries, beverages and household essentials.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-[30px] overflow-hidden shadow-2xl"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-[320px] w-full object-cover"
                    />

                    <div className="p-6">
                      <h3 className="text-2xl font-bold">{item.name}</h3>

                      <p className="text-red-600 text-2xl font-black mt-3">
                        {item.price}
                      </p>

                      <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition text-white py-4 rounded-full font-semibold">
                        Add To Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );

      case "delivery":
        return (
          <section className="min-h-screen pt-40 px-6 md:px-16 bg-black text-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <button
                  onClick={() => setPage("home")}
                  className="flex items-center gap-3 mb-10 text-red-500 font-semibold"
                >
                  <FaArrowLeft />
                  Back Home
                </button>

                <p className="uppercase tracking-[0.3em] text-red-500 mb-4">
                  Smart Logistics
                </p>

                <h1 className="text-6xl font-black leading-tight">
                  Fast Delivery Infrastructure.
                </h1>

                <p className="mt-8 text-xl text-gray-400 leading-relaxed">
                  Buymore’s digital logistics ecosystem enables customers across
                  Lagos to receive groceries and essentials quickly, efficiently
                  and reliably.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-12">
                  <div className="bg-white/10 p-6 rounded-3xl">
                    <h2 className="text-4xl font-black">30min</h2>
                    <p className="text-gray-300 mt-2">
                      Average Delivery Time
                    </p>
                  </div>

                  <div className="bg-white/10 p-6 rounded-3xl">
                    <h2 className="text-4xl font-black">24/7</h2>
                    <p className="text-gray-300 mt-2">Online Operations</p>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt=""
                  className="rounded-[40px] shadow-2xl"
                />
              </div>
            </div>
          </section>
        );

      case "categories":
        return (
          <section className="min-h-screen pt-40 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <button
                onClick={() => setPage("home")}
                className="flex items-center gap-3 mb-10 text-red-600 font-semibold"
              >
                <FaArrowLeft />
                Back Home
              </button>

              <h1 className="text-6xl font-black mb-6">
                Explore Categories
              </h1>

              <p className="text-xl text-gray-500 max-w-3xl mb-16">
                Discover carefully curated supermarket categories designed for
                modern shopping convenience.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((item, index) => (
                  <motion.div
                    whileHover={{ y: -10 }}
                    key={index}
                    className="rounded-[30px] overflow-hidden shadow-2xl bg-white"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-[320px] w-full object-cover"
                    />

                    <div className="p-6">
                      <h3 className="text-2xl font-black">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 mt-4 leading-relaxed">
                        {item.description}
                      </p>

                      <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
                        Explore
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );

      case "about":
        return (
          <section className="min-h-screen pt-40 px-6 md:px-16 bg-gradient-to-br from-black to-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => setPage("home")}
                className="flex items-center gap-3 mb-10 text-red-500 font-semibold"
              >
                <FaArrowLeft />
                Back Home
              </button>

              <h1 className="text-6xl font-black leading-tight">
                Reimagining Modern Grocery Retail.
              </h1>

              <p className="mt-10 text-xl text-gray-400 leading-relaxed max-w-4xl">
                Buymore Supermarket represents the next generation of retail
                commerce in Lagos — blending physical retail excellence with a
                premium digital shopping experience designed for speed,
                convenience and scalability.
              </p>

              <img
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                className="rounded-[40px] mt-16 shadow-2xl"
              />
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="min-h-screen pt-40 px-6 md:px-16 bg-red-600 text-white">
            <div className="max-w-5xl mx-auto text-center">
              <button
                onClick={() => setPage("home")}
                className="flex items-center gap-3 mb-10 text-white font-semibold mx-auto"
              >
                <FaArrowLeft />
                Back Home
              </button>

              <h1 className="text-6xl font-black">
                Let’s Build Something Massive.
              </h1>

              <p className="mt-8 text-xl text-red-100 max-w-3xl mx-auto">
                A premium ecommerce ecosystem crafted to elevate Buymore into a
                dominant digital retail brand across Nigeria.
              </p>

              <div className="bg-white text-black rounded-[40px] p-10 mt-16 shadow-2xl text-left">
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border p-5 rounded-2xl outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border p-5 rounded-2xl outline-none"
                  />

                  <textarea
                    placeholder="Project Details"
                    className="border p-5 rounded-2xl outline-none md:col-span-2 h-40"
                  ></textarea>
                </div>

                <button className="mt-8 bg-red-600 hover:bg-red-700 transition text-white px-10 py-5 rounded-full font-semibold">
                  Send Proposal
                </button>
              </div>
            </div>
          </section>
        );

      default:
        return (
          <>
            {/* HERO */}
            <section className="relative min-h-screen pt-36 flex items-center px-6 md:px-16 overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-200 blur-3xl opacity-20 rounded-full"></div>

              <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
                {/* LEFT */}
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="uppercase tracking-[0.3em] text-red-600 mb-4 text-sm">
                    Smart Grocery Experience
                  </p>

                  <h1 className="text-5xl md:text-7xl font-black leading-tight">
                    Lagos’ Smartest
                    <span className="text-red-600 block">
                      Supermarket Experience
                    </span>
                  </h1>

                  <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
                    Fresh groceries, household essentials, beverages and more —
                    delivered directly to your doorstep with speed, convenience
                    and premium customer experience.
                  </p>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setPage("categories")}
                      className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-lg"
                    >
                      Start Shopping
                    </button>

                    <button
                      onClick={() => setPage("deals")}
                      className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
                    >
                      Explore Deals
                    </button>
                  </div>

                  <div className="flex gap-8 mt-10">
                    <div>
                      <h2 className="text-3xl font-bold">10K+</h2>
                      <p className="text-gray-500">Happy Customers</p>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold">30min</h2>
                      <p className="text-gray-500">Fast Delivery</p>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold">24/7</h2>
                      <p className="text-gray-500">Online Orders</p>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <img
                    src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt=""
                    className="rounded-[40px] shadow-2xl h-[700px] object-cover"
                  />

                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl"
                  >
                    <FaTruck className="text-red-600 text-3xl mb-2" />
                    <h3 className="font-bold">Fast Delivery</h3>
                    <p className="text-sm text-gray-500">
                      Across Lagos & Beyond
                    </p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="absolute bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl"
                  >
                    <FaShoppingBasket className="text-orange-500 text-3xl mb-2" />
                    <h3 className="font-bold">10,000+ Orders</h3>
                    <p className="text-sm text-gray-500">
                      Trusted by Families
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* TRUST */}
            <section className="py-8 border-y overflow-hidden bg-white">
              <div className="flex gap-16 whitespace-nowrap animate-pulse text-gray-400 font-semibold text-xl justify-center">
                <span>Indomie</span>
                <span>Coca-Cola</span>
                <span>Peak Milk</span>
                <span>Nestlé</span>
                <span>Kellogg's</span>
                <span>Golden Penny</span>
              </div>
            </section>

            {/* CATEGORIES */}
            <section className="py-24 px-6 md:px-16">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-16">
                  <div>
                    <h2 className="text-5xl font-black mb-4">
                      Shop By Category
                    </h2>

                    <p className="text-gray-500 text-lg">
                      Everything you need — all in one premium shopping
                      experience.
                    </p>
                  </div>

                  <button
                    onClick={() => setPage("categories")}
                    className="hidden md:block bg-black text-white px-8 py-4 rounded-full"
                  >
                    View All
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categories.map((item, index) => (
                    <motion.div
                      whileHover={{ y: -10 }}
                      key={index}
                      onClick={() => setPage("categories")}
                      className="rounded-[30px] overflow-hidden shadow-xl group cursor-pointer"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt=""
                          className="h-[300px] w-full object-cover group-hover:scale-110 transition duration-700"
                        />
                      </div>

                      <div className="p-6 bg-white">
                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* DELIVERY */}
            <section className="py-24 px-6 md:px-16 bg-red-600 text-white">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="uppercase tracking-[0.3em] text-orange-300 mb-4">
                    Convenience Redefined
                  </p>

                  <h2 className="text-5xl font-black leading-tight">
                    Groceries Delivered Across Lagos.
                  </h2>

                  <p className="mt-6 text-lg text-red-100 leading-relaxed">
                    Designed for busy lifestyles, Buymore’s digital shopping
                    experience brings groceries, essentials and convenience
                    directly to customers faster than ever before.
                  </p>

                  <button
                    onClick={() => setPage("delivery")}
                    className="mt-10 bg-white text-red-600 px-8 py-4 rounded-full font-semibold"
                  >
                    Explore Delivery
                  </button>
                </div>

                <div>
                  <img
                    src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt=""
                    className="rounded-[40px] shadow-2xl"
                  />
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center bg-black text-white">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-5xl md:text-7xl font-black leading-tight">
                  The Future Of Grocery Shopping
                  <span className="text-red-600 block">
                    Starts Here.
                  </span>
                </h2>

                <p className="mt-6 text-gray-400 text-xl max-w-3xl mx-auto">
                  A premium digital commerce ecosystem designed to transform
                  Buymore into a modern retail powerhouse.
                </p>

                <button
                  onClick={() => setPage("contact")}
                  className="mt-10 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-full text-lg font-semibold transition"
                >
                  Request Partnership
                </button>
              </motion.div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="bg-white text-black overflow-hidden">
      <Navbar setPage={setPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}