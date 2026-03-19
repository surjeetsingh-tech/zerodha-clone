import React from 'react';

function Universe({

}) {
    return (  
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>
                    crunches tens of billions of rows of historical trade breakdowns
                     to keep track. 
                </p>
                <div className='col-4 p-3 mt-4'>
                      <img src="media/images/smallcaseLogo.png"/>
                      <p className='text-small text-muted'>Support portal</p>
                    </div>
                <div className='col-4 p-3 mt-4'>
                      <img src="media/images/goldenpiLogo.png"/>
                      <p className='text-small text-muted'>Z-Connect blog</p>
                    </div>
                <div className='col-4 p-3 mt-4'>
                      <img src="media/images/sensibullLogo.svg"/>
                      <p className='text-small text-muted'>Fund transfer</p>
                    </div>
                     <div className='col-4 p-3 mt-4 mb-4'>
                      <img src="media/images/sensibullLogo.svg"/>
                      <p className='text-small text-muted'>Press & media</p>
                    </div>
                <div className='col-4 p-3 mt-4 mb-4'>
                      <img src="/media/images/smallcaseLogo.png"/>
                      <p className='text-small text-muted'>Dematerialisation</p>
                    </div>
                <div className='col-4 p-3 mt-4 mb-4'>
                      <img src="media/images/goldenpiLogo.png"/>
                      <p className='text-small text-muted'>Referral program</p>
                    </div>
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"18%", margin: "0 auto"}}>Signup now</button>

                </div>
            </div>
    );
}

export default Universe;