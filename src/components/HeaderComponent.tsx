import { useCarrito } from "./Carrito/context";

interface Props {
  onClick: () => void;
}

export const HeaderComponent: React.FC<Props> = ({onClick}) => {
  const {gemas, quantity} = useCarrito();
  
  return (
    <div className="bg-stone-700 py-4 px-4 sm:px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-xl sm:text-2xl flex items-center flex-col sm:flex-row font-bold"><span>🧙‍♂️</span> Potion Shop</h1>
      <div className="flex gap-2 flex-col sm:flex-row items-center">
        <img alt="gema icon" src="./gem.png" />
        <span>{gemas} Gemas</span>
      </div>
      <button className="text-white hover:underline text-sm sm:text-base" onClick={onClick}>Ver Carrito ({quantity})</button>
    </div>
  );
};
