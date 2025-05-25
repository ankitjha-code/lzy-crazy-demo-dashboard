import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const images = [
    "https://media.istockphoto.com/id/2165277120/photo/pulled-pork-sliders-or-mini-burger-served-in-dish-isolated-on-background-side-view-of-italian.jpg?s=2048x2048&w=is&k=20&c=Z03RGDvLJTZtm0GRMm6VqMJ5fcI6qToW3woDjEtnvFU=",
    "https://media.istockphoto.com/id/1498243668/photo/tasty-cheeseburger-with-lettuce-cheddar-cheese-tomato-and-pickles-burger-bun-with-sesame.jpg?s=2048x2048&w=is&k=20&c=M98uCHFxBVxBbGLW5UeN0ubVGYSLe_GAb-hSVPh6FBk=",
    "https://images.unsplash.com/photo-1554940563-d7137919598a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
          Dashboard
        </h1>

        {/* Carousel with Auto Image Change and Controls */}
        <div className="relative bg-gray-300 h-80 rounded-xl mb-6 overflow-hidden">
          <img
            src={images[currentImage]}
            alt="carousel"
            className="object-cover w-full h-full rounded-xl transition-all duration-700 ease-in-out"
          />
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-xl shadow-sm text-center">
            <div className="text-sm text-gray-500">Total Ad</div>
            <div className="text-xl font-semibold">100</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl shadow-sm text-center">
            <div className="text-sm text-gray-500">Total Response</div>
            <div className="text-xl font-semibold">100</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl shadow-sm text-center">
            <div className="text-sm text-gray-500">Total Shop Banner</div>
            <div className="text-xl font-semibold">100</div>
          </div>
        </div>

        {/* User Graph */}
        <div className="bg-blue-50 rounded-xl p-4">
          <div className="text-gray-700 font-medium mb-2">
            Users this month (200)
          </div>
          <div className="h-60 bg-gradient-to-t from-blue-200 to-blue-400 rounded-lg relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 h-full items-end">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 bg-blue-600 rounded-sm"
                  style={{ height: `${40 + Math.random() * 100}px` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2 px-4">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
