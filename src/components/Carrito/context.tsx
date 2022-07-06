import { createContext, useContext, useState, ReactNode } from "react";

interface Context {
  carrito: IProductos[];
  quantity: number;
  gemas: number;
  addProduct: (producto: IProductos) => void;
  removeProduct: (productoId: number) => void;
  resetCarrito: () => void;
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
  const [gemas, setGemas] = useState<number>(3);
  const [quantity, setQuantity] = useState<number>(0);

  const addProduct = (producto: IProductos) => {
    const newCarrito = [...carrito, producto];
    setCarrito(newCarrito);
    setQuantity(quantity + 1);
    setGemas(gemas - producto.precio);
  }

  const removeProduct = (productoId: number) => {
    const newCarrito = carrito.filter(producto => producto.id !== productoId);
    const producto = carrito.find(producto => producto.id === productoId);
    const newGemas = gemas + (producto as IProductos).precio;

    setCarrito(newCarrito);
    setQuantity(quantity - 1);
    setGemas(newGemas);
  }

  const resetCarrito = () => {
    setCarrito([]);
    setQuantity(0);
    setGemas(3);
  }

  return {
    carrito,
    gemas,
    quantity,
    addProduct,
    removeProduct,
    resetCarrito,
  }
}