import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import PageNotFound from '../pages/errors/PageNotFound'
import LayoutBase from '../layouts/Default'
import Index from '../pages/Index3'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Post from '../pages/Post'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutBase />}>
      <Route path="/" element={<Index />} />
      <Route path="blog" element={<Blog />} />
      <Route path="post" element={<Post />} />
      <Route path="contact" element={<Contact />} />
      <Route path="search" element={<Search />} />
      <Route path="login" element={<Login />} />

      {/* Errors */}
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
)

export default router
