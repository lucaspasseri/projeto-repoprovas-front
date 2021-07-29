import axios from "axios";

function App() {

  function testingBackend(){
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/test`);
    request.then(response => console.log(response));
    request.catch(error => console.log(error));
  }

  return (
    <>
      <h1>Hello world!</h1>
      <button onClick={()=>testingBackend}>test backend</button>
    </>
  );
}

export default App;
