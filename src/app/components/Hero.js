"use client";

import { useContext } from "react";
// components
import Search from "./Search";

// context
import { SearchContext } from "../context/search";

//next image
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "/varients";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & Image */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/**text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-40 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              <span className="text-accent">Explore</span> The Finest Guntur's{" "}
              <span className="text-accent">Suji-Self-Drive</span> Cars
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find Your Ideal Ride For Any Adventure With Our Diverse Range Of
              Affordable And Dependable Car Rentals
            </motion.p>
            {/**btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              {/** btn appstore */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
              {/** btn google */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
            </motion.div>
          </div>
          {/**image car*/}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[630px] xl:absolute xl:right-[10px] min-[1680px]"
          >
            <Image
              src={"/images/hero/pngwing.com (1).png"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}
