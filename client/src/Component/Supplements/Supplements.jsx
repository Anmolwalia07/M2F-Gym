import React from 'react'
import ShopingCart from './ShopingCart/ShopingCart'
import SearchProduct from './SearchProduct/SearchProduct'

function Supplements() {
  return (
    <div className='w-[1100px] h-[595px] flex  ml-[330px] mt-[5px] relative p-[20px] border-2 border-white overflow-y-auto'>
        <ShopingCart/>
        <SearchProduct/>
        
    </div>
  )
}

export default Supplements