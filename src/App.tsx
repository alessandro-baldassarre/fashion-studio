// GLOBAL IMPORTS
import { ReactElement, useRef } from "react"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { ThemeProvider } from "styled-components"
import "locomotive-scroll/dist/locomotive-scroll.css"
import { AnimatePresence } from "framer-motion"

// INTERNAL IMPORTS
import Home from "@/sections/Home"
import GlobalStyles from "@/styles/GlobalStyles"
import { dark } from "@/styles/Themes"
import About from "@/sections/About"
import Shop from "@/sections/Shop"
import ScrollTriggerProxy from "@/components/ScrollTriggerProxy"
import Banner from "./sections/Banner"
import NewArrival from "./sections/NewArrival"
import Footer from "./sections/Footer"

function App(): ReactElement {

    const containerRef = useRef<null | HTMLDivElement>(null)

    return (
        <>
            <GlobalStyles />

            <ThemeProvider theme={dark}>
                <LocomotiveScrollProvider options={{ smooth: true }} watch={[]} containerRef={containerRef}>
                    <ScrollTriggerProxy />
                    <AnimatePresence>
                        <main className="App" data-scroll-container ref={containerRef}>
                            <Home />
                            <About />
                            <Shop />
                            <Banner />
                            <NewArrival />
                            <Footer />
                        </main>
                    </AnimatePresence>
                </LocomotiveScrollProvider>
            </ThemeProvider>

        </>
    )
}

export default App
