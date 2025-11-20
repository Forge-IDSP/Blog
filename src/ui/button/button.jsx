import React from "react";
import styles from "./button.module.css";

const Button = ({
    children,
    variant = "primary",
    onClick,
    className,
    ...props
}) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${
        className || ""
    }`.trim();

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
