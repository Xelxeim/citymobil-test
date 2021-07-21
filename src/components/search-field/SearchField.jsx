import React, { useState } from 'react';

import './SearchField.scss';

const SearchField = ({ onClickHandler }) => {
  const [pattern, setPattern] = useState("");

  return (
    <div className="search-field">
      <label>
        <input 
          className="search-field__input" 
          type="text" 
          placeholder="Поиск"
          onChange={e => setPattern(e.target.value)}
        />
      </label>
      <button onClick={() => onClickHandler(pattern)} className="search-field__btn">Найти</button>
    </div>
  );
}

export default SearchField;
