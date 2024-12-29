import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/bookSlice";

function AddBook(){
    const [title, setTitle]= useState('');
    const [author, setAuthor]=useState('');
    const [description, setDescription]= useState('');
    const [category, setCategory]= useState('');
    const [rating, setRating]= useState('');
    const [coverImage, setCoverImage]= useState('');

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title || !author || !description ||!category || !rating || !coverImage){
            alert('Please fill out all fields.');
            return;
        }
        dispatch(
            addBook({
                id: Date.now(),
                title, 
                author, 
                description, 
                category, 
                rating, 
                coverImage, 
            })
        );
        navigate("/browsebooks");
    }

    return(
        <div className="min-h-screen flex flex-col pt-20 items-center justify-center mb-12">
            <h1 className="text-3xl font-bold mb-6 text-center">Add a New Book</h1>
            <form onSubmit={handleSubmit} className="px-14 py-8 space-y-4 bg-gray-300 w-full max-w-xl mx-auto shadow-xl shadow-gray-700 rounded-lg ">
                <div>
                    <label className="block text-lg font-semibold">Title:</label>
                    <input type="text" value={title} 
                    onChange={(e)=> setTitle(e.target.value)} 
                    placeholder="Book Title"
                    className="w-full px-3 py-2 border rounded-md shadow-xl focus:outline-none" />
                </div>
                <div>
                    <label className="block text-lg font-semibold">Author:</label>
                    <input type="text" value={author} 
                    onChange={(e)=> setAuthor(e.target.value)} 
                    placeholder="Book Author"
                    className="w-full px-3 py-2 border rounded-md shadow-xl focus:outline-none" />
                </div>
                <div>
                    <label className="block text-lg font-semibold">Description:</label>
                    <textarea value={description} 
                        onChange={(e)=>setDescription(e.target.value)} 
                        placeholder="Add a book Description"
                        className="w-full px-3 py-2 border rounded-md shadow-xl focus:outline-none">
                    </textarea>
                </div>
                <div>
                    <label className="block text-lg font-semibold">Category:</label>
                    <select value={category} 
                        onChange={(e)=>setCategory(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md shadow-xl focus:outline-none">
                        <option value="" disabled>Select a category</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-finction">Non-Fiction</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="fantasy">Fantasy</option>
                    </select>
                </div>
                <div>
                    <label className="block text-lg font-semibold">Rating:</label>
                    <input type="number" value={rating} 
                    onChange={(e)=> setRating(e.target.value)} 
                    placeholder="Book Rating"
                    className="w-full px-3 py-2 border rounded-md shadow-xl focus:outline-none" />
                </div>
                <div>
                    <label className="block text-lg font-semibold">Cover Image URL:</label>
                    <input type="text" value={coverImage} 
                    onChange={(e)=> setCoverImage(e.target.value)}
                    placeholder="Add a Book Image URL"
                    className="w-full px-3 py-2 border rounded-md shadow-xl focus:outline-none" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" 
                        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-xl hover:bg-blue-700 focus:outline-none">
                            Add Book
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddBook;

