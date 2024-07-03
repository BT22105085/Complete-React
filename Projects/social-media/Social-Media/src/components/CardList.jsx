import Card from "./card";
import { postListContext } from "../data/post-list-store.jsx";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./welcome-msg.jsx";
import Spinner from "./spinner.jsx";

const CardList = () => {
  const [fetching, setFetching] = useState(false);
  const { postListItems, AddMultiplePosts } = useContext(postListContext);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        AddMultiplePosts(obj.posts);
        setFetching(false);
      });

    return () => controller.abort();
  }, []);
  return (
    <>
      {fetching && <Spinner></Spinner>}
      {!fetching && postListItems.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postListItems.map((post) => <Card post={post} key={post.id}></Card>)}
    </>
  );
};

export default CardList;
