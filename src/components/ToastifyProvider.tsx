'use client'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ToastifyProvider = () => {
  return (
    <ToastContainer autoClose={1000}/>
  )
}

export default ToastifyProvider