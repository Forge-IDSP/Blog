import styles from "./blogpost.module.css";
import "../App.css";
import Header from "../ui/header/header.jsx";

export default function Week3() {
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
                    <span className={styles.week}>Week 3</span>
                    <h1 className={styles.title}>
                        Competitive Analysis and Development Framework
                    </h1>
                    <p className={styles.subtitle}>
                        Forge Pitch Presentation and Team Formation
                    </p>
                </header>

                <section className={styles.content}>
                    <h2 className={styles.section_header}>
                        Competitive analysis
                    </h2>
                    <p>
                        With our team meeting kicking off last week ! We got
                        right to work on our first task , a Competitive
                        Analysis. With a general Idea of Forge and its features
                        we decided to see what other direct and indirect
                        competitors are doing .
                    </p>
                    <div>
                        <table>
                            <tr>
                                <th>Competitor name</th>
                                <th>App/Website Purpose</th>
                            </tr>
                            <tr>
                                <th>Competitor name</th>
                            </tr>
                            <tr>
                                <td>ForgeApp</td>
                            </tr>
                        </table>
                    </div>
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
