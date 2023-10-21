import React from 'react'
import './Table.css';
const TableThird = (props) => {
    console.log(props.data);
 
    return (
      <div>
          <h4>Table 3</h4>
        {props.data.map((item) =>{
          return <><li key = {item.enteredId}>{item.enteredPrice} {item.enteredDish} {item.enteredTable} <button onClick = {(e) =>{
            localStorage.removeItem(item.enteredId);
            e.target.parentElement.remove();
          }}>Remove Item</button></li></>
        })}
      </div>
    )
}

export default TableThird
