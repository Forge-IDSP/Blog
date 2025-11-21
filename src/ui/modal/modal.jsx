import React, { useEffect } from "react";
import styles from "./modal.module.css";
import Button from "../button/button";

const Modal = ({ isOpen, onClose, title, message }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                <h2 className={styles.modalTitle}>{title}</h2>
                <p className={styles.modalMessage}>{message}</p>
                <div className={styles.modalActions}>
                    <a
                        href='https://www.bcit.ca/event/d3-fswd-connecther-student-design-technology-innovation-showcase/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.registerButton}>
                        <Button variant='primary'>
                            Sign up to launch
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Modal;

