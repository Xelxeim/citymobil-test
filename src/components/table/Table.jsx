import TableItem from '../table-item';
import './Table.scss';

const Table = ({ tableHeaders, cars }) => {

  const headers = () => {
    return tableHeaders.map((item, index) => <th key={index}>{item}</th>)
  }

  const carList = () => {
    return cars.map((item, index) => {
      const { mark, model, tariffs } = item;
      const carName = `${mark} ${model}`;
      return <TableItem key={`c-${index}`} carName={carName} tariffs={tariffs} />
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
