import HeroBanner from '@/component/HeroBanner';
import NumberCards from '@/component/NumberCards';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <NumberCards></NumberCards>
            <h1>This is home page</h1>
        </div>
    );
};

export default HomePage;