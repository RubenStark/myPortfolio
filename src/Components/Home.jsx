import { Container, Row, Col } from "react-bootstrap";
import { info } from "./Info";
import { Box } from "@mui/material";
import me from '../img/self.png';
import "./Home.scss";

function Home() {
    return (
        <Container fluid='md'>
            <Row className="justify-content-center">
                <Col xs={12} md={5} xl={5}>
                    <Box
                        alt={'image of developer'}
                        style={{ background: info.gradient }}
                        component={'img'}
                        src={me}
                        width={{ xs: '35vh', md: '40vh' }}
                        height={{ xs: '35vh', md: '40vh' }}
                        borderRadius={'50%'}
                        p={'0.75rem'}
                        mb={{ xs: '1rem', sm: 0 }}
                        mr={{ xs: 0, md: '2rem' }}
                    />
                </Col>
                <Col xs={12} md={8} xl={4}>
                    <div className='mt-5'>
                        <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className='hand'>🤚</span></h1>
                        <h2>I'm {info.position}.</h2>
                        <br></br>
                        <i><q>Based in Mexico City with 1 year of experience in  real world practices with projects of my own, I learned from sources as Havard´s CS50's, Codecademy, Udemy and Books; Startup mentality, self-starter, proactive, flexible, fast moving with a long term vision and a huge love for learning and improving.</q></i>
                    </div>

                </Col>
            </Row>
        </Container>

    )
}

export default Home;