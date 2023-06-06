import "./App.module.css";
import Menu from "./components/Menu/Menu";
import Button from "./components/Button/Button";
import TextMenu from "./components/TextMenu/TextMenu";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import { useState } from "react";

const App = (): JSX.Element => {
  const categorias = ["starters", "nonveg", "vegetarian", "desserts", "drinks"];
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("starters");

  const handleCategoriaSeleccionada = (categoria: string) => {
    setCategoriaSeleccionada(categoria);
  };
  return (
    <div>
      <TextMenu />
      <Menu
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        onCategoriaSeleccionada={handleCategoriaSeleccionada}
      />
      <FilterMenu categoria={categoriaSeleccionada} />
      <Button />
    </div>
  );
};

export default App;
