import React from 'react'
import Image from 'next/image'

const Landing = () => {
  return (
    <div className='landing'>
     <div className='landingOne'>
        <div className='land-head'>
            <h1 className='rhead'>RAISE FUNDS</h1>
            <p className='rfunds'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               Excepteur sint occaecat cupidatat non proident, 
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
        </div>
        <div>
            <Image width={400} height={400} src='/undraw_transfer_money_re_6o1h.svg' />
        </div>
     </div>

     <div className='landingOne'>
        <div className='land-head'>
        <div className='imageTwo'>
            <Image width={400} height={400} src='/undraw_vault_re_s4my.svg' />
        </div>
            
        </div>
        <div className='heading-two'>
        <h1 className='rhead2'>DONATE</h1>
            <p className='rfunds2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               Excepteur sint occaecat cupidatat non proident, 
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
     </div>

    

    </div>


  )
}

export default Landing