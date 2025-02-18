import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/academy.png";
import Img2 from "../assets/ticket.png";
import Img3 from "../assets/gym.png";
import Img4 from "../assets/Camp.png";
import Img5 from "../assets/books.jpg";

const Work = () => {
  return (
    <section className="section lg:my-[300px] my-[100px]" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-6">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8 mb-8 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-gradient text-lg">
                My latest work
              </h2>
              <p className="max-w-sm mb-12 text-sm">
                Crafting innovative, responsive websites and applications with a
                focus on performance, functionality, and user experience.
              </p>
              <a
                className="btn btn-sm py-2 px-4 text-xs"
                href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/"
              >
                View all projects
              </a>
            </div>
            {/* Project 1 */}
            <div className="relative overflow-hidden rounded-xl cursor-pointer sm:w-full mt-6">
              <img
                src={Img1}
                alt="E-learning Academy Project Preview"
                className="transition-transform duration-500 h-52 w-96 rounded-lg blur-sm"
              />
              <div className="absolute left-8 bottom-16 transition-all duration-500 z-50">
                <span className="bg-white rounded-xl px-2 py-1 text-sm text-gradient">
                  Web Development
                </span>
              </div>
              <div className="absolute left-8 bottom-10 transition-all duration-700 z-50">
                <span className="font-poppins rounded-xl px-2 py-1 text-xl text-white">
                  e-learning Academy
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/urn:li:fsd_profileProject:(ACoAAEJeDl8Bq63_iMJUNVygdytMWJxDtgwMSdk,2137572438)/treasury/"
                className="absolute inset-0 flex items-center justify-center w-32 text-xs font-semibold text-white backdrop-blur-sm"
              >
                <span className="bg-sky-600 rounded-xl px-3 hover:bg-sky-800">
                  Visit Project
                </span>
              </a>
            </div>
            {/* Project 2 */}
            <div className="relative overflow-hidden rounded-xl cursor-pointer sm:w-full">
              <img
                src={Img5}
                alt="Bookstore Project Preview"
                className="transition-transform duration-500 h-52 w-96 rounded-lg blur-sm"
              />
              <div className="absolute left-8 bottom-16 transition-all duration-500 z-50">
                <span className="bg-white rounded-xl px-2 py-1 text-sm text-gradient">
                  Web Development
                </span>
              </div>
              <div className="absolute left-8 bottom-10 transition-all duration-700 z-50">
                <span className="font-poppins rounded-xl px-2 py-1 text-xl text-white">
                  Bookstore
                </span>
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7162030800350224384/"
                className="absolute inset-0 flex items-center justify-center w-32 text-xs font-semibold text-white backdrop-blur-sm"
                aria-label="Visit Bookstore Project"
              >
                <span className="bg-sky-600 rounded-xl px-3 hover:bg-sky-800">
                  Visit Project
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8"
          >
            {/* Project 3 */}
            <div className="relative overflow-hidden rounded-xl cursor-pointer sm:w-full">
              <img
                src={Img2}
                alt="Ticket Zone Project Preview"
                className="transition-transform duration-500 h-52 w-96 rounded-lg blur-sm"
              />
              <div className="absolute left-8 bottom-16 transition-all duration-500 z-50">
                <span className="bg-white rounded-xl px-2 py-1 text-sm text-gradient">
                  Web Development
                </span>
              </div>
              <div className="absolute left-8 bottom-10 transition-all duration-700 z-50">
                <span className="font-poppins rounded-xl px-2 py-1 text-xl text-white">
                  Ticket Zone
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/ilyass-badreddine-73ba8b270/details/projects/urn:li:fsd_profileProject:(ACoAAEJeDl8Bq63_iMJUNVygdytMWJxDtgwMSdk,2137254573)/treasury/"
                className="absolute inset-0 flex items-center justify-center w-32 text-xs font-semibold text-white backdrop-blur-sm"
              >
                <span className="bg-sky-600 rounded-xl px-3 hover:bg-sky-800">
                  Visit Project
                </span>
              </a>
            </div>
            {/* Project 4 */}
            <div className="relative overflow-hidden rounded-xl cursor-pointer sm:w-full">
              <img
                src={Img3}
                alt="DailyGym Project Preview"
                className="transition-transform duration-500 h-52 w-96 rounded-lg blur-sm"
              />
              <div className="absolute left-8 bottom-16 transition-all duration-500 z-50">
                <span className="bg-white rounded-xl px-2 py-1 text-sm text-gradient">
                  Web Development
                </span>
              </div>
              <div className="absolute left-8 bottom-10 transition-all duration-700 z-50">
                <span className="font-poppins rounded-xl px-2 py-1 text-xl text-black">
                  DailyGym
                </span>
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7162030800350224384/"
                className="absolute inset-0 flex items-center justify-center w-32 text-xs font-semibold text-white backdrop-blur-sm"
              >
                <span className="bg-sky-600 rounded-xl px-3 hover:bg-sky-800">
                  Visit Project
                </span>
              </a>
            </div>
            {/* Project 5 */}
            <div className="relative overflow-hidden rounded-xl cursor-pointer sm:w-full">
              <img
                src={Img4}
                alt="Travelify Project Preview"
                className="transition-transform duration-500 h-52 w-96 rounded-lg blur-sm"
              />
              <div className="absolute left-8 bottom-16 transition-all duration-500 z-50">
                <span className="bg-white rounded-xl px-2 py-1 text-sm text-gradient">
                  Web Development
                </span>
              </div>
              <div className="absolute left-8 bottom-10 transition-all duration-700 z-50">
                <span className="font-poppins rounded-xl px-2 py-1 text-xl text-white">
                  Travelify
                </span>
              </div>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7162030800350224384/"
                className="absolute inset-0 flex items-center justify-center w-32 text-xs font-semibold text-white backdrop-blur-sm"
              >
                <span className="bg-sky-600 rounded-xl px-3 hover:bg-sky-800">
                  Visit Project
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
