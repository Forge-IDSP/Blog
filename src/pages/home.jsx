import Header from "../ui/header/header.jsx";
import Hero from "../ui/hero/hero.jsx";
import AboutSection from "../ui/aboutSection/aboutSection.jsx";
import FeaturesSection from "../ui/featuresSection/featuresSection.jsx";
import HowItWorks from "../ui/howItWorks/howItWorks.jsx";
import LatestPosts from "../ui/latestPosts/latestPosts.jsx";
import Footer from "../ui/footer/footer.jsx";
import CTA from "../ui/cta/cta";
import Modal from "../ui/modal/modal.jsx";
import { useLaunchModal } from "../hooks/useLaunchModal.js";
import { scrollToSection } from "../utils/scrollToSection.js";

export default function Home() {
    const { isModalOpen, openModal, closeModal } = useLaunchModal();

    return (
        <div className='page'>
            <Header onForgeClick={openModal} />
            <Hero
                title='Explore Your Future'
                subtitle='in Skilled Trades'
                description='Forge uses AI to create gamified career simulations for BC high school students. Experience real-world trades scenarios before making your career decision.'
                buttons={[
                    {
                        text: "Forge Your Future",
                        variant: "primary",
                        onClick: openModal,
                    },
                    {
                        text: "How it Works",
                        variant: "secondary",
                        onClick: () => scrollToSection("demo"),
                    },
                ]}
            />
            <div id='about'>
                <AboutSection onTryClick={openModal} />
            </div>
            <div id='features'>
                <FeaturesSection />
            </div>
            <div id='demo'>
                <HowItWorks onTryClick={openModal} />
            </div>
            <LatestPosts />
            <CTA
                title='Ready To Forge Your Future?'
                description='Join thousands of BC students discovering their perfect career in skilled trades through AI-powered simulations.'
                buttonText='Try Forge Now'
                buttonVariant='secondary'
                onButtonClick={openModal}
            />
            <Footer />
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title='Coming Soon!'
                message='Forge will be launching on December 5th. Stay tuned for an exciting new way to explore careers in skilled trades!'
            />
        </div>
    );
}
