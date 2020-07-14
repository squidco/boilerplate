import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useParams } from "react-router-dom";

const BookDetail = (props) => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
      API.getBook(id).then((book) => setBook(book.data))
    }, []);

  return (
    <Container>
      <Jumbotron>
        <h1>{book.title}</h1>
        <p>
          <em>by {book.author}</em>
        </p>
      </Jumbotron>
      <Row>
        <Col>
          <p>{book.synopsis}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetail;
