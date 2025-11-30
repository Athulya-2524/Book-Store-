import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit1 from '../components/Edit1'
import SellBook from '../components/SellBook'
import Purchase from '../components/Purchase'
import BookStatus from '../components/BookStatus'

function Profile() {

    const [tab,setTab] = useState(1)

    return (
        <>
        <Header/>
         {/* black div */}
         <div style={{height:'200px'}} className='bg-black'></div>
         {/* profile image */}
         <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className='bg-white p-3'>
            <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />
         </div>
         {/* name with edit block */}
         <div className="flex justify-between items-center m-5">
            <h1 className="text-2xl font-bold flex items-center ms-5 md:ms-20">Username <FaCircleCheck className='text-blue-400 ms-5'/></h1>
            <Edit1/>
         </div>
         <p className='text-justify md:px-20 px-5 my-5'>
            we're happy to have you here!
            This is your personal reading space - a place where your favourite authors,wishlist items,reading history, and ongoing book journeys come together.Whether you're exploring new genres,tracking your progress , or managing ypur latest purchases ,everything you need is just a click away.Your reading taste shapes your experience, and the more you explore , the better we tailor recommendations just for you.</p>
            {/*tabs with contents  */}
            <div className="md:px-40">
                {/* tabs */}
                <div className="flex justify-center items-center my-8 font-medium text-lg">
                    <p onClick={()=>setTab(1)}  className={tab==1?"text-blue-600 border-gray-200 border-t border-1 border-r p-4 cursor-pointer":'border-gray-200 border-b p-4 cursor-pointer'}>Sell Books</p>
                    <p onClick={()=>setTab(2)}  className={tab==2?"text-blue-600 border-gray-200 border-t border-1 border-r p-4 cursor-pointer":'border-gray-200 border-b p-4 cursor-pointer'}>Book Status</p>
                    <p onClick={()=>setTab(3)}  className={tab==3?"text-blue-600 border-gray-200 border-t border-1 border-r p-4 cursor-pointer":'border-gray-200 border-b p-4 cursor-pointer'}>Purchase History</p>
                </div>
                {/* contents */}
                {
                 tab==1 &&   
                <SellBook/>
                }
                {
                tab==2 &&
                <BookStatus/>
                }
                {
                tab==3 &&
                <Purchase/>
                }
            </div>
        <Footer/>
        </>
        
    )
}

export default Profile