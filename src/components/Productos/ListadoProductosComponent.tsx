interface Props {
  productos: IProductos[];
}

export const ListadoProductosComponent:React.FC<Props> = ({productos}) => {
  return (
    <div>
      <span>ListadoProductosComponent</span>
    </div>
  );
};
