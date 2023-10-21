import React,{useState} from 'react'

const UserForm = (props) => {
    const [enteredId , setEnteredId] = useState('');
    const [enteredPrice , setEnteredPrice] = useState('');
    const [enteredDish , setEnteredDish] = useState('');
    const [enterdTable , setEnteredTable] = useState('');
    const uniqueIdHandler = (e) => {
        setEnteredId(e.target.value);
    }
     const priceHandler = (e) =>{
        setEnteredPrice(e.target.value);
     }
     const dishHandler = (e) =>{
        setEnteredDish(e.target.value)
     }
     const tableHandler = (e) =>{
        setEnteredTable(e.target.value);
     }
     const submitHandler = (e) =>{
        e.preventDefault();
        let obj = {enteredId : enteredId,
            enteredPrice : enteredPrice,
            enteredDish : enteredDish,
            enteredTable : enterdTable}
            let newObj = JSON.stringify(obj);
        localStorage.setItem(enteredId , newObj);
        props.onSaveData(obj);
     }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Unique Order ID</label>
        <input type = "number" onChange = {uniqueIdHandler} value = {enteredId}/>
        <label>Choose Price</label>
        <input type = "number" onChange = {priceHandler} value = {enteredPrice}/>
        <label>Choose Dish</label>
        <input type = "text" onChange = {dishHandler} value = {enteredDish}/>
        <select name="cars" id="cars" onChange={tableHandler} value = {enterdTable}>
        <option >select</option>     
       <option value="Table1">Table 1</option>
       <option value="Table2">Table 2</option>
       <option value="Table3">Table 3</option>
      </select> 
      <button type = "submit" >Add to Bill</button>
      </form>
    </>
  )
}

export default UserForm
