import React from 'react'
import gymPic from "../assets/photo.jpg"
const AboutUs = () => {
  return (
    <>
     <div className='about'>
        <div className='intro'>
         
          <h1>About Us</h1>
      <p>Gym24 is a leading fitness center located near Grushevka  metro station, offering over 1500 sq. m of space dedicated to  top-of-the-line workout equipment from leading brands such  as Hammer Strength, Life Fitness, and TechnoGym.</p>
      <p>With affordable membership options, Gym24 is accessible to  everyone who wants to reach their fitness goals, whether it's  building strength, increasing endurance, or losing weight.</p>
      <p>Certified trainers at Gym24 provide expert guidance and  support to develop personalized workout plans tailored to  each individual's needs and goals.</p>
      
      </div>
      <div className='picture'>
      <  img src={gymPic} alt="" />
      </div>
      
      </div>
    </>
   
  )
}

export default AboutUs
