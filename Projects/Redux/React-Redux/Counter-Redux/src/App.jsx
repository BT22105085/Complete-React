import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./components/header"
import Display from "./components/display"
import Controls from "./components/controls"
import { useSelector } from "react-redux";
import ToggleMessage from "./components/toggle-msg"

function App() {
  const toggle=useSelector(store=>store.toggle);
  return (
    <div class="px-4 py-5 my-5 text-center">
    <Header></Header>
    <div class="col-lg-6 mx-auto">
      {toggle?<ToggleMessage/>:<Display></Display>}
      <Controls></Controls>
    </div>
  </div>
  )
}

export default App
