import React from 'react'
import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import Body from './Component/Body/Body'
import { Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Memberships from './Component/MemberShip/Memberships';
import Whoweare from './Component/Who We Are/Whoweare';
import BookDemo from './Component/BookDemo/BookDemo';
import Login from './Component/Login/Login';
import ProtectedRoute from './Component/Protected/ProtectedRoute';
import Dashboard from './Component/Dashboard/Dashboard';
import { useCookies } from 'react-cookie';
import DashHeader from './Component/DashHeader/DashHeader';
import DashHome from './Component/DashHome/DashHome';
import DashWho from './Component/DashWho/DashWho';
import DashMembership from './Component/DashMember/DashMembership';
import Strenght from './Component/Strength/Strenght';
import Crossfit from './Component/Crossfit/Crossfit';
import Zumba from './Component/Zumba/Zumba';
import Cardio from './Component/Cardio/Cardio';
import DemoHeader from './Component/DemoHeader/DemoHeader';
function App() {
  const [cookies] = useCookies(['token']);
  
  return (
    <>
     <Routes>
        <Route path="/" element={ <div id="main"> <Header/> <div className='flex ' id='main'> <Body/><Sidebar/></div>
        <Footer/></div> } />
        <Route path="/Whoweare" element={ 
          <div id="main">
           <Header/> 
           <div className='flex ' id='main'> 
            <Whoweare/>
            <Sidebar/>
            </div>
          <Footer/>
          </div>} />
        <Route path="/bookdemo" element={ <div id="main"> <Header/> <div className='flex ' id='main'> <BookDemo/><Sidebar/></div>
          <Footer/></div>} />
        <Route path="/membership" element={ <div id="main"> <Header/> <div className='flex ' id='main'> <Memberships/><Sidebar/></div>
          <Footer/></div>} />
        <Route path="/login" element={ <div id="main"> <Header/> <div className='flex ' id='main'><Login/></div>
          <Footer/></div>} />
          
        {/* Book DEMO */}
        <Route path="/bookdemo/strength" element={<div id="main"> <DemoHeader/> <div className='flex ' id='main'> <Strenght/><Sidebar/></div>
          <Footer/></div>}/>
        <Route path="/bookdemo/crossfit" element={<div id="main"> <DemoHeader/> <div className='flex ' id='main'> <Crossfit/><Sidebar/></div>
          <Footer/></div>}/>
        <Route path="/bookdemo/zumba" element={<div id="main"> <DemoHeader/> <div className='flex ' id='main'> <Zumba/><Sidebar/></div>
          <Footer/></div>}/>
        <Route path="/bookdemo/cardio" element={<div id="main"> <DemoHeader/> <div className='flex ' id='main'> <Cardio/><Sidebar/></div>
          <Footer/></div>}/>


        {/* After login protected path */}
          <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} requiredRole={["admin"]} />} />        
          <Route path="/loginHome" element={<ProtectedRoute component={DashHome} requiredRole={["admin"]} />} />    
          <Route path="/who" element={<ProtectedRoute component={DashWho} requiredRole={["admin"]} />} />     
          <Route path="/dashmembership" element={<ProtectedRoute component={DashMembership} requiredRole={["admin"]} />} />        
      </Routes>
    </>
  )
}

export default App