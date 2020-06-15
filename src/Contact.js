import React, { Component } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  CardImg,
  Card
} from "reactstrap";
class Contact extends Component {
  render() {
    return (
      <div style={{
          textAlign: 'left'
        }}>
      <h2>Contact Ryan</h2>
        <form
                action="https://formspree.io/ryanmoralesaz@gmail.com"
                method="post"
              >
                <fieldset>
                  <legend>Email</legend>

                  <label for="name">Name:</label>
                  <input type="text" id="name" name="user_name" />

                  <label for="mail">Email:</label>
                  <input type="email" id="mail" name="user_email" />

                  <label for="message">Message:</label>
                  <textarea wrap="soft" id="message" name="user_message" />
                </fieldset>

                <Button type="submit">Send</Button>
              </form>

</div>
  );
  }
}

export default Contact;
