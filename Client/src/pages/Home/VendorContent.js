import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import"./home.scss";
import { useSelector } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


function Home() {
  const user = useSelector((state) => state.user);
   
  const emotor = useRef();

  function contentOnChange(content)
  {
    console.log(content);
  }

  function myClean()
  {
    console.log("clean");
    emotor.current.onFocus();
  }
    return (
      <Container>
        <Row>
            <Col>
            
            </Col>
        </Row>
      </Container>
    );
}

export default Home;

