import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";

export default function Week4() {
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
                    <span className={styles.week}>Week 4</span>
                    <h1 className={styles.title}>Advising and Re-Ideation </h1>
                    <p className={styles.subtitle}>Advising and Re-Ideation</p>
                </header>

                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        Project Advisor Meeting
                    </h2>
                    <p>
                        We kicked off our week with an amazing email notifying
                        us that we have been assigned a project advisor. Our
                        project advisor is Derek Houg who not only has industry
                        experience in trades but also software development. We
                        got the chance to meet him via zoom , discuss our
                        project idea with him and get very useful feedback. This
                        is the time we remembered that projects like this are
                        not linear, its all about feedback , testing , iterating
                        and changing. So with our project idea not being very
                        viable considering the ability for us to help users by
                        guiding them in creating a business as well.
                    </p>
                </section>
                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        “Mission Idea Brainstorming”
                    </h2>
                    <p>
                        We were now on a mission to figure out how to shape
                        forge to become a viable product . So we took the rest
                        of the week to brainstorm ideas and do some research on
                        the challenges that individuals in trades may face.
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
