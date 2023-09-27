import React from 'react';
import Donation from '../Donation/Donation';
import swal from 'sweetalert';


const SingleCart = ({cart}) => {
 const {id,image,title,color,category,category_bg,card_bg,description,price}=cart || {};

  const handleAddToDonation=()=>{

    const addedDonationArray=[];
    const donationItem=JSON.parse(localStorage.getItem('donation'));
    if(!donationItem){
      addedDonationArray.push(cart);
      localStorage.setItem('donation',JSON.stringify(addedDonationArray));
      swal("Good job!", "You clicked the button!", "success");
    }
 else{

    const isExits=donationItem.find((cart)=> cart.id===id)
    // console.log(isExits);
    if(!isExits){
        addedDonationArray.push(...donationItem,cart);
        localStorage.setItem('donation',JSON.stringify(addedDonationArray));
        swal("Good job!", "You clicked the button!", "success");
    }
    else{
        swal("Error", "No duplicate", "error");
    }
 }

//    localStorage.setItem('text',JSON.stringify([{name:"moin"}]));
  }
    return (
        <div>
            
       <div className='w-96 lg:w-full'> 
<a href="#" className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="  w-full h-96 " src={image} alt=""/>
      <div className=" -mt-8 lg:-mt-24 ">
        <img src='https://i.ibb.co/sVdSnKH/Rectangle-4289-2.png'/>
      </div>
    <div className='-mt-16 ml-8'>
            <button style={{background:category_bg}} onClick={handleAddToDonation} className='btn py-2  '>Donate $290</button>
           </div>
 
    <div className="flex flex-col mt-24 lg:mt-8 justify-between p-4 leading-normal">
          
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
</a>
       </div>


        </div>
    );
};

export default SingleCart;