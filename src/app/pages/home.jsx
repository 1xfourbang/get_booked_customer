import React from 'react'
import HomeLayout from '../layouts/HomeLayouts'
import '../../assets/styles/custom.css'

const Home = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col">
        <div className="min-h-[14.125rem] sm:min-h-[42.5rem] bg-home-hero-mobile md:bg-home-hero bg-cover bg-no-repeat flex items-end sm:items-center w-full justify-start sm:justify-center p-8">
          <div>
            <h2 className="font-filson-medium text-7 sm:text-5xl md:text-24.25 max-w-[180px] sm:max-w-[320px] md:max-w-[604px] text-left md:text-center text-white">
              Book a table in Mayo.
            </h2>
          </div>
        </div>
        <div className="flex-grow bg-white min-h-[25rem] pt-6 sm:pt-13">
          <p className="font-avenir-regular text-3 sm:text-6.75 text-center">
            Please select your town to book a table.
          </p>
          <div className="flex flex-col flex-wrap items-center justify-center pb-2 mt-6 sm:flex-row restaurants-list sm:mt-9">
            <div className="w-full text-center sm:w-fit font-avenir-bold text-4.5 sm:text-6.5 px-8 mb-2">
              <a href="/search/ballina" className="btn-restaurant">
                Ballina
              </a>
            </div>
            <div className="w-full text-center sm:w-fit font-avenir-bold text-4.5 sm:text-6.5 px-8 mb-2">
              <a href="/search/castlebar" className="btn-restaurant">
                Castlebar
              </a>
            </div>
            <div className="w-full text-center sm:w-fit font-avenir-bold text-4.5 sm:text-6.5 px-8 mb-2">
              <a href="/search/louisburgh" className="btn-restaurant">
                Louisburgh
              </a>
            </div>
            <div className="w-full text-center sm:w-fit font-avenir-bold text-4.5 sm:text-6.5 px-8 mb-2">
              <a href="/search/murrish" className="btn-restaurant">
                Murrish
              </a>
            </div>
            <div className="w-full text-center sm:w-fit font-avenir-bold text-4.5 sm:text-6.5 px-8 mb-2">
              <a href="/search/westport" className="btn-restaurant">
                Westport
              </a>
            </div>
            <div className="w-full text-center sm:w-fit font-avenir-bold text-4.5 sm:text-6.5 px-8 my-4 block sm:hidden">
              <a href="/search/westport" className="btn-restaurant btn-signup">
                Sign up your restaurant
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
