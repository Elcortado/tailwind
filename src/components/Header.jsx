import React from 'react'


function Header() {
  return (
    <>
    <div className="w-full bg-slate-200 rounded-lg p-4 flex flex-col md:flex-row xl:flex-row gap-4 items-center justify-center md:justify-between">
    <h1 className="font-extrabold text-2xl">
    My Tinerary
    </h1>
    <nav className=" font-medium text-xl flex items-center gap-4">
       
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-white transition-colors"
        >
            Home
        </a>
        <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-white transition-colors"
        >
            
            Cities
        </a>
    </nav>
    
    <button 
    className=" font-medium flex items-center gap-x-2 border border-black hover:bg-white transition-colors py-2 px-4 rounded flex-col md:flex-row xl:flex-row gap-4 justify-center">
      <img
        src="https://img.freepik.com/iconos-gratis/acceso_318-755543.jpg"
        className="w-5 h-5 object-cover"
      />
    Login
  </button>
   
</div>

 
</>
  )
}

export default Header