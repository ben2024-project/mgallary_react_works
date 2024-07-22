import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MovieCreate from '../components/MovieCreate'
import MovieSummary from '../components/MovieSummary'

function Index() {

  const [refreshRequired,setRefreshRequired]=useState('')



  return (
    <div>
      <Navbar></Navbar>
      <MovieCreate setRefreshRequired={setRefreshRequired}></MovieCreate>
      <MovieSummary refreshRequired={refreshRequired}></MovieSummary>
    </div>
  )
}

export default Index
