import React from 'react';

function Skills() {
  return (
    <div id="Skills" className="bg-black w-screen h-screen">
      <p className=" pt-20 font-extrabold text-5xl  text-amber-500 flex items-center justify-center">Skills</p>
      <div  className="grid grid-cols-2 items-center justify-center" >
        <div className="p-2 m-24 border-4 border-blue-400 rounded-2xl">
            <p className="text-amber-50 m-0  items-center">Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Eaque pariatur vitae accusantium, 
                corrupti obcaecati repudiandae neque nulla optio, doloremque 
                vel quaerat porro praesentium id. Laudantium mollitia praesentium 
                sit rerum ratione?</p>
        </div>
        <div>
            <div className="p-2 m-24 border-4 w-120 h-90 border-blue-400 rounded-2xl">
                <p className="text-white p-2.5 text-2xl font-bold">Html, CSS</p>
                <div className="m-2.5 grow bg-gray-800  rounded-full w-96 h-4">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                    <p className="text-white mt-1.5 ml-0 pb-3">90%</p>
            </div>
            <div>
                <p className="text-white p-2.5 pt-6 text-2xl font-bold">JavaScript</p>
                <div className="m-2.5 grow bg-gray-800  rounded-full w-96 h-4">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    
                  </div>
                  <p className="text-white mt-1.5 ml-4 pb-1">80%</p>
                </div>
            <div>
                <p className="text-white p-2.5 text-2xl font-bold">React Js</p>
                <div className="m-2.5 grow bg-gray-800  rounded-full w-96 h-4">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    <p className="text-white mt-1.5 ml-0 pb-3">80%</p>
                  </div>
                </div>
        </div>
       
      </div>
    </div>
    </div>
  
  );
}

export default Skills
