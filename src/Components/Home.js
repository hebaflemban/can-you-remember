import React from "react";

const Home = ({ setMode }) => {
  return (
    <div className="container">
      <div className="jumbotron m-5">
        <div className="mb-5">
          <h1>Can you remember?</h1>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger mb-3"
            onClick={() => setMode("single")}
          >
            Single Player
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setMode("multi")}
          >
            Multi Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
