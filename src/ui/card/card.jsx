import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({ title, image, text, link, week }) {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <Link
            to={link}
            className={styles.card}
            onClick={handleClick}>
            <img
                className={styles.card_image}
                src={image}
                alt={title}
            />
            <div className={styles.card_content}>
                <h2 className={styles.card_title}>{title}</h2>
                {week && (
                    <div className={styles.card_week_row}>
                        <p className={styles.card_week}>{week}</p>
                        <span className={styles.linkButtonText}>
                            Read More →
                        </span>
                    </div>
                )}
            </div>
        </Link>
    );
}
