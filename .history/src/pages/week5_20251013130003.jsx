import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";

export default function Week5() {
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
                    <h1 className={styles.title}>Visualization and Research</h1>
                    <p className={styles.subtitle}>
                        User Research , Development Framework and Wireframing
                    </p>
                </header>

                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        New Idea Generated - Forge Renewed
                    </h2>
                    <p>
                        Forge has been reborn! After a weekend of research, the
                        team got the chance to meet up and discuss the ideas ,
                        break them down and analyse similarities differences and
                        finally vote on a new project idea! So this is what we
                        had at the end of our meeting
                    </p>
                    <p>
                        A voting process took place whereby forge was selected
                        as one of the final project ideas to be broken down and
                        developed throughout the Fall 2025 semester.
                    </p>
                    <p>
                        By the end of the presentations Forge had now 8 members
                        , 5 Digital Design and Development students and 3
                        Fullstack students.
                    </p>
                </section>
                <section className={styles.content}>
                    <h2>Meet the Team:</h2>
                    <p>Design</p>
                    <div>
                        <img src='/Camer.svg' />
                        <img src='/Camer.svg' />
                        <img src='/Camer.svg' />
                        <img src='/Camer.svg' />
                        <img src='/Camer.svg' />
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
