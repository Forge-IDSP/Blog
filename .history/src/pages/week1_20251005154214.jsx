import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";

export default function Week1() {
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
                    <h1 className={styles.title}>Project Idea Presentation</h1>
                    <p className={styles.subtitle}>
                        First presentation to ConnectHer Hub
                    </p>
                </header>

                <section className={styles.content}>
                    <p>content</p>
                </section>
            </article>
        </>
    );
}
