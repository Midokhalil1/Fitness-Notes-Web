import React from "react"
import FitnessVideo from "../assets/FitnessVideo.MOV"
import "./Hero.css"


const Hero = () =>  {
    return (
    
    <div className="Hero">
    <video src={FitnessVideo} autoPlay loop />
  </div>
    )
}
export default Hero


