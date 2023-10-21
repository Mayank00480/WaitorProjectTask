import React,{useState} from 'react';
import './App.css';
import UserForm from './component/UserForm';
import TableFirst from './component/TableFirst';
import TableSecond from './component/TableSecond';
import TableThird from './component/TableThird';
function App() {
 const [tableFirst , setTableFirst] = useState([]);
 const [tableSecond , setTableSecond] = useState([]);
 const [tableThird , setTableThird] = useState([]);
  function saveDataHandler(data){
  console.log(data)
  console.log(data.enteredTable);
  if(data.enteredTable == 'Table1'){
    setTableFirst((prevState) =>{
      return [ ...prevState , data];
    })
    console.log(tableFirst);
  }
  else if(data.enteredTable == 'Table2'){
    setTableSecond((prevState) =>{
      return [ ...prevState , data];
    })
  }
  else if(data.enteredTable == 'Table3'){
    setTableThird((prevState) =>{
      return [ ...prevState , data];
    })
  }

  }
  return (
    <div className="App">
     <UserForm onSaveData = {saveDataHandler} />
     <TableFirst data ={tableFirst} />
     <TableSecond data = {tableSecond}/>
     <TableThird data = {tableThird}/>
    </div>
  );
}

export default App;
