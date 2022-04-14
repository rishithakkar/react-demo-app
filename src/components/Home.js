import React, { useEffect, useState } from "react";
import Button from "./Button";
import Time from "./Time";
import Map from "./Map";

// useEffect - mount, update, unMount
// window event - mount & unMount
// setInterval
const Home = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [winSize, setWinSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWinSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const timeInt = setInterval(() => {
  //     console.log("called time interval");
  //   }, 2000);

  //   return () => {
  //     clearInterval(timeInt);
  //   };
  // }, []);

  return (
    <>
      <Button eventHandler={() => setCurrentPage("Home")}>Home</Button>
      <Button eventHandler={() => setCurrentPage("About Us")}>About Us</Button>
      <Button eventHandler={() => setCurrentPage("Blog")}>Blog</Button>
      <br />
      <br />
      {currentPage}
      <br />
      <br />
      Window width: {winSize}
      <br />
      <br />
      time: <Time winSize={winSize} />
      <br />
      <br />
      <Map />
    </>
  );
};

export default Home;
