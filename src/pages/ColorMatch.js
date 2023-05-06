import React from 'react'
import Navbar from "../components/Navbar";

const ColorMatch = () => {
  return (
    <div className="colormatch-page">
      <header className="colormatch-header">
        <Navbar />
        <div>
          <h1>Color Match</h1>
          <p>팔레트를 클릭하여 가장 조화로운 컬러매치를 해보세요.</p>
        </div>
      </header>
    </div>
  );
};

export default ColorMatch