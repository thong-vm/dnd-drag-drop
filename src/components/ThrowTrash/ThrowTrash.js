import Box from "../Box/Box";
import Dustbin from "../Dustbin/Dustbin";

function ThrowTrash() {
  const trashes = [
    {
      name: "Glass",
    },
    {
      name: "Banana",
    },
    {
      name: "Paper",
    },
  ];
  return (
    <>
      {trashes.map((trash) => (
        <Box object={trash} />
      ))}
      <Dustbin />
    </>
  );
}

export default ThrowTrash;
