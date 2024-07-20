"use client"
import React, { useState ,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

  
const text = "say hello"

const Contactpage = () => {

  const [success,setsuccess] = useState(false)
  const [error,setError] = useState(false) 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setsuccess(false)
    setError(false)

    emailjs
      .sendForm('process.env.NEXT_PUBLIC_SERVICE_ID ', 'process.env.NEXT_TEMPLATE_ID ', form.current, {
        publicKey: 'process.env.NEXT_PUBLIC_PUBLIC_KEY ',
      })
      .then(
        (result) => {
          setsuccess(true)
          form.current.reset()
        },
        (error) => {

          setError(true)
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.div 
    className="h-full"
    initial={{y:" -200vh"}}
    animate={{y:"0%"}}
    transition={{duration : 2}}>

    <div className='h-full flex flex-col lg:flex-row px-4 sm:px-12 lg:px-20 xl:px-48'>
      {/* TEXT CONTAINER */}
      <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center  text-6xl'>
         <div>
          {text.split("").map((letter,index) => (
            <motion.span
            key={index}
            initial={{opacity:1}}
            animate={{opacity:0}}
            transition={{
              duration: 3,
              repeat:Infinity,
              delay:index * 0.1,
            }}>
               {letter}
            </motion.span>
            
          ))}
          <span role="img" aria-label="smile">😊</span>
         </div>
      </div>
      {/* FORM CONTAINER */}
      <form  ref={form} onSubmit={sendEmail}action="" className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-24'>
        <span className='text-[16px] font-semibold'>Dear Charumathi,</span>
        <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
         <span  className='text-[16px] font-semibold'>My mail address is: </span>
         <input type="text" 
         name="user_email"
         className='bg-transparent border-b-2 border-b-black outline-none resize-none' />
         <span  className='text-[16px] font-semibold'>Regards</span>
         <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>Send</button>
         {success && <span className='text-green-600 text-[16px]'>Your message has been sent</span>}
         {error && <span className='text-red-600 text-[16px]'>Something went wrong</span>}
      </form>
    </div>
    </motion.div>
   
  )
}

export default Contactpage