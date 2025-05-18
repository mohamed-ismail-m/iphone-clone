import React from 'react'

import macbook from '../assets/Image/macbook_air.jpg';
import college from '../assets/Image/college_students.jpg';
import ipad from '../assets/Image/ipad_air.jpg';
import macbookpro from '../assets/Image/macbookpro.jpg';
import airpod_4 from '../assets/Image/airpods_4.jpg';
import iphone_tradein from '../assets/Image/iphone_tradein.jpg';





const HeroSection =() => {

    return(
        <div className='grid gap-3 m-3 grid-cols-1 md:grid-cols-2'>
           {/* <div className='h-[80vh] bg-cover bg-center flex justify-center items-end' style={{ backgroundImage: `url(${heroImage})` }}></div> */}
           <div className='h-[80vh] bg-cover bg-center flex justify-center 'style={{backgroundImage: `url(${macbook})`}}>
        
           <div className='text-center mb-12'> 
            <h1 className='font-semibold text-4xl'>MacBook Air</h1>
            <p className='text-xl mt-2'>Sky blue Colour.</p>
            <p className='text-xl '>Sky high performance with M4.</p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>learn more</button>
             <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>Buy</button>

            </div>
            </div>

          <div className='h-[80vh] bg-cover bg-center flex justify-center 'style={{backgroundImage: `url(${college})`}}>
        
            <div className='text-center m-12'>
                <h2 className='font-semibold text-4xl'>College Students</h2>
                <p className='text-xl mt-2'>Mac and iPad.</p>
                <p className='text-xl mt-2'>Major. In any field.</p>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>Learn more</button>
         <button className='bg-transparent text-blue-600 px-4 py-2 border border-blue-600 rounded-full mt-5 ml-4'>Shop iPhone</button>
         
            </div>
            </div>
            <div className='h-[80vh] bg-cover bg-center flex justify-center 'style={{backgroundImage: `url(${ipad})`}}>

            <div className='text-center m-12'>
                <h2 className='font-semibold text-4xl'>iPad air</h2>
        <p className='text-xl mt-2'>Now supercharged by the M3 chip</p>
        <p className='text-xl mt-2'>Major. In any field.</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-2'>Learn more</button>
         <button className='bg-transparent text-blue-600 px-4 py-2 border border-blue-600 rounded-full mt-2 ml-4'>Shop iPhone</button>
        
            </div>
            </div>
             <div className='h-[80vh] bg-cover bg-center flex justify-center 'style={{backgroundImage: `url(${macbookpro})`}}>
        
           <div className='text-center mb-12'> 
            <h1 className='font-semibold text-4xl text-white'>Macbook Pro</h1>
            <p className='text-xl mt-2 text-white'>A work of smart.</p>
            <p className='text-xl text-white '>Major. In any field.</p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>learn more</button>
             <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>Buy</button>

            </div>
            </div>

          <div className='h-[80vh] bg-cover bg-center flex justify-center 'style={{backgroundImage: `url(${airpod_4})`}}>
        
            <div className='text-center m-12'>
                <h2 className='font-semibold text-4xl text-white'>iPad air</h2>
                <p className='text-xl mt-2 text-white'>Now supercharged by the M3 chip</p>
                <p className='text-xl mt-2 text-white'>Major. In any field.</p>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>Learn more</button>
         <button className='bg-transparent text-blue-600 px-4 py-2 border border-blue-600 rounded-full mt-5 ml-4'>Shop iPhone</button>
         
            </div>
            </div>
            <div className='h-[80vh] bg-cover bg-center flex justify-center 'style={{backgroundImage: `url(${iphone_tradein})`}}>

            <div className='text-center m-12'>
                <h2 className='font-semibold text-4xl'>Trade In</h2>
        <p className='text-xl mt-2'>Upgrade and save.</p>
         <p className='text-xl mt-2'>It's that easy.</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-2'>Learn more</button>
         <button className='bg-transparent text-blue-600 px-4 py-2 border border-blue-600 rounded-full mt-2 ml-4'>Shop iPhone</button>
        
            </div>
            </div>
            
        </div>
        
    )
}

export default HeroSection;