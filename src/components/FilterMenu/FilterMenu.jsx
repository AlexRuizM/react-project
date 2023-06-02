import classes from "./FilterMenu.module.css";
import { useState } from "react";
import data from "../../db/db.json";

const FilterMenu = ({ categoria }) => {
  const menuItems = categoria ? data[categoria] : []; // esto hace que si no hay categoria, no muestre nada

  return (
    <div className={classes.category}>
      <ul>
        {menuItems.map((item) => (
          <li className={classes.list} key={item.id}>
            <div className={classes.img}>
              <img src={item.img} alt={item.nombre} />
            </div>
            <p className={classes.tbadgy}>
              {item.nombre}
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
