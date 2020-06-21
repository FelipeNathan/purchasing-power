import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from '@reach/router'
import { GrTwitter, GrLinkedin, GrFacebook, GrGithub } from 'react-icons/gr'

export default function Footer() {

    return (
        <>
            <div className="bg-dark footer">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/privacy-policy"
                                target="_blank"
                                className="mr-3 text-decoration-none text-light"> Política de privacidade</Link>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <a href="https://twitter.com/LipeCampigoto"
                                target="_blank"
                                className="mr-3 text-decoration-none text-light"
                                rel="noopener noreferrer"><GrTwitter /></a>

                            <a href="https://www.linkedin.com/in/felipe-nathan-campigoto-18a3355a/"
                                target="_blank"
                                className="mr-3 text-decoration-none text-light"
                                rel="noopener noreferrer"><GrLinkedin /></a>

                            <a href="https://www.facebook.com/ncampigoto"
                                target="_blank"
                                className="mr-3 text-decoration-none text-light"
                                rel="noopener noreferrer"><GrFacebook /></a>

                            <a href="https://github.com/felipenathan/"
                                target="_blank"
                                className="mr-3 text-decoration-none text-light"
                                rel="noopener noreferrer"><GrGithub /></a>


                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}