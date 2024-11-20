// Filename - App.js

import React, { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";

function App() {
  return (
    <div className="background-container">
      <DraggableWindow />
      <NavigationBar />
    </div>
  );
}

const DraggableWindow = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMaximise = () => {
    setIsMaximized(!isMaximized);
  };

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    isVisible && (
      <Draggable
        handle=".title-bar"
        bounds="parent"
        disabled={isMaximized}
        position={isMaximized ? { x: 0, y: 0 } : position} // use position when not maximized
        onDrag={handleDrag} // update position during dragging
      >
        <div className={`draggable-window ${isMaximized ? "maximized" : ""}`}>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">
                <img
                  class="small-icon-image"
                  src="/msg_information-0.png"
                  alt="Biography"
                ></img>
                Biography
              </div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" onClick={handleClose}></button>
                <button aria-label="Maximize" onClick={handleMaximise}></button>
                <button aria-label="Close" onClick={handleClose}></button>
              </div>
            </div>
            <div className="window-body">
              <p>Testing out react its kinda fun i guess. </p>
            </div>
          </div>
        </div>
      </Draggable>
    )
  );
};

const NavigationBar = () => {
  return (
    <div
      className="navbar-container"
      style={{ position: "absolute", bottom: 0, zIndex: 9999 }}
    ></div>
  );
};

export default App;
