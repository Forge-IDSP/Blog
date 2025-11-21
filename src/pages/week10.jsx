import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";
import Footer from "../ui/footer/footer.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";

export default function Week10() {
    return (
        <>
            <Header />
            <article className={styles.post}>
                <figure className={styles.hero}>
                    <img
                        src='/week10.png'
                        alt='Week 10 Update'
                    />
                </figure>

                <header className={styles.post_header}>
                    <span className={styles.week}>Week 10</span>
                    <h1 className={styles.title}>
                        The Story Behind Forge and Fullstack Development
                    </h1>
                    <p className={styles.subtitle}>November 12th,2025</p>
                </header>

                <section className={styles.content}>
                    <h2>Promotional Video Ideation</h2>
                    <p>
                        LAs we begin to see Forge become more and more
                        accessible for users. The time has come to ideate a
                        promotional video that highlights the key information we
                        want our users to remember through visual storytelling.
                        We began by creating a storyline for our promotional
                        video that highlights the key reason we behind forge –
                        to support students by providing a fun way of learning
                        about careers in trades.
                    </p>
                </section>

                <section className={styles.content}>
                    <h2>Whats happening next week:</h2>

                    <ul>
                        <li>Promotional video presentation and iteration</li>
                        <li>Full Stack Development of AI Simulation</li>
                    </ul>
                    <p>Thanks for checking in! See you back here next week!</p>
                </section>
            </article>
            <LatestPosts currentPostId='week10' />
            <Footer />
        </>
    );
}
