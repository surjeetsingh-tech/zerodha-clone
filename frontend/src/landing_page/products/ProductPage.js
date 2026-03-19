import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function Product() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""
      />
      <RightSection 
       productName="Console"
       productDescription="Exclusive access to level 3 data, or 20 marketdepth. 
       Level 3 data gives you deeper insights into market liquidity and allows 
       you to develop sophisticated intraday trading strategies."
       learnMore=""
       imageURL="media/images/console.png"
      />
       <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Search across 90,000+ stocks and F&O contracts across multiple exchanges instantly. Find your favorite stocks, bonds, metals, or derivatives, anything really, with absolutely zero latency."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""
      />
      <RightSection
       productName="Kite Connect API"
     productDescription="Hundreds of indicators, studies, and tools on a powerful and customisable charting interface. Extensive historical data for stocks and F&O contracts. Nobody else offers as much data as we do."
      learnMore=""
       imageURL="media/images/Kiteconnect.png"
      />
       <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobiles"
        productDescription="With a sleek and carefully designed UI, buying, selling, analysing, and managing your portfolio, everything's just a click away. Navigate the app seamlessly with intuitively designed keyboard shortcuts."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appstore=""
      />
      <p className="text-center mt-5 mb-5">
        Create powerful market alerts on the cloud for stocks, futures and options.
      </p>
      <Universe />
    </>
  );
}

export default Product;
