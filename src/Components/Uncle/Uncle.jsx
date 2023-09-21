import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin asset={asset} name='Sadhin'></Cousin>
                <Cousin name='Rojina'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;