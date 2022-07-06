import React from 'react'
import { useCarrito } from '../Carrito/context';
import { useConstraints } from './hooks';

interface Props {
  producto: IProductos;
}

const ProductoComponent:React.FC<Props> = ({producto}) => {
  const { id, nombre, categoria, descripcion, imagen, precio } = producto;
   const { addProduct } = useCarrito();
   const { isDisabled } = useConstraints(id, precio, categoria);

  return (
    <article className="bg-stone-700 py-7 px-5 flex w-64 sm:w-full relative flex-col gap-2 rounded-md border border-transparent hover:border-violet-600 hover:ease-in duration-150">
      <div className='absolute px-2 bg-green-500 rounded-lg right-3 top-3'>
        <span>
          {precio > 1 ? `${precio} Gemas` : `${precio} Gema`}
        </span>
      </div>
      <div className="w-full flex justify-center">
        <img alt="imagen-posión" className=" h-28 w-28" src={imagen}/>
      </div>
      <span className="text-white text-base font-bold">{nombre}</span>
      <span className="text-base font-bold text-stone-400">{descripcion}</span>
      <button 
        disabled={isDisabled} 
        onClick={() => addProduct(producto)} 
        className="w-full rounded-2xl bg-violet-600 h-10 text-white font-bold text-base hover:bg-violet-500 hover:scale-105 hover:ease-in duration-100 disabled:bg-stone-500 disabled:cursor-not-allowed disabled:scale-100"
      >
        Agregar
      </button>
    </article>
  )
}

export default ProductoComponent