import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Week1 from "./pages/week1.jsx";
import AboutUs from "./pages/aboutUs.jsx";

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
