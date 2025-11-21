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
          <img src="/week6.png" alt="Week 6 Update" />
        </figure>

        <header className={styles.post_header}>
          <span className={styles.week}>Week 6</span>
          <h1 className={styles.title}>Initial Prototype</h1>
          <p className={styles.subtitle}>October 19th, 2025</p>
        </header>

        <section className={styles.content}>
          <p>
            This week, we developed the first full iteration of our low-fidelity
            prototype, which allowed us to translate early conceptual ideas into
            something more tangible and testable. Our goal at this stage was to
            focus on clarity, user flow, and information structure rather than
            visuals, so the prototype emphasizes how users will move through the
            experience and what kinds of support they can access. The core
            features we chose to highlight—career information, mentor
            opportunities, and an AI chatbot—were selected based on initial user
            needs and the overarching vision of helping learners explore skilled
            trades in a way that feels approachable and empowering. Although
            this version is intentionally simple, it gives us a strong
            foundation to validate early assumptions and gather feedback before
            moving into more refined design work.
          </p>
        </section>

        <section className={styles.content}>
          <h2>Career Info</h2>
          <p>
            The Career Info section of the prototype is designed to serve as a
            comprehensive and easy-to-navigate starting point for users who are
            curious about skilled trades but may not know where to begin. We
            structured it to provide high-level overviews of different
            industries, what day-to-day work looks like, what training or
            certifications are required, and what long-term opportunities users
            might pursue. Our intention is to reduce the intimidation that often
            comes with exploring unfamiliar career paths by breaking down
            information into digestible pieces. As we refine this section, we
            plan to incorporate more interactive elements, such as visual
            summaries, comparison tools, and real stories from trade
            professionals to make the content feel more relatable and
            actionable.
          </p>
        </section>

        <section className={styles.content}>
          <h2>Meeting with a Mentor</h2>
          <p>
            The mentor component introduces users to the idea of connecting with
            experienced professionals who can offer personalized advice,
            guidance, and encouragement. In this early prototype, the focus is
            on outlining a clear, friendly process for requesting a meeting and
            understanding what a mentorship session might involve. Many
            prospective learners don’t know how to take the first step toward
            reaching out to someone in the industry, so the flow emphasizes
            simplicity and reassurance. Going forward, this feature has the
            potential to include mentor profiles, availability scheduling, and
            even messaging tools that help learners build confidence and feel
            supported throughout their journey.
          </p>
        </section>

        <section className={styles.content}>
          <h2>AI Chatbot</h2>
          <p>
            The AI Chatbot is designed to act as a friendly and accessible
            touchpoint for users who need quick answers or clarifications as
            they explore the platform. In the prototype, we focused on
            simulating how the chatbot would respond to common questions related
            to career requirements, training options, and navigating the
            platform’s features. The goal is to create an experience that feels
            conversational and supportive—even for users who may feel hesitant
            about entering a new field. As we continue iterating, we see the
            chatbot becoming an integral tool for reducing friction, easing
            uncertainty, and ensuring users never feel stuck when searching for
            information or making career-related decisions.
          </p>
        </section>
      </article>
      <LatestPosts currentPostId="week6" />
      <Footer />
    </>
  );
}
