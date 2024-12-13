import satellite from '../public/satellite.png' 
import R3FCanvas from './r3f/Canvas'

function App() {
  return (
    <div className="w-screen h-screen">
     <nav className="fixed top-0 w-full bg-gray-800 text-white h-20 z-10 px-10 flex items-center"> 
        <img src={satellite} className="w-10 h-10 mr-2"/>
        <h1 className="italic text-4xl font-bold">Satellink</h1>
     </nav>
     <div className='w-full h-full'>
        <R3FCanvas/>
     </div>
    </div>
  )
}

export default App
