import React from "react";
import { TypeAnimation } from 'react-type-animation';
export default function About() {
    return <div className="h-screen">
        <h1 className="sm:text-6xl text-base md:text-base py-6 font-mono font-bold ...">
        <TypeAnimation
  sequence={[
    // Same String at the start will only be typed once, initially
    'Hi, I\'m Vinny',
    1000,
    'I\'m an explorer and learner at heart',
    1000,
    
    
  ]}
  speed={50}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
            
            
            </h1>
        <p className=" text-sm sm:text-6xl md:text-base font-mono font-bold ...">Welcome to my space!</p>
  
  </div>;
  }