import { Card, Col, ListGroup, Row } from "react-bootstrap";

import aws from '../assets/technologies/aws.svg'
import html from '../assets/technologies/html.svg'
import js from '../assets/technologies/js.svg'
import python from '../assets/technologies/python.svg'
import react from '../assets/technologies/react.svg'
import css from '../assets/technologies/css.svg'
import git from '../assets/technologies/git.svg'

function Technologies() {

    const technologies = [
        aws, html, js, python, react, css, git
    ]

    return (
        <div className="technologies">
            <Row className="mt-5">
                {
                    technologies.map((tech, index) => {
                        return (
                            <Col key={index}>
                                <img src={tech} className='h-50' />
                            </Col>
                        )
                    })
                }

            </Row>
        </div>
    );
}

export default Technologies;