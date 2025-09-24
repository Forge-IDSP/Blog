import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import "./aboutUs.css";

function AboutUs() {
    return (
        <div className='page'>
            <Header />
            <img
                src='/'
                alt='about us header image'></img>

            <h1 className='title'>About Us</h1>
            <p className='subtitle'>Weekly updates about our process</p>

            <div className='sub_section'>
                <h2 className='section_header'> What is Forge?</h2>
                <p className='section_description'>
                    Description of what forge is
                </p>
            </div>
            <div className='sub_section'>
                <h2 className='section_header'>Who is Forge for?</h2>
                <p className='section_description'>
                    Description of what forge is
                </p>
            </div>
            <div>
                <h2 className='section_header'>Forge's core values</h2>
            </div>
            <div className='sub_section'>
                <h2 className='section_header'>Meet the Team</h2>
                <p>Description of what forge is</p>
                <div className='team_section'>
                    <div className='team_member'>
                        <img
                            src='/Camera.svg'
                            alt='/'
                            className='team_member_image'></img>
                        <h3>Bruna Guarizo</h3>
                        <p>Role</p>
                    </div>
                    <div className='team_member'>
                        <img
                            src='/Camera.svg'
                            alt='/'
                            className='team_member_image'></img>
                        <h3>Bruna Guarizo</h3>
                        <p>Role</p>
                    </div>
                    <div className='team_member'>
                        <img
                            src='/Camera.svg'
                            alt='/'
                            className='team_member_image'></img>
                        <h3>Bruna Guarizo</h3>
                        <p>Role</p>
                    </div>
                    <div className='team_member'>
                        <img
                            src='/Camera.svg'
                            alt='/'
                            className='team_member_image'></img>
                        <h3>Bruna Guarizo</h3>
                        <p>Role</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;
