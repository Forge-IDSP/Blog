import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";

function AboutUs() {
    return (
        <div className='page'>
            <Header />
            <h1 className='title'>About Us</h1>
            <p className='subtitle'>Weekly updates about our process</p>

            <div className='sub-section'></div>

            <Footer />
        </div>
    );
}

export default AboutUs;
