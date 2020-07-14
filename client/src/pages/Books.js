import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import utils from "../utils/API";
import API from "../utils/API";

function Books() {
  // Initialize books as an empty array
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    synopsis: "",
  });

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    // Add code here to get all books from the database and store them using setBooks
    utils.getBooks().then((res) => {
      setBookData({ title: "", author: "", synopsis: "" });
      setBooks(res.data);
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setBookData({ ...bookData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (bookData.title && bookData.author) {
      API.saveBook(bookData).then(() => {
        loadBooks();
      });
    }
  }

  function deleteClick(id) {
    utils.deleteBook(id).then((res) => {
      loadBooks();
    });
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              name="title"
              onChange={handleChange}
              value={bookData.title}
              placeholder="Title (required)"
            />
            <Input
              name="author"
              onChange={handleChange}
              value={bookData.author}
              placeholder="Author (required)"
            />
            <TextArea
              name="synopsis"
              onChange={handleChange}
              value={bookData.synopsis}
              placeholder="Synopsis (Optional)"
            />
            <FormBtn onClick={handleSubmit}>Submit Book</FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map((book) => (
                <ListItem key={book._id}>
                  <a href={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </a>
                  <DeleteBtn onClick={deleteClick} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
