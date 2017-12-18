import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';


class ListBooks extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    booksShelf: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {

    const {onChangeShelf, booksShelf, books} = this.props;

    return (
      <div className="list-books">

        {Object.entries(booksShelf).map((shelf) => (

        <div className="bookshelf" key={shelf[0]}>
          <h2 className="bookshelf-title">{shelf[1]}</h2>
          <div className="bookshelf-books">

            <ol className="books-grid">

              {books.sort(sortBy('title')).filter(book => book.shelf.toString() === shelf[0].toString()).map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">

                      <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>


                        <div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(event) => onChangeShelf(book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>

                              <option value="currentlyReading">Currently Reading</option>

                              <option value="wantToRead">Want to Read</option>

                              <option value="read">Read</option>

                          </select>
                        </div>

                      </div>


                      <div className="book-title">{book.title}</div>
                      {book.authors.map((author) => (
                        <div className="book-authors" key={author}>{author}</div>
                      ))}
                    </div>

                </li>
              ))}

            </ol>

          </div>
        </div>

      ))}

      </div>
    )
  }
}

export default ListBooks;
