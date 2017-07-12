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
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
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
            <Bookshelf
              onMoveBook={this.moveBook}
              booksOnShelf={this.state.books}
            />
            <Link to="/search">Add a book</Link>
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
