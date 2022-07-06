interface Props{
  id: number;
  nombre: string;
  imagen: string;
  onClick: (id: number) => void;
}

const CarritoItemComponent: React.FC<Props> = ({id, nombre, imagen, onClick}) => {
  return (
    <div className={`flex flex-row  border-b border-stone-400 py-2 px-3 items-center justify-between`}>
      <div className="p-1 rounded-full bg-stone-400">
        <img alt={`imagen-${nombre}`} src={imagen} />
      </div>
      <span className="text-white font-bold">{nombre}</span>
      <button className=" text-stone-400 hover:text-stone-500 h-fit" onClick={() => onClick(id)}>✕</button> 
    </div>
  )
}

export default CarritoItemComponent