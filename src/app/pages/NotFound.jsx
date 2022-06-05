import React from 'react'
import HomeLayout from '../layouts/HomeLayouts'

const NotFound = () => {
  return (
    <HomeLayout isFooter={false}>
      <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-home-hero">
        <h2 className=" font-filson-medium text-[97px] leading-[99px] text-center text-white">
          404 Not Found
        </h2>
      </div>
    </HomeLayout>
  )
}

export default NotFound
