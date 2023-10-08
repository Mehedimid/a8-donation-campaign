

import SingleCard from './SingleCard';

const  CardContainer = ({cards}) => { 
    return (
        <section id='card-container' className='mb-24'>
         <div className='sizing'>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {
                    cards.map((card) => (<SingleCard key={card.id} card={card}></SingleCard>))
                }
            </div>
         </div>
        </section>
    );
}

export default CardContainer;