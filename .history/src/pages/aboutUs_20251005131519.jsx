import { useEffect } from "react";
import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import "./aboutUs.css";

function AboutUs() {
    useEffect(() => {
        const sections = document.querySelectorAll(".sub_section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("show");
                        }, i * 300); // staggered delay
                    }
                });
            },
            { threshold: 0.2 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);
    return (
        <div className='page'>
            <Header />
            <img
                src='/about-us'
                alt='about us header image'
                className='cover_image'></img>

            <h1 className='title'>About Us</h1>

            <div className='sub_section row_regular'>
                <div className='sub_section_excerpts'>
                    <h2 className='section_header left_text'>
                        What Forge Does?
                    </h2>
                    <p className='section_description'>
                        “Forge is a career pathway app that helps high school
                        students from financially struggling households find
                        stable, in-demand trades careers through clear career
                        overviews, daily work examples, required skills, and
                        income over time with the aim of making it easier for
                        students to see the real opportunities and long-term
                        benefits of trades. It aims to empower and support
                        students throughout their decision making process.”
                    </p>
                </div>
                <img
                    src='/Camera.svg'
                    alt='/'
                    className='section_image'></img>
            </div>
            <div className='sub_section row_reverse'>
                <div className='sub_section_excerpts'>
                    <h2 className='section_header right_text'>
                        Trades Career In demand
                    </h2>
                    <p className='section_description'>
                        Forge is built for tradespeople of all backgrounds —
                        from recent graduates entering the workforce to
                        experienced workers who are looking for more stability,
                        independence, and opportunity.
                    </p>
                </div>
                <img
                    src='/Camera.svg'
                    alt='/'
                    className='section_image'></img>
            </div>
            <div className='sub_section'>
                <h2 className='section_header'>Our Core Values</h2>
                <div className='excerpt_container'>
                    <div className='excerpt_section'>
                        <img
                            src='/Camera.svg'
                            alt='/'></img>
                        <h3 className='section_header'>Empowerment</h3>
                        <p className='section_description'>
                            We believe tradespeople should have the tools and
                            guidance to take control of their own careers —
                            building businesses that reflect their skills and
                            ambitions.
                        </p>
                    </div>
                    <div className='excerpt_section'>
                        <img
                            src='/Camera.svg'
                            alt='/'></img>
                        <h3 className='section_header'>Connection</h3>
                        <p className='section_description'>
                            Forge bridges the gap between tradespeople, small
                            businesses, and local communities by creating
                            opportunities for collaboration and growth.
                        </p>
                    </div>
                    <div className='excerpt_section'>
                        <img
                            src='/Camera.svg'
                            alt='/'></img>
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

            <Footer />
        </div>
    );
}

export default AboutUs;
