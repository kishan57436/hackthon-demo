import React from 'react'

const Home = () => {
  return (
    <div>
      <p>home render kar diya</p>
      <form>
        <input type="text" placeholder='name' />
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
          
      </form>
    </div>
  )
}

export default Home