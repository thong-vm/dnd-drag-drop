import Box from "../Box/Box";
import Dustbin from "../Dustbin/Dustbin";

function ThrowTrash() {
  const trashes = [
    {
      name: "Glass",
      url: "https://dynamic.zacdn.com/1-N4N-4omm1hrfeAneBNPtPOxVM=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/union-glass-8846-2420961-2.jpg",
    },
    {
      name: "Banana",
      url: "https://th-thumbnailer.cdn-si-edu.com/6RD8JDrASGTSjdbsJkg-37OY9mQ=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg",
    },
    {
      name: "Paper",
      url: "https://5.imimg.com/data5/SELLER/Default/2020/10/NV/HZ/SS/16049514/black-pepper-500x500-500x500.jpg",
    },
  ];
  return (
    <>
      <div className="flex">
        {trashes.map((trash) => (
          <Box object={trash} />
        ))}
      </div>
      <div className="w-full  flex justify-center">
        <Dustbin />
      </div>
    </>
  );
}

export default ThrowTrash;
