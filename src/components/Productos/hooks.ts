import { useEffect, useState } from "react";
import { useCarrito } from "../Carrito/context";

export const useConstraints = (id: number, precio: number, categoria: string) => {
  const [isDisabled, setDisable] = useState<boolean>(false);
  const {carrito, gemas } = useCarrito();

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