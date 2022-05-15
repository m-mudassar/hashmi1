import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Dashboard from '../components/admin/Dashboard'
import Login from '../components/Login'
import Register from '../components/Register'

const Home: NextPage = () => {
  const [page, setPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500'>
      
      {isLoggedIn ? <Dashboard /> : 
      (page === 'login' ?
        <Login page={page} setPage={setPage} setIsLoggedIn={setIsLoggedIn} />
        :
        <Register page={page} setPage={setPage} />)
      }
      
    </div>
  )
}

export default Home
