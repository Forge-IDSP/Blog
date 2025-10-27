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
                    <span className={styles.week}>Week 2</span>
                    <h1 className={styles.title}>ConnectHer and Forge</h1>
                    <p className={styles.subtitle}>
                        ConnectHer Presentation, First Team meeting
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
                        With our primary method of communication being Discord.
                        The teams created a discord server with various
                        organized channels such as research, general
                        communication, links, and development which serve useful
                        on keeping all the team members up to date on what is
                        going on.
                    </p>
                </section>
                <section className={styles.content}>
                    <h2>What is Forge ?</h2>

                    <p>
                        Forge is a mobile app built to empower tradespeople —
                        from recent graduates to experienced workers facing job
                        market challenges — by helping them start and manage
                        their own businesses.
                    </p>
                </section>
                <section className={styles.content}>
                    <h2>ConnectHer Presentation</h2>

                    <p>
                        With our first in class attendance on Wednesday
                        afternoon we had the chance to listen to an amazing
                        speaker from the ConnectHer Hub , Anna Lary which
                        emphasised and explained to us better what the
                        ConnectHer Hub really is , her experience being a woman
                        in trade , opportunities that we as designers and
                        developers may have to support women in trades as well
                        as challenges that come with being a woman in trade.
                    </p>
                    <p>
                        Amazing presentation and we really appreciated the time
                        and effort put into it !{" "}
                    </p>
                </section>

                <section className={styles.content}>
                    <h2>Whats happening next week:</h2>
                    <ul>
                        <li>Competitive analysis</li>
                        <li>Git Organization Created</li>
                    </ul>
                    <p>
                        Thanks for joining us for another week ! See you next
                        week !{" "}
                    </p>
                </section>
            </article>
        </>
    );
}
