import React from 'react'

interface Props {
  producto: IProductos;
}

const ProductoComponent:React.FC<Props> = ({producto}) => {
  return (
    <article className="bg-stone-700 py-5 px-5 flex w-64 sm:w-full relative flex-col gap-2 rounded-md border border-transparent hover:border-violet-600 hover:ease-in duration-150">
      <div className='absolute px-2 bg-green-500 rounded-lg right-3 top-3'>
        <span>
          1 Gema
        </span>
      </div>
      <div className="w-full flex justify-center">
        <img alt="imagen-posión" className=" h-28 w-28" src={producto.imagen}/>
      </div>
      <span className="text-white text-base font-bold">{producto.nombre}</span>
      <span className="text-base font-bold text-stone-400">{producto.descripcion}</span>
      <button className="w-full rounded-2xl bg-violet-600 h-10 text-white font-bold text-base hover:bg-violet-500 hover:ease-in duration-100">Agregar</button>
    </article>
  )
}

export default ProductoComponent