import React from 'react';

function Hero() {
    return ( 
        <>
        <div className='container border-bottom mb-5'>
            <div className='row'>
                <div className='col text-center mt-5 mb-5'>
                    <h2 className='mb-4'>Charges</h2>
                    <h5 className='mb-4 text-muted'>List of all charges and taxes</h5>
                </div>
            </div>
        </div>
        <div className='container2 p-4 mt-5'>
            <div className='row'>
                 <div className='col-4'>
                    <img src='/media/images/pricing0.svg'/>
                    <h3 className='text-center mb-4'>Free equity delivery</h3>
                    <p className='text-center text-muted'>All equity delivery investments (NSE, BSE),<br/>
                         are absolutely free — ₹ 0 brokerage.</p>
                </div>
                 <div className='col-4 p-4'>
                    <img src='media/images/intradayTrades.svg'/>
                    <h3 className='text-center mb-4'>Intraday and F&O trades</h3>
                    <p className='text-center text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed
                         order on intraday trades across<br/> equity,
                         currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
                </div>
                 <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h3 className='text-center mb-4'>Free direct MF</h3>
                    <p className='text-center text-muted'>All direct mutual fund investments are <br/>absolutely 
                        free — ₹ 0 commissions & DP <br/>charges.</p>
                </div>
            </div>
        </div>
        </>
     );
}

export default Hero;