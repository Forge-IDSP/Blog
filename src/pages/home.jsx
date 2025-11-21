import Header from "../ui/header/header.jsx";
import Hero from "../ui/hero/hero.jsx";
import AboutSection from "../ui/aboutSection/aboutSection.jsx";
import FeaturesSection from "../ui/featuresSection/featuresSection.jsx";
import HowItWorks from "../ui/howItWorks/howItWorks.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";
import Footer from "../ui/footer/footer.jsx";
import CTA from "../ui/cta/cta";

export default function Home() {
    return (
        <div className='page'>
            <Header />
            <Hero
                title='Explore Your Future'
                subtitle='in Skilled Trades'
                description='Forge uses AI to create gamified career simulations for BC high school students. Experience real-world trades scenarios before making your career decision.'
                buttons={[
                    { text: "Forge Your Future", variant: "primary" },
                    { text: "How it Works", variant: "secondary" },
                ]}
            />
            <div id='about'>
                <AboutSection />
            </div>
            <div id='features'>
                <FeaturesSection />
            </div>
            <div id='demo'>
                <HowItWorks />
            </div>
            <LatestPosts />
            <CTA
                title='Ready To Forge Your Future?'
                description='Join thousands of BC students discovering their perfect career in skilled trades through AI-powered simulations.'
                buttonText='Try Forge Now'
                buttonVariant='secondary'
            />
            <Footer />
        </div>
    );
}
