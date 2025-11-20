import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";
import Footer from "../ui/footer/footer.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";

export default function Week6() {
    return (
        <>
            <Header />
            <article className={styles.post}>
                <figure className={styles.hero}>
                    <img
                        src='/week6.png'
                        alt='Week 6 Update'
                    />
                </figure>

                <header className={styles.post_header}>
                    <span className={styles.week}>Week 6</span>
                    <h1 className={styles.title}>Lorem ipsum</h1>
                    <p className={styles.subtitle}>Lorem ipsum</p>
                </header>

                <section className={styles.content}>
                    <h2>Lorem ipsum</h2>
                    <p>Lorem ipsum</p>
                </section>

                <section className={styles.content}>
                    <h2>Lorem ipsum</h2>
                    <p>Lorem ipsum</p>
                </section>

                <section className={styles.content}>
                    <h2>Lorem ipsum</h2>
                    <p>Lorem ipsum</p>
                </section>
            </article>
            <LatestPosts currentPostId='week6' />
            <Footer />
        </>
    );
}
