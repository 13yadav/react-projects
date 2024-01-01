import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState("bg-red-500")

  return (
    <>
      <div className={`h-screen w-screen ${bgColor}`}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white rounded-xl shadow-lg px-6 py-3'>
            <button
              className="bg-red-500 hover:bg-red-400 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md"
              onClick={() => setBgColor("bg-red-500")}
            >Red</button>
            <button className="bg-green-500 hover:bg-green-400 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md" onClick={() => setBgColor("bg-green-500")}>Green</button>
            <button className="bg-blue-500 hover:bg-blue-400 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md" onClick={() => setBgColor("bg-blue-500")}>Blue</button>
            <button className="bg-indigo-500 hover:bg-indigo-400 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md" onClick={() => setBgColor("bg-indigo-500")}>Indigo</button>
            <button className="bg-gray-500 hover:bg-gray-400 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md " onClick={() => setBgColor("bg-gray-500")}>Gray</button>
            <button className="bg-yellow-500 hover:bg-yellow-400 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md" onClick={() => setBgColor("bg-yellow-500")}>Yellow</button>
            <button className="bg-pink-500 hover:bg-pink-400 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md" onClick={() => setBgColor("bg-pink-500")}>Pink</button>
            <button className="bg-white hover:bg-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-black shadow-md" onClick={() => setBgColor("bg-white")}>White</button>
            <button className="bg-black hover:bg-gray-800 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md" onClick={() => setBgColor("bg-black")}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
