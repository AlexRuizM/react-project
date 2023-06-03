import classes from "./FilterMenu.module.css";
import menuImg1 from "../../img/menu/menu_01.jpg";
import menuImg2 from "../../img/menu/menu_02.jpg";
import menuImg3 from "../../img/menu/menu_03.jpg";
import menuImg4 from "../../img/menu/menu_04.jpg";
import menuImg5 from "../../img/menu/menu_05.jpg";
import menuImg6 from "../../img/menu/menu_06.jpg";
import menuImg7 from "../../img/menu/menu_07.jpg";
import menuImg8 from "../../img/menu/menu_08.jpg";

interface MenuItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string | number;
  badgy: string | null;
  img: string;
}

interface FilterMenuProps {
  categoria: string;
}

const imageMap: Record<string, string> = {
  "../img/menu/menu_01.jpg": menuImg1,
  "../img/menu/menu_02.jpg": menuImg2,
  "../img/menu/menu_03.jpg": menuImg3,
  "../img/menu/menu_04.jpg": menuImg4,
  "../img/menu/menu_05.jpg": menuImg5,
  "../img/menu/menu_06.jpg": menuImg6,
  "../img/menu/menu_07.jpg": menuImg7,
  "../img/menu/menu_08.jpg": menuImg8,
};

const FilterMenu: React.FC<FilterMenuProps> = ({ categoria }) => {
  const data = require("../../db/db.json");
  const menuItems: MenuItem[] = categoria
    ? (data[categoria] as MenuItem[])
    : []; // esto hace que si no hay categoria, no muestre nada
  return (
    <div className={classes.category}>
      <ul>
        {menuItems.map((item) => (
          <li className={classes.list} key={item.id}>
            <div className={classes.img}>
              <img src={imageMap[item.img]} alt={item.nombre} />
            </div>
            <div className={classes.tittle}>
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
              <p className={classes.description}>{item.descripcion}</p>
            </div>
            <div className={classes.prizes}>
              <p className={classes.prize}>${item.precio}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterMenu;
