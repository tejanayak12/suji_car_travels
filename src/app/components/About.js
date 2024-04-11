"use client";

// next image
import Image from "next/image";

// icons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

// react count up
import CountUp from "react-countup";

// react interscrtion observer
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/varients";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/** image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mt-14 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/car01.png"}
              width={600}
              height={448}
              alt=""
            />
          </motion.div>
          {/** text & stats */}
          <div className="flex-1 flex items-center xl:justify-center ">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2 mb-2"
              >
                Car Services Simplified
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Rent, Choose, and Repair With-Ease. Our Convenient Locations,
                Diverse car Types, and Reliable Repair Points Ensure a Seamless
                Car Experience.
              </motion.p>
              {/** stats */}
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                {/** car types */}
                <div className="flex flex-col w-[100px] mb-4">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={10} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                {/** rental outlets */}
                <div className="flex flex-col w-[100px] mb-4">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={7} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> outlets
                  </div>
                </div>
                {/** repair points */}
                <div className="flex flex-col w-[100px] mb-4">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={3} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rapair <br /> points
                  </div>
                </div>
                {/** btn */}
              </motion.div>
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13x] max-w-[184px]"
              >
                See All Cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
