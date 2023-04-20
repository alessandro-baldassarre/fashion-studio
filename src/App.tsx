// GLOBAL IMPORTS
import { ReactElement, useRef } from "react"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { ThemeProvider } from "styled-components"
import "locomotive-scroll/dist/locomotive-scroll.css"

// INTERNAL IMPORTS
import Home from "@/sections/Home"
import GlobalStyles from "@/styles/GlobalStyles"
import { dark } from "@/styles/Themes"
import { AnimatePresence } from "framer-motion"
import About from "@/sections/About"

function App(): ReactElement {

    const containerRef = useRef<null | HTMLDivElement>(null)

    return (
        <>
            <GlobalStyles />

            <ThemeProvider theme={dark}>
                <LocomotiveScrollProvider options={{ smooth: true }} watch={[]} containerRef={containerRef}>
                    <AnimatePresence>
                        <main data-scroll-container ref={containerRef}>
                            <Home />
                            <About />
                        </main>
                    </AnimatePresence>
                </LocomotiveScrollProvider>
            </ThemeProvider>

        </>
    )
}

export default App
