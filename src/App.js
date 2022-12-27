import logo from './logo.svg';
import './App.css';
import react, {useState} from "react";
import Todos from "./Todos";

const App = () => {

  const [inputList, setInputList] =useState("");
  const [items, setItems] =useState([]);

  const itemEvent =(event)=>{
    setInputList(event.target.value)
  }

  const mainList =() =>{
    setItems((oldElement)=>{
      return[...oldElement,inputList]
    });
    setInputList("")
  };


  const deletItems =(id) =>{
    console.log("deletItemss");

    setItems((oldElement) =>{
      return oldElement.filter((arrElem, index) =>{
        return index !== id
      })
    })
  }
  return (
    <>
      <div className="container">
       <div className="center_container"><br/>
        <h1>ToDo List</h1><br/>
        <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent} />
        <button onClick={mainList}>+</button>
         <ol>
         {items.map((itemval,index) =>{ return  <Todos key={index} id={index} text={itemval} onSelect={deletItems} /> })}
         </ol>
       </div>
      </div>
    </>
  );
}
export default App;