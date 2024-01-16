import React from "react";

const Home = () => {
  return (
    <div>
      <div>This is Home Component!</div>
      <button onClick={() => console.log("Hi")}>Press Me!</button>
    </div>
  );
};

export default Home;