import loborestobar from "../imgs/loborestobar.png";
import Papas from "./papas";
import Sandwiches from "./sandwiches";
import Promos from "./promos";
import Empanadas from "./empanadas";
// import promotrespizzas from '../imgs/promotrespizzas.png'

const products = [
  {
    id: 1,
    name: "Pizza Muzzarella",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Pizza Napolitana",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Pizza Especial Jamon y Morrón",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Pizza Caballo",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Pizza Alemana",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Pizza Calabresa",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Pizza Fugazzeta",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  /*
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$2800",
    imageSrc: loborestobar,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  }, */
  // More products...
];

export default function Contenido() {
  return (
    <div className="bg-gray-400 flex-grow min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl mb-5">Pizzas</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} href={product.href} className="group">
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
            </div>
          ))}
        </div>

        <Empanadas />
        <Papas />
        <Sandwiches />
        <Promos />
      </div>
    </div>
  );
}
