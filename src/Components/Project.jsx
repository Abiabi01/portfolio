import React from 'react'

function Project() {
  return (
    <div id='Project' className="bg-black w-screen h-screen">
        <p className=" pt-20 font-extrabold text-5xl  text-amber-500 flex items-center justify-center">Project</p>
        <div>
        <div className="flex min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                <div className="border-4 border-amber-50 w-80 h-70">1</div>
                <div className="border-4 border-amber-50 w-80 h-70">1</div>
                <div className="border-4 border-amber-50 w-80 h-70">1</div>
                <div className="border-4 border-amber-50 w-80 h-70">1</div>
                <div className="border-4 border-amber-50 w-80 h-70">1</div>
                <div className="border-4 border-amber-50 w-80 h-70">2</div>
            </div>
        </div>



        </div>
    </div>
  )
}

export default Project