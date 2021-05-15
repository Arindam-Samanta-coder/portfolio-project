import React from "react"
import Author from "../profile_pic.jpg"

const AboutMe = () => {
    return (
      <div className="container py-5">
          <div className="row">
              <div className="col-lg-6 col-xm-12">

                 <div className="photo-wrap mb-5">
                    <img className="profile-img "src={Author} alt="author"/>
                </div> 
                
              </div>
              <div className="col-lg-6 col-xm-12">
                  <h1 className="about-heading">about me</h1>
                  <p className="para">
                  Hello, my name is Arindam Samanta, an ambitious individual with a willingness to succeed. Born and bought up in Kolkata.
                  I'm currently persuaing Bachelor's degree in Computer Science Engineering in specialization with Internet of Things(IOT) from Chandigarh University.
                  Confident in public speaking and possessing intermediate leadership and management qualities. 
                  An IOT enthusiastic which an additional knack in Android and
                  Web Development. Passionate about software development and has a pull towards new technologies.
                  A traveller who likes to explore newerhorizons on and off the field. Contact me if you have any IOT,Android or Web dev projects.
                  Wish me good luck!
                  </p>
              </div>
          </div>
      </div>
    )
}

export default AboutMe
