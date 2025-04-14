import React from 'react'
import DashHeader from '../DashHeader/DashHeader'
import Body from '../Body/Body'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

function DashHome() {
  return (
    <>
    <DashHeader/>
    <div className="container flex">
        <Body/>
        <Sidebar/>
    </div>
    <Footer/>
    </>
  )
}

export default DashHome