import React from "react";
import './header.css'
import loborestobar from '../imgs/loborestobar.png'

function Header() {
  return (<>
    <div className="bg-red-700 mb pb-5">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex justify-center align-middle">
        <picture className="w-16 h-20">
          <a href="/">
            <img className="rounded-lg cursor-pointer grid mt-2" src={loborestobar} alt="lobo pizzeria concordia pizza comida" />
          </a>
        </picture>
        {/* <header >
          <ul className="flex p-5 text-slate-200">
            <li className="mr-5 ml-5 cursor-pointer underline hover:bg-slate-900 rounded-lg p-1">Inicio</li>
            <li className="mr-5 ml-5 cursor-pointer underline hover:bg-slate-900 rounded-lg p-1">Menu</li>
            <li className="mr-5 ml-5 cursor-pointer underline hover:bg-slate-900 rounded-lg p-1">Nosotros</li>
          </ul>
        </header> */}
      </div>
    </div>
  </>);
}

export default Header;