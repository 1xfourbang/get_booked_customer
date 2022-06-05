import React from 'react'
import HomeLayout from '../layouts/HomeLayouts'

const Home = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col">
        <div className="min-h-[42.5rem] bg-home-hero bg-cover bg-no-repeat flex items-center w-full justify-center">
          <div>
            <h2 className=" font-filson-medium text-[97px] leading-[99px] max-w-[604px] text-center text-white">
              Book a table in Mayo.
            </h2>
          </div>
        </div>
        <div className="flex-grow bg-white min-h-[25rem] pt-13">
          <p className="font-avenir-regular text-6.75 text-center">
            Please select your town to book a table.
          </p>
          <div className="flex items-center justify-center restaurants-list mt-9">
            <div className="w-fit font-avenir-bold text-6.5 mx-8">
              <a href="/search/ballina">Ballina</a>
            </div>
            <div className="w-fit font-avenir-bold text-6.5 mx-8">
              <a href="/search/castlebar">Castlebar</a>
            </div>
            <div className="w-fit font-avenir-bold text-6.5 mx-8">
              <a href="/search/louisburgh">Louisburgh</a>
            </div>
            <div className="w-fit font-avenir-bold text-6.5 mx-8">
              <a href="/search/murrish">Murrish</a>
            </div>
            <div className="w-fit font-avenir-bold text-6.5 mx-8">
              <a href="/search/westport">Westport</a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
