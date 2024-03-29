
import AllCarts from "./AllCarts";

const Cards = ({card}) => {
  

    // console.log(card);

    return (
        <div className="mt-8">
        <div className=" grid grid-cols-1 text-sm lg:grid-cols-4 md:grid-cols-2 gap-5">
           {
              card.map(cart=><AllCarts key={cart.id} cart={cart}></AllCarts>)
           }

        </div>
        </div>
    );
};

export default Cards;