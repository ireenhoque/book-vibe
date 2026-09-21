import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
    book: IBook
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Book Image */}
            <div className="relative h-80 overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-purple-600 shadow backdrop-blur-sm">
                    {book.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur-sm">
                    <span className="text-yellow-400">★</span>
                    {book.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="mb-1 line-clamp-1 text-xl font-bold text-gray-800">
                    {book.bookName}
                </h2>

                <p className="mb-4 text-sm text-gray-500">
                    by <span className="font-medium text-gray-700">{book.author}</span>
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {book.review}
                </p>

                {/* Book Information */}
                <div className="mb-5 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 text-sm">
                    <div>
                        <p className="text-gray-400">Pages</p>
                        <p className="font-semibold text-gray-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400">Published</p>
                        <p className="font-semibold text-gray-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400">Publisher</p>
                        <p className="font-semibold text-gray-700">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400">Rating</p>
                        <p className="font-semibold text-gray-700">
                            {book.rating} / 5
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-600">
                    View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;