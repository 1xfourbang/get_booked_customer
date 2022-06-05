import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayouts from '../layouts/PageLayouts'

const Search = () => {
  const { id } = useParams()

  return (
    <PageLayouts pageId={id} isSignup={false}>
      <div className="flex items-center justify-center flex-grow">
        <div className="search-form-wrapper max-w-[840px] w-full mx-auto p-10 bg-white shadow-light">
          <p className="font-avenir-regular text-6.25">
            Select booking details
          </p>
        </div>
      </div>
    </PageLayouts>
  )
}

export default Search
