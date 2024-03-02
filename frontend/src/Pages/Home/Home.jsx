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
     
    </div>
  )
}

export default Home
