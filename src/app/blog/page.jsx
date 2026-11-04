import React from 'react'
import BackgroundBanner from '../components/Home/BackgroundBanner'
import Blog from '../components/Home/Blog'
import CTAbanner from '../components/Home/CTAbanner'
const Page = () => {
  return (
    <>
    <BackgroundBanner title={'Blogs'}/>
    <Blog/>
    <CTAbanner/>
    </>
  )
}

export default Page