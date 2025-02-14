import React from 'react';

function Home() {
  const navbarHeight = '1px'; 
  const myStyle = {
    backgroundImage: "url('/src/assets/bg3.jpg')",
    height: `calc(100vh - ${navbarHeight})`,
    width: "100%",
    marginTop: navbarHeight,
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
  };

  return (
    <div id='Home'>
      <div style={myStyle}>
        <div className="items-center justify-center">
          <p className="pt-64 pl-80 text-white text-4xl">Hello I am ,</p>
          <p className="pt-2 pl-80 text-white text-5xl"><span className="font-extrabold">Abirami</span></p>
          <p className="pt-4 pl-80 text-amber-600 text-6xl font-extrabold">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
