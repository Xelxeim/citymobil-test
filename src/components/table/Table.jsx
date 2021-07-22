import funcs from '../../services/funcs';

import TableItem from '../table-item';
import './Table.scss';

const Table = ({ tableHeaders, cars, filter, onClickHandler }) => {

  const headers = () => {
    return tableHeaders.map((item, index) => <th key={index}>{item}</th>)
  }

  const carList = () => {
    return cars.map((item, index) => {
      const { mark, model, tariffs } = item;
      let carName = `${mark} ${model}`;
      if (!funcs.filterContent(filter, carName)) return null;
      return <TableItem 
        key={`c-${index}`} 
        onClickHandler={onClickHandler} 
        carName={carName} 
        tariffs={tariffs} 
      />
    })
  }

  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            {headers()}
          </tr>
          {carList()}
        </tbody>
        
      </table>
    </div>


  );
}

export default Table;
