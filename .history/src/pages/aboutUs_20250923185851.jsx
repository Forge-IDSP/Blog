import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";

function aboutUs() {
    return (
        <div className='page'>
            <Header />
            <h1 className='title'>
                See behind the scenes
                <br /> of the Forge design
            </h1>
            <p className='subtitle'>Weekly updates about our process</p>

            <Footer />
        </div>
    );
}
