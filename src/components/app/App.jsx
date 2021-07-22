import React, { useState, useEffect } from 'react';

import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';
import Table from '../table';
import SearchField from '../search-field';
import InfoBlock from '../info-block';
import Spinner from '../spinner';
import './App.scss';

import apiInteractor from '../../services/api-interactor';

const App = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pattern, setPattern] = useState("")
  const [currentCar, setCurrentCar] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortHeader, setSortHeader] = useState(0); // index of sort-header in array

  const onSearchBtnClickHandler = (value) => setPattern(value);
  const onCarClickHandler = (element) => { 
    setCurrentCar((prevCar) => {
      if (prevCar) {
        prevCar.classList = "table__item";
      }
      return element;
    });
  };
  const onHeaderClick = (headerIndex) => {
    switch(sortDirection) {
      case "desc":
        setSortDirection("asc");
        break;
      case "asc":
        setSortDirection("desc");
        break;
      default:
        setSortDirection("asc");
        break;
    }

    if(headerIndex !== sortHeader) {
      setSortDirection("asc");
    }
    setSortHeader(headerIndex);
  }

  useEffect(() => { 
    apiInteractor.getData("https://city-mobil.ru/api/cars")
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(setLoading(false))
  }, [])

  const renderedContent = () => {
    if (!data.tariffs_list) return <Spinner />;
    if (error) return <h1>Произошла ошибка. Попробуйте позже</h1>;
    const tableHeaders = [];
    tableHeaders.push("Марка и модель", ...data.tariffs_list);
    const cars = data.cars;
    return <Table 
      onClickHandler={onCarClickHandler} 
      onHeaderClick={onHeaderClick}
      tableHeaders={tableHeaders} 
      sortDirection={sortDirection} 
      sortHeader={sortHeader} 
      cars={cars} 
      filter={pattern} 
    />
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <section className="content">
          <SearchField onClickHandler={onSearchBtnClickHandler} />
          {loading ? <Spinner /> : renderedContent()}
          {currentCar ? <InfoBlock currentCar={currentCar} tariffs={data.tariffs_list} /> : null}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
