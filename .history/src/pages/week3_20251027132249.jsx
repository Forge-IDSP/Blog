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
                                <th>Year Founded</th>
                            </tr>
                            <tr>
                                <td>YMCA Toronto Witt</td>
                                <td>
                                    Help women in trades&technology look for
                                    jobs and training programs in Toronto.
                                </td>
                                <td>2023</td>
                            </tr>
                            <tr>
                                <td>LivePlan</td>
                                <td>
                                    Helps entrepreneurs and small business
                                    owners build business plans, forecast
                                    financials, test business ideas, track
                                    performance, and access benchmarks.
                                </td>
                                <td>2012</td>
                            </tr>
                            <tr>
                                <td>Futurepreneurs</td>
                                <td>
                                    Help young Canadian entrepreneurs to start,
                                    expand or buy a business through loans,
                                    mentorship and other resources.
                                </td>
                                <td>1993</td>
                            </tr>

                            <tr>
                                <td>Ownr</td>
                                <td>
                                    Ownr helps people start and manage their own
                                    business, by making legal work, registration
                                    and complicated tasks easier.
                                </td>
                                <td>2017</td>
                            </tr>

                            <tr>
                                <td>Upmetrics</td>
                                <td>
                                    To help people who have or want to start a
                                    business, have an initial plan or a starting
                                    point in a more efficient, fast and easy
                                    way.
                                </td>
                                <td>2017</td>
                            </tr>
                        </table>
                    </div>
                </section>
                <section className={styles.content}>
                    <h2>Git Organization</h2>

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
                        <li>Advisor Meeting</li>
                        <li>New Idea brainstorming</li>
                        <li>Team Meeting</li>
                    </ul>
                    <p>
                        Another week ! Another update ! That's all for today
                        Forgers !😊
                    </p>
                </section>
            </article>
        </>
    );
}
