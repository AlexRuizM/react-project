import classes from "./Button.module.css";

const Button = () => {
  return (
    <div className={classes.divButton}>
      <button className={classes.buttonMenu}>
        VIEW FULL MENU
      </button>
    </div>
  );
};

export default Button;
