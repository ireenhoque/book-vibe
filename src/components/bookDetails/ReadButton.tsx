"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}: {book: IBook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    // console.log(booksProvider, 'booksProvider');

    const handleReadBook = () => {
        console.log('read book btn triggered', book);

        //setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
        setReadBooks([...readBooks, book]);
        toast.success(`You have read "${book.bookName}"`);
    };

    return (
        <button className="btn btn-primary rounded-xl px-8 shadow-md transition-all hover:scale-105" onClick={() => handleReadBook()}>
             Read
        </button>
    );
};

export default ReadButton;