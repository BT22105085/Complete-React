import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CardList from "./components/CardList";
import { PostListContextProvider } from "./data/post-list-store.jsx";
import "./App.css";
import { useState } from "react";
import CreatePost from "./components/create-post.jsx";

function App() {
  const [SelectedSidebar, SetSelectedSidebar] = useState("");

  return (
    <PostListContextProvider>
      <div className="pk-parent-div">
        <Sidebar
          SelectedSidebar={SelectedSidebar}
          SetSelectedSidebar={SetSelectedSidebar}
        ></Sidebar>
        <div className="pk-main-content">
          <Header></Header>
          {SelectedSidebar === "Home" && <CardList></CardList>}
          {SelectedSidebar==="CreatePost"&&<CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
