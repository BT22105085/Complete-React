import { MdDelete } from "react-icons/md";

const Content = ({ items,EventHandler }) => {
  return <>
    {items.map((item)=>{
      return <div class="row" key={item.work}>
      <div class="col" key={TextMetrics.work}>
        <p>{item.work}</p>
      </div>
      <div class="col" key={item.dueDate}>
        <p>{item.dueDate}</p>
      </div>
      <div class="col">
        <button type="button" class="btn btn-danger"
        onClick={()=>EventHandler(item)}>
          <MdDelete />
        </button>
      </div>
    </div>
    })}
  </>
};

export default Content;
