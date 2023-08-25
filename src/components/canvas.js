import React, { useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  const drawImageOnCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("scream");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
  };

  return (
    <div style={{ padding: "20px" }}>
      <p>Image to use:</p>

      <img
        id="scream"
        style={{ width: "400px" }}
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        alt="The Scream"
      />

      <p>Canvas Frame:</p>

      <canvas
        ref={canvasRef}
        style={{ border: "10px solid grey", width: "400px", height: "248px" }}
      ></canvas>
      <div>
        <button onClick={drawImageOnCanvas}>Set Image</button>
      </div>
    </div>
  );
};

export default Canvas;
