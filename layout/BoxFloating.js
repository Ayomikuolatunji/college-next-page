import React from 'react'
import DesignImg from "../public/img/element.png";
import Image from 'next/image';


export default function BoxFloating() {
  return (
    <div className="design-box sm:absolute sm:top-0 sm:left-0 right-0 top-0 -z-10 sm:mt-64 sm:opacity-100  absolute opacity-50">
       <Image src={DesignImg} alt={"design-img"} className="abolute"/>
     </div>
  )
}
