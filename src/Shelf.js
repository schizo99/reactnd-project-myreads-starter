import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {
    render () {
      const {books} = this.props
        return (
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) => (
                  <Book key={book.id} book={book}/>
                ))}
              </ol>
            </div>
          
        )
    }
}

export default Shelf