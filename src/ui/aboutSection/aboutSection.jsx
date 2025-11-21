import React from "react";
import styles from "./aboutSection.module.css";
import Button from "../button/button";

const AboutSection = ({ onTryClick }) => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Bridging Education
                        <br />
                        and Skilled Trades
                    </h2>
                    <p className={styles.description}>
                        Forge is a career pathway app that helps high school
                        students from financially struggling households find
                        stable, in-demand trades careers through clear career
                        overviews, daily work examples, required skills, and
                        income over time with the aim of making it easier for
                        students to see the real opportunities and long-term
                        benefits of trades. It aims to empower and support
                        students throughout their decision making process.
                    </p>
                    <Button
                        variant='primary'
                        className={styles.learnMoreButton}
                        onClick={onTryClick}>
                        Try Forge Now
                    </Button>
                </div>
                <div className={styles.imageContent}>
                    <img
                        src='/highschool-trade.png'
                        alt='Student in trades career'
                        className={styles.illustration}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
