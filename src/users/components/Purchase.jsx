import React from 'react'

function Purchase () {
    return (
        <div className='p-10 my-20 mx-5'>
            {/* book div duplicate */}
            <div className="bg-gary-200 p-5 rounded">
                <div className="md:grid grid-cols-1-[3fr_1fr]">
                    <div>
                        <h2 className='text-2xl'>Title</h2>
                        <h3 className="text-xl">Author</h3>
                        <h4 className="text-lg text-red-500">$ 18.9</h4>
                        <p className="text-justify">Abstract</p>
                        <div className="flex mt-5">
                            {/* purchase */}
                            <img width={'160px'} height={'160px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                            
                        </div>
                    </div>
                    <div className='px-4 mt-4 md:mt-0'>
                        <img className='w-50' src="https://cdn2.penguin.com.au/covers/original/9781786330895.jpg" alt="book" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase