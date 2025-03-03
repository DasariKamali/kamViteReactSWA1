import React, { useEffect, useState } from 'react';
import { getPublicData, getApp1Data } from './api';

function App() {
  const [publicData, setPublicData] = useState('');
  const [app1Data, setApp1Data] = useState('');

  useEffect(() => {
    getPublicData().then(data => setPublicData(data));
    getApp1Data().then(data => setApp1Data(data));
  }, []);

  return (
    <div>
      <h1>Vite React App 1</h1>
      <p>Public Data: {publicData}</p>
      <p>App 1 Data: {app1Data}</p>
    </div>
  );
}

export default App;
