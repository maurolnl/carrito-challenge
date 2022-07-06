import { useProducts } from "./hooks";
import ProductoComponent from "./ProductoComponent";

export const ListadoProductosComponent = () => {
  const {productos, error} = useProducts();  

  if (error) {
    return (
      <span className="text-white font-bold">Error fetching products</span>
    );
  }

  return (
    <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
      {productos.map(producto => (
        <ProductoComponent key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
  