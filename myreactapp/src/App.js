// Filename - App.js

import React, { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";

function App() {
  return (
    <div className="background-container">
      <div>
        <DraggableWindow />
      </div>
      <div>
        <NavigationBar />
      </div>
    </div>
  );
}

const DraggableWindow = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMaximise = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    isVisible && (
      <Draggable handle=".title-bar" disabled={isMaximized}>
        <div className={`draggable-window${isMaximized ? `-maximized` : ``}`}>
          <div
            className="window"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
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
                <button aria-label="Minimize"></button>
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
