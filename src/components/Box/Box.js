import { useDrag } from "react-dnd";

function Box({ object }) {
  const [{ isDragging }, drag] = useDrag({
    type: "Trash",
    //đây là item đang được kéo
    item: () => {
      return { object };
    },
    collect: (monitor) => ({
      //nếu đang được kéo thì trả về giá trị true cho isDragging
      isDragging: monitor.isDragging(),
    }),
    //sau khi kéo xong
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.object.name} into ${dropResult.name}!`);
      }
    },
  });
  return (
    <div
      className={`border bg-white w-fit m-2 flex justify-center items-center ${
        isDragging ? "opacity-0" : "opacity-100"
      } cursor-move`}
      ref={drag}
    >
      <img className="w-[100px]" src={object.url} alt="" />
    </div>
  );
}

export default Box;
