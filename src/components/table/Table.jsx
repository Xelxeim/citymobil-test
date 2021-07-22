import funcs from '../../services/funcs';

import TableItem from '../table-item';
import './Table.scss';

import asc from '../../img/up.svg'
import desc from '../../img/down.svg'

const Table = ({ tableHeaders, cars, filter, onClickHandler, sortDirection, sortHeader, onHeaderClick }) => {

  const sortDirectionImg = (sortDirection === "asc") ? asc : desc;

  const headers = () => {
    return tableHeaders.map((item, index) => {
      return (sortHeader === index) ? 
        <th onClick={() => onHeaderClick(index)} key={index}>
          {item}
          <img src={sortDirectionImg} alt={sortDirection} />
        </th> :
        <th onClick={() => onHeaderClick(index)} key={index}>{item}</th>
    })
  }

  const carList = () => {
    const transformedList = transformCarList();
    const filteredList = funcs.filterContent(filter, transformedList);
    const sortedList = funcs.sortData(filteredList, sortHeader, sortDirection);
    return sortedList.map((item, index) => {
      const [carName, tariffs] = item;
      return <TableItem 
        key={`c-${index}`} 
        onClickHandler={onClickHandler} 
        carName={carName} 
        tariffs={tariffs} 
      />
    })
  }

  const transformCarList = () => {
    return cars.map(item => {
      const { mark, model, tariffs } = item;
      const carName = `${mark} ${model}`;
      return [carName, tariffs];
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
