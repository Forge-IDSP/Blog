import Header from "../ui/header/header.jsx";
import Hero from "../ui/hero/hero.jsx";
import Footer from "../ui/footer/footer.jsx";
import TeamGrid from "../ui/TeamGrid/TeamGrid.jsx";
import CTA from "../ui/cta/cta";
import Modal from "../ui/modal/modal.jsx";
import { useLaunchModal } from "../hooks/useLaunchModal.js";
import styles from "./team.module.css";

export default function Team() {
    const { isModalOpen, openModal, closeModal } = useLaunchModal();

    return (
        <div className='page'>
            <Header onForgeClick={openModal} />
            <Hero
                title='Meet the'
                subtitle='Team'
                description='Forge combines a series of features, animations, and a simulation that was carefully crafted and functionally created by the passionate designers and developers.'
            />
            <div className={styles.teamPage}>
                <div className={styles.teamContainer}>
                    <TeamGrid />
                </div>
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

