import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error404(){
    const err= useRouteError();
    console.log(err);
    return(
        <div className="m-5 text-lg">
            <h1>Oops!!</h1>
            <h2>{err.status} Error</h2>
            <h2 className="pb-4">Page Not Found</h2>
            <Link to="/" className="text-blue-600 text-lg hover:underline">Go to Home</Link>
        </div>
    )
}

export default Error404;