import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";

const Donation = () => {
    const[donation,setDonation]=useState([]);
    const[noFount,setFound]=useState("");

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
                donation.map(cart=> <DonationCart key={cart.id} cart={cart}></DonationCart> )
              }
            </div>
         }
        </div>
    );
};

export default Donation;