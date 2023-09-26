import React from 'react';

const AllCarts = ({cart}) => {
    // console.log(cart);
    const {id,image,title,color,category,category_bg,card_bg,description,price}=cart || {};
    return (
        <div>
            
            <div style={{background:card_bg}} className="card card-compact w-full h-80 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" className='w-full h-52' /></figure>
  <div className="card-body">
    <h2 className="w-20 card-title text-sm py-2 px-2 rounded-lg text-center font-bold"  style={{color:color,background:category_bg}}>{title}</h2>
    <p className='text-lg font-bold' style={{color:color}}>{description}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div> 
        </div>
    );
};

export default AllCarts;