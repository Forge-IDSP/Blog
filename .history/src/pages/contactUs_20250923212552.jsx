import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import "./contactUS.css";

function ContactUs() {
    return (
        <div className='page'>
            <Header />
            <h1 className='title'>Get in touch</h1>
            <p className='subtitle'>
                Your experience shapes the future of Forge. Share your thoughts,
                report issues, or suggest new features — we’re always listening.
            </p>
            <form className='contact_form'>
                <label className='contact_label'>
                    Enter your name:
                    <input
                        type='text'
                        className='text_input'
                    />
                </label>

                <label className='contact_label'>
                    Email:
                    <input
                        type='text'
                        className='text_input'
                    />
                </label>
                <label className='contact_label'>
                    Subject:
                    <input
                        type='text'
                        className='text_input'
                    />
                </label>
                <label className='contact_label'>
                    Enter your Message:
                    <textarea
                        type='text'
                        className='message_input'
                    />
                </label>
            </form>

            <Footer />
        </div>
    );
}

export default ContactUs;
