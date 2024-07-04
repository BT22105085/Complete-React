import Card from "./card";
import { postListContext } from "../data/post-list-store.jsx";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./welcome-msg.jsx";
import { useLoaderData } from "react-router-dom";

const CardList = () => {
  const postListItems= useLoaderData();
  return (
    <>
      {postListItems.length === 0 && <WelcomeMessage />}
      {postListItems.map((post) => (
        <Card post={post} key={post.id}></Card>
      ))}
    </>
  );
};

export const postLoader=()=>{
  return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data.posts;
      });
}

export default CardList;
