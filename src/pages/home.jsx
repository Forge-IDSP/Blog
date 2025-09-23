import Header from "../ui/header/header.jsx";
import Card from "../ui/card/card.jsx";
import Footer from "../ui/footer/footer.jsx";
import cardcontent from "../data/cardcontent.json";

export default function Home() {
    return (
        <div className='page'>
            <Header />
            <h1 className='title'>
                See behind the scenes
                <br /> of the Forge design
            </h1>
            <p className='subtitle'>Weekly updates about our process</p>

            <div className='post_container'>
                {cardcontent.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        text={item.text}
                        link={item.link}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}
