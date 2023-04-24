// GLOBAL IMPORTS
import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useLocomotiveScroll } from "react-locomotive-scroll"

const NavContainer = styled(motion.div) <{ isMenuClicked: boolean }>`
width:100vw;
z-index:6;
position:absolute;
top: ${props => props.isMenuClicked ? '0' : `-${props.theme.navHeight}`};

display:flex;
justify-content:center;
align-items:center;

transition: all 0.3s ease;
`
const MenuBtn = styled.li`
background-color: ${props => `rgba(${props.theme.textRgba},0.7)`};
list-style:none;
color:${props => props.theme.body};
width: 15rem;
height: 2.5rem;

clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

position:absolute;
top:100%;
left:50%;
transform:translateX(-50%);

display:flex;
justify-content:center;
align-items:center;

font-size: ${props => props.theme.fontmd};
font-weight:600;
text-transform: uppercase;

cursor:pointer;

`
const MenuList = styled(motion.ul)`
position:relative;
height: ${props => props.theme.navHeight};
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style:none;

display:flex;
justify-content: space-around;
align-items: center;

width: 100%;
padding: 0 10rem;
`

const MenuItem = styled(motion.li)`
text-transform: uppercase;
color: ${props => props.theme.text};
cursor: pointer;
`

type Props = {}

function NavBar({ }: Props) {
    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)

    const { scroll } = useLocomotiveScroll()

    const handleScroll = (id: string) => {
        let el = document.querySelector(id);
        setIsMenuClicked(!isMenuClicked)

        scroll.scrollTo(el, {
            offset: '-100',
            duration: '2000',
            easing: [0.25, 0.0, 0.35, 1.0]
        })
    }
    return (
        <NavContainer isMenuClicked={isMenuClicked} initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 2, delay: 2 }}>
            <MenuList drag="y" dragConstraints={{ top: 0, bottom: 70 }} dragElastic={0.05} dragSnapToOrigin>
                <MenuBtn onClick={() => setIsMenuClicked(!isMenuClicked)}>Menu</MenuBtn>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleScroll('#home')}>home</MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleScroll('.about')}>about</MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleScroll('#shop')}>shop</MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleScroll('#new-arrival')}>new arrival</MenuItem>
            </MenuList>
        </NavContainer>
    )
}

export default NavBar
