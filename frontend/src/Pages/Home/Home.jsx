import { React, useEffect } from 'react'
import './Home.css'
import video from '../../video/video.mp4'
// import image from '../../video/download.jpg'
import image from '../../video/main.png'


const Home = () => {

  useEffect(() => {
    const video = document.getElementById('background-video');
    video.playbackRate = 0.5; // Adjust playback speed if needed
  }, []);

  return (
    <div className="video-background">
      <video autoPlay muted loop id="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="content-container">
        <div className="content-left">
          <div className='section1-heading'>We Are Providing <br /> Best IT Services</div>
          <br />
          <br />
          <p>"Step into a world of unparalleled IT expertise, where our commitment to delivering the best isn't just a claim –
            it's a dedication to weaving the perfect technological tapestry for your business success. Your journey to excellence starts here."
            Contact Us
          </p>
          <br />
          <br />
          <button className='section1-button'>Contact</button>
        </div>
        <div className="content-right">
          <img src={image} alt='image'></img>
        </div>
      </div>
    </div>
  )
}

export default Home
