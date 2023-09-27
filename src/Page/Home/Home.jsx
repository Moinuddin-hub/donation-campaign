import {useLoaderData} from "react-router-dom";
import Banner from '../../Components/Header/Banner/Banner';
import Cards from '../../Components/Cards/Cards';
const Home = () => {
    const card=useLoaderData();
    // console.log(card);
    return (
       <div>
         <Banner card={card}></Banner>
    <Cards card={card}></Cards>
        </div>
    );
};

export default Home;