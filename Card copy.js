import React from 'react'
import img1 from './assets/img1.png'

const Card = () => {
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
  )
}

export default Card
