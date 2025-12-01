import React from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa'

function AdminProfile() {
    return (
        <>
        <AdminHeader/>
        <div className='md:grid grid-cols-5'>
            <div className='col-span-1'>
                <AdminSideBar/>
                </div>
                <div className='col-span-4 p-10'>
                    <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
                    <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
                        {/* text */}
                        <div>
                            <h2 className='text-xl font-bold mb-5'>Welcome to Admin Settings Panel....</h2>
                           <p className='text-justify mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolorem non sequi quasi nulla distinctio tempore, inventore tenetur a adipisci reprehenderit, fugit illum odio quia consectetur rerum accusantium beatae ipsa?
                            Sed fugit molestiae illum assumenda voluptatibus deleniti nisi odio officiis dolorem repellat perferendis accusantium doloribus tempora recusandae ipsa ea consequuntur distinctio rerum quasi et officia ullam, vel possimus? Deleniti, accusantium.
                            Facere optio eius velit provident voluptate eos maiores delectus tempora accusamus. Suscipit sed consequuntur dolores ducimus ad voluptatem placeat ipsa quam distinctio! Libero minus exercitationem nulla.</p> 
                        </div>
                        {/* form */}
                        <div className="flex justify-center items-center flex-col bg-blue-100 p-5 rounded">
                    {/* image */}
                    <label htmlFor="uploadImg">
                        <input type="file" id="uploadImg" hidden />
                        <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="profile" />

                    </label>
                    <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/></button>
                    {/* name */}
                    <div className="mt-10 mb-3 w-full px-5">
                        <input type="text" placeholder='Username' className='bg-white p-2 rounded w-full' />
                    </div>
                    {/*password  */}
                    <div className="mb-3 w-full px-5">
                        <input type="password" placeholder='New Password' className='bg-white p-2 rounded w-full' />
                    </div>
                    <div className="mb-3 w-full px-5">
                        <input type="password" placeholder='Confirm Password' className='bg-white p-2 rounded w-full' />
                    </div>
                    
                    {/* button */}
                    <div className="mb-3 flex justify-center px-5 w-full mt-5">
                        <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
                        <button className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600 ms-5'>UPDATE</button>
                    </div>
                 </div>
                    </div>
                </div>
                </div>
        <Footer/>
        </>
    )
}

export default AdminProfile