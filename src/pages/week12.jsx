import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";
import Footer from "../ui/footer/footer.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";

export default function Week12() {
    return (
        <>
            <Header />
            <article className={styles.post}>
                <figure className={styles.hero}>
                    <img
                        src='/week12.jpeg'
                        alt='Week 12 Update'
                    />
                </figure>

                <header className={styles.post_header}>
                    <span className={styles.week}>Week 12</span>
                    <h1 className={styles.title}>
                        From a vision to a reality : Promotional Content
                    </h1>
                    <p className={styles.subtitle}>November 21st,2025</p>
                </header>

                <section className={styles.content}>
                    <h2>Promotional Video Editing</h2>
                    <p>
                        Filming took place within a day whereby we gathered as a
                        team to transform our vision into reality. We used a
                        series of equipment to support in creating a scene such
                        as classrooms ( for the high school student), mobile
                        devices, protective gear such as helmets and much more.
                    </p>
                </section>

                <section className={styles.content}>
                    <h2>Printed Material Creation and Iteration</h2>
                    <p>
                        With the Final presentation slowly approaching we are
                        creating a series of small visual elements to support
                        our audience before we get to introduce them to forge at
                        the Digital Design and Development annual showcase.
                    </p>
                </section>

                <section className={styles.content}>
                    <h2>Web Supplement Ideation</h2>
                    <p>
                        As our mobile Hi-fi prototype is finalised. It's time to
                        provide a supplement to enhance our users' experience
                        with forge. Based on our initial analysis we decided to
                        focus on providing information on user progress such as
                        badge achievement levels.
                    </p>
                </section>

                <section className={styles.content}>
                    <h2>Final Presentation Drafting</h2>
                    <p>
                        The question we have been asking ourselves is: “How do
                        we present forge to the world in the most unique way
                        possible?”. We decided to start a draft whereby we
                        focused our structure on creating
                    </p>
                </section>
            </article>
            <LatestPosts currentPostId='week12' />
            <Footer />
        </>
    );
}
