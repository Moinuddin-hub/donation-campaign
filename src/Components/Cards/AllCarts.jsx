import { Link } from "react-router-dom";
const AllCarts = ({cart}) => {
    // console.log(cart);
    const {id,image,title,color,category,category_bg,card_bg,description,price}=cart || {};
    return (
        <div>
            
      <Link to={`./cart/${id}`}>
      <div style={{background:card_bg}} className="card card-compact w-full h-80 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" className='w-full h-52' /></figure>
    <div className="card-body">
    <h2 className="w-20 card-title text-sm py-2 px-2 rounded-lg text-center font-bold"  style={{color:color,background:category_bg}}>{category}</h2>
    <p className='text-lg font-bold' style={{color:color}}>{title}</p>
   
      </div>
        </div> 
      </Link>

        </div>
    );
};

export default AllCarts;