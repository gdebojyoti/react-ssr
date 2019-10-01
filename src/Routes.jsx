import React from 'react'
import { Route } from 'react-router-dom'

import Home from './app/components/Home'
import About from './app/components/About'

const Routes = () => {
  return (
    <>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
    </>
  )
}

export default Routes
