"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link';
import Image from "next/image";


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];



const Portfoliopage = () => {

   const ref =useRef();
   const {scrollYProgress} = useScroll({target: ref});
   const x = useTransform(scrollYProgress,[0,1],["0%","-80%"])
  return (
    <motion.div 
    className="h-full"
    initial={{y:" -200vh"}}
    animate={{y:"0%"}}
    transition={{duration : 1}}>
       
       <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-center text-8xl'>My Works</div>
        <div className='sticky top-0 h-screen gap-4 flex items-center overflow-hidden'>
          <motion.div style={{x}} className='flex'>
          <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300'/>
          {items.map((item) => (
            <div key={item.id}
            className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
              
              <div className='flex flex-col gap-8 text-white'>
                <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8x lg:mt-2'>{item.title}</h1>
                <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[200px] lg:h-[150px] xl:w-[300px] xl:h-[210px] ">
                    <Image src={item.img} alt="" fill />
                  </div>
                 <p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>
                 <Link href={item.link} className='flex justify-end'>
                 <button className='p-2 text-sm md:p-4 md:text-md lg:px-8 lg:py-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>See Demo</button></Link>
              </div>
            </div>
          ))}
          </motion.div>
        </div>
  </div>

  {/* DO YOU HAVE PROJECT CONTAINER */}
   <div className='w-screen h-screen lg:mt-3 lg:pt flex flex-col gap-16 items-center justify-center text-center'>
    <h1></h1>
      <h1 className='text-7xl '>Do you have a project?</h1>
      <div className="relative">
        {/* SVG FOR CIRCLE */}
        <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact"
          className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-center'>Hire Me
          </Link>
      </div>
   </div>

    </motion.div>
   
  )
}

export default Portfoliopage