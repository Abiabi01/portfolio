import React from 'react'

function Navbar() {
  return (
   <nav>
    <div className="fixed top-0 left-0 w-full bg-neutral-800  h-16 flex justify-between">
        <div className="font-extrabold text-white text-4xl p-2">Abirami</div>
        <div className="p-4">
            <a href='#Home' className="m-2 text-white text-lg font-bold hover:text-amber-500">Home</a>
            <a href='#Skills'className="m-2 text-white text-lg font-bold hover:text-amber-500">Skills</a>
            <a href='#Project'className="m-2 text-white text-lg font-bold hover:text-amber-500">Project</a>
            <a href='#Contact'className="m-2 text-white text-lg font-bold hover:text-amber-500">Contact</a>
        
        </div>
        </div>

   </nav>
  )
}

export default Navbar