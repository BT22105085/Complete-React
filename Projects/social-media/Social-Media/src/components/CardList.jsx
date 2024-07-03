import Card from "./card";
import { postListContext } from "../data/post-list-store.jsx";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./welcome-msg.jsx";

const CardList = () => {
  const { postListItems, AddMultiplePosts } = useContext(postListContext);
  useEffect(()=>{
    fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((obj) => AddMultiplePosts(obj.posts));
  },[]);
  return (
    <>
      {postListItems.length === 0 && < WelcomeMessage/>}
      {postListItems.map((post) => (
        <Card post={post} key={post.id}></Card>
      ))}
    </>
  );
};

export default CardList;
