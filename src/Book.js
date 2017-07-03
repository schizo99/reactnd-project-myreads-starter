import React, {Component} from 'react'

class Book extends Component {
  updateShelf(shelf) {
    this.props.onMoveBook(this.props.book, shelf)
  }
  render () {
    const {book} = this.props
    return (
      <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ height: 192, width: 128, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
         <div className="book-shelf-changer">
           <select defaultValue={book.shelf} onChange={(e) => this.updateShelf(e.target.value)}>
             <option value="none" disabled>Move to...</option>
             <option value="currentlyReading">Currently Reading</option>
             <option value="wantToRead">Want to Read</option>
             <option value="read">Read</option>
             <option value="none">None</option>
           </select>
         </div>
       </div>
       <div className="book-title">{book.title}</div>
       <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book