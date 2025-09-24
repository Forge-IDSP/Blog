import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";

function AboutUs() {
    return (
        <div className='page'>
            <Header />
            <img src='/'></img>
            <h1 className='title'>About Us</h1>
            <p className='subtitle'>Weekly updates about our process</p>

            <div className='sub_section'>
                <h2>What is Forge?</h2>
                <p>Description of what forge is</p>
            </div>
            <div className='sub_section'>
                <h2>Who is Forge for?</h2>
                <p>Description of what forge is</p>
            </div>
            <div className='sub_section'>
                <h2>Meet the Team</h2>
                <p>Description of what forge is</p>
                <div className='team_section'>
                    <div className='team_member'>
                        <img
                            src='/'
                            className='team_member_image'></img>
                    </div>
                    <div className='team_member'>
                        <img
                            src='/'
                            className='team_member_image'></img>
                    </div>
                    <div className='team_member'>
                        <img
                            src='/'
                            className='team_member_image'></img>
                    </div>
                    <div className='team_member'>
                        <img
                            src='/'
                            className='team_member_image'></img>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;
