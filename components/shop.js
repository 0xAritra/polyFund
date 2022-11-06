import React from 'react'


const Shop = ({ object, properties, size , imgUrl}) => {
  return (
    <div className='card'>
      <div className='card-head'>
       <h2 className='card-h'>{object}</h2>
       <img src={imgUrl} alt="" className="" />
      </div>
       <div className='descrip'>
       {properties}
       <button className='bttn3'>Buy Now</button>
       </div>
    
     </div>
  )
}

export default Shop