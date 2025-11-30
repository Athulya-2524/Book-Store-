import React from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from '../../components/Footer'

function AdminHome() {
    return (
        <>
        <AdminHeader/>
        <div className='md:grid grid-cols-5'>
            <div className='col-span-1'>
                <AdminSideBar/>
                </div>
                <div className='span-col-4 p-10'>AdminHome 
                </div>
                </div>
        <Footer/>
        </>
    )
}

export default AdminHome