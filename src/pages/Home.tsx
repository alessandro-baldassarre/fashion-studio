// GLOBAL IMPORTS
import { ReactElement } from 'react'
import styled from 'styled-components'

// INTERNAL IMPORTS
import CoverVideo from '@/components/CoverVideo'
import Logo from '@/components/Logo'
import NavBar from '@/components/NavBar'

type Props = {}

const Section = styled.section`
position:relative;
min-height: 200vh;
overflow:hidden;
`

function Home({ }: Props): ReactElement {
    return (
        <Section>
            <CoverVideo />
            <Logo />
            <NavBar />
        </Section>
    )
}

export default Home
