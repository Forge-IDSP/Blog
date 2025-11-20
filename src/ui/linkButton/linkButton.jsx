import React from "react";
import { Link } from "react-router-dom";
import styles from "./linkButton.module.css";

const LinkButton = ({ 
    text = "Read More", 
    to = "/", 
    className = "",
    showArrow = true 
}) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <Link 
            to={to} 
            className={`${styles.linkButton} ${className}`.trim()}
            onClick={handleClick}
        >
            {text}
            {showArrow && <span className={styles.arrow}> →</span>}
        </Link>
    );
};

export default LinkButton;

