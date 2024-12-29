import React, { useState, useEffect, useMemo } from "react";
import { books } from "../utils/mockdata";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../utils/categoryData";
function BrowseBooks(){
    const dispatch= useDispatch();
    const reduxBooks = useSelector((state)=> state.book.items);
    const {category="All"}= useParams();
    const [searchText, setSearchText]=useState("");
    const  [filteredBooks, setFilteredBooks]= useState([]);

    const allBooks= useMemo(()=>[...books, ...reduxBooks], [reduxBooks]); 

    useEffect(() => {
          const initialBooks =
            category === "All"
              ? allBooks // Show all books
              : allBooks.filter(
                  (book) => book.category.toLowerCase() === category.toLowerCase()
                );
          setFilteredBooks(initialBooks);
      }, [allBooks, category]
    );

    function handleSearch() {
        const filteredResults = allBooks.filter((book) => {
          return (
            (category === "All" || book.category.toLowerCase() === category.toLowerCase()) &&
            (book.title.toLowerCase().includes(searchText.toLowerCase()) ||
              book.author.toLowerCase().includes(searchText.toLowerCase()))
          );
        });
        setFilteredBooks(filteredResults);
    }

    return(
        <div className="mx-auto pt-20">
            <div className="my-10">
                <h1 className="font-bold text-3xl mb-5 text-center pb-2">Browse Books By Categories</h1>
                <ul className="flex flex-wrap items-center justify-center gap-20 text-base">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`flex flex-col items-center rounded p-2 px-5 shadow-md ${
                                category.toLowerCase() === cat.id
                                ? "bg-red-400 shadow-red-700 text-white"
                                : "bg-red-200 shadow-red-300"
                            }`}
                        >
                            <img src={cat.image} alt={cat.name} className="w-16" />
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

            {/* Search Bar */}
            <div className="mb-10 flex items-center justify-center">
                <input type="text" placeholder="Search by title or author.." 
                className="border focus: outline-none border-gray-300 p-2 rounded w-4/12"
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)} 
                />
                <button onClick={handleSearch} className="border-b-2 bg-green-600 text-white ml-3 p-2 rounded-md hover:bg-green-700">Search</button>
            </div>

            {/* Book List */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-20 mx-20">
                    {filteredBooks.map((book)=>(
                        <div key={book.id} className="bg-gray-100 rounded-md hover:scale-105 mb-8 text-center shadow-xl shadow-gray-400">
                            <img src={book.coverImage} alt="" className="w-full h-60 mx-auto rounded" />
                            <h3 className="text-xl font-bold">{book.title}</h3>
                            <p className="text-gray-600">{book.author}</p>
                            <Link to={`/books/details/${book.id}`} className="text-blue-600 hover:underline inline-block">View Details</Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default BrowseBooks;