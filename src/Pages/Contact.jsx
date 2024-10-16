import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t '>
            <Title text1={"CONTACT"} text2={"US"} />
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
             <div className='flex flex-col justify-center items-start gap-6'>
               <p className='font-semibold text-xl text-grey-600 '>Our Store</p>
               <p className='text-grey-500'>54709 Williams station <br />Suite 350, washingtone, USA</p>
               <p className='text-grey-500'>Tel: (77) 7767-4569 <br /> Email:harshalpatil55200@gmail.com</p>
               <p className='font-semibold text-xl text-grey-600'>Careers at Forever</p>
               <p className='text-grey-500'>Learn More about our teams and job openings</p>
               <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white trasnstition-all duration-500'>Explore Jobs</button>
             </div>
        </div>
        <NewsLetterBox />
    </div>
  )
}

export default Contact