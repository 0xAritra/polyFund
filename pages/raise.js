const raise = () => {
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
        <input name="name" type="text" placeholder="" /> <br />
        <label htmlFor="email">Email ID: </label>
        <input name="email" type="text" /> <br />
        <label htmlFor="description">Description: </label>
        <input name="description" type="text" /> <br />
        <label htmlFor="donation">Donation: </label>
        <input name="donation" type="text" /> <br />
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  )
}

export default raise