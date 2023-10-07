import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

function CardContainer() {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <>
         <div className='sizing'>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {
                    cards.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
            <div className='flex justify-center mt-7 mb-20'>
                <button className='btn bg-green-600 text-white'>See All</button>
            </div>
         </div>
        </>
    );
}

export default CardContainer;