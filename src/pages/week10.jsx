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
                        src='/blog-image1.jpg'
                        alt='Week 10 Update'
                    />
                </figure>

                <header className={styles.post_header}>
                    <span className={styles.week}>Week 10</span>
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
            <LatestPosts currentPostId='week10' />
            <Footer />
        </>
    );
}
