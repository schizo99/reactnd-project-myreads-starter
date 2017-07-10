import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'

class Search extends Component {
  state = {
    query: '',
    books: []
  }
  updateQuery = (query) => {
    if (!query) {
      this.setState({query: ''})
    } else {
      this.setState({ query: query.trim() })
      BooksAPI.search(query.trim(), 20).then((books) => {
        if (books.error) {
          books = []
        }
        this.setState({books})
      })
    }
  }
  render () {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={(e) => this.updateQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books.sort(sortBy('title'))
                  //.filter(book => book.shelf === "none")
                  .map(book => (
                    <Book 
                      onMoveBook={this.props.onMoveBook}
                      key={book.id} book={book}
                    />
                  ))
                }
              </ol>
            </div>
            </ol>
          </div>
        </div>
      )
  }
}

export default Search