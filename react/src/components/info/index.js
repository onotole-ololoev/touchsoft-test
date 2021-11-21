import React from "react";
import './info.css';

const Info = ({count}) => {
    return (
        <div className='info'>{count % 2 == 0 ? 'Введено четное число' : 'Введено нечетное число'}</div>
    )
}

export default Info;