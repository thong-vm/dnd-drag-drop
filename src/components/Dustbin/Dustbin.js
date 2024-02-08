import { useDrop } from "react-dnd";

function Dustbin() {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Trash",
    collect(monitor) {
      return {
        //nếu đang được thả thì trả về giá trị true cho handlerId
        handlerId: monitor.getHandlerId(),
        //có thẻ thả thì này true, dùng xác định có thả vào
        canDrop: monitor.canDrop(),
        //vừa mới lướt qua thì true
        isOver: monitor.isOver(),
      };
    },
    drop() {
      return { name: "Dustbin" };
    },
  });
  return (
    <div
      ref={drop}
      className={`${
        canDrop && isOver ? "bg-green-200" : canDrop && "bg-red-500"
      } w-[200px] h-[200px] bg-slate-400`}
    >
      {canDrop && isOver ? "Ok right !" : canDrop && "Drop here !"}
    </div>
  );
}

export default Dustbin;
