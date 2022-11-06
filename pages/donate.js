import Card from "../components/Card";

import { useEffect, useState } from "react";
import client from "../sanity";

const donate = () => {
  const [raiseFunds, setRaiseFunds] = useState([]);

  useEffect(() => {
    const groq = `*[_type == "raise_funds"]`;
    client.fetch(groq).then((data) => {
      console.log(data);
      setRaiseFunds(data);
    });
  }, []);

  return (
    <div className="donate">
      <div className="title">
        <h1>DONATE FUNDS</h1>
        <p className="don-fun">
          fundraise and donate seamlessly! Set up and manage your fundraiser or
          donate to different causes from your mobile at anytime and from
          anywhere
        </p>
      </div>
      {raiseFunds?.map((fund, index) => {
        return (
          <Card
            key={index}
            wallet_address={fund.wallet_address}
            name={fund.name}
            description={fund.description}
            amount={fund.donation_amount}
          />
        );
      })}
    </div>
  );
};

export default donate;
