import React from "react";
import "./header.css";
import loborestobar from "../imgs/loborestobar.png";

function Header() {
  return (
    <>
      <div className="bg-red-700 mb pb-5">
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex justify-center align-middle">
          <picture className="w-16 h-20">
            <a href="/">
              <img
                className="rounded-lg cursor-pointer grid mt-2"
                src={loborestobar}
                alt="lobo pizzeria concordia pizza comida"
              />
            </a>
          </picture>
        </div>
      </div>
    </>
  );
}

export default Header;

