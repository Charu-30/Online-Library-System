import React from "react"
import HomePage from "./components/HomePage"
import { Outlet } from "react-router-dom"
import store from "./utils/store"
import {Provider} from "react-redux";
import Header from "./components/Header";
function App() {
  return (
    <Provider store={store}>
       <Header/>
       <Outlet/>
    </Provider>
  )
}

export default App
