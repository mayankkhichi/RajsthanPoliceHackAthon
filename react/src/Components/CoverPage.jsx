import React from 'react';
import rcover_page from "../assets/rcover_page.jpg"

const CoverPage = () => {
  return (
    <div>
      <h2>Cover Page</h2>
      <img src={rcover_page} alt="Cover" style={{ width: '100%', maxHeight: '300px' }} />
     
    </div>
  );
};

export default CoverPage;
