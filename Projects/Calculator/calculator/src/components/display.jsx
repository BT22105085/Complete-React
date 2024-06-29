const Display=({Value})=>{
  console.log(Value);
  return <>
  <input type="text" className="display" value={Value} readOnly/>
  </>
}
export default Display;