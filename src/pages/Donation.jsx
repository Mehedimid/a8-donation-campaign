import React, { useState } from 'react';
import SingleDonation from '../components/SingleDonation';

function Donation() {
    const cards = JSON.parse(localStorage.getItem('donation'))||[];

    const [limit, setLimit] = useState(4)

    const handleLimit = () =>{
        setLimit(cards.length)
    }
   
    return (
        <div>
                    <section id='card-container' className='mb-24'>
         <div className='sizing'>
         <div className='md:mx-32 lg:mx-0 grid grid-cols-1 lg:grid-cols-2  gap-10'>
                {
                    cards.slice(0, limit).map((card) => (<SingleDonation key={card.id} card={card}></SingleDonation>))
                }
            </div>
          {limit<cards.length &&   <div className='sizing flex justify-center my-5'>
                <button onClick={handleLimit} className='btn bg-green-700 text-white hover:bg-green-500'>See All</button>
            </div>}
         </div>
        </section>
        </div>
    );   
}

export default Donation;

{/* <section id='card-container' className='mb-24'>
<div className='sizing'>
<div className=' grid grid-cols-1 lg:grid-cols-2  gap-10'>
       {
           cards.slice(0, limit).map((card) => (<SingleDonation key={card.id} card={card}></SingleDonation>))
       }
   </div>
 {limit<cards.length &&   <div className='sizing flex justify-center my-5'>
       <button onClick={handleLimit} className='btn bg-green-700 text-white hover:bg-green-500'>See All</button>
   </div>}
</div>
</section> */}