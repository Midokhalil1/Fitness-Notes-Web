import React from "react"
import VideoFinal from "../assets/VideoFinal.MOV"
import "./Hero.css"


const Hero = () =>  {
    return (
    
    <div className="Hero">
    <video src={VideoFinal} autoPlay loop />
  </div>
    )
}
export default Hero


