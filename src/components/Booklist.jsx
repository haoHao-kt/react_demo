import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import Book from './Book';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
            <ul>
                {     // このあたり編集
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) => (
                            <Book key={index} book={x} />
                        ))
                }
            </ul>
        </div>
    );
}
export default Booklist;