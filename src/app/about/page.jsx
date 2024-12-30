"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Brain from "../components/brain";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/hero2.png" alt="Author Image" width={112} height={115}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            Hi, I am Misbah 👋 an aspiring frontend developer with a passion for crafting engaging and user-friendly web experiences. I enjoy bringing creative ideas to life on the web.
            Currently diving into full-stack development, I aim to build dynamic and efficient web applications.
            Outside of coding, I am a fitness enthusiast 🏋️‍♂️ who loves hitting the gym regularly and a proud foodie 🍽️—nothing makes me happier than a plate of delicious Biryani 😍.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            Let us connect and create something amazing together!
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
            <svg width="185" height="77" viewBox="0 0 522 333" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.13666 224.879C6.13666 252.726 19.8667 276.755 28.3589 302.546C30.7572 309.83 32.1367 317.162 32.1367 324.824C32.1367 327.114 32.1417 328.889 33.1367 330.879" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M6.13666 225.879C27.5368 226.852 46.1153 240.682 64.6922 249.657C69.5431 252.001 74.4321 256.328 79.3589 258.101C86.2149 260.569 84.1391 249.368 85.1367 244.879C86.6303 238.158 87.94 231.438 89.1367 224.657C90.0422 219.525 92.3475 214.936 93.3589 209.879C94.0556 206.395 94.2945 201.277 96.9144 198.657C98.0146 197.557 98.0477 196.392 98.1367 194.879C98.356 191.15 100.47 188.435 101.914 185.101C103.016 182.559 105.137 178.631 105.137 175.879" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M105.137 175.879C109.916 176.941 115.175 190.354 117.192 194.49C121.655 203.639 125.944 212.471 128.914 222.212C129.941 225.58 129.936 228.694 130.192 232.157C130.368 234.535 131.862 236.474 132.081 238.879C132.538 243.901 133.945 248.889 134.137 253.879C134.294 257.981 136.347 260.731 137.581 264.435C138.434 266.994 138 271.011 140.359 272.879C142.246 274.373 143.357 276.866 145.637 277.879C146.942 278.459 149.621 279.847 150.137 280.879" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M150.137 280.879C146.761 279.285 143.7 278.53 140.081 277.768C134.871 276.671 130.437 273.264 125.47 271.435C113.63 267.073 100.079 262.239 87.5811 260.324C71.7661 257.9 52.0237 255.13 36.1367 259.101C26.3967 261.536 18.8189 264.465 10.3589 269.657C2.91462 274.225 1.38922 280.157 2.1922 288.99C3.83541 307.065 26.7042 308.254 40.0255 305.268C48.8855 303.282 58.3627 299.352 66.3589 295.101C80.0509 287.822 93.51 282.17 106.192 272.712C115.649 265.66 124.559 257.935 133.914 250.768C138.007 247.633 142.632 245.264 146.359 241.657C152.93 235.298 156.203 227.3 160.637 219.435C164.055 213.37 168.213 206.513 170.359 199.879C171.253 197.116 173.137 197.186 173.137 193.879" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M173.137 193.879C177.626 199.491 178.047 210.476 180.137 217.268C181.243 220.865 183.133 224.118 184.914 227.324C188.833 234.377 197.341 233.361 203.637 230.379C218.844 223.176 227.116 205.529 235.581 191.824C242.542 180.554 246.137 168.95 246.137 155.879" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M246.137 155.879C246.86 155.97 249.146 157.777 249.692 158.324C252.088 160.719 252.894 161.438 256.137 162.879C262.137 165.546 269.68 161.645 275.192 165.435C286.786 173.405 281.952 187.81 275.192 196.824C269.035 205.033 252.103 205.263 243.581 199.657C242.087 198.674 231.591 194.165 236.692 195.379C244.89 197.331 253.333 196.879 261.692 196.879C266.686 196.879 271.604 197.525 276.137 195.324C278.323 194.262 280.797 193.703 283.137 193.101C285.943 192.38 288.228 190.258 291.137 189.935C301.228 188.813 303.693 177.534 307.581 169.435C313.307 157.505 313.832 145.599 312.137 132.546C310.321 118.563 308.502 109.628 300.359 98.8791C296.11 93.2704 291.813 87.6635 286.137 83.8791" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M286.137 83.8791C286.137 97.7732 289.267 112.945 294.692 125.768C297.516 132.442 299.323 139.595 304.359 145.212C312.594 154.398 325.369 163.246 338.692 160.824C350.443 158.687 353.137 138.852 353.137 129.268C353.137 119.425 350.037 112.779 343.137 105.879" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M343.137 105.879C341.209 106.361 336.544 117.08 339.692 118.879C341.687 120.019 341.501 123.082 343.692 123.879C347.141 125.133 348.75 125.879 352.581 125.879C360.737 125.879 360.634 118.995 363.692 112.879C365.974 108.316 367.906 103.13 369.637 98.3236C370.694 95.3855 372.859 93.2124 373.97 90.4347C374.583 88.9025 373.925 86.8984 375.692 85.9347C376.498 85.4952 390.026 78.1368 390.026 82.4347C390.026 85.7832 378.939 88.5165 378.081 92.3791C377.673 94.2153 374.786 99.4448 373.637 100.824C371.711 103.135 371.137 106.415 371.137 109.324C371.137 113.417 370.662 121.05 375.692 122.879C381.612 125.032 385.24 126.879 391.914 126.879C396.908 126.879 401.865 122.036 402.137 116.879C402.437 111.178 402.137 105.365 402.137 99.6569C402.137 94.1144 401.451 91.3164 397.914 88.1013C396.984 87.2555 395.289 87.5028 394.359 86.6569C393.783 86.1331 392.842 83.9638 393.359 84.5458C396.853 88.477 397.016 93.8764 399.581 98.1013C402.012 102.105 404.653 104.396 408.137 107.879C411.302 111.045 416.663 109.879 420.914 109.879C428.369 109.879 432.615 110.377 434.359 101.657C435.626 95.322 435.137 88.8251 435.137 82.3791C435.137 73.6443 435.67 64.7263 434.637 56.0458C433.815 49.1407 431.712 42.7632 430.637 35.8791C429.55 28.9264 426.77 21.9825 426.192 15.0458C425.867 11.1485 426.121 7.64507 423.581 4.37913C421.348 1.508 418.47 0.761059 416.692 4.82357C414.804 9.13989 414.878 21.9616 417.581 25.8236C422.291 32.5516 429.779 38.0094 434.026 45.3236C439.79 55.2512 447.324 64.1424 453.026 74.3236C455.41 78.5824 457.504 84.0594 458.192 88.8791C458.458 90.7379 461.79 95.2965 459.581 90.8791C457.42 86.5577 454.235 81.0709 453.192 76.3791C452.701 74.1679 450.364 73.0391 450.137 70.8791C449.849 68.1473 446.25 66.7989 446.137 64.8791C445.884 60.5808 445.137 56.5898 445.137 52.1013C445.137 41.6338 459.609 37.1395 467.137 41.1013C469.928 42.5703 470.183 46.5245 471.914 48.8791C474.647 52.5953 476.396 57.402 478.137 61.6569C479.952 66.0939 482.709 74.4774 487.581 76.1013C494.75 78.4908 505.254 80.043 511.137 74.3236C518.527 67.1382 520.137 56.9829 520.137 46.8791" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            <path d="M170.137 167.879C173.054 170.796 178.387 173.879 182.637 173.879C186.536 173.879 187.664 168.576 184.914 166.101C181.513 163.04 172.137 154.539 172.137 164.879" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
