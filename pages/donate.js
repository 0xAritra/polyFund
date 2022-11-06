import { useEffect, useState } from "react"
import client from "../sanity"

const donate = () => {
  const [raiseFunds,setRaiseFunds] = useState(false)
  

useEffect(() => {
  const fetchData = async () => {

    const groq = `*[_type == "raise_funds"]{
      _createdAt,name,description,donation_amount,email
    }]`
    const links = await client.fetch(groq);
    console.log(links)
  }

  fetchData();
  
    
}, [])


  return (
    <div className="donate">
      <div className="title">
        <h1>DONATE FUNDS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Harum
          odit sunt totam accusamus cum. Suscipit, blanditiis magni. <br />
          Esse, delectus ducimus ratione quia eum iure mollitia est nam enim
          tenetur labore.
        </p>
      </div>
    </div>
  )
}

export default donate