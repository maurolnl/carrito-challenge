import { useCarrito } from "./context";

interface Props {
  onClick: () => void;
}

export const CarritoComponent: React.FC<Props> = ({onClick}) => {
  const { carrito, quantity } = useCarrito();
  
  const isCarritoEmpty = carrito.length === 0;

  return (
    <div className="flex flex-col gap-7">
      <button className="rounded-2xl bg-violet-600 h-10 text-white font-bold text-base hover:bg-violet-500 hover:ease-in duration-100 px-3 w-fit" onClick={onClick}>Volver</button>
      <div className="flex flex-col bg-stone-700">
        <div className={`flex flex-row  border-b border-stone-400 py-2 px-3 items-center ${isCarritoEmpty ? "justify-center" : "justify-between"}`}>
          {!isCarritoEmpty ? ( 
            <>
              <div className="p-1 rounded-full bg-stone-400">
                <img alt="imagen-poción" src="http://localhost:3000/Icon2.png" />
              </div>
              <span className="text-white font-bold">HP 500</span>
              <button className="px-2 h-fit" onClick={() => {}}>x</button> 
            </>
          ) : (
            <span className="text-white font-bold justify-center">No hay productos en su carrito.</span>
          )}
        </div>
      </div>
      <button className="rounded-2xl bg-violet-600 h-10 text-white font-bold text-base hover:bg-violet-500 hover:ease-in duration-100 w-full" onClick={onClick}>Comprar</button>
    </div>
  );
};
