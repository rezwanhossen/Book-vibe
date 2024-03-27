import { useEffect, useState } from "react";
import { getStorRedBooks } from "./Utility";
// import { getStorRedBooks } from "./Utility";

const SortReatting = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const data = getStorRedBooks();
    // Sort the data array in descending order based on the rating
    const sortedData = data.sort((a, b) => b.rating - a.rating);
    setDatas(sortedData);
  }, []);
  console.log(datas);
  //   return datas;
};

export { SortReatting };
