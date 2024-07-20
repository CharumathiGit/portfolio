"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Hero from '../image/hero.png'
import html from '../image/html-5.png'
import css from '../image/css-3.png'
import js from '../image/js.png'
import react1 from '../image/physics.png'
import boot from '../image/bootstrap.png'
import next1 from '../image/nextjs.png'
import tail from '../image/Tailwind CSS.png'

const Aboutpage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="flex flex-row ">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-48 xl:gap-64 bg-gradient-to-b from-blue-100 to-red-100 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className='text-lg wrap'>Passionate and self-taught Frontend Developer with a BCom background, proficient in HTML, CSS, JavaScript, React, Next.js, Bootstrap, and Tailwind. Seeking to leverage my skills and projects to contribute to innovative web development projects in a dynamic and growth-oriented environment.</p>
            <span className='italic'>Passionate Full Stack Developer dedicated to creating innovative web solutions.</span>
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
          
            <div className="flex flex-col gap-12 justify-center">
              {/* SKILLS TITLE */}
              <h1 className="font-bold text-2xl">SKILLS</h1>
              {/* SKILL LIST */}
             < div className="flex gap-4  flex-wrap pb-8 " >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <Image src={html} width={100} height={100} />

              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <Image src={css} width={100} height={100} />
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <Image src={js} width={100} height={100} />
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <Image src={react1} width={100} height={100} />
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <Image src={next1} width={100} height={100} />
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <Image src={boot} width={100} height={100} />
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                <Image src={tail} width={100} height={100} />
              </div>

            </div>
            
            </div>
          
        </div>

        {/* IMAGE CONTAINER
        <div className="lg:w-1/2  md:flex justify-start " >
          <Image src="/hero.png"  width={200} height={200} className="bg-cover"/>
        </div> */}

      </div>

    </motion.div>
  );
};

export default Aboutpage;
