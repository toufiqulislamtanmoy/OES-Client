import About from "../About/About";
import Contact from "../ContactUs/Contact";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
    return (
        <div>
            <hr />
            <HeroSection/>
            <About/>
            <Contact/>
        </div>
    );
};

export default Home;