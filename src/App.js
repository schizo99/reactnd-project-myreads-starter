import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import Bookshelf from './Bookshelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  moveBook = (book, shelf) => {
    if (this.state.books) {
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id)
      }))
      BooksAPI.update(book, shelf).then((result) => {
        BooksAPI.get(book.id).then((b) => {
            this.setState((state) => ({ books: state.books.concat([b]) }))
        })
      })
    }
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header/>
            <div className="list-books-content">
              <div>
                <Bookshelf
                  onMoveBook={this.moveBook}
                  booksOnShelf={this.state.books}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={() => (
          <Search
            onMoveBook={this.moveBook}
            booksOnShelf={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
