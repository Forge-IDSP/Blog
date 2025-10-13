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
                    <h1 className={styles.title}>First Look at Forge</h1>
                    <p className={styles.subtitle}>
                        Forge Pitch Presentation and Team Formation
                    </p>
                </header>

                <section className={styles.content}>
                    <h2 className={styles.section_header}></h2>
                    <p>content</p>
                </section>
            </article>
        </>
    );
}
