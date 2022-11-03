import { Container, Row, Col } from "react-bootstrap";
import { info } from "./Info";
import PortfolioBlock from "./PortfolioBlock";

function Projects() {
    return (
        <Container fluid='md'>
            <h1 className="text-center mb-5">Here are some of <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Projects</span><span className='hand'>⚡</span></h1>
            <Row className="justify-content-md-center">

                {info.portfolio.map((project, index) => (
                    <>
                        <Col xs={12} md={8} xl={6}>
                            <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                        </Col>
                        <Col xs={12} md={8} xl={5}>
                            <div className='mt-5'>
                                <h1 className="text-center"><span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{project.title}</span>
                                    <span className='hand'>{project.emoji}</span>
                                </h1>
                                <h2 className="text-center">{project.subtitle}.</h2>
                                <br></br>
                                <i><q>{project.description}</q></i>
                            </div>
                        </Col>
                    </>
                ))}


            </Row>
        </Container>

    );
}

export default Projects;