import { useState } from 'react';

function Desplegable() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="py-2 px-4 rounded bg-blue-500 text-white focus:outline-none"
        onClick={toggleDropdown}
      >
        Toggle Dropdown
      </button>

      {isOpen ? (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded mt-2">
          {/* Contenido del desplegable */}
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Desplegable;
