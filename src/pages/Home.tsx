// GLOBAL IMPORTS
import { ReactElement } from 'react'
import styled from 'styled-components'

// INTERNAL IMPORTS
import CoverVideo from '@/components/CoverVideo'

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
        </Section>
    )
}

export default Home
