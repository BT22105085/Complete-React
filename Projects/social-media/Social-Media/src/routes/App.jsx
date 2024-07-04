import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Sidebar from "../components/sidebar.jsx";
import CardList from "../components/CardList.jsx";
import {
  PostListContextProvider,
  postListContext,
} from "../data/post-list-store.jsx";
import "./App.css";
import { useContext, useState } from "react";
import CreatePost from "../components/create-post.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListContextProvider>
      <div className="pk-parent-div">
        <Sidebar></Sidebar>
        <div className="pk-main-content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
