import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Input from "./components/Input.jsx";
import Content from "./components/Content.jsx";
import {TodoItemsContextProvider } from "./store/TodoItemsStore.jsx";
import Welcome from "./components/welcome-msg.jsx";

function App() {
  return (
      <center>
        <h1>TODO APP</h1>
          <TodoItemsContextProvider>
          <Input></Input>
          <Welcome></Welcome>
          <Content></Content>
          </TodoItemsContextProvider>
      </center>
  );
}

export default App;
