import React from "react";

const FooterAddress = ({ key, flag, country, location }) => {
  console.log(country, location);
  return (
    <div key={key} className="text-start mb-4">
      <h6 className="flex mb-2">
        {flag}
        <p>{country}</p>
      </h6>
      <ul>
        {location.map((street) => (
          <li className="mb-[1px]">{street}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterAddress;
