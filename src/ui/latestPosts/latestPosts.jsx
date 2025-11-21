import React from "react";
import { Link } from "react-router-dom";
import styles from "./latestPosts.module.css";
import Card from "../card/card.jsx";
import cardcontent from "../../data/cardcontent.json";

const LatestPosts = ({ currentPostId = null }) => {
    // Ordena os posts do mais recente para o mais antigo (week5 -> week1)
    // e exclui o post atual
    const sortedPosts = [...cardcontent]
        .sort((a, b) => {
            const weekA = parseInt(a.id.replace("week", ""));
            const weekB = parseInt(b.id.replace("week", ""));
            return weekB - weekA; // Mais recente primeiro
        })
        .filter((post) => post.id !== currentPostId)
        .slice(0, 3); // Pega apenas os 3 mais recentes

    return (
        <section className={styles.latestPosts}>
            <div className={styles.latestPostsContainer}>
                <div className={styles.latestPostsHeader}>
                    <div className={styles.headerText}>
                        <h2 className={styles.title}>Latest from our blog</h2>
                        <p className={styles.subtitle}>
                            Weekly updates with our process while creating Forge
                        </p>
                    </div>
                    <Link 
                        to="/blog" 
                        className={styles.viewAllLink}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        View All Posts →
                    </Link>
                </div>

                <div className={styles.postsGrid}>
                    {sortedPosts.map((post) => (
                        <Card
                            key={post.id}
                            title={post.title}
                            image={post.image}
                            week={post.text}
                            link={post.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestPosts;

