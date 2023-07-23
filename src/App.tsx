import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import Preloader from './components/Preloader/Preloader'

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App
