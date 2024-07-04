import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import CreatePost, { handleSubmitByRouter } from "./components/create-post.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardList from "./components/CardList.jsx";
import { postLoader } from "./components/CardList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <CardList/>,loader:postLoader },
      {
        path: "/create-post",
        element: <CreatePost/>,
        action:handleSubmitByRouter,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
