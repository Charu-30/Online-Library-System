import React from "react";
import {Link} from 'react-router-dom';
import bg16 from '../assets/bg16.webp';
import { categories } from "../utils/categoryData";
import { useParams } from "react-router-dom";
import { books } from "../utils/mockdata";

function HomePage(){
    const trendingBooks= books.filter(book=>book.rating>4.8);
    const {category="All"}= useParams();
    return(
        <div className=" min-h-screen w-full bg-cover bg-center" 
             style={{backgroundImage: `url(${bg16})`} }>
                <div className="text-center text-black pt-16" >
                    <div className="text-center">
                        <h1 className="text-4xl font-bold font-sans py-5">
                            Welcome to the Online Library System!!
                        </h1>
                        <p className="text-lg font-semibold text-center mx-auto">
                            Explore a world of knowledge and imagination at your fingertips. Dive into our curated collection of books across genres like Fiction, Non-Fiction, Sci-Fi, and more.
                            <br />
                            Start your journey today! Browse popular books, search for your favorites, or add a new gem to our collection.
                            <br/>
                            Happy Reading! 📚
                        </p>
                    </div>

                    <div className="m-12">
                        <h1 className="font-bold text-3xl mb-5">Browse By Categories</h1>
                        <ul className="flex flex-wrap items-center justify-center gap-28 text-lg">
                            {categories.map((cat) => (
                            <div
                                key={cat.id}
                                className="flex flex-col items-center rounded"
                            >
                                <img src={cat.image} alt={cat.name} className="w-10" />
                                <li>
                                <Link
                                    to={`/books/${cat.id}`}
                                    className={`font-semibold ${
                                    category.toLowerCase() === cat.id
                                        ? "text-white"
                                        : "text-blue-800 hover:underline"
                                    }`}
                                >
                                    {cat.name}
                                </Link>
                                </li>
                            </div>
                            ))}
                        </ul>
                    </div> 

                    <div>
                        <h1 className="text-3xl font-bold mb-5">Trending Books</h1>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-20 mx-20">
                            {trendingBooks.map((book)=>(
                                <div key={book.id} className="bg-white rounded-md hover:scale-105 mb-8">
                                    <img src={book.coverImage} alt="" className="w-full h-60 mx-auto rounded" />
                                    <h3 className="text-xl font-bold">{book.title}</h3>
                                    <p className="text-gray-600">{book.author}</p>
                                    <Link to={`/books/details/${book.id}`} className="text-blue-600 hover:underline">View Details</Link>
                                </div>
                            ))}
                        </div>
                    </div>   
                </div>  
        </div>
    )
}

export default HomePage;