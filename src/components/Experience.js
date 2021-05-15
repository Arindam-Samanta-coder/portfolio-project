import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>academics</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Chandigarh University</h2>
            <p>Bachelor in Computer Science Engineering in specialization with Internet of Things(IoT)</p>
            <h6>2018-2022</h6>
            <h6>CGPA : 7.23</h6>
          </div>
        </div>
        {/* - */}

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Little Star High School</h2>
            <p>Higher Secondary Education from ICSE</p>
            <h6>2016-2018</h6>
            <h6>Percentage : 78.4 %</h6>
          </div>
        </div>
        {/* - */}

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Little Star High School</h2>
            <p>Secondary Education from ICSE</p>
            <h6>2004-2016</h6>
            <h6>Percentage : 84.4 %</h6>
          </div>
        </div>
        {/* - */}
    
     
      </div>
    </div>
  )
}

export default Experience;
