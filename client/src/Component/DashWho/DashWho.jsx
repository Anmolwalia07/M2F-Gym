import React from 'react'
import DashHeader from '../DashHeader/DashHeader'
import Whoweare from '../Who We Are/Whoweare'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

function DashWho() {
  return (
    <>
    <DashHeader/>
    <div className="container flex">
        <Whoweare/>
        <Sidebar/>
    </div>
    <Footer/>
    </>
)
}

export default DashWho