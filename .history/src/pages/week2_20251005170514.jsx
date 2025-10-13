import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";

export default function Week2() {
    return (
        <>
            <Header />
            <article className={styles.post}>
                <figure className={styles.hero}>
                    <img
                        src='/blog-image1.jpg'
                        alt='Project Idea Presentation'
                    />
                </figure>

                <header className={styles.post_header}>
                    <span className={styles.week}>Week 1</span>
                    <h1 className={styles.title}>First Look at Forge</h1>
                    <p className={styles.subtitle}>
                        Forge Pitch Presentation and Team Formation
                    </p>
                </header>

                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        First Team Meeting
                    </h2>
                    <p>
                        The teamwork is all about communication, effort, and
                        commitment. As we set out to have a great collaborative
                        and communicative team we committed to creating a team
                        charter. This team charter highlighted our individual
                        expectation and team expectations, our roles, strengths
                        and weaknesses, and methods of communication.
                    </p>
                    <p>
                        A voting process took place whereby forge was selected
                        as one of the final project ideas to be broken down and
                        developed throughout the Fall 2025 semester.
                    </p>
                    <p>
                        With our primary method of communication being Discord .
                        The teams created a discord server with various
                        organized channels such as research , general
                        communication , links, and development which serve
                        useful on keeping all the team members up to date on
                        what is going on.
                    </p>
                </section>
                <section className={styles.content}>
                    <h2>What is Forge ?</h2>
                    <p>Design</p>
                    <div>
                        Forge is a mobile app built to empower tradespeople —
                        from recent graduates to experienced workers facing job
                        market challenges — by helping them start and manage
                        their own businesses.
                    </div>
                    <p>Developemnt</p>
                    <div>
                        <img src='/Camer.svg' />
                        <img src='/Camer.svg' />
                        <img src='/Camer.svg' />
                    </div>
                </section>

                <section className={styles.content}>
                    <h2>Whats happening next week:</h2>
                    <p>
                        What an exciting Week for Forge ! We are so ready to
                        start tackling the UX/UI side of forge and finally Build
                        a fully fledged Application.{" "}
                    </p>
                    <ul>
                        <li>First Team Meeting</li>
                        <li>ConnectHer</li>
                    </ul>
                </section>

                <p>Thanks for checking in ! See you back here next week ! </p>
            </article>
        </>
    );
}
