import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import "./aboutUs.css";

function ContactUs() {
    return (
        <div className='page'>
            <Header />
            <h1 className='title'>
                See behind the scenes
                <br /> of the Forge design
            </h1>
            <p className='subtitle'>Weekly updates about our process</p>

            <Footer />
        </div>
    );
}

export default ContactUs;
