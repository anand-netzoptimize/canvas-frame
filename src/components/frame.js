import React, { useState } from "react";

const Frame = () => {
  const [photo, setPhoto] = useState("");
  return (
    <div style={{ padding: "10px" }}>
      <div
        onClick={() => setPhoto("")}
        style={{
          width: "600px",
          height: "400px",
          border: "10px solid black",
        }}
      >
        <img style={{ width: "600px" }} src={photo} />
      </div>
      <div>
        <button
          onClick={() =>
            setPhoto(
              "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
            )
          }
        >
          Set Picture
        </button>
      </div>
    </div>
  );
};

export default Frame;
