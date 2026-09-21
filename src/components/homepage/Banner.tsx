import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-pink-50 p-6 md:p-10 lg:p-14 shadow-sm">

                    {/* Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                            Discover Your Next Read
                        </span>

                        <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                            Books to freshen up
                            <br />
                            your <span className="text-orange-500">bookshelf</span>
                        </h1>

                        <p className="max-w-lg text-base leading-7 text-gray-600 md:text-lg">
                            Explore a collection of inspiring stories, exciting adventures,
                            and timeless classics waiting to become your next favorite book.
                        </p>

                        <button className="btn btn-primary rounded-full px-7 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            View The List
                            <span>→</span>
                        </button>
                    </div>

                    {/* Image */}
                    <div className="relative flex justify-center md:justify-end">
                        <div className="absolute -inset-4 rounded-full bg-orange-200/30 blur-3xl"></div>

                        <Image
                            src={bannerImg}
                            alt="A collection of books"
                            priority
                            className="relative w-full max-w-md rounded-2xl object-cover shadow-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;