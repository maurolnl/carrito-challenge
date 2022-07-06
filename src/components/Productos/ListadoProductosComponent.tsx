import ProductoComponent from "./ProductoComponent";

interface Props {
  productos: IProductos[];
}

export const ListadoProductosComponent:React.FC<Props> = ({productos}) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
      {productos.map(producto => (
        <ProductoComponent key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
  