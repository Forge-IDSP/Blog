import Header from "../ui/header/header.jsx";
import Hero from "../ui/hero/hero.jsx";
import Card from "../ui/card/card.jsx";
import Footer from "../ui/footer/footer.jsx";
import cardcontent from "../data/cardcontent.json";
import CTA from "../ui/cta/cta";
import Modal from "../ui/modal/modal.jsx";
import { useLaunchModal } from "../hooks/useLaunchModal.js";

export default function Blog() {
    const { isModalOpen, openModal, closeModal } = useLaunchModal();

    return (
        <div className='page'>
            <Header onForgeClick={openModal} />
            <Hero
                title='See behind the scenes'
                subtitle='of the Forge design'
                description='
                Forge has surpassed several milestones—including the initial idea, implementation, testing, and presentation. Be a part of our journey and follow along as we share each step of the process!'
            />

            <div className='post_container'>
                {cardcontent.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        week={item.text}
                        link={item.link}
                    />
                ))}
            </div>
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

