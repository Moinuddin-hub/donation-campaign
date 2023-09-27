import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";

const Donation = () => {
    const[donation,setDonation]=useState([]);
    const[noFount,setFound]=useState("");

    const [dataLength,setDataLength]=useState(4);

    useEffect(()=>{
    const donationItem=JSON.parse(localStorage.getItem('donation'));
    if(donationItem){
            setDonation(donationItem);
    }
    else{
        setFound("No data Found")
    }

    },[])
    console.log(donation);
    return (
        <div>
         {
            noFount?<p className="h-[80vh] flex justify-center items-center">{noFount}</p>:
            <div className="grid grid-cols-2">
              {
                donation.slice(0,dataLength).map(cart=> <DonationCart key={cart.id} cart={cart}></DonationCart> )
              }
              
            </div>
            
         } 
         <div className="flex justify-center mt-4">
            <div className={dataLength===donation.length && 'hidden'}>
         <button onClick={()=>setDataLength(donation.length)} className="btn btn-secondary ">Show All</button>
         </div>
         </div>
        </div>
    );
};

export default Donation;