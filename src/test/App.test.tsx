import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import {useCarrito} from '../components/Carrito/context';

jest.mock("../components/Carrito/context");

describe('[App / App.tsx]', () => {
  test('should render products and handle a purchase', async () => {
    (useCarrito as jest.Mock).mockReturnValue({
      carrito: [],
      gemas: 3,
      quantity: 0,
      addProduct: jest.fn(),
    });
    render(<App />);
    const linkElement = screen.getByText(/Potion Shop/i);
    expect(linkElement).toBeInTheDocument();

    const carrito = screen.getByText("Ver Carrito (0)");
    expect(carrito).toBeVisible();

    const gemas = screen.getByText("3 Gemas");
    expect(gemas).toBeVisible();

    await waitFor(() => {
      const buttons = screen.getAllByRole('button', {name: /Agregar/i});
      expect(buttons).toHaveLength(5);
    });
    const buttons = screen.getAllByRole('button', {name: /Agregar/i});
    const buttonAgregar = buttons[0];

    fireEvent.click(buttonAgregar);

    expect(useCarrito().addProduct).toHaveBeenCalledTimes(1);
  });
  describe("when a product has already been added", () => {
    test("should render its button with disabled style", async () => {
      (useCarrito as jest.Mock).mockReturnValue({
        carrito: [{id: 1, nombre: "Potion", precio: 3}],
        gemas: 0,
        quantity: 1,
        addProduct: jest.fn(),
      });
      render(<App />);

      const carrito = screen.getByText("Ver Carrito (1)");
      expect(carrito).toBeVisible();
  
      const gemas = screen.getByText("0 Gemas");
      expect(gemas).toBeVisible();

      await waitFor(() => {
        const buttons = screen.getAllByRole('button', {name: /Agregar/i});
        const buttonAgregar = buttons[0];
        expect(buttonAgregar).toHaveAttribute("disabled");
      });
      const title = await screen.findByText("HP 500");
      expect(title).toBeVisible();
    })
  });
  describe("when click on ver carrito", () => {
    test("should render carrito", async () => {
      (useCarrito as jest.Mock).mockReturnValue({
        carrito: [{id: 1, nombre: "HP 500", precio: 3}],
        gemas: 0,
        quantity: 1,
        addProduct: jest.fn(),
      });
      render(<App />);

      const carrito = screen.getByText("Ver Carrito (1)");
      expect(carrito).toBeVisible();

      fireEvent.click(carrito);

      const buttonComprar = await screen.findByText("Comprar");
      expect(buttonComprar).toBeVisible();

      const title = await screen.findByText("HP 500");
      expect(title).toBeVisible();
    })
    test("should render carrito without elements", () => {
      (useCarrito as jest.Mock).mockReturnValue({
        carrito: [],
        gemas: 0,
        quantity: 0,
        addProduct: jest.fn(),
      });
      render(<App />);

      const carrito = screen.getByText("Ver Carrito (0)");
      expect(carrito).toBeVisible();

      fireEvent.click(carrito);

      const buttonComprar = screen.getByText("Comprar");
      expect(buttonComprar).toBeVisible();

      const title = screen.getByText("No hay productos en su carrito.");
      expect(title).toBeVisible();
    })
  })
});
