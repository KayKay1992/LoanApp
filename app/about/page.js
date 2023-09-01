import React from "react";

export default function page() {
  return (
    <div className=" mx-auto space-y-4 mt-20 max-w-6xl">
      <h1 className="font-extrabold text-2xl text-amber-600 text-center">
        About Us
      </h1>
      <br />
      <h2 className="text-center font-bold bg-transparent">Our Vision</h2>
      <div className="sm:flex ml-7">
        <div className="max-w-xl mr-10">
          <p className="mb-7">
            Quickloan is the definitive bank for small and medium-sized
            businesses in Nigeria and is regulated by the Central Bank of
            Nigeria (CBN). Quickloan MFB was also awarded by the CBN in 2022 as
            the most inclusive payment platform in the country.
          </p>
          <p className="mb-7">
            Quickloan MFB received its license in February 2022 and helps over
            1.5 million businesses with banking, payments processing, access to
            loans and business management tools. With these solutions,
            businesses on the platform process about 8 trillion Naira monthly.
          </p>
          <p className="mb-7">
            Quickloan operates the largest distribution network for financial
            services in Nigeria, and over 33 million people use their cards on
            our POS terminals monthly across every local government in Nigeria.
          </p>
        </div>
        <div>
          <img
            className=""
            src="../../about-loan.jpg"
            width={500}
            height={500}
          />
          <p></p>
        </div>
      </div>
    </div>
  );
}
