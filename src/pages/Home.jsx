import React from 'react';
import Banner from '../components/Banner';
import CardContainer from '../components/CardContainer';
import { useLoaderData } from 'react-router-dom';

function Home() {
     const cards = useLoaderData()
    return (
      <>
        <div>
            <Banner></Banner>
            <CardContainer cards={cards}></CardContainer>
        </div>
      </>
    );
}

export default Home;