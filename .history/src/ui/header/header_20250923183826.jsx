import style from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={style.header}>
            <img
                src='/forge-logo.svg'
                alt='Forge Logo'
                className={style.logo}></img>
            <nav className={style.menu}>
                <a
                    className={style.menu_item}
                    href='/'>
                    Home
                </a>
                <a
                    className={style.menu_item}
                    href='/'>
                    About Us
                </a>
                <a
                    className={style.menu_item}
                    href='/'>
                    Contact
                </a>
            </nav>
        </div>
    );
}

export default Header;
