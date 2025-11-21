import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";
import Footer from "../ui/footer/footer.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";

export default function Week9() {
  return (
    <>
      <Header />
      <article className={styles.post}>
        <figure className={styles.hero}>
          <img src="/week9.png" alt="Week 9 Update" />
        </figure>

        <header className={styles.post_header}>
          <span className={styles.week}>Week 9</span>
          <h1 className={styles.title}>Hi-fi Prototype</h1>
          <p className={styles.subtitle}>November 9th, 2025</p>
        </header>

        <section className={styles.content}>
          <h2>Changes</h2>
          <p>
            As we moved from our mid-fidelity prototype into a hi-fidelity
            version, our priority was to preserve the core concept while
            elevating the overall execution. The mid-fi helped us validate the
            structure and general flow, but this stage gave us the opportunity
            to refine the visual language, improve clarity, and ensure every
            component felt intentional. We focused on polishing interactions,
            tightening layout systems, and keeping all our assets stylistically
            consistent to form a more cohesive experience. Transitioning to
            hi-fi meant treating the design more like a near-final product—one
            that communicates personality, usability, and function all at once.
          </p>
        </section>

        <section className={styles.content}>
          <h2>User Feedback</h2>
          <p>
            To better understand how users interacted with this iteration, we
            conducted a round of usability testing. The overall response to the
            concept was positive; users found the idea engaging and appreciated
            the direction we were heading in. However, several participants
            mentioned that navigation felt confusing at times, with certain
            buttons appearing repetitive or unclear. Because Figma prototypes
            inherently have limitations, we weren’t able to demonstrate the full
            range of interactions or transitions we intended, which contributed
            to some of the perceived friction.
          </p>
          <p>
            On the developer's end of things, the app is running but not
            indicative of the full product. Though the structure and flow is
            working as intended.
          </p>
        </section>

        <section className={styles.content}>
          <h2>Challenges & Learnings</h2>
          <p>
            Throughout this iteration, our team encountered several challenges
            that pushed us to rethink how we approached both design and
            functionality. One of the biggest hurdles was balancing the ambition
            of our concept with the practical constraints of a prototype.
            Certain features—especially those involving dynamic interaction or
            branching user pathways—were difficult to fully communicate within
            the limits of Figma. This forced us to simplify certain flows while
            still trying to preserve the essence of the experience we
            envisioned.
          </p>
          <p>
            Another key challenge involved finding a clear, intuitive structure
            for an app that contains multiple modes of exploration. Even small
            navigation inconsistencies quickly led to confusion during testing,
            which taught us how important it is to label actions clearly,
            maintain predictable patterns, and reduce unnecessary steps. Despite
            these obstacles, the process was highly valuable: we gained a
            stronger understanding of how users think, what they look for first,
            and where they hesitate. These insights have directly shaped our
            next steps and reinforced the importance of iterative,
            feedback-driven design.
          </p>
        </section>

        <section className={styles.content}>
          <h2>Accessibility Considerations</h2>
          <p>
            As we refined the hi-fi prototype, accessibility became an
            increasingly important focus. Since our audience includes students
            and young adults with a wide range of learning styles and levels of
            digital familiarity, we aimed to design an experience that feels
            usable and inclusive for everyone. This meant paying attention to
            color contrast, ensuring text was readable across different screen
            sizes, and maintaining visual clarity even within more playful or
            gamified elements of the design.
          </p>
          <p>
            Beyond visuals, we also looked at interaction patterns—making sure
            buttons were large enough, flows were linear and predictable, and
            key actions were placed in locations users naturally expect. We want
            the app to feel approachable, regardless of a user’s experience with
            similar tools. As we continue developing the project, accessibility
            will remain a guiding principle, helping us create an experience
            that supports all learners, not just the most digitally confident
            ones.
          </p>
        </section>
      </article>
      <LatestPosts currentPostId="week9" />
      <Footer />
    </>
  );
}
