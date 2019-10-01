import React from 'react'

const Home = () => {
  const onClick = () => {
    console.log('Clicked!')
  }

  return (
    <div>
      <h1>Welcome to your SSR app!</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

export default Home
