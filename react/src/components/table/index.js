import React from "react";
import './table.css';

const Table = ({count}) => {
    return (
        <div className={count % 2 == 0 && count != 0 ? 'table green' : 'table'}>{count}</div>
    )
}


export default Table;