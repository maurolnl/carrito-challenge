import { useState } from "react";
import { CarritoComponent } from "./components/Carrito/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/Productos/ListadoProductosComponent";

function App() {
  const [showCarrito, setShowCarrito] = useState<boolean>(false);
  
  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent onClick={() => setShowCarrito(!showCarrito)} />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
          {showCarrito ? 
            <CarritoComponent onClick={() => setShowCarrito(false)} /> 
            : <ListadoProductosComponent />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
