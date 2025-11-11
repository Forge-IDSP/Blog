import styles from "./contactUs.module.css";
import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";

export default function ContactUs() {
    return (
        <div className='page'>
            <Header />
            <div className={styles.container}>
                <h1 className='title'>Contact Us</h1>
                <p className='subtitle'>
                    Have questions or feedback? <br />
                    Reach out to us using the form below.
                </p>

                <form className={styles.contact_form}>
                    <label className={styles.contact_label}>
                        Name:
                        <input
                            type='text'
                            className={styles.text_input}
                            placeholder='Enter your name'
                            required
                        />
                    </label>

                    <label className={styles.contact_label}>
                        Email:
                        <input
                            type='email'
                            className={styles.text_input}
                            placeholder='Enter your email'
                            required
                        />
                    </label>

                    <label className={styles.contact_label}>
                        Message:
                        <textarea
                            className={styles.message_input}
                            placeholder='Type your message here...'
                            required
                        />
                    </label>

                    <button
                        type='submit'
                        className={styles.submit_button}>
                        Send Message
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
