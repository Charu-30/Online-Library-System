import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from './components/AddBook.jsx'
import Error404 from './components/Error404.jsx'
import HomePage from './components/HomePage.jsx'
import BookDetails from './components/BookDetails.jsx'

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/browsebooks",
        element: <BrowseBooks/>
      },
      {
        path: "/addbooks",
        element: <AddBook/>
      },
      {
        path: "/books/:category",
        element: <BrowseBooks/>
      },
      {
        path: "/books/details/:id",
        element: <BookDetails/>
      }
    ],
    errorElement: <Error404/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>
)
