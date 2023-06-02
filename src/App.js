import "./App.module.css";
import TextMenu from "./components/TextMenu/TextMenu";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import Menu from "./components/Menu/Menu";
import Button from "./components/Button/Button";
import { useState } from "react";

const App = () => {
  const categorias = ['starters', 'nonveg', 'vegetarian','desserts', 'drinks'];
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("starters");

  const handleCategoriaSeleccionada = (categoria) => {
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
