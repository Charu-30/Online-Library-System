import { useParams } from "react-router-dom";
import { books } from "../utils/mockdata";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails(){
    const  params= useParams();
    const reduxBooks= useSelector((state)=> state.book.items);
    const allBooks= [...books, ...reduxBooks];
    const book= allBooks.find((book)=> book.id.toString()===params.id);

    if(!book){
        return <p>Book not found</p>;
    }

    return(
        <div className="min-h-screen flex gap-20 items-center justify-center">
            <div>
                <img src={book.coverImage} alt="" className="w-96 h-96" />
            </div>
            <div className="bg-red-100 p-6 rounded-md h-96 w-5/12 shadow-xl shadow-red-200">
                <h1 className="text-5xl font-bold mb-7">{book.title}</h1>
                <p className="text-2xl font-semibold">Author: {book.author}</p>
                <p className="text-xl">Category: {book.category}</p>
                <p className="text-gray-700 mt-4 text-lg">Description: {book.description}</p>
                <p className="my-4 text-xl">Ratings: ⭐ {book.rating}</p>
                <Link to="/browsebooks" className="text-blue-600 text-lg hover:underline">Back to browse Books</Link>
            </div>
        </div>
    );
}

export default BookDetails;