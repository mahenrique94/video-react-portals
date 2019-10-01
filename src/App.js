import React from 'react'
import Home from './Home'
import Todo from './Todo'

const App = () => (
  <>
    <h1>App</h1>
    <div onClick={() => console.log('CLIQUEI!!!')}>
      <Home>
        <Todo/>
      </Home>
    </div>
  </>
)

export default App
