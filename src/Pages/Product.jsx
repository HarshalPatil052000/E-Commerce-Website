import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../Components/RelatedProduct'

const Product = () => {

const  {productId } = useParams()
const {products , currency , addToCart} = useContext(ShopContext);
const [productData,setProductData] = useState(false);
const [image,setImage] = useState([]);
const [size,setSize] = useState('');

const fetchproductdata = async () => {
  products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
  })
};

useEffect(()=>{
fetchproductdata();
},[productId])

  return productData ?  (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
         {/* Product Data */}
         <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

             {/* ---------------Product Images-------------------------- */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                 <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
                    {
                      productData.image.map((item,index)=>(
                        <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                      ))
                    }
                 </div>
                 <div className='w-full sm:w-[80%]'>
                   <img className='w-full h-full' src={image} alt="" />
                 </div>
            </div>
            {/* --------------------------Product info ------------------------------------*/}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                   <div className='flex item-center gap-1 mt-2'>
                      <img src={assets.star_icon} alt="" className="w-3.5" />
                      <img src={assets.star_icon} alt="" className="w-3.5" />
                      <img src={assets.star_icon} alt="" className="w-3.5" />
                      <img src={assets.star_icon} alt="" className="w-3.5" />
                      <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                      <p className='pl-2'>(122)</p>
                   </div>
                   <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
                   <p className='mt-5 text-gray-600 md:w-3/5 font-medium'>{productData.description}</p>
                   <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        {/* <div className='flex gap-2'>
                             {productData.sizes.map((item,index)=>(  
                              <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ""}`} key={index}>{item}</button>
                             ))}
                        </div> */}
                          <div className='flex gap-2'>
                         {productData.sizes.map((item, index) => (
           <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ""}`}
                                        key={index} >  {item}
                                       </button>
                               ))}
                               </div>
                   </div>
                   {/* <button onClick={()=>addToCart(productData._id,setSize)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-600 '>ADD TO CART</button> */}
                   <button onClick={() => addToCart(productData._id, size)} // Pass the selected size here
                      className='bg-black text-white px-8 py-3 text-sm active:bg-gray-600'>
                                  ADD TO CART
                                   </button>
                   <hr className='mt-8  sm:w-4/5' />
                   <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                          <p className='text-xl font-medium hover:text-black cursor-pointer'>100% Original Product</p>
                          <p className='text-xl font-medium hover:text-black cursor-pointer'>Cash on delivery is available in this product</p>
                          <p className='text-xl font-medium hover:text-black cursor-pointer'>Easy return and exchange policyn within 7 days</p>
                   </div>
            </div>
         </div>
         {/* ----------------------Description & Review Section----------------------*/}
         <div  className='mt-20'>
              <div className='flex'>
                <p className='border px-5 py-3 text-sm text-gray-500  hover:text-black cursor-pointer'>Description</p>
                <p className='border px-5 py-3 text-sm text-gray-500  hover:text-black cursor-pointer'>Reviews(122)</p>
              </div>
              <div className='flex flex-col gap-4 border py-6 text-sm text-gray-500'>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quae. Ut unde, deserunt laborum recusandae commodi cupiditate? Eaque, voluptas adipisci beatae autem, rerum a hic iste ad aperiam rem quia.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique atque voluptatum, voluptatibus, modi sint quibusdam natus veritatis earum perferendis labore commodi recusandae non ea. Est fugit illo dolorum obcaecati?</p>   
              </div>
         </div>
         {/* ---------Dislpay Related Products----------- */}


         <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : <div className='opacity-0'></div>
}

export default Product