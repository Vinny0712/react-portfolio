import React from "react";
import Card from "./card";
import { projects } from "./projectData";
import ProjectTitle from "./projectTitle";
import Timeline from "./timeline";
export default function Project() {
    return <div  >
        <ProjectTitle/>
        
        
        <Timeline data={projects}/>
        
  
  </div>;
  }