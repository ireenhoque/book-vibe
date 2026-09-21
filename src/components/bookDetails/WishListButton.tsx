"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book}: {book: IBook}) => {

    const {wishlist, setWishlist} = useContext(BooksContext);

    // console.log(booksProvider, 'booksProvider');

    const handleAddToWishlist = () => {
        console.log('add to wishlist btn triggered', book);

        //setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
        setWishlist([...wishlist, book]);
        toast.success(`You have read "${book.bookName} to your wishlist"`);
    };

    return (
        <button className="btn btn-primary rounded-xl px-8 shadow-md transition-all hover:scale-105" onClick={() => handleAddToWishlist()}>
             Add to Wishlist
        </button>
    );
};

export default WishListButton;