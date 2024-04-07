"use client";

import { useContext } from "react";
// components
import Search from "./Search";

// context
import { SearchContext } from "../context/search";

//next image
import Image from "next/image";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & Image */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/**text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <h1 className="h1">
              <span className="text-accent">Explore</span> The Finest Andhra's{" "}
              <span className="text-accent">Suji-Self-Drive</span> Cars
            </h1>
            <p className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals
            </p>
            {/**btns */}
            <div className="flex gap-x-3 justify-center xl:justify-start">
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
            </div>
          </div>
          {/**image car*/}
          <div className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:right-[100px] min-[1680]">
            <Image
              src={"/images/hero/pngwing.com.png"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
            1:59:21 / 3:54:58
          </div>
        </div>
      </div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
}
