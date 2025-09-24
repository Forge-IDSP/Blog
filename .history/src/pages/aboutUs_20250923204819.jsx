import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import "./aboutUs.css";

function AboutUs() {
    return (
        <div className='page'>
            <Header />
            <img
                src='/cover.png'
                alt='about us header image'></img>

            <h1 className='title'>About Us</h1>
            <p className='subtitle'>Weekly updates about our process</p>

            <div className='sub_section'>
                <h2 className='section_header'> What is Forge?</h2>
                <p className='section_description'>
                    Forge is a mobile app built to empower tradespeople — from
                    recent graduates to experienced workers facing job market
                    challenges — by helping them start and manage their own
                    businesses.
                </p>
            </div>
            <div className='sub_section'>
                <h2 className='section_header'>Who is Forge for?</h2>
                <p className='section_description'>
                    Forge is built for tradespeople of all backgrounds — from
                    recent graduates entering the workforce to experienced
                    workers who are looking for more stability, independence,
                    and opportunity.
                </p>
            </div>
            <div className='sub_section'>
                <h2 className='section_header'>Forge's core values</h2>
                <div className='excerpt_container'>
                    <div className='excerpt_section'>
                        <h3 className='section_header'>Empowerment</h3>
                        <p className='section_description'>
                            We believe tradespeople should have the tools and
                            guidance to take control of their own careers —
                            building businesses that reflect their skills and
                            ambitions.
                        </p>
                    </div>
                    <div className='excerpt_section'>
                        <h3 className='section_header'>Connection</h3>
                        <p className='section_description'>
                            Forge bridges the gap between tradespeople, small
                            businesses, and local communities by creating
                            opportunities for collaboration and growth.
                        </p>
                    </div>
                    <div className='excerpt_section'>
                        <h3 className='section_header'>
                            Independence & Safety
                        </h3>
                        <p className='section_description'>
                            Our platform provides a safer alternative to
                            traditional workplaces, helping tradespeople avoid
                            toxic environments while fostering independence and
                            long-term sustainability.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className='sub_section'>
                <h2 className='section_header'>Meet the Team</h2>
                <p className='section_description'>
                    Forge was created by a group of dedicated BCIT students.
                    They focused on not only deisgning something apealing , with
                    a good user experience but also fully functional.
                </p>
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
                    <div className='team_member'>
                        <img
                            src='/Camera.svg'
                            alt='/'
                            className='team_member_image'></img>
                        <h3>Bruna Guarizo</h3>
                        <p>Role</p>
                    </div>
                </div>
            </div> */}

            <Footer />
        </div>
    );
}

export default AboutUs;
