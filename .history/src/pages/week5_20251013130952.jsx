import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";

export default function Week5() {
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
                    <span className={styles.week}>Week 1</span>
                    <h1 className={styles.title}>Visualization and Research</h1>
                    <p className={styles.subtitle}>
                        User Research , Development Framework and Wireframing
                    </p>
                </header>

                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        New Idea Generated - Forge Renewed
                    </h2>
                    <p>
                        Forge has been reborn! After a weekend of research, the
                        team got the chance to meet up and discuss the ideas ,
                        break them down and analyse similarities differences and
                        finally vote on a new project idea! So this is what we
                        had at the end of our meeting
                    </p>
                    <img
                        src=''
                        alt='Screenshot of new flow for forge'
                    />
                    <p>
                        With this new idea we were able to pitch it again to our
                        advisor for feedback and finally based on that we were
                        able to move forward with our new idea !
                    </p>
                    <img
                        src=''
                        alt='Screenshot of new value proposition'
                    />
                </section>
                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        Team meeting Updates
                    </h2>
                    <p>
                        With the idea being finalized as a team we overviewed
                        our tasks for the next week , made sure we are on the
                        same page about Forge and the problem its solving and
                        finally decided on continuing by developing an app
                        rather than a website considering Forge is now for high
                        school students and recent grads.
                    </p>
                </section>

                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        Full stack development has now started to develop a new
                        framework based on our new idea. With Forge being an app
                        , these is the tech stack:
                    </h2>
                    <p>
                        Full stack development has now started to develop a new
                        framework based on our new idea. With Forge being an app
                        , these is the tech stack:
                    </p>
                    <div>
                        <h2>frontend</h2>
                        <ul type='circle'>
                            <li>
                                <span>React (with TypeScript) </span> – UI
                                framework for building fast, modular, and
                                strongly typed components.
                            </li>
                            <li>
                                <span>Vite</span> – Lightning-fast bundler and
                                dev server for modern frontend development.
                            </li>
                            <li>
                                <span>Zod</span> – Schema validation for forms,
                                API responses, and type inference.
                            </li>
                            <li>
                                <span>Tailwind</span> – validation for forms,
                                API responses, and type inference. (CSS)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Backend</h2>
                        <ul type='circle'>
                            <li>
                                <span>Bun</span> – Modern JavaScript runtime
                                (like Node.js but faster) to run the backend.
                            </li>
                            <li>
                                <span>Hono</span> – Web framework we gonna build
                                and run our server
                            </li>
                            <li>
                                <span>Zod</span> – Used on the server as well
                                for input validation and type safety.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>External Libraries</h2>
                        <ul type='circle'>
                            <li>
                                <span>Clerk</span> – Potentially for
                                authentication (Create login)
                            </li>
                            <li>
                                <span>Prisma</span> – database orm
                            </li>
                            <li>
                                <span>Mongo DB or Neon </span> – database
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        User Research Survey Created and Sent out
                    </h2>
                    <p>
                        However it's all about the users , so we decided to
                        gather feedback from our users to better understand what
                        works and doesn't work currently based on their
                        experience.
                    </p>
                    <div>
                        Check out our survey here: <a href='/'></a>
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
