// GLOBAL IMPORTS
import styled from "styled-components"

// INTERNAL IMPORTS
import MainVideo from "@/assets/Walking Girl.mp4"

type Props = {}

const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
    width:100%;
    height:100vh;
    object-fit: cover;
}
`
const DarkOverlay = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:1;

background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
`
const Title = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:5;

display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
color: ${props => props.theme.text};

h1{
    font-family:'Kaushan Script';
    font-size: ${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
}
`

function CoverVideo({ }: Props) {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Title>
                <div>
                    <h1>Wibe</h1>
                </div>
                <h2>Inspire. Create. Belive</h2>
            </Title>
            <video src={MainVideo} typeof="video/mp4" autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo
