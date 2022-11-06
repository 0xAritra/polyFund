import Shop from "../components/shop"
const redeem = () => {
  return (
    <div className="master">
      \<div className="donate">
      <div className="title">
        <h1>DONATE FUNDS</h1>
        <p className="don-fun">
        fundraise and donate seamlessly! Set up and manage your fundraiser or donate to different causes from your mobile at anytime and from anywhere
        </p>
      </div>
      <Shop
        object='Suede Sneakers '
        properties='Suede shoes look attractive and how! From boots, sneakers to loafers, theres a lot of options in this category to explore and experiment with. Read on to take a look at our picks. '
        imgUrl="/prod1.png"
      />
      <Shop 
        object='Hyper bass Headphones'
        properties='The compact over-ear is perfect for mobile use and offers real studio performance in any environment: check your recordings directly on the spot and work on your project while you are still travelling home.'
        imgUrl="/prod2.png"

      />
      <Shop 
        object='Sports Shoes'
        properties='Level up your training with this Campus collection. The shoes has full length air unit and adaptive cushioning technology which resists the shoes to D-shape. '
        imgUrl="/prod3.png"

      />
      {/* <Shop
        object='UKRAINE WAR CRISIS'
        properties='Communities across Nigeria are experiencing the worst floods in at least 10 years. More than 600 people have been killed and 2.8 million people have been displaced from their homes. The floods are striking during a difficult period in Nigeria with soaring inflation and a growing risk of catastrophic levels of hunger. Your donation to the Nigeria Flood Relief Fund will provide immediate and long-term relief in affected communities.'
        size= '10 MATIC'
      /> */}
    </div>
    </div>

  )

}

export default redeem
