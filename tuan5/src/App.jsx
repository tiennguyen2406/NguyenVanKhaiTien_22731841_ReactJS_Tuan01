import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <LeftMenu></LeftMenu>
    </>
  )
}

export default App
