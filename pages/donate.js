import Card from "../components/Card";

import { useEffect, useState } from "react";
import client from "../sanity";

const donate = () => {
  const [raiseFunds, setRaiseFunds] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          "https://v4f5v3wm.api.sanity.io/v2021-10-21/data/query/production?query=%0A*%5B_type%3D%3D%22raise_funds%22%5D%0A%0A"
        )
      ).json();
      setRaiseFunds(data.result);
      console.log(data.result);
    })();
  }, []);

  return (
    <div className="donate">
      <div className="title">
        <h1>DONATE FUNDS</h1>
        <p className="don-fun">
        fundraise and donate seamlessly! Set up and manage your fundraiser or donate to different causes from your mobile at anytime and from anywhere
        </p>
      </div>
      {raiseFunds?.map((fund, index) => {
        return (
          <Card
            key={index}
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
