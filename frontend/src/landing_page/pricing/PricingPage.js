import React from 'react';
import Pricing from '../home/Pricing';

import Brokerage from './Brokerage';
import Hero from './Hero';
import OpenAccount from "../OpenAccount";

function PricingPage() {
    return ( 
        <>
        <Hero />
        <OpenAccount />
        <Brokerage/>
        </>
     );
}

export default PricingPage;