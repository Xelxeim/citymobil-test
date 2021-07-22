import React, { useState, useEffect } from 'react';

import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';
import Table from '../table';
import SearchField from '../search-field';
import InfoBlock from '../info-block';
import Spinner from '../sidebar'
import './App.scss';

import apiInteractor from '../../services/api-interactor';

const App = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [pattern, setPattern] = useState("")
  const [currentCar, setCurrentCar] = useState("");

  const onSearchBtnClickHandler = (value) => setPattern(value);
  const onCarClickHandler = (element) => { 
    setCurrentCar((prevCar) => {
      if (prevCar) {
        prevCar.classList = "table__item";
      }
      return element;
    });
  };

  useEffect(() => { 
    apiInteractor.getData("https://city-mobil.ru/api/cars")
      .then(data => setData(data))
      .finally(setLoading(false))
  }, [])

  const renderedContent = () => {
    if (!data.tariffs_list) return <Spinner />;
    const tableHeaders = [];
    tableHeaders.push("Марка и модель", ...data.tariffs_list);
    const cars = data.cars;
    return <Table onClickHandler={onCarClickHandler} tableHeaders={tableHeaders} cars={cars} filter={pattern} />
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
