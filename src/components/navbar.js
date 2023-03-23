import React from "react";
import NavButton from "./navbarButton";
export default function Navbar() {
    return <div className="h-56 grid grid-cols-2 gap-4 content-center ...">
        
        <NavButton text="Projects" link="#Projects"/>
        <NavButton text="Contacts" link="#Contacts"/>


    
  </div>;
  }

  //export default -> ie. export literal
  //export {.. as default} -> live binding; export reference