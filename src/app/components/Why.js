"use client";

// next image
import Image from "next/image";

// farmer action
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/varients";

// icons
import { MdHandshake, MdTrendingUp, MdKey } from "react-icons/md";

export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched Excellence And Customer Satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our Dedication To Providing Exceptional Services Sets Us Apart From
          The Competition. From The Moment You Engage With Us, We Strive To
          Exceed Your Expectations In Every Interaction.
        </motion.p>
        {/** car image */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image
            src={"/images/why/Baleno22.png"}
            width={1060}
            height={250}
            alt=""
          />
        </motion.div>
        {/** grid items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          {/** item 2 */}
          <div className="flex flex-col items-center text-center mx-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Modern & Well Maintained Vehicles</h3>
            <p className="hidden xl:flex">
              We Prioritize your Need And We Go Above And Beyond To Ensure Your
              Experience With Us Is Nothing Short Of Outstanding.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mx-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Rent Simply And Quickly</h3>
            <p className="hidden xl:flex">
              Streamline Your Search, Simplify The Process, And Settle Into Your
              New Space Swiftly.
            </p>
          </div>
          {/** item 3 */}
          <div className="flex flex-col items-center text-center mx-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Prompt And Flexible Services</h3>
            <p className="hidden xl:flex">
              Our Commitment Is To Provide Prompt And Flexible Services,
              Ensuring Your Needs Are Met Efficiently And With Utmost
              Adaptability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
