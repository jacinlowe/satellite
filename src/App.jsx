import { useEffect, useState } from 'react'
// import satellite from './satellite.png' 
import R3FCanvas from './r3f/Canvas'
import {getObservatories, getLocations} from './utils/api'

function App() {
  const [observatories, setObservatories] = useState(null)
  const [locations, setLocations] = useState(null)
  
  useEffect(() => {
    getObservatories().then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <div className="w-screen h-screen">
     <nav className="fixed top-0 w-full bg-gray-800 text-white h-20 z-10 px-10 flex items-center"> 
        <img src='./satellite.png' className="w-10 h-10 mr-2"/>
        <h1 className="italic text-4xl font-bold">Satellink</h1>
     </nav>
     <div className='w-full h-full'>
        <R3FCanvas/>
     </div>
    </div>
  )
}

export default App
