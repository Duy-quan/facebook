import React, { useEffect, useState } from "react";

const News = () => {
  const [number, setNumber] = useState(0);
  const handleAdd = (event) => {
    setNumber((prev) => prev + 1);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  //prev: gia tri hien tai
  useEffect(() => {
    console.log("chay useEffect");
  }, [number]);

  // khi render vao new.jsx dau tien thi se chay useEffect dau tien, dung de goi api xu ly da ta khi load trang web
  return (
    <div>
      <button onClick={handleAdd}>Click vao day</button>
      <p>{number}</p>
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default News;
