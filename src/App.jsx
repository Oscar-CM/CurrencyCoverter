import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import currency from './assets/currency.jpg'
import Convert from './components/Convert'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-bold w-full h-screen bg-[url(https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg)] 
    bg-cover bg-no-repeat bg-left'
    
    >
      <div className=''>
      <Convert/>
      </div>
      
      
     
    
    </div>
  )
}

export default App
