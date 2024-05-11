import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return React.createElement(
        "nav",
        { className: styles.navbar },
        React.createElement(
            "a",
            { className: styles.title, href: "/" },
            "Portfolio"
            ),
        React.createElement(
            "div",
            { className: styles.menu },
            React.createElement(
                "img",
                {
                    className: styles.menuBtn,
                    src: menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png"),
                    alt: "menu-button",
                    onClick: () => setMenuOpen(!menuOpen)
                }
            ),
            React.createElement(
                "ul",
                {
                    className: `${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`,
                    onClick: () => setMenuOpen(false)
                },
                ["About", "Experience", "Projects", "Contact"].map((text, index) =>
                    React.createElement(
                        "li",
                        { key: index },
                        React.createElement(
                            "a",
                            { href: `#${text.toLowerCase()}` },
                            text
                        )
                    )
                )
            )
        )
    );
};