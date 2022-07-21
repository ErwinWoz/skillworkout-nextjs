import React, { useState } from "react";
import Image from 'next/image'
import aboutimage from '../img/about.png';

function AboutMe() {
  const [visible, setVisible] = useState(false);

  return (
    <div id="about">
      <div className="about-image">
        <Image src={aboutimage} alt="about" />
      </div>
      <div className="about-text">
        <h1>THIS IS NOT ME IN THIS PICTURE</h1>
        <h2>I WISH I COULD HAVE TRICEPS LIKE THIS </h2>
        <p>
          This website is my little pet project to practice my React skills. If
          you want to know more click the button below.
        </p>
        {/* add conditional rendering onClick */}
        <button onClick={() => (
            setVisible(!visible)
        )}>READ MORE</button>
        {visible ? <AboutMeMore /> : null}
      </div>
    </div>
  );
}

function AboutMeMore() {
  return (
    <div>
      <p>More info about me coming soon.</p>
    </div>
  );
}

export default AboutMe;