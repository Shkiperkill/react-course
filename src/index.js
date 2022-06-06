import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1> Todo List</h1>
      <input placeholder='search' />
      <ul>
        <li>Learn React</li>
        <li>Build Awesome App</li>
      </ul>
      </div>
  </React.StrictMode>
);


