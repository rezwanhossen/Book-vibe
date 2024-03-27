import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const ReadPags = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("datas.json")
      .then((res) => res.json())
      .then((data) => {
        const datas = data.map((item) => ({
          name: item.bookName.slice(0, 10),
          pag: item.totalPages,
        }));
        setdata(datas);
      });
  }, []);

  return (
    <div className=" w-full">
      <BarChart width={600} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="pag" fill="#8884d8" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

export default ReadPags;
