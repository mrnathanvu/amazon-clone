import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                    className='home__image'
                    src={process.env.PUBLIC_URL + '/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'} 
                    alt=''
                />

                <div className="home__row">
                    <Product 
                        id='12321341'
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                        price={11.96} 
                        rating={5}
                        image={process.env.PUBLIC_URL + '/51Zymoq7UnL.AC_SY400_.jpg'}
                    />
                    <Product 
                        id='49538094'
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                        price={239.0} 
                        rating={4}
                        image={process.env.PUBLIC_URL + '/61etD4-IrPL._AC_SL1200_.jpg'}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id='4903850'
                        title='Fitbit Charge 3 Advanced Fitness Tracker with Heart Rate, Swim Tracking & 7 Day Battery' 
                        price={199.99} 
                        rating={3}
                        image={process.env.PUBLIC_URL + '/71Swqqe7XAL._AC_SX466_.jpg'}
                    />
                    <Product 
                        id='23445930'
                        title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                        price={98.99} 
                        rating={5}
                        image={process.env.PUBLIC_URL + '/6347261_sd.jpg'}
                    />
                    <Product 
                        id='3254354345'
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)' 
                        price={598.99} 
                        rating={4}
                        image={process.env.PUBLIC_URL + '/81FH2j7EnJL._AC_SL1500_.jpg'}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id='90829332'
                        title='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor' 
                        price={1094.98} 
                        rating={4}
                        image={process.env.PUBLIC_URL + '/6125mFrzr6L._AC_SL1000_.jpg'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
