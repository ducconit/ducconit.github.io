import React from 'react'
import '../../assets/scss/style.scss';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ProgressScroll from './ScrollTop';

const LayoutDefault = () => {
  return (
    <>
    <Header />
      <main className='main'>
      <Outlet />
      </main>
    <Footer />
    <ProgressScroll/>
    </>
  )
}

export default LayoutDefault
