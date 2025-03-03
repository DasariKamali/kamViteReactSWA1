import React, { useEffect, useState } from 'react';
import { getPublicData, postApp1Data } from './api';

function App() {
  const [publicData, setPublicData] = useState('');
  const [app1Data, setApp1Data] = useState('');

  useEffect(() => {
    getPublicData().then(data => setPublicData(data));
  }, []);

  const handlePostRequest = async () => {
    const requestData = { message: "Hello from React App 1!" }; // Example data
    try {
      const data = await postApp1Data(requestData);
      setApp1Data(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Vite React App 1</h1>
      <p>Public Data: {publicData}</p>
      <button onClick={handlePostRequest}>Send POST request to /api/app1</button>
      <p>App 1 Data: {app1Data}</p>
    </div>
  );
}

export default App;
