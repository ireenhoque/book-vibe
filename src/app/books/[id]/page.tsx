import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

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

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;
    const booksData = await getBooks();
    // const book = booksData.find((book: IBook) => book.bookId === Number(id));
    const book = booksData.find((book: IBook) => String(book.bookId) === String(id)) as IBook;

    console.log(book, 'book');
    return (
    <div className="container mx-auto px-4 py-10">
        <div className="card lg:card-side overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-xl">

            {/* Book Image */}
            <figure className="lg:w-2/5 bg-base-200 p-6 lg:p-10">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={500}
                    height={300}
                    className="h-[400px] w-full rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                />
            </figure>

            {/* Book Details */}
            <div className="card-body lg:w-3/5 p-6 lg:p-10">

                {/* Category */}
                <div>
                    <span className="badge badge-primary badge-outline">
                        {book.category}
                    </span>
                </div>

                {/* Title & Author */}
                <div className="mt-3">
                    <h2 className="text-3xl font-bold leading-tight text-base-content lg:text-4xl">
                        {book.bookName}
                    </h2>

                    <p className="mt-2 text-lg text-base-content/60">
                        by <span className="font-semibold text-base-content/80">
                            {book.author}
                        </span>
                    </p>
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <span className="text-xl text-yellow-400">★</span>
                        <span className="font-bold text-lg">
                            {book.rating}
                        </span>
                    </div>

                    <span className="text-base-content/40">|</span>

                    <span className="text-sm text-base-content/60">
                        {book.totalPages} pages
                    </span>
                </div>

                {/* Review */}
                <div className="mt-5">
                    <p className="leading-7 text-base-content/70">
                        {book.review}
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-ghost px-4 py-3"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="mt-6 grid grid-cols-1 gap-4 border-y border-base-200 py-5 sm:grid-cols-2">

                    <div>
                        <p className="text-sm text-base-content/50">
                            Publisher
                        </p>
                        <p className="mt-1 font-semibold">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-base-content/50">
                            Published
                        </p>
                        <p className="mt-1 font-semibold">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                </div>

                {/* Action */}
                <div className="card-actions mt-6 justify-start">
                    
                    <ReadButton book={book}/>

                    <WishListButton book = {book}/>
                </div>

            </div>
        </div>
    </div>
);
};

export default BookDetailsPage;