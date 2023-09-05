import React from 'react'
import Header from '../static/Header'
import { Outlet } from 'react-router-dom'
import Hero from '../static/Hero'
import AfterHero from '../static/AfterHero'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Hero/>
      <AfterHero/>
    </div>
  )
}

export default Layout