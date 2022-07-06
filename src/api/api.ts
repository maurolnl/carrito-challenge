/* eslint-disable import/no-anonymous-default-export */
export default {
  getProducts: async () : Promise<IProductos[]> => {
    return fetch('http://localhost:3001/productos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error)
      return error;
    })
  },
  postOrder: async (idProductos: number[]) : Promise<boolean> => {
    return fetch("http://localhost:3001/compras", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({itemsId: idProductos}),
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error)
      return false;
    })
  }
}