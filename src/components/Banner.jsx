import React from 'react';

function Banner() {
    return (
        <section id='banner' className=' h-[400px]'>
        <div className="hero h-full w-full" style={{backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1683141240629-105bf30792e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}>
<div className="hero-overlay bg-white bg-opacity-90  "></div>
<div className="hero-content text-center text-neutral-content ">
 <div className="max-w-md">
   <h1 className="mb-5 text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
   
   <div className="relative">
        <input type="text" placeholder="Search here..." className="input input-bordered text-black w-full pr-16" /> 
        <button className="btn btn-error absolute text-white top-0 right-0 rounded-l-none">Search</button>
      </div>
 </div>
</div>
</div>
     </section>
    );
}

export default Banner;