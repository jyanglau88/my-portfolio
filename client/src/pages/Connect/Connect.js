import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Connect extends Component {
  state = {
    contactme: [],
    name: "",
    email: "",
    message: "",
    date: ""
  };

  componentDidMount() {
    this.loadContactMes();
  }

  loadContactMes = () => {
    API.getContactMes()
      .then(res =>
        this.setState({ contactme: res.data, name: "", email: "", message:"", date: "" })
      )
      .catch(err => console.log(err));
  };

  deleteContactMe = id => {
    API.deleteContactMe(id)
      .then(res => this.loadContactMes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.message && this.state.date) {
      API.saveContactMe({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        date: this.state.date
      })
        .then(res => {
          //console.log(res);
          this.loadContactMes();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h1>Contact Me:</h1>
              <h3>Leave a message or write on my message board. You can also send me an email at <a href="mailto:jyanglau88@gmail.com">jyanglau88@gmail.com</a>.</h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (Required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (Required)"
              />
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Message (Required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (Required)"
              />
              <FormBtn
                disabled={!(this.state.sig && this.state.prescription && this.state.message && this.state.date)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-9 sm-12">
            <Jumbotron>
            <h1>Message Board:</h1>
            </Jumbotron>
            {this.state.contactmes.length ? (
              <List>
                {this.state.contactmes.map(contactme => (
                  <ListItem key={contactme._id}>
                    <Link to={"/Message/" + contactme._id}>
                      <strong>
                        {contactme.name}
                        {contactme.email}
                        {contactme.message}
                        {contactme.date}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteContactMe(contactme._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>Welcome to my message board!</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Connect;