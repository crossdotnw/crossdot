import { ThemeProvider } from "@emotion/react"
import * as React from "react"
import Footer from "./footer"
import './layout.module.css'
import Nav from "./nav"
import theme from "./theme.js"

const Layout = ({ pageTitle, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <main>
                <title>{pageTitle}</title>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    )
}

export default Layout
