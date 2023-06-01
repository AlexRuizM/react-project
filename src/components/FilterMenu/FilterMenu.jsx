import classes from "./FilterMenu.module.css";
import { useState } from "react";
import data from "../../db/db.json";

const FilterMenu = () => {
  const [categoria, setCategoria] = useState("starters"); // esto hace que se muestre la categoria por defecto
  const categorias = Object.keys(data); // esto hace que se muestren las categorias en el menu
  const menuItems = categoria ? data[categoria] : []; // esto hace que si no hay categoria, no muestre nada

  const handleCategoria = (categoria) => {
    setCategoria(categoria); // esto hace que se muestren los items de cada categoria
  };

  return (
    <div className={classes.category}>
      <div className={classes.categoryText}>
        {categorias.map(
          (
            categoriaItem // esto hace que se muestren las categorias en el menu
          ) => (
            <h3
              key={categoriaItem}
              onClick={() => handleCategoria(categoriaItem)}
              className={
                categoria === categoriaItem ? "selected" : "notSelected"
              }
            >
              {categoriaItem.toUpperCase()}
            </h3>
          )
        )}
      </div>
      <ul className={classes.list}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <div className={classes.img}>
              <img src={item.img} alt={item.nombre} />
            </div>
            <p className={classes.tbadgy}>
              <strong>{item.nombre}</strong>
              {item.badgy && (
                <p
                  className={`${
                    item.badgy === "hot" ? classes.red : classes.green
                  }`}
                >
                  {item.badgy.toUpperCase()}
                </p>
              )}
            </p>
            <p className={classes.prize}>${item.precio}</p>
            <p className={classes.description}>{item.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterMenu;
