import { useSelector } from "react-redux";

const Display=()=>{
  const {counterVal}=useSelector(store=>store.counter);
  return <p class="lead mb-4">Current counter value is:{counterVal}</p>
};

export default Display