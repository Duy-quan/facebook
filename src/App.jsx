import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataUser());
  }, []);
  const data = useSelector((state) => state.userReducer);
  return (
    <>
      <Header />
      {data.loading && <div>...loading</div>}
      {data.userData.map((user) => {
        <div>{user.name}</div>;
      })}
      {data.error && <div>Dữ liệu bị lỗi rồi</div>}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
