import React from "react";
import loborestobar from '../imgs/loborestobar.png'
import iconowpp from '../imgs/wppicon.png'
import iconoig from '../imgs/igicon.png'
import location from '../imgs/locationicon.png'


function Footer() {
  return (
    <>
      <div className="bg-neutral-700 pt-2">
        <footer className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex justify-between ">
          <ul className="text-slate-200 cursor-pointer mt-1.5">
            <li className="m-1 hover:underline text-sm">Inicio</li>
            <li className="m-1 hover:underline text-sm">Menu</li>
            <li className="m-1 hover:underline text-sm">Nosotros</li>
          </ul>
          <div className="text-gray-50 mt-1">
            <p className="flex">
              <img src={location} alt="" />
              <p className="mt-1"> Roque Saen Peña 123 </p>
            </p>
            <p className="flex"> <img alt="" src={iconowpp} /> <p className="mt-1"> 0345 4168370</p> </p>
            <p> <a href="https://instagram.com/lobopizzeria?igshid=MzRlODBiNWFlZA==">
              <p className="flex"> <img className="w-9" src={iconoig} alt="" />
                <p className="mt-1"> Lobo Pizzería</p>
              </p>
            </a>
            </p>
          </div>
          <picture className="w-12 h-18 alignItems: self-center mr-5 ">
            <a href="/">
              <img className="rounded-lg cursor-pointer align-middle" src={loborestobar} alt="lobo pizzeria concordia pizza comida" />
            </a>
          </picture>
        </footer>
        <p className="text-gray-100 text-sm flex justify-center mt-0">© JSA</p>
      </div>
    </>
  )
}

export default Footer;