import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";
import Footer from "../ui/footer/footer.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";

export default function Week11() {
    return (
        <>
            <Header />
            <article className={styles.post}>
                <figure className={styles.hero}>
                    <img
                        src='/week11.png'
                        alt='Week 11 Update'
                    />
                </figure>

                <header className={styles.post_header}>
                    <span className={styles.week}>Week 11</span>
                    <h1 className={styles.title}>
                        Video Reel Feedback and Iteration
                    </h1>
                    <p className={styles.subtitle}>November 16th,2025</p>
                </header>

                <section className={styles.content}>
                    <h2>Promotional Video Presentation</h2>
                    <p>
                        After an initial ideation, the team came together to
                        discuss each idea. A combination of the different ideas
                        was created that reflected our main message for forge
                        and furthermore appealed to our audience.
                    </p>
                    <p>
                        A presentation was then drafted and presented to the
                        Digital design and Development set for feedback. This
                        allowed the team to gain some valuable insights from
                        people on the other side of forge. We asked questions
                        such as , is the messaging clear? Is it production scope
                        achievable with the resources we have available? What
                        changes can we do to make this promotional video more
                        appealing and resonate more with our consumers?
                    </p>
                    <p>
                        After this presentation we were able to finalize our
                        promotional video storyboard and proceed with filming
                        based on the predefined locations.
                    </p>
                </section>

                <section className={styles.content}>
                    <h2>Full Stack Development of AI Simulation </h2>
                    <p>
                        With the UI/UX designers focusing on the Promotional
                        video and other aspects of the design such as
                        prototyping. The developers were on track to further
                        provide ai integration with visual implementation of
                        hi-fi prototype.
                    </p>
                </section>
                <section className={styles.content}>
                    <h2>Whats happening next week:</h2>
                    <ul>
                        <li>Promotional Video Editing</li>
                        <li>Printed Materials creation and Iteration</li>
                        <li>Web Supplement Ideation</li>
                        <li>Final Presentation Slides Drafting</li>
                        <li>Development - Career pathways and Ai Simulation</li>
                    </ul>
                    <p>
                        Another week! Another update! That's all for today
                        Forgers! 😊
                    </p>
                </section>
            </article>
            <LatestPosts currentPostId='week11' />
            <Footer />
        </>
    );
}
