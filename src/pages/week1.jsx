import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";
import TeamGrid from "../ui/TeamGrid/TeamGrid.jsx";

export default function Week1() {
  return (
    <>
      <Header />
      <article className={styles.post}>
        <figure className={styles.hero}>
          <img src="/wk1blog.jpg" alt="Project Idea Presentation" />
        </figure>

        <header className={styles.post_header}>
          <span className={styles.week}>Week 1</span>
          <h1 className={styles.title}>Project Idea Presentation</h1>
          <p className={styles.subtitle}>September 14th, 2025</p>
        </header>

        <section className={styles.content}>
          <h3>The Beginning</h3>
          <p>ConnectHER Hub is an organization formed in British Columbia, Canada. They host events and community gatherings that bring people together to share experiences, network, and learn from one another. In addition to fostering connections, they advocate for the representation of women in skilled trades and provide support for other underrepresented groups, helping to create a more inclusive and equitable industry. They've partnered with BCIT this year to work together in helping minorities in the skilled trades industry in BC.  </p>
         <h3>The Project Pitch</h3>
          <p>
            This Fall semester on the 3rd of September, a pitch presentation took place
            whereby the Forge team got to learn about all the amazing app ideas created by
            the Digital Design and Development students and the Fullstack Web Development
            students. We got the chance to pitch our app to some amazing well known
            industry professionals.
            <br />
            <br />
            A voting process took place whereby Forge was selected as one of the final
            project ideas to be broken down and developed throughout the Fall 2025 semester.
          </p>

          <h3>Meet the Team Behind Forge</h3>
          <p>
            Initially, the pitch team consisted of 4 members. By the end of the presentations, Forge had 8 members total — 5 Digital Design and Development students and 3 Fullstack students. Here are all the members!
          </p>
        <TeamGrid />
        <p>It's a pleasure to meet you. Stay tuned for more updates!</p>
        </section>
      </article>
    </>
  );
}
