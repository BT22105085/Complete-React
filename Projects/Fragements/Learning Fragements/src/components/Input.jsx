import '../App.css'

const Input=({EventHandler})=>{
  return <input type="text" placeholder='Enter your custom food here' className="custom-input"
  onKeyDown={EventHandler}/>
}
export default Input 