import React, { useState } from 'react';
import Cards from '../../Cards/Cards';
const Banner = ({card}) => {
  const [search,setSearch]=useState('');
  // console.log(card);

  const handleSubmit=(e)=>{

   setSearch(e.target.value);
  }
  const onSearch=(searchItem)=>{
   console.log('search',searchItem);
  }

    return (
        <div>
    <div className="hero h-96 " style={{backgroundImage: 'url(https://i.ibb.co/ZBWJh9T/Clothing.png)'}}>
  <div className="hero-overlay bg-opacity-90 bg-slate-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
        <h2 className=' text-slate-950 text-3xl font-bold'>I Grow By Helping People Need</h2>
        <div className='flex mt-4'>
       
      <input type='text' onChange={handleSubmit}  className='w-96 text-teal-300' name='name' placeholder='Search here' />
      <button onClick={()=> onSearch(search)}  className="btn btn-primary">Search</button>
</div>
</div>



  </div>
</div>
        </div>
    );
};

export default Banner;