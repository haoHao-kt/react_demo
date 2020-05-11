import React from 'react';

const Book = props => {

    let imageURL;
    if (props.book.volumeInfo.imageLinks) {
        imageURL = props.book.volumeInfo.imageLinks.thumbnail;
    }

    return (
        <div>
            <p>
                {props.book.volumeInfo.title}
            </p>
            <img class="img-box" src={imageURL} alt="" />
        </div>
    );
}
export default Book;