import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

function CardContainer() {
    const [limitCard, setLimitCard] = useState(8)
    const cards = useLoaderData()
    const handleSeeAll = () => {
        
        setLimitCard(cards.length)
    }
    console.log(cards)
    return (
        <>
         <div className='sizing'>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {
                    cards.slice(0, limitCard).map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
            <div className='flex justify-center mt-7 mb-20'>
              {limitCard<cards.length && <button onClick={handleSeeAll} className='btn bg-green-600 text-white'>See All</button>}  
            </div>
         </div>
        </>
    );
}

export default CardContainer;