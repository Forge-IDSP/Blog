import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";
import Footer from "../ui/footer/footer.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";

export default function Week8() {
  return (
    <>
      <Header />
      <article className={styles.post}>
        <figure className={styles.hero}>
          <img src="/week8.png" alt="Week 8 Update" />
        </figure>

        <header className={styles.post_header}>
          <span className={styles.week}>Week 8</span>
          <h1 className={styles.title}>Gamify...!</h1>
          <p className={styles.subtitle}>November 2nd, 2025</p>
        </header>
        <section className={styles.content}>
          <h2>Identifying the Missing Piece</h2>
          <p>
            After several conversations with our instructor and advisor, we
            realized that our app, while functional, was still missing a key
            element—something that would genuinely capture the attention of our
            users and keep them engaged throughout their journey. The core
            information was there, but it lacked a sense of excitement and
            personal investment. Given that our target audience consists largely
            of high school students and young adults, we knew we needed to
            rethink how we were presenting the career exploration experience.
            This demographic is already surrounded by interactive media,
            narratives, and playful digital experiences, so simply offering
            static information wasn’t enough to spark curiosity or sustained
            interest.
          </p>

          <h2>Introducing Gamified Exploration</h2>
          <p>
            That insight led us to reimagine the career exploration component as
            a gamified experience rather than a straightforward informational
            tool. By introducing interactive moments, rewards, and
            progression-based elements, we aim to create a sense of discovery
            that feels more like an adventure than an assignment. Gamification
            also allows us to break down complex career concepts into manageable
            and enjoyable steps, making the process feel more inviting for users
            who may be uncertain about their future pathways.
          </p>

          <h2>Shifting from a Chatbot to Scenario-Based Guidance</h2>
          <p>
            In addition to reworking the exploration feature, we decided to
            shift away from a traditional AI chatbot interface. While a chatbot
            is helpful, it can sometimes feel passive or transactional,
            especially to younger users. Instead, we’re introducing
            scenario-based interactions paired with an overarching narrative
            that unfolds as the user progresses. This approach allows the
            “assistant” to feel more like a guide within a story rather than a
            tool waiting for input. By placing users in relatable situations and
            letting them make choices that influence their path, we hope to
            create a more immersive and meaningful experience—one that not only
            informs but also motivates and inspires.
          </p>
        </section>
      </article>
      <LatestPosts currentPostId="week8" />
      <Footer />
    </>
  );
}
