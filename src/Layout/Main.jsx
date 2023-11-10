import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Main = () => {
    const location = useLocation();
    console.log(location)
    const newLayout = location.pathname.includes('login') || location.pathname.includes('signup') ||  location.pathname.includes('quizscore') 

    return (
        <>
            {newLayout || <Navbar />}
            <Outlet />
            {newLayout || <Footer />}
        </>
    );
};

export default Main;