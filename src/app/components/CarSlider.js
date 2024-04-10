"use client";
import React, { useState } from "react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

// next Image
import Image from "next/image";

// icons
import { FaStar, FaStarHalfAlt, faregsStar } from "react-icons/fa";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/varients";

// car data
const cars = [
  {
    type: "Maruti Suzuki",
    name: "Baleno",
    price: "₹ 2500",
    stars: 4.5,
    image: "images/carSlider/Baleno4.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Petrol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "88.50 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Maruti Suzuki",
    name: "Brezza",
    price: "₹ 2500",
    stars: 4.3,
    image: "images/carSlider/Brezza2.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Diesel",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "103.26HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Tata",
    name: "Nexon",
    price: "₹ 2500",
    stars: 4.8,
    image: "images/carSlider/Nexon.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Petrol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "113.31 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Maruti Suzuki",
    name: "Ertiga",
    price: "₹ 4000",
    stars: 4.5,
    image: "images/carSlider/Ertiga.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "7 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Diesel",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "101.64HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Hyundai",
    name: "i20",
    price: "₹ 2500",
    stars: 4.5,
    image: "images/carSlider/i20.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Diesel",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "114.7HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Toyota",
    name: "Innova",
    price: "₹ 4000",
    stars: 4.5,
    image: "images/carSlider/Innova2.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "7 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Diesel",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "147.51 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];

// Function to render star icons based on rating percentage
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  const starIcons = [];

  // Rendering Full Stars
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FaStar key={i} />);
  }

  // Render Half Star
  if (hasHalfStar) {
    starIcons.push(<FaStarHalfAlt key={fullStars} />);
  }

  // Rendering Empty Stars
  for (let i = starIcons.length; i < totalStars; i++) {
    starIcons.push(<FaStar key={i} />);
  }

  return starIcons;
};

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto mt-4"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-full mx-auto sm:mx-0">
                <div>
                  <Image
                    src={`/${car.image}`}
                    width={380}
                    height={284}
                    alt=""
                    layout="responsive"
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">
                      {" "}
                      {car.name}{" "}
                    </h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      {" "}
                      {car.price}/Day
                    </h3>
                  </div>
                  {/** stars */}
                  <div className="flex gap-x-2 text-accent h-max">
                    {renderStars(car.stars)}
                  </div>
                </div>
                {/** car info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={`/${item.icon}`}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See Details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
