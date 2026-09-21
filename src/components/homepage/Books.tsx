import React from "react";
import BookCard from "./BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
    try{
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }

    const data = await response.json();

    return data;
    }catch(error){
        console.error("Error fetching books data:", error);
        return [];
    }
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-17.5 px-4">
            {/* Section Heading */}
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
                    Explore Our Books
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                    Discover your next favorite book from our collection of
                    timeless classics, exciting fiction, and inspiring stories.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.slice(0, 9).map((book: IBook) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </section>
    );
};

export default Books;