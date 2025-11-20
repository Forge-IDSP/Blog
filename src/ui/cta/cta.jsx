import React from "react";
import styles from "./cta.module.css";
import Button from "../button/button";

const CTA = ({
    title,
    description,
    buttonText = "Try Forge Now",
    buttonVariant = "secondary",
    onButtonClick,
    buttonProps = {},
}) => {
    return (
        <section className={styles.cta}>
            <div className={styles.ctaContent}>
                {title && (
                    <h2 className={styles.ctaTitle}>{title}</h2>
                )}
                {description && (
                    <p className={styles.ctaDescription}>{description}</p>
                )}
                {buttonText && (
                    <div className={styles.ctaButton}>
                        <Button
                            variant={buttonVariant}
                            onClick={onButtonClick}
                            {...buttonProps}>
                            {buttonText}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CTA;

