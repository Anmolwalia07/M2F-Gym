import React, { useState } from 'react'
import MonthlyOffers from '../MonthlyOffers/MonthlyOffers'
import AnnaualyOffer from '../Annaualy/AnnaualyOffer'

function Offers() {
    const [activeIndex, setactiveIndex] = useState(1)
    const [color, setcolor] = useState('bg-slate-500')
    const [color1, setcolor1] = useState('')

  return (
    <div className='text-white w-[1100px] ml-[320px] h-[600px]  items-center flex flex-col ml[-20px]  pb-10 z[0] overflow-auto'>
        <h1 className='text-5xl font-bold mt-[10px]'>Pay Once,use forever</h1>
        <h1 className='text-2xl mt-[10px]'>Get started with M2F</h1>
        <p className='mt-[40px] flex  border-2 p-1 text-xl rounded-md'>
            <button className={`p-3 px-5 rounded-md ${color}`}
            onClick={()=>
            {
                setactiveIndex(1)
                setcolor('bg-slate-500')
                setcolor1('')
            }
                
            }
            >MONTHLY</button>
            <button
            className={`p-3 px-5 rounded-md ${color1}`}
            onClick={()=>
            {
                setactiveIndex(2)
                setcolor1('bg-slate-500')
                setcolor('')
            }
                
            }>ANNUALY</button>
        </p>
        <div className='w-[900px] h-auto mt-[10px]'>
            {activeIndex==1 && <MonthlyOffers/> }
            {activeIndex==2 && <AnnaualyOffer/> }
        </div>
    </div>
  )
}

export default Offers