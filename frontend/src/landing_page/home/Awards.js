import React from 'react';

function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all
                        retail order volumes in India daily trading and investing in:
                    </p>
                    <div className='row mt-5 mb-5'>
                    <div className='col-6'>
                     <ul>
                        <li><p>Futures and options</p></li>
                        <li><p>Community derivatives</p></li>
                        <li><p>Currency derivates</p></li>
                    </ul>
                    </div>
                       <div className='col-6'>
                     <ul>
                        <li><p>stocks & IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bands and Govt, Security</p></li>
                    </ul>
                    </div>
                    </div>
                        <img src='media/images/pressLogos.png' style={{width:"90%"}} />
                </div>
            </div>
        </div>
      );
}

export default Awards;