import React from 'react'
import logo from '../../assets/images/logo.png'
import logo_mobile from '../../assets/images/logo_mobile.png'

const HomeHeader = () => {
  return (
    <div className="fixed flex items-center justify-between w-full px-12 h-30">
      <div className="self-end logo-wrapper">
        <a href="/">
          <img src={logo} alt="Desktop Logo" className="max-w-[19.5rem]" />
        </a>
      </div>
      <div className="signup-wrapper">
        <a
          href="/signup"
          className="font-avenir-bold text-[15px] leading-5 text-black px-7 h-13 flex items-center rounded-md bg-white"
        >
          Sign up your restaurant
        </a>
      </div>
    </div>
  )
}

const HomeFooter = () => {
  return (
    <div className="flex items-center justify-center h-[150px] bg-grey">
      <p className="font-avenir-medium text-5">
        Copyright 2022 Vitalize Business Solutions www.vitalize.ie
      </p>
    </div>
  )
}

const HomeLayout = ({ isFooter = true, children }) => (
  <div className="min-h-screen">
    <HomeHeader />
    {children}
    {isFooter && <HomeFooter />}
  </div>
)

export default HomeLayout
