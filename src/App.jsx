import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/layouts/Layout';
import Home from './components/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routerObject = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {path: '/', element: <Home />}
      ]
    }
  ]
)


function App() {
  return(
    <>
      <RouterProvider router={routerObject}></RouterProvider>
    </>
  )
  
}

export default App
