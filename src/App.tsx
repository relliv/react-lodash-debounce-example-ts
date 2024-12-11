import React, { useState, useCallback } from 'react';
import _debounce from 'lodash/debounce';
import './App.css';

function App() {
  const [text, setText] = useState<string | null>(null);

  const onTextChange = useCallback(
    _debounce((inputValue: string) => {
      console.log(`Debounce Event: ${inputValue}`);
      setText(inputValue);
    }, 500),
    []
  );

  const onInputChange = (event: React.KeyboardEvent) => {
    console.log(`Native Event: ${event}`);

    onTextChange((event.target as HTMLElement).value);
  };

  return (
    <div className="demo">
      <h1>React & Lodash Debounce Example</h1>

      <input onChange={onInputChange} placeholder="Type and stop" />

      <p>{text}</p>
    </div>
  );
}

export default App;
