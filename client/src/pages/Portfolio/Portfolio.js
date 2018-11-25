import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

class Portfolio extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            Portfolio
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Portfolio;