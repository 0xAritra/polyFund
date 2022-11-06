import React from 'react'


const Card = ({ name, description, email, amount }) => {
  return (
    <div className='card'>
      <div className='card-head'>
       <h2 className='card-h'>{name}</h2>
       <button className='bttn3'>DONATE</button>
      </div>
       <p className='descrip'>
       {description}
       <div className='min-amt'>Minimum Amount: <strong className='am'>{amount}</strong></div>
       </p>
    
     </div>
  )
}

export default Card