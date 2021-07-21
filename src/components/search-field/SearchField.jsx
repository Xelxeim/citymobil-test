import './SearchField.scss';

const SearchField = () => {
  return (
    <div className="search-field">
      <label>
        <input className="search-field__input" type="text" placeholder="Поиск" />
      </label>
      <button className="search-field__btn">Найти</button>
    </div>
  );
}

export default SearchField;
