import classes from "./Button.module.css";

const Button = () => {
  return (
    <div className={classes.divButton}>
      <button className={classes.buttonMenu}>
        {"View Full Menu".toUpperCase()}
      </button>
    </div>
  );
};

export default Button;
