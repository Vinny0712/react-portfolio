import React from "react";
import Carousell from "./carousell";
import Tag from "./tag";
export default function Card(props) {
    
    return <div className="sm:max-w-sm max-w-xs rounded overflow-hidden shadow-lg bg-slate-700 ">
    
    <div className="px-6 py-4">
    <div className="px-3 py-3">
      <a href={props.link} >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
      </a>
    </div>
      <div className="font-bold sm:text-xl text-lg mb-2">{props.title}</div>
      
      <p className="text-white-700 sm:text-base text-sm pt-4">
        {props.text}
      </p>
    </div>
    <div className="px-3 ">
    <Carousell urls={props.urls}/>
    </div>
   
    <div className="px-6 pt-4 pb-2">
    {
      props.tags?props.tags.map(tag=><Tag text={tag}/>):<p></p>
      
    }
   
    </div>

    
    
      
  </div>
  }
  //conditional rendering is used as state will be updated after data is asynchronously fetched 
  //and component will be rerendered otherwise an error will be thrown as data is null in initial render