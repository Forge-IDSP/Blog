import React from "react";
import styles from "./howItWorks.module.css";
import Button from "../button/button";

const HowItWorks = () => {
    return (
        <section className={styles.howItWorks}>
            <div className={styles.howItWorksContainer}>
                <div className={styles.imageContent}>
                    <img
                        src='/howitworks.png'
                        alt='Forge app interface showing career simulation'
                        className={styles.illustration}
                    />
                </div>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>How it Works</h2>
                    <p className={styles.description}>
                        With Forge's AI simulation, you choose the type of
                        career you want to explore, and the AI generates dynamic
                        scenarios that reflect real responsibilities,
                        challenges, and opportunities in that field. As you
                        navigate each situation, you learn key information,
                        answer prompts, and earn badges that mark your
                        progress—all the way to completing your journey and
                        achieving your "Red Seal."
                    </p>
                    <p className={styles.description}>
                        Beyond the simulation, you can also access direct
                        information about specific careers and jobs, including
                        salary ranges, daily tasks, and required certifications.
                        Forge guides you from high school planning to building a
                        fully established career, giving you everything you need
                        in one place.
                    </p>
                    <Button
                        variant='primary'
                        className={styles.tryNowButton}>
                        Try Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
