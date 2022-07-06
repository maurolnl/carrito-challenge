import ProductoComponent from "./ProductoComponent";

interface Props {
  productos: IProductos[];
}

export const ListadoProductosComponent:React.FC<Props> = ({productos}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {productos.map(producto => (
        <ProductoComponent key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
  