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
                    <img
                        src=''
                        alt='Screenshot of new flow for forge'
                    />
                    <p>
                        With this new idea we were able to pitch it again to our
                        advisor for feedback and finally based on that we were
                        able to move forward with our new idea !
                    </p>
                    <img
                        src=''
                        alt='Screenshot of new value proposition'
                    />
                </section>
                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        Team meeting Updates
                    </h2>
                    <p>
                        With the idea being finalized as a team we overviewed
                        our tasks for the next week , made sure we are on the
                        same page about Forge and the problem its solving and
                        finally decided on continuing by developing an app
                        rather than a website considering Forge is now for high
                        school students and recent grads.
                    </p>
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
