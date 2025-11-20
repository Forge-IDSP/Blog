import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ui/scrollToTop/scrollToTop.jsx";
import Home from "./pages/home.jsx";
import Week1 from "./pages/week1.jsx";
import Week2 from "./pages/week2.jsx";
import Week3 from "./pages/week3.jsx";
import Week4 from "./pages/week4.jsx";
import Week5 from "./pages/week5.jsx";
import Week6 from "./pages/week6.jsx";
import Week7 from "./pages/week7.jsx";
import Week8 from "./pages/week8.jsx";
import Week9 from "./pages/week9.jsx";
import Week10 from "./pages/week10.jsx";
import Week11 from "./pages/week11.jsx";
import Week12 from "./pages/week12.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import ContactUs from "./pages/contactUs.jsx";

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/week1'
                    element={<Week1 />}
                />
                <Route
                    path='/week2'
                    element={<Week2 />}
                />
                <Route
                    path='/week3'
                    element={<Week3 />}
                />
                <Route
                    path='/week4'
                    element={<Week4 />}
                />
                <Route
                    path='/week5'
                    element={<Week5 />}
                />
                <Route
                    path='/week6'
                    element={<Week6 />}
                />
                <Route
                    path='/week7'
                    element={<Week7 />}
                />
                <Route
                    path='/week8'
                    element={<Week8 />}
                />
                <Route
                    path='/week9'
                    element={<Week9 />}
                />
                <Route
                    path='/week10'
                    element={<Week10 />}
                />
                <Route
                    path='/week11'
                    element={<Week11 />}
                />
                <Route
                    path='/week12'
                    element={<Week12 />}
                />
                <Route
                    path='/aboutUs'
                    element={<AboutUs />}
                />
                <Route
                    path='/contactUs'
                    element={<ContactUs />}
                />
            </Routes>
        </Router>
    );
}
