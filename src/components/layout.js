import * as React from "react"
import Footer from "./footer"
import './layout.module.css'
import Nav from "./nav"

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <Nav />
            <main>
                <title>{pageTitle}</title>
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout