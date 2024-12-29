import React from "react";
import { Link } from "react-router-dom";
import bookicon from "../assets/bookicon.png";

function Header(){
    return(
        <>
            <nav className="flex justify-between px-1 md:px-16 bg-gray-900 text-white text-lg py-3 fixed w-full top-0 right-0 z-10">
                <div className="flex items-center gap-3">
                    <img src={bookicon} alt="" className="w-10 h-10"/>
                    <Link to="/" className="font-bold font-serif md:text-2xl pt-1 hover:text-gray-300">Online Library </Link>
                </div>
                <div>
                    <ul className="flex gap-4 pt-1">
                        <li className="hover:text-gray-300 text-xl">
                            <Link to="/" className="font-serif">Home</Link>
                        </li>
                        <li className="hover:text-gray-300 text-xl">
                            <Link to="/browsebooks" className="font-serif">Browse Books</Link>
                        </li>
                        <li className="hover:text-gray-300 text-xl">
                            <Link to="/addbooks" className="font-serif">Add Books</Link>
                        </li>
                    </ul>
                </div>
           </nav>
        </>
    )
}

export default Header;