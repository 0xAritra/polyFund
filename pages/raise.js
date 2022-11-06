import { useState } from "react"

const Raise = () => {
  const [name, setName] = useState([])
  const [email, setEmail ] = useState([])
  const [description, setDescription] = useState([])
  const [donation, setDonation] = useState([])

  return (
    <div className="raise">
      <div className="title">
        <h1>RAISE FUNDS</h1>
        <p>
          Start a fundraiser today and get the first donation from us!
          <br />
          We want to be the first to support you.
        </p>
      </div>
      <div className="form">
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="Enter the Name of Fund" /> <br />
        <label htmlFor="email">Email ID: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder="Enter the Email Id" /> <br />
        <label htmlFor="description">Description: </label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} name="description" type="text" placeholder="Enter the cause" /> <br />
        <label htmlFor="donation">Donation: </label>
        <input value={donation} onChange={(e) => setDonation(e.target.value)} name="donation" type="text" placeholder="Minimum amount of donation" /> <br />
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  )
}

export default Raise;