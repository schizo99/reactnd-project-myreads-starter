import React, {Component} from 'react'
import Shelf from './Shelf'

class Bookshelf extends Component {
  render () {
    return (
      <div>
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
              <Shelf type="currentlyReading" books={this.props.books.filter(book => book.shelf === "currentlyReading")}/>
          </div>
        </div>
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
              <Shelf type="wantToRead" books={this.props.books.filter(book => book.shelf === "wantToRead")}/>
          </div>
        </div>
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
              <Shelf type="read" books={this.props.books.filter(book => book.shelf === "read")}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf