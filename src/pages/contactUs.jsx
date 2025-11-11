import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import styles from "./contactUS.module.css";

function ContactUs() {
    return (
        <div className='page'>
            <Header />
            <h1 className='title'>Get in touch</h1>
            <p className='subtitle'>
                Your experience shapes the future of Forge.
                <br /> Share your thoughts, report issues, or suggest new
                features — we’re always listening.
            </p>
            <form className='contact_form'>
                <label className={styles.contact_form}>
                    Name:
                    <input
                        type='text'
                        className={styles.contact_label}
                    />
                </label>

                <label className={styles.contact_label}>
                    Email:
                    <input
                        type='text'
                        className={styles.text_input}
                    />
                </label>
                <label className={styles.contact_label}>
                    Subject:
                    <input
                        type='text'
                        className={styles.text_input}
                    />
                </label>
                <label className={styles.contact_label}>
                    Enter your Message:
                    <textarea
                        type='text'
                        className={styles.message_input}
                    />
                </label>
            </form>

            <Footer />
        </div>
    );
}

export default ContactUs;
