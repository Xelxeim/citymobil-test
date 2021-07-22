import React, {useState, useRef} from 'react';

import './TableItem.scss';

const TableItem = ({ carName, tariffs, onClickHandler }) => {
  const [isActive, setIsActive] = useState(null);
  const trRef = useRef(<tr></tr>);
  
  let classNames = "table__item active"

  const modifyAllTariffs = () => {
    for (let key in tariffs) {
      allTariffs[key] = tariffs[key].year;
    }
  }
  const allTariffs = {
    "Стандарт": "—",
    "Комфорт": "—",
    "Бизнес": "—",
    "Комфорт+": "—",
    "Эконом": "—",
    "Минивен": "—",
    "Лайт": "—"
  }
  
  const idGen = () => {
    return Math.random().toString(18).substr(2, 9).toString();
  };

  const currentRowId = idGen();
  
  const yearFields = () => Object.keys(allTariffs).map(objKey => <td key={idGen()} className="year">{allTariffs[objKey]}</td>)
  
  modifyAllTariffs();
  return (
    <tr
      id={currentRowId} 
      className={isActive ? classNames : "table__item"}
      onClick={() => {
        onClickHandler(trRef.current);
        setIsActive(trRef)
      }}
      ref={trRef} 
    >
      <td>{carName}</td>
      {yearFields()}
    </tr>
  );
}

export default TableItem;
