import React from 'react';

function Team() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <h4 className='text-center mt-5 mb-5  text-muted'>People</h4>
                <div className='col-6 text-center'>
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"60%",}}/>
                    <h5 className='mt-2'>Nithin Kamath</h5>
                    <p>Founder, CEO</p>
                </div>
                <div className='col-6'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles 
                        he faced during his decade long stint as a trader. Today, Zerodha has
                         changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) 
                        and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
     );
}

export default Team;