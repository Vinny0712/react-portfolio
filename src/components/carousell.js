
import React, { useState } from 'react';


export default function Carousell(props) {
    const slides = props.urls;
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      function prevSlide (){
        console.log("prev");
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      function nextSlide (){
        console.log("next");
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      //max-w-[780px] h-[780px] w-full
      //style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    
      return (
        <div className='h-[350px] w-full m-auto  relative group'>
          <div  className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            <img  src={slides[currentIndex].url}/>
          </div>
          {/* Left Arrow */}
          
          <button className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-5xl rounded-full p-2 bg-white/80 text-black cursor-pointer' onClick={prevSlide}  >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-2 h-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </button>


          {/* Right Arrow */}
          <button className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-5xl rounded-full p-2  bg-white/80 text-black cursor-pointer' onClick={nextSlide}  >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-2 h-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
          
         
        </div>
      );
  }