import React from "react";
import styles from "./hero.module.css";
import Button from "../button/button";

const Hero = ({ title, subtitle, description, buttons = [] }) => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                {title && (
                    <h1 className={styles.title}>
                        {title}
                        {subtitle && (
                            <span className={styles.subtitle}> {subtitle}</span>
                        )}
                    </h1>
                )}
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
                {buttons && buttons.length > 0 && (
                    <div className={styles.buttonGroup}>
                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant || "primary"}
                                onClick={button.onClick}
                                className={button.className}
                                {...button.props}>
                                {button.text}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
