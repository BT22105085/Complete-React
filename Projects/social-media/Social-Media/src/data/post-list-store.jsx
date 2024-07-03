import { createContext } from "react";
import { useReducer } from "react";

export const postListContext = createContext({
  postListItems: [],
  AddPostList: () => {},
  RemovePostList: () => {},
  AddMultiplePosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostListItems = currPostList;
  if (action.type === "DELETE_ITEM") {
    newPostListItems = currPostList.filter(
      (item) => item.id !== action.payload.id
    );
  } else if (action.type == "ADD_ITEM") {
    newPostListItems = [...currPostList, action.payload];
  }else if(action.type==="Add_MULTIPLE_ITEMS"){
    newPostListItems=action.payload.posts;
  }
  return newPostListItems;
};

export const PostListContextProvider = ({ children }) => {
  const [postListItems, dispatchPostListItems] = useReducer(
    postListReducer,
    []
  );
  const AddPostList = (userId, title, body, tags, response) => {
    const addItemAction = {
      type: "ADD_ITEM",
      payload: {
        id: Date.now(),
        userId,
        title,
        body,
        tags,
        views: response,
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
      value={{ postListItems, AddPostList, RemovePostList, AddMultiplePosts }}
    >
      {children}
    </postListContext.Provider>
  );
};
