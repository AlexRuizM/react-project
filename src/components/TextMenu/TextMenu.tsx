import classes from "./TextMenu.module.css";

const TextMenu = () => {
  return (
    <div className={classes.menuText}>
      <p>{"Special menu".toUpperCase()}</p>
      <h3> {"discover menu".toUpperCase()}</h3>
    </div>
  );
};

export default TextMenu;
