import React from 'react';
import './elevator.css';

export const Elevator = () => {
  return (
    <section className='elevator-container'>
      <h2>Elevator Pitch</h2>
      <div>
          <iframe 
          width="560" height="315" 
          src="https://www.youtube.com/embed/aTCpqwhNQzs" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
      </div>
    </section>
  )
}
