import axios from "axios";
import {useState} from "react";

function App() {
  const [response, setResponse] = useState("");

  function testingBackend(){
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/test`);
    request.then(response => setResponse(response.data));
    request.catch(error => setResponse(`${error.response.status} ${error.response.statusText}`));
  }

  return (
    <>
      <h1>Hello world!!!</h1>
      <button onClick={()=>testingBackend()}>test backend</button>
      <div>{response}</div>
    </>
  );
}

export default App;
