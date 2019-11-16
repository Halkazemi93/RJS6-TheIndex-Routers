import React, { Component } from "react";
import BookTable from "./BookTable";

import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  filterBookByColor = bookColor =>
    this.state.filteredBooks.filter(book => book.color === bookColor);

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = this.state.filteredBooks;
    if (bookColor) books = this.filterBookByColor(bookColor);
    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
