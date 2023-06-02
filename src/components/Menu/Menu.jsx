import classes from "./Menu.module.css";

const Menu = ({
  categorias,
  categoriaSeleccionada,
  onCategoriaSeleccionada,
}) => {

  return (
    <div className={classes.categoryText}>
      {categorias.map(
        (
          categoria // esto hace que se muestren las categorias en el menu
        ) => (
          <p
            key={categoria}
            onClick={() => onCategoriaSeleccionada(categoria)}
            className={
              categoria === categoriaSeleccionada
                ? classes.selected
                : classes.notSelected
            }
          >
            {categoria.toUpperCase()}
          </p>
        )
      )}
    </div>
  );
};

export default Menu;
