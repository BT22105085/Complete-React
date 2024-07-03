import Card from "./card";
import { postListContext } from "../data/post-list-store.jsx";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./welcome-msg.jsx";
import Spinner from "./spinner.jsx";

const CardList = () => {
  const { postListItems,fetching } = useContext(postListContext);
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
