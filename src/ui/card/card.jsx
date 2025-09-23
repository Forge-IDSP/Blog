import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({ title, image, text, link }) {
    return (
        <Link
            to={link}
            className={styles.card}>
            <img
                className={styles.card_image}
                src={image}
                alt={title}
            />
            <h2 className={styles.card_title}>{title}</h2>
            <p className={styles.card_week}>{text}</p>
        </Link>
    );
}
