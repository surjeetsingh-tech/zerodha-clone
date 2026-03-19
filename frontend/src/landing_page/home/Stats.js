import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <h3 className='mb-5'>Trust with confidence</h3>
                    <h5>Custumer-first always</h5>
                    <p className='text-muted'>That's why 1.3+ crore custumers trust Zerodha with &#8377;3.5+<br/>
                        lakh crores worth of equity investments.
                    </p>
                    <h5>No spam or gimmicks</h5>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push<br/>
                        notifications. High quality apps that you use at your pace,the<br/>
                        way you like.
                    </p>
                    <h5>The Zerodha universe</h5>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in<br/>
                        30+ fintech startups offer you tailored services specific to<br/>
                        your needs.
                    </p>
                    <h5>Do better with money</h5>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we dont't just<br/>
                    facilitate transactions, but actively help you do better with<br/>
                    your money.
                    </p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' style={{width: "80%"}}/>
                    <div className='text-center'>
                        <a href='' className='mr-5' style={{textDecoration:"none"}}>
                            Explore our products <i class="fa fa-long-arrow-right"
                        aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;