import React from 'react'
import logo from '../../assets/images/logo_mobile.png'

const PageHeader = ({ isSignup, pageId }) => {
  return (
    <div className="flex items-center w-full border-b h-18 bg-grey-light border-grey-medium">
      <div className="logo-wrapper max-w-60 pl-[29px] pr-10 border-r border-grey-medium h-full flex items-center">
        <a href="/">
          <img src={logo} alt="Desktop Logo" className="w-full " />
        </a>
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between px-6">
          <h4 className=" font-filson-medium text-6.75 text-black first-letter:uppercase">
            {pageId}
          </h4>
          {isSignup && (
            <div className="signup-wrapper">
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

const PageLayouts = ({ isSignup = true, pageId, children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-grey-light">
      <PageHeader pageId={pageId} isSignup={isSignup} />
      {children}
    </div>
  )
}

export default PageLayouts
