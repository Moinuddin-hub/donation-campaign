import {useLoaderData} from "react-router-dom";
import Banner from '../../Components/Header/Banner/Banner';
import Cards from '../../Components/Cards/Cards';
import { useState } from "react";
const Home = () => {
    const card=useLoaderData();
     const [cardfilter,setCardFilter]=useState(card);

    return (
       <div>
         <Banner card={card} setCardFilter={setCardFilter}></Banner>
       <Cards card={cardfilter}></Cards>
        </div>
    );
};

export default Home;