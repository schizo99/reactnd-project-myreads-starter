import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
class Search extends Component {
  state = {
    query: '',
    books: []
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(query, 30).then(books => {this.setState({books})})
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
              <Shelf books={this.state.books.filter(book => book.shelf === "none")}/>
            </ol>
          </div>
        </div>
      )
  }
}

export default Search