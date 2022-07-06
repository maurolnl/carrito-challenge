import { useEffect, useState, useCallback } from "react";
import api from "../../api/api";
import { useCarrito } from "../Carrito/context";

export const useConstraints = (id: number, precio: number, categoria: string) => {
  const [isDisabled, setDisable] = useState<boolean>(false);
  const { carrito, gemas } = useCarrito();

  useEffect(() => {
    if (gemas < precio) {
      setDisable(true);
      return;
    }
    else if (carrito.find(producto => producto.id === id)) {
      setDisable(true);
      return;
    }
    else if (carrito.find(producto => producto.categoria === categoria)){
      setDisable(true);
      return;
    }
  }, [carrito, gemas, precio, id, categoria])

  return {
    isDisabled,
  }
}

export const useProducts = () => {
  const [productos, setProductos] = useState<IProductos[]>([]);
  const [error, setError] = useState<boolean>(false);
  
  const handleFetchData = useCallback(async () => {
    try {
      const apiProductos = await api.getProducts();

      setProductos(apiProductos);
      
    } catch (error){
      setError(true);
      console.log(error);
    }
  }, [setProductos, setError]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return {
    productos,
    error,
  }
}