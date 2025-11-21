import React from "react";
import styles from "./featuresSection.module.css";

const features = [
    {
        icon: (
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M18 20.5L14 16.5L18 12.5L19.4 13.9L17.825 15.5H22V17.5H17.825L19.4 19.1L18 20.5ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V15C2 14.45 2.19583 13.9792 2.5875 13.5875C2.97917 13.1958 3.45 13 4 13H10C10.55 13 11.0208 13.1958 11.4125 13.5875C11.8042 13.9792 12 14.45 12 15V18C12 18.55 11.8042 19.0208 11.4125 19.4125C11.0208 19.8042 10.55 20 10 20H4ZM4 18H10V15H4V18ZM6 11.5L4.6 10.1L6.175 8.5H2V6.5H6.175L4.6 4.9L6 3.5L10 7.5L6 11.5ZM14 11C13.45 11 12.9792 10.8042 12.5875 10.4125C12.1958 10.0208 12 9.55 12 9V6C12 5.45 12.1958 4.97917 12.5875 4.5875C12.9792 4.19583 13.45 4 14 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V9C22 9.55 21.8042 10.0208 21.4125 10.4125C21.0208 10.8042 20.55 11 20 11H14ZM14 9H20V6H14V9Z'
                    fill='currentColor'
                />
            </svg>
        ),
        title: "AI-Powered Simulations",
        description:
            "Explore careers in a fun, gamified way with Forge's AI simulation. Try different roles, make choices, and see how each decision shapes your journey—all in an interactive, game-like experience.",
    },
    {
        icon: (
            <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <mask
                    id='mask0_1950_6999'
                    style={{ maskType: "alpha" }}
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='25'
                    height='25'>
                    <rect
                        width='25'
                        height='25'
                        fill='#D9D9D9'
                    />
                </mask>
                <g mask='url(#mask0_1950_6999)'>
                    <path
                        d='M18.75 21.8747C18.8889 21.8747 19.0104 21.8226 19.1146 21.7184C19.2188 21.6143 19.2708 21.4927 19.2708 21.3538C19.2708 21.215 19.2188 21.0934 19.1146 20.9893C19.0104 20.8851 18.8889 20.833 18.75 20.833C18.6111 20.833 18.4896 20.8851 18.3854 20.9893C18.2813 21.0934 18.2292 21.215 18.2292 21.3538C18.2292 21.4927 18.2813 21.6143 18.3854 21.7184C18.4896 21.8226 18.6111 21.8747 18.75 21.8747ZM18.2292 19.7913H19.2708V15.6247H18.2292V19.7913ZM4.16668 21.8747C3.59376 21.8747 3.10331 21.6707 2.69532 21.2627C2.28734 20.8547 2.08334 20.3643 2.08334 19.7913V8.33301C2.08334 7.76009 2.28734 7.26964 2.69532 6.86165C3.10331 6.45367 3.59376 6.24967 4.16668 6.24967H8.33334V4.16634C8.33334 3.59342 8.53734 3.10297 8.94532 2.69499C9.35331 2.287 9.84376 2.08301 10.4167 2.08301H14.5833C15.1563 2.08301 15.6467 2.287 16.0547 2.69499C16.4627 3.10297 16.6667 3.59342 16.6667 4.16634V6.24967H20.8333C21.4063 6.24967 21.8967 6.45367 22.3047 6.86165C22.7127 7.26964 22.9167 7.76009 22.9167 8.33301V12.7861C22.6042 12.5604 22.2743 12.3651 21.9271 12.2002C21.5799 12.0353 21.2153 11.892 20.8333 11.7705V8.33301H4.16668V19.7913H11.5365C11.5886 20.1559 11.6667 20.5118 11.7708 20.859C11.875 21.2063 12.0052 21.5448 12.1615 21.8747H4.16668ZM10.4167 6.24967H14.5833V4.16634H10.4167V6.24967ZM18.75 23.958C17.309 23.958 16.0807 23.4502 15.0651 22.4346C14.0495 21.4189 13.5417 20.1906 13.5417 18.7497C13.5417 17.3087 14.0495 16.0804 15.0651 15.0648C16.0807 14.0492 17.309 13.5413 18.75 13.5413C20.191 13.5413 21.4193 14.0492 22.4349 15.0648C23.4505 16.0804 23.9583 17.3087 23.9583 18.7497C23.9583 20.1906 23.4505 21.4189 22.4349 22.4346C21.4193 23.4502 20.191 23.958 18.75 23.958Z'
                        fill='currentColor'
                    />
                </g>
            </svg>
        ),
        title: "Careers in Demand",
        description:
            "Discover today's most in-demand career paths with Forge. Stay ahead of the market by exploring roles that offer strong growth, stability, and long-term opportunities.",
    },
    {
        icon: (
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <mask
                    id='mask0_1950_7013'
                    style={{ maskType: "alpha" }}
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='24'
                    height='24'>
                    <rect
                        width='24'
                        height='24'
                        fill='#D9D9D9'
                    />
                </mask>
                <g mask='url(#mask0_1950_7013)'>
                    <path
                        d='M18.85 21.975C18.7167 21.975 18.5917 21.9542 18.475 21.9125C18.3583 21.8708 18.25 21.8 18.15 21.7L13.05 16.6C12.95 16.5 12.8792 16.3917 12.8375 16.275C12.7958 16.1583 12.775 16.0333 12.775 15.9C12.775 15.7667 12.7958 15.6417 12.8375 15.525C12.8792 15.4083 12.95 15.3 13.05 15.2L15.175 13.075C15.275 12.975 15.3833 12.9042 15.5 12.8625C15.6167 12.8208 15.7417 12.8 15.875 12.8C16.0083 12.8 16.1333 12.8208 16.25 12.8625C16.3667 12.9042 16.475 12.975 16.575 13.075L21.675 18.175C21.775 18.275 21.8458 18.3833 21.8875 18.5C21.9292 18.6167 21.95 18.7417 21.95 18.875C21.95 19.0083 21.9292 19.1333 21.8875 19.25C21.8458 19.3667 21.775 19.475 21.675 19.575L19.55 21.7C19.45 21.8 19.3417 21.8708 19.225 21.9125C19.1083 21.9542 18.9833 21.975 18.85 21.975ZM18.85 19.6L19.575 18.875L15.9 15.2L15.175 15.925L18.85 19.6ZM5.125 22C4.99167 22 4.8625 21.975 4.7375 21.925C4.6125 21.875 4.5 21.8 4.4 21.7L2.3 19.6C2.2 19.5 2.125 19.3875 2.075 19.2625C2.025 19.1375 2 19.0083 2 18.875C2 18.7417 2.025 18.6167 2.075 18.5C2.125 18.3833 2.2 18.275 2.3 18.175L7.6 12.875H9.725L10.575 12.025L6.45 7.9H5.025L2 4.875L4.825 2.05L7.85 5.075V6.5L11.975 10.625L14.875 7.725L13.8 6.65L15.2 5.25H12.375L11.675 4.55L15.225 1L15.925 1.7V4.525L17.325 3.125L20.875 6.675C21.1583 6.95833 21.375 7.27917 21.525 7.6375C21.675 7.99583 21.75 8.375 21.75 8.775C21.75 9.175 21.675 9.55833 21.525 9.925C21.375 10.2917 21.1583 10.6167 20.875 10.9L18.75 8.775L17.35 10.175L16.3 9.125L11.125 14.3V16.4L5.825 21.7C5.725 21.8 5.61667 21.875 5.5 21.925C5.38333 21.975 5.25833 22 5.125 22ZM5.125 19.6L9.375 15.35V14.625H8.65L4.4 18.875L5.125 19.6ZM5.125 19.6L4.4 18.875L4.775 19.225L5.125 19.6Z'
                        fill='currentColor'
                    />
                </g>
            </svg>
        ),
        title: "Job Opportunities",
        description:
            "Access a curated list of job opportunities tailored to your interests and goals. Forge highlights real roles in the industry and connects you with what's currently hiring.",
    },
    {
        icon: (
            <svg
                width='29'
                height='29'
                viewBox='0 0 29 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <mask
                    id='mask0_1950_6995'
                    style={{ maskType: "alpha" }}
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='29'
                    height='29'>
                    <rect
                        width='29'
                        height='29'
                        fill='#D9D9D9'
                    />
                </mask>
                <g mask='url(#mask0_1950_6995)'>
                    <path
                        d='M5 25V5H7.5V25H5ZM13.75 25V20H16.25V25H13.75ZM22.5 25V5H25V25H22.5ZM13.75 17.5V12.5H16.25V17.5H13.75ZM13.75 10V5H16.25V10H13.75Z'
                        fill='currentColor'
                    />
                </g>
            </svg>
        ),
        title: "Your Pathways",
        description:
            "Forge helps you visualize your personal pathway to success. Track your progress, understand required skills, and see step-by-step how to move from where you are to where you want to be.",
    },
    {
        icon: (
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <mask
                    id='mask0_1950_7029'
                    style={{ maskType: "alpha" }}
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='24'
                    height='24'>
                    <rect
                        width='24'
                        height='24'
                        fill='#D9D9D9'
                    />
                </mask>
                <g mask='url(#mask0_1950_7029)'>
                    <path
                        d='M12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2H12.5C12.6667 2 12.8333 2.01667 13 2.05V4.075C12.8333 4.04167 12.6708 4.02083 12.5125 4.0125C12.3542 4.00417 12.1833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2V10H20V10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22ZM12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM18 8H20V5H23V3H20V0H18V3H15V5H18V8Z'
                        fill='currentColor'
                    />
                </g>
            </svg>
        ),
        title: "Explore New Careers",
        description:
            "Navigate our interactive career map to discover new fields and industries. Zoom into different pathways, compare options, and uncover opportunities you may have never considered.",
    },
    {
        icon: (
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M6 23V14.775L2.75 9.5L7.375 2H16.625L21.25 9.5L18 14.775V23L12 21L6 23ZM8 20.225L12 18.9L16 20.225V17H8V20.225ZM8.5 4L5.1 9.5L8.5 15H15.5L18.9 9.5L15.5 4H8.5ZM10.95 13.575L7.4 10.05L8.825 8.625L10.95 10.75L15.175 6.5L16.6 7.9L10.95 13.575Z'
                    fill='currentColor'
                />
            </svg>
        ),
        title: "Earn Badges",
        description:
            "Grow your skills and celebrate your achievements by earning badges. Each badge marks an important milestone in your career journey, motivating you to keep moving forward.",
    },
];

const FeaturesSection = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.featuresContainer}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Powerful Features <br />
                        <span className={styles.titleAccent}>
                            for Career Discovery
                        </span>
                    </h2>
                    <p className={styles.description}>
                        Experience the future of career exploration <br />
                        with AI-driven simulations and gamified learning.
                    </p>
                </div>

                <div className={styles.cardsGrid}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    {feature.icon}
                                </div>
                                <h3 className={styles.cardTitle}>
                                    {feature.title}
                                </h3>
                            </div>
                            <p className={styles.cardDescription}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
