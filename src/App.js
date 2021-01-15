import React, { useState } from 'react';
import Header from './Component/Header';
import UploadForm from './Component/UploadForm';
import ImageGrid from './Component/ImageGrid';
import Modal from './Component/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;