import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useRef } from 'react';
import "./Music.css";


const Music = () => {


  const musicRef = useRef(null);

  useEffect(() => {
     if (musicRef.current) {
      musicRef.current.play();
      }
  }, []);


  return (

    <div className='music'>
    <audio ref={musicRef} autoPlay>
      <source src="/audio.wav" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </div>
  )
}

export default Music
