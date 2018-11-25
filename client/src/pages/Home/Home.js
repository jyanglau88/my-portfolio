import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            Welcome!
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;