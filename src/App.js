import { useState } from "react";
import Basic from "./components/Basic";
import ContactList from "./components/ContactList";
import Form from "./components/Form";
function App() {
  const[list,setList] = useState([
    {
    fullname:"kerem",
    phone_number:123456
    },
  ]);
  return (
    <div className="App">
      <div className="container">
      <ContactList list={list}/>
      <Form list={list} setList={setList}/>
      <Basic/>
      </div>
      
    </div>
  );
}

export default App;
