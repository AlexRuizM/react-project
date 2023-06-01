import "./App.module.css";
import TextMenu from "./components/TextMenu/TextMenu";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <div>
      <TextMenu />
      <FilterMenu />
      <Menu />
    </div>
  );
};

export default App;
