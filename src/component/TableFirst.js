import React from 'react'
import './Table.css';
const TableFirst = (props) => {
    console.log(props.data);
  return (
    <div>
        <h4>Table 1</h4>
      {props.data.map((item) =>{
        return <li key = {item.enteredId}>{item.enteredPrice} {item.enteredDish} {item.enteredTable}</li>
      })}
    </div>
  )
}

export default TableFirst
