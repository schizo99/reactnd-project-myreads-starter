import React, {Component} from 'react'
import Book from './Book'
import sortBy from 'sort-by'

class Shelf extends Component {
    render () {
      const {books} = this.props
        return (
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.sort(sortBy('title')).map((book) => (
                  <Book 
                    onMoveBook={this.props.onMoveBook}
                    key={book.id} book={book}
                  />
                ))}
              </ol>
            </div>
          
        )
    }
}

export default Shelf