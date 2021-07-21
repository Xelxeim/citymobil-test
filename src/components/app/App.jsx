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
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    apiInteractor.getData("https://city-mobil.ru/api/cars")
      .then(data => setData(data))
      .finally(setLoading(false))
  }, [])

  const renderedContent = () => {
    if (!data.tariffs_list) return <Spinner/>;

    const tableHeaders = [];
    tableHeaders.push("Марка и модель", ...data.tariffs_list);
    const cars = data.cars;
    return <Table tableHeaders={tableHeaders} cars={cars} />
  }

  console.log(data);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <section className="content">
          <SearchField />
          {loading ? <Spinner /> : renderedContent()}
          <InfoBlock />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
