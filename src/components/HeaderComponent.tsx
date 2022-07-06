import { useCarrito } from "./Carrito/context";

interface Props {
  onClick: () => void;
}

export const HeaderComponent: React.FC<Props> = ({onClick}) => {
  const {gemas, quantity} = useCarrito();
  
  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" />
        <span>{gemas} Gemas</span>
      </div>
      <button className="text-white hover:underline" onClick={onClick}>Ver Carrito ({quantity})</button>
    </div>
  );
};
