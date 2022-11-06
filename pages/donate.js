import Card from "../components/Card"
import { useEffect, useState } from "react"
import client from "../sanity"

const donate = () => {

  const [raiseFunds,setRaiseFunds] = useState(false)
  

useEffect(() => {

    const fetchData = async () => {
      const url = "https://v4f5v3wm.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22raise_funds%22%5D%0A"

      const data = await fetch(url);

      console.log(data)
    }
    fetchData()
    
}, [])


  return (
    <div className="donate">
      <div className="title">
        <h1>DONATE FUNDS</h1>
        <p className="don-fun">
        fundraise and donate seamlessly! Set up and manage your fundraiser or donate to different causes from your mobile at anytime and from anywhere
        </p>
      </div>
      <Card
        name='NIGERIA FLOOD RELEIF FUND'
        description='Communities across Nigeria are experiencing the worst floods in at least 10 years. More than 600 people have been killed and 2.8 million people have been displaced from their homes. The floods are striking during a difficult period in Nigeria with soaring inflation and a growing risk of catastrophic levels of hunger. Your donation to the Nigeria Flood Relief Fund will provide immediate and long-term relief in affected communities.'
        amount= '10 MATIC'
      />
      <Card 
        name='UKRAINE WAR CRISIS'
        description='The war in Ukraine is having a devastating impact on the country’s 7.5 million children. Humanitarian needs are multiplying by the hour as the fighting continues. Children continue to be killed, wounded and deeply traumatized by the violence all around them. Families are terrified, in shock, and desperate for safety. UNICEF is working with partners to reach vulnerable children and families with essential services – including health, education, protection, water and sanitation – as well as life-saving supplies.'
        amount= '10 MATIC'
      />
      <Card 
        name='HAIITI FUND '
        description='Millions of Haitians are confronting a complex crisis driven by political and economic turmoil, leading to violence and food and water scarcity. More than 19,000 people in Haiti are experiencing hunger at a catastrophic level. Another 4 million people are facing severe food insecurity. Your donation to the Haiti Crisis Relief Fund will provide emergency assistance to people in need and support long-term response efforts led by local organizations.'
        amount= '10 MATIC'
      />
      <Card
        name='UKRAINE WAR CRISIS'
        description='Communities across Nigeria are experiencing the worst floods in at least 10 years. More than 600 people have been killed and 2.8 million people have been displaced from their homes. The floods are striking during a difficult period in Nigeria with soaring inflation and a growing risk of catastrophic levels of hunger. Your donation to the Nigeria Flood Relief Fund will provide immediate and long-term relief in affected communities.'
        amount= '10 MATIC'
      />
    </div>
  )
}

export default donate