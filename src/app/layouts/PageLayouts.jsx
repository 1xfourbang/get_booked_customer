import React from 'react'
import logo from '../../assets/images/logo_mobile.png'

const PageHeader = ({ isSignup, pageId }) => {
  return (
    <div className="flex items-center w-full bg-white border-b h-18 sm:bg-grey-light border-grey-medium shadow-header sm:shadow-none">
      <div className="logo-wrapper max-w-60 pl-4 sm:pl-[29px] pr-4 sm:pr-10 border-r border-grey-medium h-full flex items-center">
        <a href="/">
          <img src={logo} alt="Desktop Logo" className="w-full " />
        </a>
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between px-6">
          <h4 className="font-filson-medium text-5 md:text-6.75 text-black first-letter:uppercase">
            {pageId}
          </h4>
          {isSignup && (
            <div className="hidden signup-wrapper md:block">
              <a
                href="/signup"
                className="font-avenir-bold text-[15px] flex items-center h-11 leading-5 px-7 rounded-md bg-grey-light border-2 border-primary text-primary"
              >
                Sign up your restaurant
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const PageFooter = () => {
  return (
    <div className="flex items-center justify-center h-18 sm:h-[150px] bg-grey sticky top-screen">
      <p className="font-avenir-medium text-3 sm:text-5">
        Copyright 2022 Vitalize Business Solutions www.vitalize.ie
      </p>
    </div>
  )
}

const PageLayouts = ({
  isSignup = true,
  pageId,
  isFooter = true,
  children,
}) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white sm:bg-grey-light">
      <PageHeader pageId={pageId} isSignup={isSignup} />
      {children}
      {isFooter && <PageFooter />}
    </div>
  )
}

export default PageLayouts
