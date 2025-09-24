import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";

function AboutUs() {
    return (
        <div className='page'>
            <Header />
            <h1 className='title'>About Us</h1>
            <p className='subtitle'>Weekly updates about our process</p>

            <div className='sub-section'>
                <h2>What is Forge?</h2>
                <p>Description of what forge is</p>
            </div>
            <div className='sub-section'>
                <h2>Who is Forge for?</h2>
                <p>Description of what forge is</p>
            </div>
            <div className='sub-section'>
                <h2>Forge Founders</h2>
                <p>Description of what forge is</p>
            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;
