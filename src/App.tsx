import { useCallback, useEffect, useState } from "react";
import api from "./api/api";
import { CarritoComponent } from "./components/Carrito/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/Productos/ListadoProductosComponent";

function App() {
  const [showCarrito, setShowCarrito] = useState<boolean>(false);
  const [productos, setProductos] = useState<IProductos[]>([]);
  const [error, setError] = useState<boolean>(false);
  
  const handleFetchData = useCallback(async () => {
    try {
      const apiProductos = await api.getProducts();

      setProductos(apiProductos);
      console.log(apiProductos);
      
    } catch (error){
      setError(true);
      console.log(error);
    }
  }, [setProductos, setError]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  if (error) {
    console.log(error);
  }

  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent onClick={() => setShowCarrito(!showCarrito)} />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
          {showCarrito ? <CarritoComponent /> : <ListadoProductosComponent productos={productos} />}
        </div>
      </div>
    </div>
  );
}

export default App;
