import { createContext, useContext, useState, ReactNode } from "react";

interface Context {
  carrito: IProductos[];
  quantity: number;
  addProduct: (producto: IProductos) => void;
  removeProduct: (productoId: number) => void;
}

const CarritoContext = createContext({} as Context);

export const CarritoProvider: React.FC<{children?: ReactNode}> = ({ children }) => {
  const carrito = useProvideCarrito();

  return <CarritoContext.Provider value={carrito}>{children}</CarritoContext.Provider>
}

export const useCarrito = () => {
  return useContext(CarritoContext);
}

const useProvideCarrito = () => {
  const [carrito, setCarrito] = useState<IProductos[]>([]);
  const [quantity, setQuantity] = useState<number>(0);

  const addProduct = (producto: IProductos) => {
    const newCarrito = [...carrito, producto];
    setCarrito(newCarrito);
    setQuantity(quantity + 1);
  }

  const removeProduct = (productoId: number) => {
    const newCarrito = carrito.filter(producto => producto.id !== productoId);
    setCarrito(newCarrito);
    setQuantity(quantity - 1);
  }

  return {
    carrito,
    quantity,
    addProduct,
    removeProduct,
  }
}