import React from 'react'

export default function Home() {
  return (
    <div className='bg-gray-200 dark:bg-black dark:text-white'>
        <div className='grid grid-cols-1 md:flex m-10 mt-20'>
          <img src='./images/1.jpg' alt='profile' className='h-48 w-48 rounded-full m-20'></img>
          <div>
            <h1 className='text-3xl'>
              Nilabh Anjan Chutia
            </h1>
            <h2>
              FrontEnd Developer
            </h2>
          </div>
        </div>
    </div>
  )
}
