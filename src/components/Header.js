import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        
      <div className="header-wrapper">
        <div className="main-info">
            <h4>Hello, I am</h4>
            <h1>ARINDAM</h1>
            <p className="paragraph"> I am a&nbsp;
            <Typed 
                className="typed-text"
                strings={["Developer","Foodie","Traveller","Youtuber"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            </p>
            <a href = "#" className = "btn-main-offer">DOWNLOAD CV</a>
        </div>
      </div>

    )
}

export default Header
