import './Table.scss';

const Table = () => {
  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <th>Марка и модель</th>
            <th>Стандарт</th>
            <th>Комфорт</th>
            <th>Бизнес</th>
            <th>Комфорт+</th>
            <th>Эконом</th>
            <th>Минивен</th>
            <th>Лайт</th>
          </tr>
          <tr>
            <td>Вишневая семерка</td>
            <td>1911</td>
            <td>1923</td>
            <td>2000</td>
            <td>3221</td>
            <td>1231</td>
            <td>3333</td>
            <td>4444</td>
          </tr>
        </tbody>
        
      </table>
    </div>


  );
}

export default Table;
