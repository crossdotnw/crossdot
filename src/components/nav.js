import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { close, expanded, hamburger, nav_header, nav_item, nav_logo, nav_menu } from './nav.module.css';

const Nav = () => {

    const [isExpanded, toggleExpansion] = React.useState(false);

    const handleToggleExpension = () => {
        toggleExpansion(!isExpanded);
    }

    return (
        <nav>
            <h1 className={nav_header}>crossdot</h1>
            <ul>
                <li><Link to="/" className={nav_item}>Home</Link></li>
                <li><Link to="/about" className={nav_item}>About</Link></li>
                <li><Link to="/articles" className={nav_item}>Articles</Link></li>
            </ul>
            <StaticImage alt="crossdot logo" src='../images/crossdot.svg' style={{ maxWidth: "4rem" }} className={nav_logo} placeholder='none' />
            <button className={hamburger} onClick={handleToggleExpension}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${nav_menu} ${isExpanded ? expanded : null}`}>
                <ul>
                    <button className={close} onClick={handleToggleExpension}>
                        <StaticImage alt="close" src='../images/cross.png' style={{ maxWidth: "1rem" }} placeholder='none' />
                    </button>
                    <li><Link to="/" className={nav_item}>Home</Link></li>
                    <li><Link to="/about" className={nav_item}>About</Link></li>
                    <li><Link to="/articles" className={nav_item}>Articles</Link></li>
                </ul>
            </div>
        </nav >
    )
}

export default Nav
