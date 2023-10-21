import React, { useEffect } from 'react'
import './Table.css';
const TableSecond = (props) => {
   
  
    return (
      <div>
          <h4>Table 2</h4>
        {props.data.map((item) =>{
          return <li key = {item.enteredId}>{item.enteredPrice} {item.enteredDish} {item.enteredTable}</li>
        })}
      </div>
    )
}

export default TableSecond
