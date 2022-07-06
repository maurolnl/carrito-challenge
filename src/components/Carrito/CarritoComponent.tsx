import { useState } from "react";
import api from "../../api/api";
import CarritoItemComponent from "./CarritoItemComponent";
import { useCarrito } from "./context";

interface Props {
  onClick: () => void;
}

export const CarritoComponent: React.FC<Props> = ({onClick}) => {
  const { carrito, removeProduct, resetCarrito } = useCarrito();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  
  const isCarritoEmpty = carrito.length === 0;

  const formatCarrito = () => {
    return carrito.map(producto => producto.id)
  }

  const handleBuy = async () => {
    const idProductos = formatCarrito();
    
    try {
      const response = await api.postOrder(idProductos);
      console.log(response);
      
      if (response) {
        setSuccess(true);
        resetCarrito();

        return;
      }
      setError(true);
    } catch (error) {
      setError(true);
    }

  }

  return (
    <div className="flex flex-col gap-7">
      <button className="btn-primary px-3 w-fit" onClick={onClick}>
        Volver
      </button>
      <div className={`flex flex-col ${error || success ? "bg-transparent" : "bg-stone-700"}`}>
        {success || error ? (
          success ? (
            <span className="text-white font-bold justify-center">Compra Realizada!</span>
          ) : (
            <span className="text-white font-bold justify-center">Ha ocurrido un error en la compra.</span>
          )
        ) : (
          isCarritoEmpty ? (
            <div className={`flex flex-row  border-b border-stone-400 py-2 px-3 items-center "justify-center"`}>
              <span className="text-white font-bold justify-center">No hay productos en su carrito.</span>
            </div>
          ):(
            carrito.map(producto => {
              return (
                  <CarritoItemComponent key={producto.id} id={producto.id} nombre={producto.nombre} imagen={producto.imagen} onClick={(id) => removeProduct(id)} />
                )
            })
          )
        )}
      </div>
      <button 
        className="btn-primary w-full"
        onClick={handleBuy}
      >
        Comprar
      </button>
    </div>
  );
};
