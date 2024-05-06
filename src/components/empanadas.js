import React from "react";
import loborestobar from "../imgs/loborestobar.png";

const products = [
  {
    id: 1,
    name: "Docena",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt: "",
  },
  {
    id: 2,
    name: "Media Docena",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt: "",
  },
  {
    id: 3,
    name: "Unidad",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt: "",
  },
  {
    id: 4,
    name: "Carne, Jamon y Queso.",
    href: "#",
    price: "",
    imageSrc: loborestobar,
    imageAlt: "",
  },
];

export default function Empanadas() {
  return (
    <>
      {/* Empanadas */}
      <hr className="mt-10 border-b-8 border-slate-950"></hr>

      <h1 className="text-4xl mt-6 mb-6">Empanadas</h1>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}

