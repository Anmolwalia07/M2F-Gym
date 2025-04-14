import React from 'react'
import DashHeader from '../DashHeader/DashHeader'
import Memberships from '../MemberShip/Memberships'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

function DashMembership() {
  return (
    <>
    <DashHeader/>
    <div className="container flex">
        <Memberships/>
        <Sidebar/>
    </div>
    <Footer/>
    </>
)
}

export default DashMembership