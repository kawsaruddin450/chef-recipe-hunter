import React from 'react';
import background from '../../../../public/home_banner.jpg'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '300px',
            color: 'white',
        }} >
            <h1>Hello World!</h1>
        </div>
    );
};

export default Banner;