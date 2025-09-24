import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import "./aboutUs.css";

function ContactUs() {
    return (
        <div className='page'>
            <Header />
            <h1 className='title'>Get in touch</h1>
            <p className='subtitle'>
                Your experience shapes the future of Forge. Share your thoughts,
                report issues, or suggest new features — we’re always listening.
            </p>
            <form>
                <label>
                    Enter your name:
                    <input type='text' />
                </label>
                <label>
                    Enter your name:
                    <input type='text' />
                </label>
                <label>
                    Enter your name:
                    <input type='text' />
                </label>
                <label>
                    Enter your name:
                    <input type='text' />
                </label>
            </form>

            <Footer />
        </div>
    );
}

export default ContactUs;
