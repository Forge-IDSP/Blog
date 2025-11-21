import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";
import Footer from "../ui/footer/footer.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";

export default function Week7() {
  return (
    <>
      <Header />
      <article className={styles.post}>
        <figure className={styles.hero}>
          <img src="/week7.png" alt="Week 7 Update" />
        </figure>

        <header className={styles.post_header}>
          <span className={styles.week}>Week 7</span>
          <h1 className={styles.title}>Mid-fi Prototype</h1>
          <p className={styles.subtitle}>Octotber 26th, 2025</p>
        </header>

        <section className={styles.content}>
          <p>
            After gathering feedback on our initial low-fidelity prototype, we
            felt confident taking the next step toward a more expressive and
            engaging version of the design. The early testing helped us identify
            which elements resonated with users and which areas needed more
            clarity or depth. With those insights in mind, we decided it was the
            right time to introduce color, visual structure, and early
            illustrations. Our goal at this stage wasn’t just to “make it look
            nicer,” but to start shaping a visual language that supports the
            user experience—guiding attention, reinforcing hierarchy, and
            helping the interface feel more welcoming and intuitive. Adding
            these visual elements allowed us to better communicate tone,
            personality, and emotional intent, bringing the prototype one step
            closer to how the final product might feel.
          </p>
        </section>

        <section className={styles.content}>
          <h2>Visual Identity</h2>
          <p>
            For this iteration, we established an orange-focused visual identity
            to help create an atmosphere that feels warm, encouraging, and full
            of momentum. Orange is a naturally inviting color—bright enough to
            feel energetic, yet soft enough to maintain approachability—which
            aligns well with our goal of making the platform feel friendly and
            motivating for new learners. We want users to feel a sense of
            optimism the moment they begin exploring, and the color palette
            plays a key role in setting that emotional tone.
          </p>
          <p>
            Beyond aesthetics, the choice of orange and yellow also carries a
            subtle symbolic connection to the world of skilled trades.
            High-visibility vests and safety gear commonly feature these colors,
            so incorporating them into our design adds a small but meaningful
            nod to the industry. While not overly literal, this visual hint
            helps reinforce the theme and gives users a sense of familiarity,
            especially those who may already have some exposure to trade
            environments. Our hope is that this blend of warmth, symbolism, and
            energy creates a visual identity that feels both purposeful and
            memorable as the project continues to evolve.
          </p>
        </section>

        <section className={styles.content}>
          <h2>Changes</h2>
          <p>
            One of the biggest shifts in this iteration was refining our focus
            on the career-exploration experience. Based on the feedback we
            received, many users expressed interest in understanding the breadth
            of skilled trades available, but they often didn’t know where to
            start or how different paths connected to one another. To address
            this, we began designing an interactive map that allows users to
            visually explore various trade pathways at their own pace. The map
            serves as both a discovery tool and a learning experience, giving
            users a sense of place, structure, and progression as they move
            through different career options. This direction not only supports
            exploration in a more intuitive way but also makes the process feel
            more engaging and less overwhelming. As we continue iterating, we
            aim to expand the map with additional layers of detail, visual cues,
            and interactive moments that encourage curiosity and help users
            uncover careers they may not have considered before.
          </p>
        </section>
      </article>
      <LatestPosts currentPostId="week7" />
      <Footer />
    </>
  );
}
