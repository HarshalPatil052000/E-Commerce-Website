import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
           <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit soluta minima at libero sapiente quia porro iusto, et tempora quo nulla velit ipsam! Et tempore suscipit beatae ut, voluptatem voluptate.</p>
           </div>

           <div>
             <p className='text-xl font-medium mb-5'>COMPANY</p>
             <ul className='flex flex-col gap-1 text-gray-600'>
               <li>Home</li>
               <li>About Us</li>
               <li>Dekivery</li>
               <li>Privacy Policy</li>
             </ul>
           </div>
             
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-6750</li>
                <li>jhvhb@gmail.com</li>
                </ul>
            </div>

        </div>

          <div>
             <hr />
             <p className='py-5 text-sm text-center font-semibold '>Copyright @2024 forever.com All Right Reserved</p>
          </div>

    </div>
  )
}

export default Footer