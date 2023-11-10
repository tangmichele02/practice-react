import { useState, useEffect } from 'react';

function MyComponent(props) {

  return  (
    <p> this is {props.message}</p>
  );

}

function App() {
  const [message, setMessage] = useState('iii');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api')
      .then(response => response.json())
      .then(data => setMessage(data["message"]));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <MyComponent message="second"></MyComponent>
      <MyComponent message="hi"/>
    </div>
  );
}

export default App;