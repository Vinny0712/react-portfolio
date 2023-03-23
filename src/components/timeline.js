import React from "react";
import Card from "./card";
export default function Timeline(props) {
    return <ol className="relative border-l  " id="Projects">
        {props.data.map(data=>(

            <li className="mb-10 ml-4 ">
            <div className="absolute  h-3 w-3 bg-gray-200   rounded-full -left-1.5 border border-white"></div>
            <Card title={data.title} text={data.text} tags={data.tags} urls={data.urls} link={data.link}/>
            </li>
        ))}                  

    
</ol>
  }
  //"absolute  h-3 w-3 bg-gray-200 rounded-full -left-1.5 border border-white"