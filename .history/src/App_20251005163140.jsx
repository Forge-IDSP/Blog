import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Week1 from "./pages/week1.jsx";
import Week2 from "./pages/week2.jsx";
import Week3 from "./pages/week3.jsx";
import Week4 from "./pages/week4.jsx";
import Week5 from "./pages/week5.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import ContactUs from "./pages/contactUs.jsx";

export default function App() {
    return (
        <Router>
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
                    path='/week1'
                    element={<Week1 />}
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
