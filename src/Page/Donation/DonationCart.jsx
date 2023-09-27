

const DonationCart = ({cart}) => {

    const {id,image,title,color,category,category_bg,card_bg,description,price}=cart || {};
    return (
        <div className=""> 
             <div style={{background:card_bg}} className="flex gap-8 h-48 mt-4 ml-4">
                <div className="">
                  <img src={image} className="h-48"/>
                </div>

                <div className="ml-2 mt-4">
                <h2 className="w-20 text-sm py-2 px-2 rounded-lg text-center font-bold"  style={{color:color,background:category_bg}}>{category}</h2>
                <p className='text-lg font-bold' style={{color:color}}>{title}  </p>
              
                <p>{price}</p>
                 <button style={{background:color}} className="btn text-white">View details</button>
                </div>
             </div>
        </div>
    );
};

export default DonationCart;