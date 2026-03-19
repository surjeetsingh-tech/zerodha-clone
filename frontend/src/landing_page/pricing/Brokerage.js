import React from "react";

function Brokerage() {
  return (
    <>
      <div className="container mt-4 mb-5 border-top text-muted">
        <div className="row">
          <div className="col-8">
           <a href=""><h3 className="text-center mt-5 mb-4">Brokerage calculator</h3></a>
            <ul>
              <li className="mb-2">
                Charged only on selling side when trading intraday or on F&O.
              </li>
              <li className="mb-2">
                Tax by the government when transacting on the exchanges towards
                the company assets.
              </li>
              <li className="mb-2">
                Can be a lot more than the brokerage we charge. Important to
                keep a tab.
              </li>
              <li className="mb-2">
                Tax levied by the government on the services rendered. 18% of
                charges transaction.
              </li>
              <li className="mb-2">
                Stamp charges by the Government of India as per the Indian for
                transacting in instruments.
              </li>
              <li className="mb-2">
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed.
              </li>
            </ul>
          </div>

          <div className="col-4">
           <a href=""><h3 className="text-center mt-5 mb-5 ">List of charges</h3></a> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
