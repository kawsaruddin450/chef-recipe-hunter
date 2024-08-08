import React from 'react';
import background from '../../../../public/home_banner.jpg'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundColor: 'gray',
            backgroundBlendMode: 'multiply',
            color: 'white',
        }}
        className='text-center py-36' >
            <h1 className='font-extrabold text-7xl'>TteokBokki</h1>
            <p className='text-medium text-2xl text-green-300'>Eat healthy, natural, tasty! Be Energetic!</p>
        </div>
    );
};

export default Banner;