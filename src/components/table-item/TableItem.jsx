import './TableItem.scss';

const TableItem = ({ carName, tariffs }) => {

  let id = 1000; // uses for iterable react generation

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

  const yearFields = () => Object.keys(allTariffs).map(objKey => <td key={id += 1} className="year">{allTariffs[objKey]}</td>)
  
  modifyAllTariffs();
  return (
    <tr>
      <td>{carName}</td>
      {yearFields()}
    </tr>
  );
}

export default TableItem;
