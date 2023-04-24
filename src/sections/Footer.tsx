// GLOBAL IMPORTS
import styled from "styled-components"
import { motion } from "framer-motion"
import { useLocomotiveScroll } from "react-locomotive-scroll"

// INTERNAL IMPORTS
import Logo from "@/assets/Svgs/star_white_48dp.svg"

const Section = styled.section`
min-height:100vh;
width:100vw;
margin: 5rem auto;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

position:relative;
`
const LogoContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

img{
    width:10vw;
    height:auto;
}
h3{
    font-size:${props => props.theme.fontxl};
    font-family: 'Kaushan Script';
}
`
const FooterComponent = styled(motion.footer)`
width:80vw;

ul{
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    margin:2rem;
    margin-top:4rem;
    padding: 0 1rem;
    border-top:1px solid ${props => props.theme.text};
    border-bottom:1px solid ${props => props.theme.text};
}

li{
    padding:2rem;
    font-size:${props => props.theme.fontlg};
    text-transform:uppercase;
    cursor:pointer;
    transition:all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }
}
`
const Bottom = styled.div`
padding:0.5rem 0;
margin:0 4rem;
font-size:${props => props.theme.fontlg};

display:flex;
justify-content:space-between;
align-items:center;
a{
    text-decoration:underline;
}
`

function Footer() {

    const { scroll } = useLocomotiveScroll()

    const handleScroll = (id: string) => {
        let el = document.querySelector(id);

        scroll.scrollTo(el, {
            offset: '-100',
            duration: '2000',
            easing: [0.25, 0.0, 0.35, 1.0]
        })
    }


    return (
        <Section>
            <LogoContainer>
                <img src={Logo} alt="Want Studio" data-scroll data-scroll-speed="2" />
                <h3 data-scroll data-scroll-speed="-1">Want Studio</h3>
            </LogoContainer>
            <FooterComponent initial={{ y: "-400px" }} whileInView={{ y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                <ul>
                    <li onClick={() => handleScroll('#home')}>home</li>
                    <li onClick={() => handleScroll('.about')}>about</li>
                    <li onClick={() => handleScroll('#shop')}>shop</li>
                    <li onClick={() => handleScroll('#new-arrival')}>new arrival</li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            look book
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            reviews
                        </a>
                    </li>
                </ul>
                <Bottom>
                    <span data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">&copy; {new Date().getFullYear()}. All Rights Reserved</span>
                    <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Made by &nbsp;
                        <a href="https://alessandrobaldassarre.com" target="_blank" rel="noreferrer">Alessandro Baldassarre</a>
                    </span>
                </Bottom>
            </FooterComponent>

        </Section>
    )
}

export default Footer
