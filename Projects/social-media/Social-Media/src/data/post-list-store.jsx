import { createContext } from "react";
import { useReducer, useState,useEffect } from "react";

export const postListContext = createContext({
  postListItems: [],
  AddPostList: () => {},
  RemovePostList: () => {},
  AddMultiplePosts: () => {},
  HandleSidebarClick:()=>{},
  SelectedSidebar:"",
});

const postListReducer = (currPostList, action) => {
  let newPostListItems = currPostList;
  if (action.type === "DELETE_ITEM") {
    newPostListItems = currPostList.filter(
      (item) => item.id !== action.payload.id
    );
  } else if (action.type == "ADD_ITEM") {
    newPostListItems = [action.payload.post, ...currPostList];
  } else if (action.type === "Add_MULTIPLE_ITEMS") {
    newPostListItems = action.payload.posts;
  }
  return newPostListItems;
};

export const PostListContextProvider = ({ children }) => {
  const [SelectedSidebar, SetSelectedSidebar] = useState("Home");
  const HandleSidebarClick = (currItem) => {
    if (SelectedSidebar === currItem) return;
    else SetSelectedSidebar(currItem);
  };

  const [postListItems, dispatchPostListItems] = useReducer(
    postListReducer,
    []
  );
  const AddPostList = (post) => {
    post.id+=Date.now();
    const addItemAction = {
      type: "ADD_ITEM",
      payload: {
        post,
      },
    };
    dispatchPostListItems(addItemAction);
  };
  const RemovePostList = (id) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    };
    dispatchPostListItems(deleteItemAction);
  };
  const AddMultiplePosts = (posts) => {
    dispatchPostListItems({
      type: "Add_MULTIPLE_ITEMS",
      payload: {
        posts,
      },
    });
  };
  return (
    <postListContext.Provider
      value={{ postListItems, AddPostList, RemovePostList,SelectedSidebar,HandleSidebarClick }}
    >
      {children}
    </postListContext.Provider>
  );
};


