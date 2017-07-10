import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class Search extends Component {
  
  static propTypes = {
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }
  
  updateQuery = (query) => {
    if (!query) {
      this.setState({query: ''})
    } else {
      this.setState({ query: query.trim() })
    }
  }

  componentDidUpdate() {
    if (this.state.query) {
      BooksAPI.search(this.state.query).then((books) => {
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