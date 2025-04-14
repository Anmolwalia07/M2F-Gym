import axios from 'axios';
import React, { useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";

function CreateOffer() {
const [Display, setDisplay] = useState("hidden")
const [formData, setformData] = useState({fee:'',type:'',timePeriod:''})
const [offers, setoffers] = useState([])

  async function  handleSubmit(e){
    e.preventDefault();
    const response=await axios.post("http://localhost:3000/createOffer",formData);
    if(response.data==='Created Sucessfully'){
      setformData({fee:'',type:'',timePeriod:''});
      console.log(response.data)
      setDisplay("hidden")
    }
  }

  async function allOffers() {
    const response=await axios.get("http://localhost:3000/allOffers");
    setoffers(response.data)
  }

  async function deleteOffer(id) {
    alert("You want to delete this offer");
    const response=await axios.delete(`http://localhost:3000/deleteOffer/${id}`)
  }

  allOffers();

  return (
    <>
    <div className='w-[950px] h-[600px] ml-[400px]  overflow-auto flex relative flex-col '>
            <div className='flex flex-col w-full '>
              <h1 className='text-2xl'>Monthly</h1>
              <div className='flex overflow-auto mt-[20px]'>
              {offers.map(offer=>{
                if(offer.type==="Monthly"){
                  return (<div className='bg-slate-700 rounded-md w-[300px] h-[180px]  ml-5 relative text-white flex flex-col justify-center p-4 items-center'>
                    <button className='absolute right-0 top-[-1px]' onClick={()=>{
                      deleteOffer(offer.id);
                    }}><TiDelete fontSize={40} /></button>
                    <div className='text-2xl '>{offer.fee}</div>
                    <h1 className='mt-2 text-3xl uppercase'>{offer.timePeriod}</h1>
                  </div>) 
                }
              })}
              </div>
            </div>
            <div className='flex flex-col w-full mt-[30px]'>
              <h1 className='text-2xl'>Annualy</h1>
              <div className='flex overflow-auto mt-[20px]'>
              {offers.map(offer=>{
                if(offer.type==="Annualy"){
                  return (<div className='bg-slate-700 rounded-md w-[300px] h-[180px]  ml-5 relative text-white flex flex-col justify-center p-4 items-center'>
                    <button className='absolute right-0 top-[-1px]' onClick={()=>{
                      deleteOffer(offer.id);
                    }}><TiDelete fontSize={40} /></button>
                    <div className='text-2xl '>{offer.fee}</div>
                    <h1 className='mt-2 text-3xl uppercase'>{offer.timePeriod}</h1>
                  </div>)
                }
              })}
              </div>
            </div>
            <div className={`bg-[#0e0d0d] w-[400px] h-[350px] absolute ml-[250px] top-[100px] rounded-md p-6 ${Display} z-[99]`}>
              <form className='relative flex flex-col' onSubmit={handleSubmit}>
                <label className='text-xl'>Fee</label>
                <input type='text' name='fee' placeholder='Enter Fee' className='p-2 mt-2 text-black rounded-md'
                value={formData.fee}
                onChange={(e)=>{
                  setformData({...formData,fee : e.target.value})
                }} required/>
                <label className='mt-2 text-xl'>Type</label>
                <select name="type" className='p-2 mt-2 text-black'
                value={formData.type}
                onChange={(e)=>{
                  setformData({...formData,type:e.target.value})
                }} required >
                  <option>Select</option>
                  <option>Monthly</option>
                  <option>Annualy</option>
                </select>
            
                <label className='mt-2 text-xl'>Time Period</label>
                <input type='text' name='timePeriod' placeholder='Enter Time Period' className='p-2 mt-2 text-black rounded-md'
                value={formData.timePeriod}
                onChange={(e)=>{
                  setformData({...formData,timePeriod:e.target.value})
                }} required/>
                <button type='submit' className='bg-red-600 w-[100px] text-xl p-2 rounded-md mt-[15px] ml-[120px]'>Submit</button>
                
              </form>
              <button onClick={()=>{
                  setDisplay("hidden");
                }} className='w-[30px] h-[30px]  flex justify-center items-center  absolute rounded-full right-3 top-2'><div className='text-3xl'><TiDeleteOutline fontSize={40}/></div></button>
            </div>
            <div className='text-xl font-bold  ml-[400px]  rounded  bg-yellow-500  flex justify-center items-center absolute p-4 bottom-6 ' ><button className='text-xl text-black' 
              onClick={()=>{
                setDisplay(" ");
              }}>Create Offer</button></div>
     </div>
     
      
    </>
  )
}

export default CreateOffer