import React, { useState } from 'react';
import Banner from '../components/Banner';
import CardContainer from '../components/CardContainer';
import { useLoaderData } from 'react-router-dom';

function Home() {
     const [cards, setCards] = useState(useLoaderData())
    return (
      <>
        <div>
            <Banner setCards={setCards}></Banner>
            <CardContainer cards={cards}></CardContainer>
        </div>
      </>
    );
}

export default Home;